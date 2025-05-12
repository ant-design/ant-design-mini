import ifdef from '@diamondyuan/gulp-ifdef';
import * as ofs from 'fs';
import * as fs from 'fs/promises';
import gulp from 'gulp';
import changed from 'gulp-changed';
import debug from 'gulp-debug';
import less from 'gulp-less';
import rename from 'gulp-rename';
import ts from 'gulp-typescript';
import json5 from 'json5';
import path, { resolve } from 'path';
import * as through2 from 'through2';
import axmlParser, { wechatCustomMapping } from './axml';
import createConfigJson from './create-config';
import { transformTsxJS } from './tsxjs';
import * as tsxml from './tsxml/index';

// 定义支持的平台类型
type PlatformType = 'WECHAT' | 'ALIPAY' | 'BUNDLE2H';

const ALL_PLATFORMS: PlatformType[] = ['WECHAT', 'ALIPAY', 'BUNDLE2H'];

interface MiniProgramSourceCompileOption {
  source: string;
  dest: string;
  watch: boolean;
  debug?: string | string[];
  allowList?: string[];
  tsconfig: string;
  assets: string[];
  buildOption: {
    platformId?: PlatformType | string;
    defVar: any;
    compileTs: boolean;
    compileLess: boolean;
    styleExt: string;
    platform: tsxml.PlatformConfig;
    xmlScriptOption?: {
      forceCommonjs?: boolean;
    };
    xmlScriptExt: string;
    xmlExt: string;
  };
}

export type FilePrecess = (old: string) => Promise<string> | string;

export type TransFormFactory = (handler) => any;

const include = function (list: string[], source: string) {
  return through2.obj(function (file, enc, callback) {
    const relativeName = path.relative(source, file.path);
    const match = list.some((o) => {
      return relativeName.startsWith(o + '/');
    });
    if (match) {
      callback(null, file);
    } else {
      return callback();
    }
  });
};

