const inquirer = require('inquirer');
const { exec, execSync } = require('child_process');
const { cwd } = require('process');
const PKG_JSON_PATH = `${cwd()}/package.json`;

/**
 * @param {'latest' | 'alpha' | 'beta'} tag
 * @param {'Major' | 'minor' | 'patch' | 'other'} versionLevel
 * @param {string} currentVersion
 */
function generateSematicVersion(tag, versionLevel, currentVersion) {
  let newVersion = '';
  const [curMajor, curMinor, curPatch, curTag, curNumber] =
    currentVersion.match(/([0-9a-z]+)(?=[-|.])?/gim);

  if (versionLevel === 'Major') {
    const major = Number(curMajor) + 1;
    newVersion = `${tag === 'latest'
        ? `${major}.0.0`
        : tag === 'alpha'
          ? `${major}.0.0-alpha.1`
          : `${major}.0.0-beta.1`
      }`;
  } else if (versionLevel === 'minor') {
    const minor = Number(curMinor) + 1;
    newVersion = `${tag === 'latest'
        ? `${curMajor}.${minor}.0`
        : tag === 'alpha'
          ? `${curMajor}.${minor}.0-alpha.1`
          : `${curMajor}.${minor}.0-beta.1`
      }`;
  } else if (versionLevel === 'patch') {
    const patch = Number(curPatch) + 1;
    newVersion = `${tag === 'latest'
        ? `${curMajor}.${curMinor}.${patch}`
        : tag === 'alpha'
          ? `${curMajor}.${curMinor}.${patch}-alpha.1`
          : `${curMajor}.${curMinor}.${patch}-beta.1`
      }`;
  } else {
    // 仅限 alpha 和 beta
    let newNumber = Number(curNumber) + 1;
    if (isNaN(newNumber)) {
      newNumber = 1;
    }
    newVersion = `${tag === 'alpha'
        ? `${curMajor}.${curMinor}.${curPatch}-alpha.${newNumber}`
        : `${curMajor}.${curMinor}.${curPatch}-beta.${newNumber}`
      }`;
  }
  return newVersion;
}

// 拿到版本信息, 以 antd-mini 为基准
function getVersion(depName = 'antd-mini') {
  return new Promise((resolve, reject) => {
    exec(`npm info ${depName}`, function (error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      if (stderr) {
        return reject(stderr);
      }

      const res = stdout.split('\n').reduce((prev, cur) => {
        if (cur.includes('alpha')) {
          prev['alpha'] = cur.slice(cur.indexOf(':') + 2);
        } else if (cur.includes('beta')) {
          prev['beta'] = cur.slice(cur.indexOf(':') + 2);
        } else if (cur.includes('latest')) {
          prev['latest'] = cur.slice(cur.indexOf(':') + 2);
        }
        return prev;
      }, {});
      resolve(res);
    });
  });
}

// 生成新版本信息
function genNewVersion(tag, currentVersion) {
  const choices =
    tag === 'latest'
      ? ['Major', 'minor', 'patch']
      : ['Major', 'minor', 'patch', 'other'];

  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'version',
          message: '请选择发布的版本',
          choices,
        },
      ])
      .then((res) => {
        const { version } = res;
        const newVersion = generateSematicVersion(tag, version, currentVersion);
        resolve(newVersion);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

// 用户确认
function npmPublish(oldVersion, newVersion, tag) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'confirm',
          message: `现有版本为：${oldVersion}，新版本为：${newVersion}，是否发布？`,
          choices: ['是', '否'],
        },
      ])
      .then((res) => {
        const { confirm } = res;
        if (confirm === '是') {
          doPublish(tag, newVersion);
          resolve(newVersion);
        }
      });
  });
}

/**
 * @param {'latest' | 'alpha' | 'beta'} tag
 * @param {string} newVersion
 */
function doPublish(tag, newVersion) {
  console.log('发布中 ...');
  const originPkgJson = require(PKG_JSON_PATH);
  publish('antd-mini', tag, newVersion);
  // 只回写正式版的 package.json
  if (tag === 'latest') {
    originPkgJson.version = newVersion;
  }
  writePkgJson(JSON.stringify(originPkgJson, null, 2));
  console.log('发布完成');
}

function writePkgJson(str) {
  const fs = require('fs');
  fs.writeFileSync(PKG_JSON_PATH, str, { encoding: 'utf-8' });
}

function publish(npmName, tag, version) {
  const pkgJsonStr = updatePkgJson(npmName, version);
  writePkgJson(pkgJsonStr);

  // 显式指定 registry，防止使用错误的 registry
  const registry = process.env.NPM_REGISTRY || 'https://registry.npmjs.org/';
  console.log(`发布到 registry: ${registry}`);

  execSync(`npm publish --tag=${tag} --registry=${registry}`, { stdio: 'inherit' });
}

function updatePkgJson(npmName, version) {
  const pkgJson = require(PKG_JSON_PATH);
  pkgJson.name = npmName;
  pkgJson.version = version;
  return JSON.stringify(pkgJson, null, 2);
}

function gitSync(newVersion) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'git',
          message: `是否同步 git ？`,
          choices: ['是', '否'],
        },
      ])
      .then((res) => {
        const { git } = res;
        if (git === '是') {
          // tag + 分支
          execSync(`git tag ${newVersion}`);
          execSync(`git push origin ${newVersion}:${newVersion}`);
          console.log('git 同步完成');
        }
        resolve();
      });
  });
}

module.exports = {
  getVersion,
  genNewVersion,
  npmPublish,
  writePkgJson,
  publish,
  updatePkgJson,
  gitSync,
  doPublish,
  generateSematicVersion,
  execSync,
  PKG_JSON_PATH
};
