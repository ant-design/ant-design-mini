const inquirer = require("inquirer");
const {
  getVersion,
  genNewVersion,
  npmPublish,
  gitSync
} = require("./publishUtils")

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
}).catch(err=>{
  console.log(err)
})
