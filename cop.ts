const fs = require('fs');
const path = require('path');

function copyAxmlFiles(srcDir, destDir) {
  // 辅助函数，用于创建目录（包括父目录）
  function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  // 辅助函数，用于递归处理目录和文件
  function copyFilesRecursively(currentSrcDir, currentDestDir) {
    // 读取目录内容
    const items = fs.readdirSync(currentSrcDir);

    items.forEach((item) => {
      const itemSrcPath = path.join(currentSrcDir, item);
      const itemDestPath = path.join(currentDestDir, item);

      // 获取文件或目录信息
      const stats = fs.statSync(itemSrcPath);

      if (stats.isDirectory()) {
        // 如果是目录，递归处理
        copyFilesRecursively(itemSrcPath, itemDestPath);
      } else if (stats.isFile() && path.extname(item) === '.axml') {
        // 如果是 .axml 文件，创建目标目录并拷贝文件
        ensureDirSync(currentDestDir);
        fs.copyFileSync(
          itemSrcPath,
          itemDestPath,
          fs.constants.COPYFILE_FICLONE
        );
        console.log(`Copied ${itemSrcPath} to ${itemDestPath}`);
      }
    });
  }

  // 开始递归处理
  copyFilesRecursively(srcDir, destDir);
}

// 定义源目录和目标目录
const sourceDirectory = path.join(__dirname, 'compiled', 'alipay', 'src');
const destinationDirectory = path.join(__dirname, 'src');

// 调用函数开始复制文件
copyAxmlFiles(sourceDirectory, destinationDirectory);

console.log('All .axml files have been copied.');
