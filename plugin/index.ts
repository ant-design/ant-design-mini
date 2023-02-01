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
          const pageElem = opts.attrs.src.split('/');
          pageElem.pop();
          const folder = pageElem.join('/') + '/';
          return {
            previewerProps: {
              herboxUrl: `/preview.html?page=${opts.attrs.src}&folder=${folder}&theme=light&compilerServer=${process.env.SERVER || ''}&noChangeButton=${opts.attrs.nochangebutton || ''}`
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
  async function readAllFileFromDir(dirPath) {
    const allFileList: string[] = [];
    async function recursion(dir) {
        try {
            const files = await fs.promises.readdir(dir);
            for (const file of files) {
                // 获取当前文件路径
                const joinPath = path.join(dir, file);
                // 判断文件属性
                const stat = await fs.promises.stat(joinPath);
                // 如果是文件夹，则递归
                if (stat.isDirectory()) {
                    await recursion(joinPath)
                // 否则加入 list
                } else {
                    allFileList.push(joinPath);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
    // 开始
    await recursion(dirPath);
    return allFileList;
  }

  async function getSourceCode(page: string) {
    // 读取文件夹中的路径
    const dirList = await readAllFileFromDir(path.join(__dirname, '../demo', page));

    const map = {
      '.js': getFileContent,
      '.axml': getFileContent,
      '.acss': getFileContent,
      '.less': lessCompile,
      '.json': getFileContent,
      '.sjs': getFileContent
    };

    const list: Promise<string>[] = [];
    const arr: string[] = [];

    dirList.forEach(fileName => {
      const splitArr = fileName.split('.');
      const ext = splitArr[splitArr.length - 1];
      arr.push(ext === 'less' ? fileName.replace('.less', '.acss') : fileName);
      list.push(map[`.${ext}`](fileName));
    });


    const json = {};
    (await Promise.all(list)).forEach((item, index) => {
      const n = arr[index].replace(path.join(__dirname, '../demo/'), '');
      json[n] = item.replace(/('|")[^'"]*\/src/g, '$1antd-mini/es');
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
