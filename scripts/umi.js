/* eslint-disable @typescript-eslint/no-var-requires */
const { fork } = require('child_process');

module.exports = {
  name: 'umi',
  contribute: (registry) => {
    // const logger = injector.get(Symbol.for('ILogger'));
    registry.hooks.onCreateDevServer(({ devServer }) => {
      devServer.on('done', () => {
        fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['dev', `${devServer.port}`]);
      });
    });

    // registry.hooks.onDidRunLocalBuild(() => {
    //   logger.silent = true;
    //   console.log(`\n\n\n\n${chalk.green.bold('umi build ...')}`);
    //   const sp = spawnSync(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, ['build']);
    //   if (sp.status === 0) {
    //     console.log('-------------------------------------');
    //     console.log(`${chalk.green.bold('umi build finish')}`);
    //   }
    // });
  },
};
