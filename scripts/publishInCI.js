const {
  doPublish,
  execSync,
  generateSematicVersion,
} = require('./publishUtils');

let distTag = process.env.DIST_TAG;

console.log('dist tag:', distTag);

let version = process.env.DIST_VERSION;
if (!version) {
  const currentVersion = require('../package.json').version;
  console.log(`currentVersion`, currentVersion);
  version = generateSematicVersion(distTag, 'patch', currentVersion);
}

console.log('version:', version);

doPublish(distTag, version, Boolean(process.env.SETUP_RELEASE));

// 指定了 DIST_VERSION 和 SETUP_RELEASE，说明是执行了 release 这个 workflow，不需要真实的发布的 npm 和 release，只需要上传 tag
if (process.env.DIST_VERSION && process.env.SETUP_RELEASE) {
  execSync(`git tag ${process.env.DIST_VERSION}`);
  execSync(
    `git push origin ${process.env.DIST_VERSION}:${process.env.DIST_VERSION}`
  );
}
