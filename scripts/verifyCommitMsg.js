/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const REG = /^(revert: )?(feat|fix|docs|style|refactor|perf|workflow|build|ci|chore|types|release)(\(.+\))?: .{1,60}/;
const  MergeCommitREG = /^Merge remote-tracking branch.+/;
const commitMsg = require('fs').readFileSync(process.env.GIT_PARAMS, 'utf-8').trim();
const chalk = require('chalk');

if (!REG.test(commitMsg) && !MergeCommitREG.test(commitMsg)) {
  console.error(`${chalk.bgRed.white(' ERROR ')}`, chalk.red('invalid commit message:'), commitMsg);
  console.error('Proper commit message format is required for automated changelog generation.');
  console.error(chalk.green('Please see https://opendocs.alipay.com/cloud/08jm0h for more'));
  process.exit(1);
}
