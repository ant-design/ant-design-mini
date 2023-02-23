const path = require('path');
const { fork } = require("child_process");
const { minidev } = require('minidev');
const fs= require('fs');
const less = require('less');
const compile = require('./compile');


async function buildMiniProgram() {
  const cache = path.join(__dirname, '../.cache');
  if (fs.existsSync(cache)) {
    fs.rmdirSync(cache, {
      recursive: true,
    }); 
  }
  await minidev.build({
    project: path.join(__dirname, '../'),
    output: path.join(__dirname, '../dist'),
    enableLess: true,
    enableTypescript: true,
    cacheDir: cache,
  });
  const colorFilename = path.join(__dirname, '../src/style/themes/color.less');
  const colorContent = await fs.promises.readFile(colorFilename, 'utf-8');
  const appJSONFilename = path.join(__dirname, '../demo/app.json');
  const appJSONContent = await fs.promises.readFile(appJSONFilename, 'utf-8');
  await fs.promises.writeFile(colorFilename, colorContent.replace('default', 'dark'));
  await fs.promises.writeFile(appJSONFilename, appJSONContent.replace('#FFFFFF', '#000000'));
  if (fs.existsSync(cache)) {
    fs.rmdirSync(cache, {
      recursive: true,
    }); 
  }
  await minidev.build({
    project: path.join(__dirname, '../'),
    output: path.join(__dirname, '../dist-theme-dark'),
    enableLess: true,
    enableTypescript: true,
    cacheDir: cache,
  });
  await fs.promises.writeFile(colorFilename, colorContent);
  await fs.promises.writeFile(appJSONFilename, appJSONContent);
}

function buildDocs() {
  return new Promise((resolve, reject) => {
    const child = fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['build'], {
      env: {
        NODE_OPTIONS: '--openssl-legacy-provider',
        FORCE_COLOR: 1,
      },
    });
    child.on('close', (code) => {
      if (code !== 0) {
        reject();
      }
      resolve();
    });
    process.on('exit', () => {
      child.kill();
    });
  })
}

async function buildPreview(theme = 'default') {
  function lessCompile(filename) {
    return fs.promises.readFile(filename, 'utf-8').then(content => new Promise((resolve, reject) => {
      less.render(content, {
        filename,
        modifyVars: {
          theme,
        },
      }, (e, output) => {
        if (e) {
          reject(e);
        }
        resolve(output.css);
      });
    }));
  }
  
  function getFileContent(file) {
    return fs.promises.readFile(file, 'utf-8');
  }
  
  async function getSourceCode(page) {
    const map = {
      '.js': getFileContent,
      '.axml': getFileContent,
      '.acss': getFileContent,
      '.less': lessCompile,
      '.json': getFileContent,
    };
    const list = [];
    const arr = [];
    Object.keys(map).forEach(item => {
      const filename = path.join(__dirname, '../demo', page + item);
      if (fs.existsSync(filename)) {
        arr.push(page + (item === '.less' ? '.acss' : item));
        list.push(map[item](filename));
      }
    });
    const json = {};
    (await Promise.all(list)).forEach((item, index) => {
      json[arr[index]] = item.replace(/('|")[^'"]*\/src/g, theme === 'dark' ? '$1antd-mini/less' : '$1antd-mini/es');
    });
    return json;
  }

  const list = ['appConfig.json', 'index.html', 'index.js', 'index.worker.js'];
  const dist = {};
  list.forEach(item => {
    const content = fs.readFileSync(path.join(__dirname, theme === 'dark' ? '../dist-theme-dark/ng-main' : '../dist/ng-main', item), 'utf-8');
    dist[item] = content;
  });

  const appConfig = require(path.join(__dirname, '../demo/app.json'));
  const pages = appConfig.pages;
  const sourceCode = {};
  const arr = await Promise.all(pages.map(item => getSourceCode(item)));
  arr.forEach(item => {
    Object.assign(sourceCode, item);
  });
  const iframeContent = fs.readFileSync(path.join(__dirname, '../.dumi/theme/builtins/iframe.html'), 'utf-8');
  fs.writeFileSync(path.join(__dirname, `../docs-dist/preview${theme === 'dark' ? '-theme-dark' : ''}.json`), JSON.stringify({
    dist,
    sourceCode,
  }));
  if (theme === 'dark') {
    return;
  }
  fs.writeFileSync(path.join(__dirname, '../docs-dist/preview.html'), iframeContent);
  fs.mkdirSync(path.join(__dirname, '../docs-dist/mini'));
  const packageInfo = {};
  fs.writeFileSync(path.join(__dirname, '../docs-dist/mini/packageInfo.json'), JSON.stringify(packageInfo));
}


(async () => {
  try {
    await compile();
    await Promise.all([
      buildMiniProgram(),
      buildDocs(),
    ]);
    await Promise.all([
      buildPreview(),
      buildPreview('dark'),
    ]);
    console.log('build success!');
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
})();