export function miniCompiler(option: MiniProgramSourceCompileOption) {
  function task(
    options: { name: string; glob: string[]; destExtension: string },
    handler: (
      stream: NodeJS.ReadWriteStream,
      factory: TransFormFactory
    ) => NodeJS.ReadWriteStream
  ) {
    function taskImplFactory(init: boolean) {
      return () => {
        let srcStream = gulp.src(
          [...options.glob, '!**/__tests__/**', '!global.d.ts'],
          {
            cwd: option.source,
          }
        );
        if (Array.isArray(option.allowList)) {
          srcStream = srcStream.pipe(include(option.allowList, option.source));
        }
        if (option.watch && !init) {
          srcStream = srcStream.pipe(
            changed(option.dest, { extension: options.destExtension })
          );
        }
        let enableDebug = false;
        if (Array.isArray(option.debug)) {
          enableDebug = option.debug.includes(options.name);
        } else {
          enableDebug = option.debug === options.name;
        }
        if (enableDebug) {
          srcStream = srcStream.pipe(debug({ title: options.name }));
        }
        srcStream = srcStream.pipe(
          ifdef(option.buildOption.defVar, {
            insertBlanks: false,
            extname: [
              'axml',
              'ts',
              'js',
              'sjs',
              'acss',
              'less',
              'tsx',
              'json',
              'json5',
              'md',
            ],
          })
        );
        const transformFileFactory = (task: FilePrecess) => {
          return through2.obj(async (file, _encoding, callback) => {
            if (file.isBuffer()) {
              const content = file.contents.toString();
              try {
                const res = await task(content);
                file.contents = Buffer.from(res);
                callback(null, file);
              } catch (error) {
                console.log('compile error', file);
                callback(error);
              }
            }
          });
        };
        return handler(srcStream, transformFileFactory);
      };
    }
    // 先执行一次初始化的任务
    gulp.series(taskImplFactory(true))(() => {
      // 如果是 watch 模式，就注册 watch 事件
      if (option.watch) {
        gulp.watch(
          options.glob,
          { cwd: option.source },
          gulp.series(taskImplFactory(false))
        );
      }
    });
  }

  // 拷贝 less 源码文件
  task(
    {
      name: 'less',
      glob: ['**/*.less'],
      destExtension: option.buildOption.compileLess
        ? option.buildOption.styleExt
        : '.less',
    },
    function (stream: NodeJS.ReadWriteStream) {
      if (option.buildOption.compileLess) {
        return (
          stream
            .pipe(less())
            // eslint-disable-next-line no-console
            .on('error', (e) => {
              console.log(e);
              if (!option.watch) {
                process.exit(1);
              }
            })
            .pipe(
              rename({
                extname: option.buildOption.styleExt,
              })
            )
            .pipe(gulp.dest(option.dest))
        );
      }
      return stream.pipe(gulp.dest(option.dest));
    }
  );

  // 拷贝 ts 源码文件
  task(
    {
      name: 'ts',
      glob: ['**/*.ts', '!**/*.sjs.ts'],
      destExtension: '.ts',
    },
    function (stream: NodeJS.ReadWriteStream) {
      if (option.buildOption.compileTs) {
        const tsResult = stream
          .pipe(ts.createProject(option.tsconfig)())
          .on('error', (err) => {
            console.log(err);
            if (!option.watch) {
              process.exit(1);
            }
          });
        return tsResult.js.pipe(gulp.dest(option.dest));
      }
      return stream.pipe(gulp.dest(option.dest));
    }
  );

  // 拷贝 ts 源码文件
  task(
    {
      name: 'sjs',
      glob: ['**/*.sjs', '**/*.sjs.ts'],
      destExtension: '.ts',
    },
    function (stream: NodeJS.ReadWriteStream, factory) {
      return stream
        .pipe(
          rename(function (file) {
            file.basename = path.basename(file.basename, '.sjs');
            file.extname = option.buildOption.xmlScriptExt;
          })
        )
        .pipe(
          factory((tsxml: string) => {
            return transformTsxJS(tsxml, option.buildOption.xmlScriptOption);
          })
        )
        .pipe(gulp.dest(option.dest));
    }
  );

  task(
    {
      name: 'axml',
      glob: ['**/*.axml'],
      destExtension: option.buildOption.xmlExt,
    },
    function (stream: NodeJS.ReadWriteStream, factory) {
      return stream
        .pipe(
          factory(async (content: string) => {
            const Compiler = new axmlParser({
              platform: option.buildOption.platformId,
              customMapping:
                option.buildOption.platformId === 'WECHAT'
                  ? wechatCustomMapping
                  : {},
              camelCaseProperty: true,
            });
            const transCode = Compiler.compile(content);
            return transCode;
          })
        )
        .on('error', (e) => {
          console.error(e);
          if (!option.watch) {
            process.exit(1);
          }
        })
        .pipe(
          rename(function (file) {
            file.basename = path.basename(file.basename, '.axml');
            file.extname = option.buildOption.xmlExt;
          })
        )
        .pipe(gulp.dest(option.dest));
    }
  );

  task(
    {
      name: 'tsxml',
      glob: ['**/*.axml.tsx'],
      destExtension: option.buildOption.xmlExt,
    },
    function (stream: NodeJS.ReadWriteStream, factory) {
      return stream
        .pipe(
          factory(async (content: string) => {
            const ast = tsxml.parseCode(content);
            const res = await tsxml.tsxmlToAxml(
              tsxml.TransformContext.create(
                ast,
                option.buildOption.platform,
                content
              )
            );
            return res;
          })
        )
        .on('error', (e) => {
          console.error(e);
          if (!option.watch) {
            process.exit(1);
          }
        })
        .pipe(
          rename(function (file) {
            file.basename = path.basename(file.basename, '.axml');
            file.extname = option.buildOption.xmlExt;
          })
        )
        .pipe(gulp.dest(option.dest));
    }
  );

  option.assets.forEach((ext) => {
    task(
      {
        name: `copy-${ext}`,
        glob: ['**/*.' + ext],
        destExtension: '.' + ext,
      },
      function (stream: NodeJS.ReadWriteStream) {
        return stream.pipe(gulp.dest(option.dest));
      }
    );
  });

  task(
    {
      name: 'json5',
      glob: ['**/*.json5'],
      destExtension: '.json',
    },
    function (stream: NodeJS.ReadWriteStream, factory) {
      return stream
        .pipe(
          factory((content: string) => {
            const ast = json5.parse(content);
            return JSON.stringify(ast, null, 2);
          })
        )
        .pipe(
          rename(function (file) {
            file.extname = '.json';
          })
        )
        .pipe(gulp.dest(option.dest));
    }
  );
}

