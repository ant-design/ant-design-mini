const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const less = require('less');

function getFileContent(file) {
  return fs.promises.readFile(file, 'utf-8');
}

function lessCompile(filename, theme) {
  return fs.promises.readFile(filename, 'utf-8').then(content => new Promise((resolve, reject) => {
    less.render(content, {
      filename,
      modifyVars: {
        theme,
      },
    }, (e, output) => {
      if (e) {
        reject(e);
      }
      resolve(output.css);
    });
  }));
}

module.exports = async function getSourceCode(page, theme) {
  const map = {
    '.js': getFileContent,
    '.axml': getFileContent,
    '.acss': getFileContent,
    '.less': lessCompile,
    '.sjs': getFileContent,
    '.json': getFileContent,
  };

  const cwd = path.join(__dirname, '../demo', page, '../');
  const json = {};
  const list = (await glob('**/*.+(js|axml|acss|less|sjs|json)', {
    cwd,
  })).map(async item => {
    const content = await map[path.extname(item)](path.join(cwd, item));
    json[path.join(page, '../', item).replace('.less', '.acss')] = content.replace(/('|")[^'"]*\/src/g, theme === 'dark' ? '$1antd-mini/less' : '$1antd-mini/es');
  });
  await Promise.all(list);
  return json;
}
