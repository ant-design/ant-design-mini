/* eslint-disable @typescript-eslint/no-var-requires */
const { fork } = require("child_process");

function once(fn) {
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    fn.apply(this, args)
  };
}

const onceDumiDev = once((port) => {
  fork(`${process.cwd()}/node_modules/dumi/bin/dumi.js`, [
    "dev",
    `${port}`,
  ]);
})

module.exports = {
  name: "umi",
  contribute: (registry) => {
    registry.hooks.onCreateDevServer(({ devServer }) => {
      devServer.on("done", ()=>onceDumiDev(devServer.port));
    });
  },
};