// 构建DefVar配置，支持多平台组合，更易于扩展
function buildDefVar(
  primaryPlatform: PlatformType
): Record<string, boolean | string> {
  // 基础配置，所有平台默认关闭
  const defVar: Record<string, boolean | string> = {
    platform: primaryPlatform,
  };

  // 初始化所有平台为false
  ALL_PLATFORMS.forEach((platform) => {
    defVar[platform] = false;
  });

  // 设置主平台为true
  defVar[primaryPlatform] = true;

  return defVar;
}

// 创建通用编译配置
function createPlatformBuildOption(
  platformId: PlatformType,
  platformConfig: {
    compileTs: boolean;
    compileLess: boolean;
    platform: tsxml.PlatformConfig;
    styleExt: string;
    xmlExt: string;
    xmlScriptExt: string;
    xmlScriptOption?: {
      forceCommonjs?: boolean;
    };
  }
) {
  return {
    platformId,
    defVar: buildDefVar(platformId),
    ...platformConfig,
  };
}

// 配置组件编译
function compilePlatformComponents(
  platformId: PlatformType,
  watch: boolean,
  allowList: string[] | undefined,
  buildOption: any
) {
  // 常规组件
  miniCompiler({
    tsconfig: resolve(
      __dirname,
      '..',
      platformId === 'WECHAT' ? 'tsconfig.wechat.json' : 'tsconfig.json'
    ),
    source: resolve(__dirname, '..', 'src'),
    dest: resolve(__dirname, '..', 'compiled', platformId.toLowerCase(), 'src'),
    watch,
    allowList,
    assets: [
      'md',
      platformId === 'WECHAT' ? 'js' : 'acss',
      'js',
      platformId === 'WECHAT' ? '' : 'sjs',
      'json',
    ].filter(Boolean),
    buildOption,
  });

  // Copilot组件
  miniCompiler({
    tsconfig: resolve(
      __dirname,
      '..',
      platformId === 'WECHAT' ? 'tsconfig.wechat.json' : 'tsconfig.json'
    ),
    source: resolve(__dirname, '..', 'copilot'),
    dest: resolve(__dirname, '..', 'compiled', platformId.toLowerCase(), 'src'),
    watch,
    allowList,
    assets: [
      'md',
      platformId === 'WECHAT' ? 'js' : 'acss',
      'js',
      platformId === 'WECHAT' ? '' : 'sjs',
      'json',
    ].filter(Boolean),
    buildOption,
  });

  // 常规组件demo页面
  miniCompiler({
    tsconfig: resolve(
      __dirname,
      '..',
      platformId === 'WECHAT'
        ? 'tsconfig.wechat.demo.json'
        : 'tsconfig.alipay.demo.json'
    ),
    source: resolve(__dirname, '..', 'demo'),
    dest: resolve(
      __dirname,
      '..',
      'compiled',
      platformId.toLowerCase(),
      'demo'
    ),
    watch,
    assets: [
      'md',
      platformId === 'WECHAT' ? 'js' : 'acss',
      'js',
      platformId === 'WECHAT' ? '' : 'sjs',
      'json',
    ].filter(Boolean),
    buildOption: {
      ...buildOption,
      compileTs: platformId !== 'BUNDLE2H',
    },
  });

  // copilot组件demo页面
  miniCompiler({
    tsconfig: resolve(
      __dirname,
      '..',
      platformId === 'WECHAT'
        ? 'tsconfig.wechat.demo.json'
        : 'tsconfig.alipay.demo.json'
    ),
    source: resolve(__dirname, '..', 'copilot-demo'),
    dest: resolve(
      __dirname,
      '..',
      'compiled',
      platformId.toLowerCase(),
      'demo'
    ),
    watch,
    assets: [
      'md',
      platformId === 'WECHAT' ? 'js' : 'acss',
      'js',
      platformId === 'WECHAT' ? '' : 'sjs',
      'json',
    ].filter(Boolean),
    buildOption: {
      ...buildOption,
      compileTs: platformId !== 'BUNDLE2H',
    },
  });

  // 配置文件编译
  miniCompiler({
    tsconfig: resolve(
      __dirname,
      '..',
      platformId === 'WECHAT' ? 'tsconfig.wechat.json' : 'tsconfig.json'
    ),
    source: resolve(__dirname, '..', 'config', platformId.toLowerCase()),
    dest: resolve(
      __dirname,
      '..',
      'compiled',
      platformId.toLowerCase(),
      platformId === 'WECHAT' ? '' : 'demo'
    ),
    watch,
    assets: [platformId === 'WECHAT' ? 'wxss' : 'less', 'js', 'json'],
    buildOption,
  });
}

