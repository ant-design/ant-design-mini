import { IApi } from 'dumi';
import * as path from 'path';
import * as fs from 'fs';

export default (api: IApi) => {
  process.env.DUMI_THEME = path.resolve(
    require.resolve('dumi-theme-antd-mini/package.json'),
    '../es',
  );
  api.register({
    key: 'dumi.registerCompiletime',
    fn: () => ({
      name: 'CustomDemoPreviewer',
      component: path.join(__dirname, './render'),
      transformer(opts) {
        if (opts.attrs && opts.attrs.src && opts.attrs.src.endsWith('.tsx')) {
          return null;
        }
        // 检测 demo 文件夹
        if (!fs.existsSync(path.join(process.cwd(), 'demo/pages'))) {
          throw new Error(
            '组件库 demo 文件夹：缺失',
          );
        }
        const sourcesPath = parseAlias(
          process.cwd(),
          opts.attrs.src,
          opts.mdAbsPath,
        );
        const rendererProps = getRenderProps(sourcesPath);
        return {
          rendererProps: rendererProps,
          previewerProps: {
            page: rendererProps.page,
            sources: sortSources(getBlockDepsFiles('antd-mini', sourcesPath)),
            dependencies: getBlockDepsNPM(`${process.cwd()}/package.json`),
            hideActions: ['CSB', 'RIDDLE'],
            simulator: false,
          },
        };
      },
    }),
  });
};

function sortSources(sources) {
  const suffixSortMap = {
    axml: 0,
    js: 1,
    ts: 2,
    acss: 3,
    less: 4,
    json: 5,
  };
  const entries = Object.entries(sources)
    .map((v) => {
      const suffix = v[0].split('.').pop();
      const sort = suffixSortMap[suffix];
      return {
        key: v[0],
        value: v[1],
        sort: Number.isInteger(sort) ? sort : 999,
      };
    })
    .sort((x, y) => x.sort - y.sort);
  const a = entries.reduce((re, v) => {
    re[v.key] = v.value;
    return re;
  }, {});
  return a;
}

export function getRenderProps(path: string) {
  const prefix = path.match(/.*(\/demo\/)(pages\/.+)/)[2];
  const demoAxmlFile = fs.readdirSync(path).find((file) => file.endsWith('.axml'));
  const tail = demoAxmlFile.match(/(.+)\.axml$/)[1];
  const page = `${prefix}/${tail}`;

  const props
    = process.env.NODE_ENV === 'development'
      ? {

        appCdnBaseUrl: /^http/.test(process.argv[3]) ? process.argv[3].replace(/\/$/, '') + '/' : `http://localhost:${process.argv[3]}/`,
        page,
      }
      : {
        appCdnBaseUrl: 'https://gw.alipayobjects.com/os/miniassets/antd-mini-demo/0.0.16/1655279738975/',
        page
      };

  return props;
}

export function getBlockDepsFiles(
  pkgName: string,
  blockRootPath: string,
  parentPath = '',
) {
  const files = fs.readdirSync(path.join(blockRootPath, parentPath));
  return files.reduce((r, file) => {
    const fileRltPath = path.join(parentPath, file);
    const fileAbsPath = path.join(blockRootPath, fileRltPath);

    if (fs.lstatSync(fileAbsPath).isDirectory()) {
      Object.assign(r, getBlockDepsFiles(blockRootPath, fileRltPath));
    } else if (/\.(ts|js|axml|acss)$/.test(fileAbsPath)) {
      r[fileRltPath] = {
        path: fileAbsPath,
      };
    } else if (/\.json$/.test(fileAbsPath)) {
      r[fileRltPath] = {
        path: fileAbsPath,
        content: CorrentPathInJson(fileAbsPath, pkgName),
      };
    }
    return r;
  }, {} as Record<string, { path: string; content?: string }>);
}
function CorrentPathInJson(jsonPath: string, pkgName: string): string {
  try {
    const content = fs.readFileSync(jsonPath, 'utf-8').toString();
    return content.replace(/"[^"]*?src\//g, `"${pkgName}/es/`);
  } catch (err) {
    console.log(err)
  }
}


export function getBlockDepsNPM(pkgJsonPath: string) {
  const content = JSON.parse(
    fs.readFileSync(pkgJsonPath, 'utf-8').toString(),
  );
  const dep = content.dependencies;
  return Object.keys(dep).reduce((prev, cur) => {
    prev[cur] = {
      version: dep[cur],
    };
    return prev;
  }, {} as Record<string, { version: string }>);
}


export function parseAlias(
  cwd: string,
  src: string,
  mdAbsPath: string,
  alias?: Record<string, string>,
): string {
  if (alias) {
    const aliasKeyArr = Object.keys(alias);
    const alia = aliasKeyArr.find((key) => src.startsWith(key));
    if (!alia) {
      return path.join(mdAbsPath, `../${src}`);
    }
    const realPath = src.replace(alia, alias[alia]);
    return path.join(cwd, realPath);
  }
  return path.join(mdAbsPath, `../${src}`);
}
