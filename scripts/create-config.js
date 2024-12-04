const fs = require('fs/promises');
const { existsSync, readFileSync, writeFileSync } = require('fs');
const path = require('path');

async function createConfig() {
  // 删除配置文件
  await Promise.all(
    [
      'config/wechat.json',
      'config/alipay/app.json',
      'config/wechat/app.json',
    ].map((dir) => {
      return fs.rm(path.resolve(__dirname, '..', dir), {
        recursive: true,
        force: true,
      });
    })
  );
  /** 生成config/wechat.json **/
  // 获取全量文件夹列表
  const files =
    (await fs.readdir(path.resolve(__dirname, '..', 'src')))
      .filter((file) => {
        if (file[0] === '.') return false;
        const mdFilePath = path.resolve(__dirname, '..', 'src', file, 'index.md');
        // 如果没有markdown文件，进入白名单
        if (!existsSync(mdFilePath)) return true;
        const markdownContent = readFileSync(mdFilePath, { encoding: 'utf-8' });
        const regex = /supportPlatform: ([^ $]+)\]/g;
        const match = markdownContent.match(regex);
        if (match && match[0] && !match[0].includes('wechat')) return false;
        return true;
      });

  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat.json'), JSON.stringify({
    src: files,
  }, null, 2), 'utf8')

  // 获取demo文件列表
  const demoPageFiles = await fs.readdir(path.resolve(__dirname, '..', 'demo', 'pages'));
  /** 生成config/wechat/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat', 'app.json'), JSON.stringify({
    "darkmode": true,
    pages: ['demo/pages/index/index', ...demoPageFiles.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
  }, null, 2), 'utf8');

  /** 生成config/alipay/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'alipay', 'app.json'), JSON.stringify({
    "window": {
      "enableWK": "YES",
      "enableDSL": "YES",
      "enableJSC": "YES",
      "defaultTitle": "小程序版 antd-mini 库",
      "titleBarColor": "#ffffff",
      "pullRefresh": false,
      "allowsBounceVertical": false,
      "enableInPageRenderInput": "YES"
    },
    "lazyCodeLoading": "requiredComponents",
    "debug": true,
    pages: ['pages/index/index', ...demoPageFiles.filter(item => item !== 'index').map(fileName => `pages/${fileName}/index`)],
  }, null, 2), 'utf8');
}
module.exports = createConfig;