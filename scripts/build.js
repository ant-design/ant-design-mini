/* eslint-disable @typescript-eslint/no-var-requires */
const { minidev } = require('minidev');
const { fork } = require('child_process');

// demo 小程序上传
minidev.upload({
  appId: 'xxxxx',
  project: `${process.cwd()}/demo`,
}).then((res) => {
  // 上传成功后 dumi 构建
  fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['build', `${res.experienceQrCodeUrl}`]);
  // 同步构建产物
  //
});
