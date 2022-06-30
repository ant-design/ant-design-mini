const createVersionText = (type = 'Pre-Release', version, context) => {
  return (
    `🎉 ${type} version ${version}  publish successful! You can install this version via \`npm install antd-mini@${version}\`` +
    ` [@${context.payload.comment.user.login}](https://github.com/${context.payload.comment.user.login})\n\n` +
    '```\n' +
    version +
    '\n' +
    '```\n\n' +
    '```\n' +
    `npm install antd-mini@${version}\n` +
    '```\n\n' +
    `https://www.npmjs.com/package/antd-mini/v/${version}`
  );
};

module.exports = {
  createVersionText,
};
