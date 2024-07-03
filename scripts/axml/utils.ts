import * as fs from 'fs/promises';
import * as path from 'path';

export async function getFilesWithExtension(folderPath, extension) {
  const filePaths = [];

  async function traverseFolder(folder) {
    try {
      const files = await fs.readdir(folder);
      for (const file of files) {
        const filePath = path.join(folder, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
          await traverseFolder(filePath);
        } else if (path.extname(filePath) === extension) {
          filePaths.push(filePath);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  await traverseFolder(folderPath);
  return filePaths;
}
