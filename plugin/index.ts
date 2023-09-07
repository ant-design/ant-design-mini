import { IApi } from 'dumi';
import path from 'path';
import getSourceCode from '../scripts/getSourceCode';
import { stringify } from 'querystring';
import fs from 'fs';

export default (api: IApi) => {
  api.register({
    key: 'dumi.registerCompiletime',
    fn: () => ({
      name: 'CustomDemoPreviewer',
      component: path.join(__dirname, './render'),
      transformer(opts) {
        const pageProps = {};
        Object.keys(opts.attrs).forEach((key) => {
          if (key.startsWith('page-props-')) {
            pageProps[key.replace('page-props-', '')] = opts.attrs[key];
          }
        });
        const propsQuery = stringify(pageProps);
        if (opts.attrs.src.startsWith('pages')) {
          const pageElem = opts.attrs.src.split('/');
          pageElem.pop();
          const folder = pageElem.join('/') + '/';
          return {
            previewerProps: {
              herboxUrl: `/preview.html?page=${
                opts.attrs.src
              }&folder=${folder}&theme=light&compilerServer=${
                process.env.SERVER || ''
              }&noChangeButton=${
                opts.attrs.nochangebutton || ''
              }&pageProps=${encodeURIComponent(propsQuery)}`,
            },
          };
        }
      },
    }),
  });

  api.addBeforeMiddlewares(() => [
    (req, res, next) => {
      if (req.path === '/preview.html') {
        fs.createReadStream(
          path.join(__dirname, '../.dumi/theme/builtins/iframe.html')
        ).pipe(res);
        return;
      }
      if (req.path.startsWith('/sourceCode/')) {
        const page = req.path.replace('/sourceCode/', '');
        getSourceCode(page).then((json) => res.json(json));
        return;
      }
      if (req.url === '/mini/packageInfo.json') {
        res.json({});
        return;
      }
      next();
    },
  ]);
};
