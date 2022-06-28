const { doPublish, execSync } = require('./publishUtils');

doPublish(process.env.DIST_TAG, process.env.DIST_VERSION);
execSync(`git tag ${process.env.DIST_VERSION}`);
execSync(`git push origin ${process.env.DIST_VERSION}:${process.env.DIST_VERSION}`);
