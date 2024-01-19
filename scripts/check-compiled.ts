/* eslint-disable no-console */
import { exec } from 'child_process';
import { join } from 'path';

// 设置你的compiled目录的相对路径
const compiledDir = join(__dirname, '../compiled');

// 执行git status命令
exec(
  'git status --porcelain',
  { cwd: compiledDir },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`错误信息: ${stderr}`);
      return;
    }

    // 分析git status的输出
    if (stdout.trim() === '') {
      console.log('所有文件都已添加到git。');
    } else {
      console.log('以下文件未添加到git或有变动：');
      // 输出未跟踪或变动的文件列表
      const lines = stdout.split('\n');
      lines.forEach((line) => {
        if (line) {
          // 输出文件状态和名称
          const [status, file] = line.trim().split(/\s+/);
          console.log(`${status} ${file}`);
        }
      });
      process.exit(1);
    }
  }
);
