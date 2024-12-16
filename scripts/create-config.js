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

  const wechatAppJsonList = [];
  // 遍历页面
  await Promise.all(demoPageFiles.map(async fileName => {
    // 读取json文件里的依赖组件，判断是否支持微信
    let jsonContent = '';
    let isSupportWechat = true;
    // json文件可能是json5，也可能是json文件后缀
    const jsonFilePath = path.resolve(__dirname, '..', 'demo', 'pages', fileName, 'index.json');
    const json5FilePath = path.resolve(__dirname, '..', 'demo', 'pages', fileName, 'index.json5')
    if (existsSync(jsonFilePath)) {
      jsonContent = await fs.readFile(jsonFilePath, 'utf-8');
    } else if (existsSync(json5FilePath)) {
      jsonContent = await fs.readFile(json5FilePath, 'utf-8');
    }

    if (jsonContent) {
      // 正则匹配文件里的../../../src/xxx/，获取xxx组件名
      const dependCompList = jsonContent.match(/\.\.\/\.\.\/\.\.\/src\/([a-zA-Z]+)\//g);
      // 如果依赖的组件都能找到
      if (!dependCompList.some(comp => !files.map(file => `../../../src/${file}/`).find(fileWithPrefix => fileWithPrefix === comp))) {
        wechatAppJsonList.push(fileName);
      } else {
        isSupportWechat = false;
      }
    } else {
      wechatAppJsonList.push(fileName);
    }
    // 二级页面
    const innerFiles = await fs.readdir(path.resolve(__dirname, '..', 'demo', 'pages', fileName));
    innerFiles.forEach(innerFile => {
      if (existsSync(path.resolve(__dirname, '..', 'demo', 'pages', fileName, innerFile, 'index.axml'))) {
        demoPageFiles.push(`${fileName}/${innerFile}`);
        if (isSupportWechat) wechatAppJsonList.push(`${fileName}/${innerFile}`);
      }
    })
  }))
  /** 生成config/wechat/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat', 'app.json'), JSON.stringify({
    "darkmode": true,
    pages: ['demo/pages/index/index', ...wechatAppJsonList.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
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