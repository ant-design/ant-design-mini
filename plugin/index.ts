import { IApi } from 'dumi';
import path from 'path';
import fs from 'fs';
import less from 'less';


export default (api: IApi) => {
  api.register({
    key: 'dumi.registerCompiletime',
    fn: () => ({
      name: 'CustomDemoPreviewer',
      component: path.join(__dirname, './render'),
      transformer(opts) {
        if (opts.attrs.src.startsWith('pages')) {
          return {
            previewerProps: {
              herboxUrl: `/preview.html?defaultPage=${opts.attrs.src}&defaultOpenedFiles=${opts.attrs.src}&theme=light&compilerServer=${process.env.SERVER || ''}`
            },
          };
        }
      },
    }),
  });

  api.addBeforeMiddlewares(() => [
    (req, res, next) => {
      if (req.path === '/preview.html') {
        fs.createReadStream(path.join(__dirname, '../.dumi/theme/builtins/iframe.html')).pipe(res);
        return;
      }
      if (req.path.startsWith('/sourceCode/')) {
        const page = req.path.replace('/sourceCode/', '');
        getSourceCode(page).then(json => res.json(json));
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

function getFileContent(file) {
  return fs.promises.readFile(file, 'utf-8');
}

async function getSourceCode(page: string) {
  const map = {
    '.js': getFileContent,
    '.axml': getFileContent,
    '.acss': getFileContent,
    '.less': lessCompile,
    '.json': getFileContent,
  };
  const list: Promise<string>[] = [];
  const arr: string[] = [];
  Object.keys(map).forEach(item => {
    const filename = path.join(__dirname, '../demo', page + item);
    if (fs.existsSync(filename)) {
      arr.push(page + (item === '.less' ? '.acss' : item));
      list.push(map[item](filename));
    }
  });
  const json = {};
  (await Promise.all(list)).forEach((item, index) => {
    json[arr[index]] = item.replace(/('|")[^'"]*\/src/g, '$1antd-mini/es');
  });
  return json;
}


function lessCompile(filename: string) {
  return fs.promises.readFile(filename, 'utf-8').then(content => new Promise((resolve, reject) => {
    less.render(content, {
      filename,
    }, (e, output) => {
      if (e) {
        reject(e);
      }
      resolve(output!.css);
    });
  }));  
}
