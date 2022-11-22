const path = require('path');
const { fork } = require("child_process");
const { minidev } = require('minidev');
const fs= require('fs');
const less = require('less');
const compile = require('./compile');


function buildMiniProgram() {
  return minidev.build({
    project: path.join(__dirname, '../'),
    output: path.join(__dirname, '../dist'),
    enableLess: true,
    enableTypescript: true,
  }).catch(() => {
    process.exit(1);
  });
}

function buildDocs() {
  return new Promise((resolve) => {
    const child = fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['build'], {
      env: {
        FORCE_COLOR: 1,
      },
    });
    child.on('close', (code) => {
      if (code !== 0) {
        process.exit(code);
      }
      resolve();
    });
    process.on('exit', () => {
      child.kill();
    });
  })
}

async function buildPreview() {
  function lessCompile(filename) {
    return fs.promises.readFile(filename, 'utf-8').then(content => new Promise((resolve, reject) => {
      less.render(content, {
        filename,
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
      json[arr[index]] = item.replace(/('|")[^'"]*\/src/g, '$1antd-mini');
    });
    return json;
  }

  const list = ['appConfig.json', 'index.html', 'index.js', 'index.worker.js'];
  const dist = {};
  list.forEach(item => {
    const content = fs.readFileSync(path.join(__dirname, '../dist/ng-main', item), 'utf-8');
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
  fs.writeFileSync(path.join(__dirname, '../docs-dist/preview.json'), JSON.stringify({
    dist,
    sourceCode,
  }));
  fs.writeFileSync(path.join(__dirname, '../docs-dist/preview.html'), iframeContent);
}


(async () => {
  await Promise.all([
    buildMiniProgram(),
    buildDocs(),
    compile(),
  ]);
  await buildPreview()
  console.log('build success!');
})();
