import gulp from 'gulp';
import changed from 'gulp-changed';
import debug from 'gulp-debug';
import * as through2 from 'through2';
import rename from 'gulp-rename';
import * as tsxml from './tsxml/index';
import path from 'path';
import { transformTsxJS } from './tsxjs';
import ts from 'gulp-typescript';
import less from 'gulp-less';
import ifdef from '@diamondyuan/gulp-ifdef';
import json5 from 'json5';
import { resolve } from 'path';

interface MiniProgramSourceCompileOption {
  source: string;
  dest: string;
  watch: boolean;
  debug?: string | string[];
  allowList?: string[];
  tsconfig: string;
  buildOption: {
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

const allowList = [
  '_util',
  'Button',
  'Container',
  'Icon',
  'Loading',
  'mixins',
  'style',
  'Switch',
  'Tag',
  'Popover',
];

const demoAllowList = [
  'pages/Button',
  'pages/ButtonIcon',
  'pages/ButtonInline',
  'pages/Icon',
  'pages/Loading',
  'pages/Switch',
  'pages/Tag',
];

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
            extname: ['ts', 'less', 'tsx', 'json5'],
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
              console.error(e);
              process.exit(1);
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

  // 拷贝 markdown 文件
  task(
    {
      name: 'md',
      glob: ['**/*.md'],
      destExtension: '.md',
    },
    function (stream: NodeJS.ReadWriteStream) {
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
            process.exit(1);
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
      glob: ['**/*.sjs.ts'],
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
      name: 'tsxml',
      glob: ['**/*.axml.tsx'],
      destExtension: option.buildOption.xmlExt,
    },
    function (stream: NodeJS.ReadWriteStream, factory) {
      return stream
        .pipe(
          factory((content: string) => {
            const ast = tsxml.parseCode(content);
            return tsxml.tsxmlToAxml(
              tsxml.TransformContext.create(
                ast,
                option.buildOption.platform,
                content
              )
            );
          })
        )
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
      name: 'json',
      glob: ['**/*.json', '!tsconfig.json'],
      destExtension: '.json',
    },
    function (stream: NodeJS.ReadWriteStream) {
      return stream.pipe(gulp.dest(option.dest));
    }
  );

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

export function compileAntdMini(watch: boolean) {
  const wechatBuildOption = {
    compileTs: true,
    compileLess: true,
    platform: tsxml.wechat,
    styleExt: '.wxss',
    xmlExt: '.wxml',
    xmlScriptExt: '.wxs',
    defVar: {
      WECHAT: true,
      ALIPAY: false,
    },
    xmlScriptOption: {
      forceCommonjs: true,
    },
  };

  miniCompiler({
    tsconfig: resolve(__dirname, '..', 'tsconfig.json'),
    source: resolve(__dirname, '..', 'src'),
    dest: resolve(__dirname, '..', 'compiled', 'wechat', 'src'),
    watch,
    allowList,
    buildOption: wechatBuildOption,
  });

  miniCompiler({
    tsconfig: resolve(__dirname, '..', 'tsconfig.json'),
    source: resolve(__dirname, '..', 'demo'),
    dest: resolve(__dirname, '..', 'compiled', 'wechat', 'demo'),
    watch,
    allowList: demoAllowList,
    buildOption: wechatBuildOption,
  });

  const alipayBuildOption = {
    defVar: {
      WECHAT: false,
      ALIPAY: true,
    },
    compileTs: false,
    compileLess: false,
    platform: tsxml.alipay,
    xmlExt: '.axml',
    styleExt: '.acss',
    xmlScriptExt: '.sjs',
    xmlScriptOption: {},
  };

  miniCompiler({
    tsconfig: resolve(__dirname, '..', 'tsconfig.json'),
    source: resolve(__dirname, '..', 'src'),
    dest: resolve(__dirname, '..', 'compiled', 'alipay', 'src'),
    watch,
    buildOption: alipayBuildOption,
  });

  miniCompiler({
    tsconfig: resolve(__dirname, '..', 'tsconfig.json'),
    source: resolve(__dirname, '..', 'demo'),
    dest: resolve(__dirname, '..', 'compiled', 'alipay', 'demo'),
    watch,
    buildOption: alipayBuildOption,
  });
}