export async function compileAntdMini(watch: boolean) {
  if (!watch) {
    await Promise.all(
      [
        'compiled/alipay/demo/pages',
        'compiled/alipay/src',
        'compiled/wechat/demo',
        'compiled/wechat/src',
        'compiled/bundle2h/demo/pages',
        'compiled/bundle2h/src',
      ].map((dir) => {
        return fs.rm(resolve(__dirname, '..', dir), {
          recursive: true,
          force: true,
        });
      })
    );
  }

  await createConfigJson();
  const wechatConfig = JSON.parse(
    ofs.readFileSync(resolve(__dirname, '..', 'config/wechat.json'), 'utf-8')
  );

  const wechatAllowList = wechatConfig.src;

  // 读取BUNDLE2H配置
  const bundle2hConfig = JSON.parse(
    ofs.readFileSync(resolve(__dirname, '..', 'config/bundle2h.json'), 'utf-8')
  );

  const bundle2hAllowList = bundle2hConfig.src;

  // 微信平台配置
  const wechatPlatformConfig = {
    compileTs: true,
    compileLess: true,
    platform: tsxml.wechat,
    styleExt: '.wxss',
    xmlExt: '.wxml',
    xmlScriptExt: '.wxs',
    xmlScriptOption: {
      forceCommonjs: true,
    },
  };

  // 支付宝平台配置
  const alipayPlatformConfig = {
    compileTs: false,
    compileLess: false,
    platform: tsxml.alipay,
    xmlExt: '.axml',
    styleExt: '.acss',
    xmlScriptExt: '.sjs',
    xmlScriptOption: {},
  };

  // BUNDLE2H平台配置 (与支付宝相同)
  const bundle2hPlatformConfig = {
    ...alipayPlatformConfig,
  };

  // 创建各平台的编译配置
  const wechatBuildOption = createPlatformBuildOption(
    'WECHAT',
    wechatPlatformConfig
  );

  const alipayBuildOption = createPlatformBuildOption(
    'ALIPAY',
    alipayPlatformConfig
  );

  const bundle2hBuildOption = createPlatformBuildOption(
    'BUNDLE2H',
    bundle2hPlatformConfig
  );

  // 各平台组件编译
  compilePlatformComponents('WECHAT', watch, wechatAllowList, wechatBuildOption);
  compilePlatformComponents('ALIPAY', watch, undefined, alipayBuildOption);
  compilePlatformComponents('BUNDLE2H', watch, bundle2hAllowList, bundle2hBuildOption);
}
