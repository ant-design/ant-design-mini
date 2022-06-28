const { doPublish, execSync, generateSematicVersion } = require('./publishUtils');

let version = process.env.DIST_VERSION;
if (!version) {
  const currentVersion = require("../package.json").version;
  version = generateSematicVersion(process.env.DIST_TAG, 'other', currentVersion)
}

doPublish(process.env.DIST_TAG, version);

if (process.env.DIST_VERSION) {
  // 只对 release 的分支打 Tag
  execSync(`git tag ${process.env.DIST_VERSION}`);
  execSync(`git push origin ${process.env.DIST_VERSION}:${process.env.DIST_VERSION}`);
}
