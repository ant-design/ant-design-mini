const inquirer = require("inquirer");
const { exec } = require("child_process");
const PKG_JSON_PATH = "../../package.json";

// 拿到版本信息
function getVersion(depName = "antd-mini") {
  return new Promise((resolve, reject) => {
    exec(`npm info ${depName}`, function (error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      if (stderr) {
        return reject(stderr);
      }

      const res = stdout.split("\n").reduce((prev, cur) => {
        if (cur.includes("alpha")) {
          prev["alpha"] = cur.slice(cur.indexOf(":") + 2);
        } else if (cur.includes("beta")) {
          prev["beta"] = cur.slice(cur.indexOf(":") + 2);
        } else if (cur.includes("latest")) {
          prev["latest"] = cur.slice(cur.indexOf(":") + 2);
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
    tag === "latest"
      ? ["Major", "mirror", "patch"]
      : ["Major", "mirror", "patch", "other"];

  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "version",
          message: "请选择发布的版本",
          choices,
        },
      ])
      .then((res) => {
        const { version } = res;
        let newVersion = "";
        const [curMajor, curMirror, curPatch, curTag, curNumber] =
          currentVersion.match(/([0-9a-z]+)(?=[-|.])?/gim);

        if (version === "Major") {
          const major = Number(curMajor) + 1;
          newVersion = `${
            tag === "latest"
              ? `${major}.0.0`
              : tag === "alpha"
              ? `${major}.0.0-alpha.1`
              : `${major}.0.0-beta.1`
          }`;
        } else if (version === "mirror") {
          const mirror = Number(curMirror) + 1;
          newVersion = `${
            tag === "latest"
              ? `${curMajor}.${mirror}.0`
              : tag === "alpha"
              ? `${curMajor}.${mirror}.0-alpha.1`
              : `${curMajor}.${mirror}.0-beta.1`
          }`;
        } else if (version === "patch") {
          const patch = Number(curPatch) + 1;
          newVersion = `${
            tag === "latest"
              ? `${curMajor}.${curMirror}.${patch}`
              : tag === "alpha"
              ? `${curMajor}.${curMirror}.${patch}-alpha.1`
              : `${curMajor}.${curMirror}.${patch}-beta.1`
          }`;
        } else {
          // 仅限 alpha 和 beta
          const newNumber = Number(curNumber) + 1;
          newVersion = `${
            tag === "alpha"
              ? `${curMajor}.${curMirror}.${curPatch}-alpha.${newNumber}`
              : `${curMajor}.${curMirror}.${curPatch}-beta.${newNumber}`
          }`;
        }
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
          type: "list",
          name: "confirm",
          message: `现有版本为：${oldVersion}，新版本为：${newVersion}，是否发布？`,
          choices: ["是", "否"],
        },
      ])
      .then((res) => {
        const { confirm } = res;
        if (confirm === "是") {
          const antdMiniPkgJsonStr = publish("antd-mini", tag, newVersion);
          publish("antd-mini-rpx", tag, newVersion);
          // 回写
          // writePkgJson(antdMiniPkgJsonStr);
          console.log("发布完成")
          resolve(newVersion);
        }
      });
  });
}

function writePkgJson(str) {
  const fs = require("fs");
  fs.writeFileSync(PKG_JSON_PATH, str, { encoding: "utf-8" });
}

// TODO
function publish(npmName, tag, version) {
  const pkgJsonStr = updatePkgJson(npmName, version);
  //   writePkgJson(pkgJsonStr)
  //   fork(`npm publish --tag=${tag}`);
  return pkgJsonStr;
}

function updatePkgJson(npmName, version) {
  const pkgJson = require(PKG_JSON_PATH);
  pkgJson.name = npmName;
  pkgJson.version = version;
  if (npmName === "antd-mini") {
    pkgJson.prepublishOnly = "npm run build:component";
  } else if (npmName === "antd-mini-rpx") {
    pkgJson.prepublishOnly = "npm run build:component:rpx";
  }
  return JSON.stringify(pkgJson, null, 2);
}

function gitSync(newVersion){
  return new Promise((resolve, reject)=>{
    inquirer
    .prompt([
      {
        type: "list",
        name: "git",
        message: `是否同步 git ？`,
        choices: ["是", "否"],
      },
    ])
    .then((res) => {
      const { git } = res;
      if (git === "是") {
        // tag + 分支
        // exec(`git tag ${newVersion}`);
        // exec(`git push origin ${newVersion}:${newVersion}`);
        console.log("git 同步完成")
      }
      resolve()
    });
  })
}

getVersion().then((versionInfo) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "tag",
        message: "请选择 npm tag",
        choices: Object.keys(versionInfo),
      },
    ])
    .then((answers) => {
      const { tag } = answers;
      const currentVersion = versionInfo[tag];

      return genNewVersion(tag, currentVersion)
        .then((newVersion) => {
          return npmPublish(currentVersion, newVersion, tag);
        })
        .then((newVersion) => {
          return gitSync(newVersion)
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
