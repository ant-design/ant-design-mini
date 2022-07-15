const {
  doPublish,
  generateSematicVersion,
  writePkgJson,
  PKG_JSON_PATH,
} = require('./publishUtils');

let distTag = process.env.DIST_TAG;

console.log('dist tag:', distTag);

let version = process.env.DIST_VERSION;
if (!version) {
  const currentVersion = require(PKG_JSON_PATH).version;
  console.log(`currentVersion`, currentVersion);
  version = generateSematicVersion(distTag, 'patch', currentVersion);
}

console.log('version:', version);

if (process.env.SETUP_RELEASE) {
  const originPkgJson = require(PKG_JSON_PATH);
  originPkgJson.version = version;
  writePkgJson(JSON.stringify(originPkgJson, null, 2));
} else {
  doPublish(distTag, version);
}
