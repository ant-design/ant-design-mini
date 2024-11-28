const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const less = require('less');

function getFileContent(file) {
  return fs.promises.readFile(file, 'utf-8');
}

function lessCompile(filename, theme) {
  return fs.promises.readFile(filename, 'utf-8').then(
    (content) =>
      new Promise((resolve, reject) => {
        less.render(
          content,
          {
            filename,
            modifyVars: {
              theme,
            },
          },
          (e, output) => {
            if (e) {
              reject(e);
            }
            resolve(output.css);
          }
        );
      })
  );
}

module.exports = async function getSourceCode({ page, theme, platform }) {
  const map = {
    '.js': getFileContent,
    '.ts': getFileContent,
    '.axml': getFileContent,
    '.wxml': getFileContent,
    '.acss': getFileContent,
    '.wxss': getFileContent,
    '.less': lessCompile,
    '.sjs': getFileContent,
    '.wxs': getFileContent,
    '.json': getFileContent,
  };

  const platformDir = platform === 'wechat' ? 'wechat' : 'alipay';

  const cwd = path.join(
    __dirname,
    '..',
    'compiled',
    platformDir,
    'demo',
    page,
    '../'
  );
  const json = {};
  const list = (
    await glob('**/*.+(js|axml|acss|less|sjs|json|wxml|wxss|wxs)', {
      cwd,
    })
  ).map(async (item) => {
    const content = await map[path.extname(item)](path.join(cwd, item));

    let componentBase = '$1antd-mini';
    if (platform === 'alipay') {
      componentBase = '$1antd-mini/es';
    }

    json[path.join(page, '../', item).replace('.less', '.acss')] =
      content.replace(/('|")[^'"]*\/src/g, componentBase);
  });
  await Promise.all(list);
  return json;
};
