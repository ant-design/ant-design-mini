const fs = require('fs/promises');
const { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } = require('fs');
const path = require('path');


function getFilesWithIdentifiers(dir) {
  const results = [];
  // 定义递归函数
  function walk(currentDir) {
    const files = readdirSync(currentDir); // 读取当前目录下的所有文件和文件夹

    files.forEach(file => {
      const fullPath = path.join(currentDir, file); // 构造文件/文件夹的完整路径
      const stat = statSync(fullPath); // 获取文件/文件夹的状态

      if (stat.isDirectory()) {
        // 如果是文件夹，递归进入该文件夹
        walk(fullPath);
      } else {
        // 如果是文件，生成标识并存储
        const relativePath = path.relative(dir, fullPath); // 获取相对于根目录的相对路径
        const identifier = relativePath.split(path.sep).slice(0, -1).join('/'); // 提取文件夹路径作为标识

        const r = identifier || path.basename(dir)
        results.indexOf(r) === -1 && results.push(r)
      }
    });
  }

  // 开始递归遍历
  walk(dir);

  return results;
}

async function createConfig() {
  // 确保config目录存在
  const configDirs = [
    'config',
    'config/wechat',
    'config/alipay',
    'config/alipaynative'
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
      'config/alipaynative.json',
      'config/alipaynative/app.json',
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
  // 获取alipaynative平台支持的组件列表
  const alipaynativeFiles = [...(await getComponentsList('src', 'alipaynative')), ...(await getComponentsList('copilot', 'alipaynative'))]

  // 生成微信平台配置
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat.json'), JSON.stringify({
    src: wechatFiles,
  }, null, 2), 'utf8')

  // 生成alipaynative平台配置
  writeFileSync(path.resolve(__dirname, '..', 'config', 'alipaynative.json'), JSON.stringify({
    src: alipaynativeFiles,
  }, null, 2), 'utf8')

  const wechatAppJsonList = [];
  const alipaynativeAppJsonList = [];

  const getDemoPageFiles = async (demoDir = 'demo', platform = 'wechat') => {
    // 获取demo文件列表
    const demoPageFiles = await getFilesWithIdentifiers(path.resolve(__dirname, '..', demoDir, 'pages'));
    const appJsonList = platform === 'wechat' ? wechatAppJsonList : alipaynativeAppJsonList;
    const platformFiles = platform === 'wechat' ? wechatFiles : alipaynativeFiles;

    // 遍历页面
    demoPageFiles.map(fileName => {
      platformFiles.forEach(name => {
        if (fileName.startsWith(`${name}/`) || fileName === name) {
          appJsonList.push(fileName);
        }
      })
    })
    return demoPageFiles;
  }


  const demoPageFiles = [...(await getDemoPageFiles('demo', 'alipay')), ...(await getDemoPageFiles('copilot-demo', 'alipay'))];
  // 获取wechat平台页面
  await getDemoPageFiles('demo', 'wechat');
  await getDemoPageFiles('copilot-demo', 'wechat');


  /** 生成config/wechat/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'wechat', 'app.json'), JSON.stringify({
    "darkmode": true,
    pages: ['demo/pages/index/index', ...wechatAppJsonList.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
  }, null, 2), 'utf8');

  /** 生成config/alipaynative/app.json */
  writeFileSync(path.resolve(__dirname, '..', 'config', 'alipaynative', 'app.json'), JSON.stringify({
    "worklet": {},
    "darkMode": true,
    pages: ['demo/pages/index/index', ...alipaynativeAppJsonList.filter(item => item !== 'index').map(fileName => `demo/pages/${fileName}/index`)],
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