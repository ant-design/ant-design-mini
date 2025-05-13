const fs = require('fs/promises');
const { existsSync, readFileSync, writeFileSync, mkdirSync } = require('fs');
const path = require('path');

async function createConfig() {
  // 确保config目录存在
  const configDirs = [
    'config',
    'config/wechat',
    'config/alipay',
    'config/bundle2h'
  ];

  configDirs.forEach(dir => {
    const dirPath = path.resolve(__dirname, '..', dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
  });

  // 删除配置文件
  await Promise.all(
    [
      'config/alipay/app.json',
      'config/wechat.json',
      'config/wechat/app.json',
      'config/bundle2h.json',
      'config/bundle2h/app.json',
    ].map((dir) => {
      return fs.rm(path.resolve(__dirname, '..', dir), {
        recursive: true,
        force: true,
      });
    })
  );
  const getComponentsList = async (componentType = 'src', platform = 'wechat') => {
    const componentsList = (await fs.readdir(path.resolve(__dirname, '..', componentType)))
      .filter((file) => {
        if (file[0] === '.') return false;
        const mdFilePath = path.resolve(__dirname, '..', componentType, file, 'index.md');
        // 如果没有markdown文件，进入白名单
        if (!existsSync(mdFilePath)) return true;
        const markdownContent = readFileSync(mdFilePath, { encoding: 'utf-8' });
        // 匹配supportPlatform: 后面的数组值
        const regex = /supportPlatform:\s*\[(.*?)\]/s;
        const match = markdownContent.match(regex);
        if (match) {
          const platformsStr = match[1];
          const platforms = platformsStr.split(',').map(p => p.trim().replace(/['"]/g, ''));
          if (!platforms.includes(platform)) return false;
        }
        return true;
      });
    return componentsList;
  }
  /** 生成平台配置文件 **/
  // 获取微信平台支持的组件列表
  const wechatFiles = [...(await getComponentsList('src', 'wechat')), ...(await getComponentsList('copilot', 'wechat'))]
  // 获取bundle2h平台支持的组件列表
  const bundle2hFiles = [...(await getComponentsList('src', 'bundle2h')), ...(await getComponentsList('copilot', 'bundle2h'))]

  // 生成微信平台配置
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat.json'), JSON.stringify({
    src: wechatFiles,
  }, null, 2), 'utf8')

  // 生成bundle2h平台配置
  writeFileSync(path.resolve(__dirname, '..', 'config', 'bundle2h.json'), JSON.stringify({
    src: bundle2hFiles,
  }, null, 2), 'utf8')

  const wechatAppJsonList = [];
  const bundle2hAppJsonList = [];

  const getDemoPageFiles = async (demoDir = 'demo', platform = 'wechat') => {
    // 获取demo文件列表
    const demoPageFiles = await fs.readdir(path.resolve(__dirname, '..', demoDir, 'pages'));
    const appJsonList = platform === 'wechat' ? wechatAppJsonList : bundle2hAppJsonList;
    const platformFiles = platform === 'wechat' ? wechatFiles : bundle2hFiles;

    // 遍历页面
    await Promise.all(demoPageFiles.map(async fileName => {
      // 读取json文件里的依赖组件，判断是否支持该平台
      let jsonContent = '';
      let isSupportPlatform = true;
      // json文件可能是json5，也可能是json文件后缀
      const jsonFilePath = path.resolve(__dirname, '..', demoDir, 'pages', fileName, 'index.json');
      const json5FilePath = path.resolve(__dirname, '..', demoDir, 'pages', fileName, 'index.json5')
      if (existsSync(jsonFilePath)) {
        jsonContent = await fs.readFile(jsonFilePath, 'utf-8');
      } else if (existsSync(json5FilePath)) {
        jsonContent = await fs.readFile(json5FilePath, 'utf-8');
      }

      if (jsonContent) {
        // 正则匹配文件里的../../../src/xxx/，获取xxx组件名
        const dependCompList = jsonContent.match(/\.\.\/\.\.\/\.\.\/src\/([a-zA-Z]+)\//g) || [];
        // 如果依赖的组件都能找到
        if (!dependCompList.some(comp => !platformFiles.map(file => `../../../src/${file}/`).find(fileWithPrefix => fileWithPrefix === comp))) {
          appJsonList.push(fileName);
        } else {
          isSupportPlatform = false;
        }
      } else {
        appJsonList.push(fileName);
      }
      // 二级页面
      const innerFiles = await fs.readdir(path.resolve(__dirname, '..', demoDir, 'pages', fileName));
      innerFiles.forEach(innerFile => {
        if (existsSync(path.resolve(__dirname, '..', demoDir, 'pages', fileName, innerFile, 'index.axml'))) {
          demoPageFiles.push(`${fileName}/${innerFile}`);
          if (isSupportPlatform) appJsonList.push(`${fileName}/${innerFile}`);
        }
      })
    }))
    return demoPageFiles;
  }

  // 获取微信平台页面
  const demoPageFiles = [...(await getDemoPageFiles('demo', 'wechat')), ...(await getDemoPageFiles('copilot-demo', 'wechat'))];
  // 获取bundle2h平台页面
  await getDemoPageFiles('demo', 'bundle2h');
  await getDemoPageFiles('copilot-demo', 'bundle2h');

  /** 生成config/wechat/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat', 'app.json'), JSON.stringify({
    "darkmode": true,
    pages: ['demo/pages/index/index', ...wechatAppJsonList.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
  }, null, 2), 'utf8');

  /** 生成config/bundle2h/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'bundle2h', 'app.json'), JSON.stringify({
    "worklet": {},
    pages: ['demo/pages/index/index', ...bundle2hAppJsonList.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
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