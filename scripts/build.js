const path = require('path');
const { fork } = require('child_process');
const { minidev } = require('minidev');
const fs = require('fs');
const compile = require('./compile');
const getSourceCode = require('./getSourceCode');

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
  const colorFilename = path.join(
    __dirname,
    '../compiled/alipay/src/style/themes/color.less'
  );
  const colorContent = await fs.promises.readFile(colorFilename, 'utf-8');
  const appJSONFilename = path.join(
    __dirname,
    '../compiled/alipay/demo/app.json'
  );
  const appJSONContent = await fs.promises.readFile(appJSONFilename, 'utf-8');
  await fs.promises.writeFile(
    colorFilename,
    colorContent.replace('default', 'dark')
  );
  await fs.promises.writeFile(
    appJSONFilename,
    appJSONContent.replace('#FFFFFF', '#000000')
  );
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
    const child = fork(
      `${process.cwd()}/node_modules/dumi/bin/dumi.js`,
      ['build'],
      {
        env: {
          NODE_OPTIONS: '--openssl-legacy-provider',
          FORCE_COLOR: 1,
        },
      }
    );
    child.on('close', (code) => {
      if (code !== 0) {
        reject();
      }
      resolve();
    });
    process.on('exit', () => {
      child.kill();
    });
  });
}

async function getPagesSourceCode(pages, theme, platform) {
  const sourceCode = {};
  const arr = await Promise.all(
    pages.map((item) =>
      getSourceCode({
        page: item,
        theme,
        platform,
      })
    )
  );
  arr.forEach((item) => {
    Object.assign(sourceCode, item);
  });
  return sourceCode;
}

async function buildPreview(theme = 'default') {
  const list = ['appConfig.json', 'index.html', 'index.js', 'index.worker.js'];
  const dist = {};
  list.forEach((item) => {
    const content = fs.readFileSync(
      path.join(
        __dirname,
        theme === 'dark' ? '../dist-theme-dark/ng-main' : '../dist/ng-main',
        item
      ),
      'utf-8'
    );
    dist[item] = content;
  });
  const appJSONFilename = path.join(
    __dirname,
    '../compiled/alipay/demo/app.json'
  );
  const appConfig = require(appJSONFilename);
  const pages = appConfig.pages;
  const iframeContent = fs.readFileSync(
    path.join(__dirname, '../.dumi/theme/builtins/iframe.html'),
    'utf-8'
  );
  const codeIframeContent = fs.readFileSync(
    path.join(__dirname, '../.dumi/theme/builtins/code.html'),
    'utf-8'
  );
  fs.writeFileSync(
    path.join(
      __dirname,
      `../docs-dist/preview${theme === 'dark' ? '-theme-dark' : ''}.json`
    ),
    JSON.stringify({
      dist,
      sourceCode: {
        alipay: await getPagesSourceCode(pages, theme, 'alipay'),
        wechat: await getPagesSourceCode(pages, theme, 'wechat'),
      },
    })
  );
  if (theme === 'dark') {
    return;
  }
  fs.writeFileSync(
    path.join(__dirname, '../docs-dist/code.html'),
    codeIframeContent
  );
  fs.writeFileSync(
    path.join(__dirname, '../docs-dist/preview.html'),
    iframeContent
  );
  fs.mkdirSync(path.join(__dirname, '../docs-dist/mini'));
  const packageInfo = {};
  fs.writeFileSync(
    path.join(__dirname, '../docs-dist/mini/packageInfo.json'),
    JSON.stringify(packageInfo)
  );
}

(async () => {
  try {
    await compile();
    await Promise.all([buildMiniProgram(), buildDocs()]);
    await Promise.all([buildPreview(), buildPreview('dark')]);
    console.log('build success!');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
