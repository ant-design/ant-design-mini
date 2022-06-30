const {
  doPublish,
  execSync,
  generateSematicVersion,
} = require('./publishUtils');

console.log('dist tag:', process.env.DIST_TAG);

let version = process.env.DIST_VERSION;
let versionLevel = process.env.DIST_VERSION_LEVEL;
if (!version) {
  const currentVersion = require('../package.json').version;
  console.log(`currentVersion`, currentVersion);
  version = generateSematicVersion(
    process.env.DIST_TAG,
    versionLevel ?? 'patch',
    currentVersion
  );
}

console.log('version:', version);

doPublish(process.env.DIST_TAG, version, process.env.DRY_RUN);

if (process.env.DIST_VERSION && !process.env.DRY_RUN) {
  // 只对 release 的分支打 Tag
  execSync(`git tag ${process.env.DIST_VERSION}`);
  execSync(
    `git push origin ${process.env.DIST_VERSION}:${process.env.DIST_VERSION}`
  );
}
