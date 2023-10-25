import { IApi } from 'dumi';
import path from 'path';
import fs from 'fs';
import getSourceCode from '../scripts/getSourceCode';

export default (api: IApi) => {
  api.register({
    key: 'dumi.registerCompiletime',
    fn: () => ({
      name: 'CustomDemoPreviewer',
      component: path.join(__dirname, './render'),
      transformer(opts) {
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
              }&noChangeButton=${opts.attrs.nochangebutton || ''}`,
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
        getSourceCode({
          page,
          theme: req.query.theme,
          platform: req.query.platform,
        }).then((json) => res.json(json));
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
