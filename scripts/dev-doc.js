const { fork, spawn } = require('child_process');
const { minidev } = require('minidev');
const chalk = require('chalk');
const createConfigJson = require('./create-config');
const { existsSync } = require('fs');

(async () => {
  const path = require('path');
  await createConfigJson();
  // 如果本地开发时发现没有compiled文档，则提示先进行build操作
  if (!existsSync(path.resolve(__dirname, '..', 'compiled'))) {
    console.log('本地没有compiled文件夹，请先执行npm run dev');
    return;
  }
  const { devServer } = await minidev.dev({
    project: path.join(__dirname, '../'),
  });

  let server;

  devServer.on('done', () => {
    if (server) {
      return;
    }
    server = true;
    fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['dev'], {
      env: {
        NODE_OPTIONS: '--openssl-legacy-provider',
        FORCE_COLOR: 1,
        SERVER: devServer.server,
        DUMI_CACHE: 'none',
      },
    });

    // console.log(
    //   chalk.blue.bold('\nStarting Compiler src path code to compiled path...')
    // );
    // const child = spawn('tsx', [`${process.cwd()}/scripts/dev.ts`]);
    // child.stdout.on('data', (data) => {
    //   console.log(`\nCompiler src path code to compiled: ${data}`);
    // });

    // child.stderr.on('data', (data) => {
    //   console.error(`\nCompiler src path code to compiled error: ${data}`);
    // });

    // child.on('close', (code) => {
    //   console.error(`\nCompiler src path code to compiled exit: ${code}`);
    // });
  });

  devServer.on('error', (err) => {
    console.log(err);
  });
})();
