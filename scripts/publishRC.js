const { doPublish, PKG_JSON_PATH, getVersion } = require('./publishUtils');

const semver = require('semver');

async function main() {
  let distTag = process.env.DIST_TAG;
  let prereleaseText = undefined;
  let releaseType = undefined;
  if (distTag === 'beta') {
    releaseType = 'prerelease';
    prereleaseText = 'beta';
  } else if (distTag === 'alpha') {
    releaseType = 'prerelease';
    prereleaseText = 'alpha';
  }

  if (!releaseType) {
    console.log('distTag only allow `alpha` and `beta`');
    return;
  }

  console.log('dist tag:', distTag);

  const currentVersion = require(PKG_JSON_PATH).version;
  console.log(`currentVersion`, currentVersion);

  let baseVersion = currentVersion;
  // 如果需要获取到最新的可用版本，要做一下检测
  const latestVersions = await getVersion();
  console.log(`latestVersions`, latestVersions);
  if (distTag) {
    const latestVersion = latestVersions[distTag];
    if (latestVersion) {
      // 如果查到的 npm 上的最新版比当前版本要大，那就用
      if (semver.gte(latestVersion, currentVersion)) {
        console.log(
          `${latestVersion} >= ${currentVersion}, use ${baseVersion}`
        );
        baseVersion = latestVersion;
      } else {
        console.log(`${latestVersion} < ${currentVersion}, use ${baseVersion}`);
      }
    }
  }
  console.log('use base version: ', baseVersion);
  const version = semver.inc(baseVersion, releaseType, prereleaseText);

  console.log('version:', version);

  doPublish(distTag, version);
}

main();
