import { IApi } from 'dumi';
import * as path from 'path';
import * as fs from 'fs';

export default (api: IApi) => {
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
          throw new Error('组件库 demo 文件夹：缺失');
        }
        return {
          previewerProps: {
            herboxUrl: getHerboxUrl(opts),
          },
        };
      },
    }),
  });
};
function getHerboxUrl(opts) {
  const sourcesPath = parseAlias(process.cwd(), opts.attrs.src, opts.mdAbsPath);
  const prefix = sourcesPath.match(/.*(\/demo\/)(pages\/.+)/)[2];
  const demoAxmlFile = fs
    .readdirSync(sourcesPath)
    .find((file) => file.endsWith('.axml'));
  const tail = demoAxmlFile.match(/(.+)\.axml$/)[1];
  const page = `${prefix}/${tail}`;
  console.log(page);
  return 'http://opendocstwa-afx-31319.gz00b.dev.alipay.net/openbox/mini/docs/oooo?view=preview&defaultPage=pages/TipsSlot/index&defaultOpenedFiles=pages/TipsSlot/index&mode=snippets&theme=light';
}

export function parseAlias(
  cwd: string,
  src: string,
  mdAbsPath: string,
  alias?: Record<string, string>
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
