const { fork, execFile } = require('child_process');
const { minidev } = require('minidev');

(async () => {
  // execFile('tsx', [`${process.cwd()}/scripts/dev.ts`]);

  const path = require('path');

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
  });

  devServer.on('error', (err) => {
    console.log(err);
  });
})();
