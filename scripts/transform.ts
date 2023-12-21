import * as ofs from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { copyDirSourceCode } from './copy';

const folder = process.argv[2];

const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.resolve(rootDir, folder);

(async () => {
  copyDirSourceCode(sourceDir);
  const stat = await fs.stat(sourceDir);
  if (!stat.isDirectory()) {
    console.log(folder, 'is not a directory');
  }

  const files = await fs.readdir(sourceDir);
  for (const fileName of files) {
    const src = path.resolve(sourceDir, fileName);
    if (ofs.statSync(src).isDirectory()) {
      continue;
    }
    const ext = path.extname(fileName);
    if (ext === '.axml') {
      const tsxmlPath = path.resolve(sourceDir, fileName) + '.tsx';
      ofs.writeFileSync(tsxmlPath, '');
    }
    for (const handler of handlers) {
      handler(path.resolve(sourceDir, fileName));
    }
  }
})();

function transformExt(originalExt: string, newExt: string) {
  return (src: string) => {
    const ext = path.extname(src);
    if (ext !== originalExt) {
      return false;
    }
    const content = ofs.readFileSync(src, 'utf-8');
    ofs.unlinkSync(src);
    ofs.writeFileSync(
      path.resolve(path.dirname(src), path.basename(src, ext) + newExt),
      content
    );
    return true;
  };
}

const handlers = [
  transformExt('.js', '.ts'),
  transformExt('.sjs', '.sjs.ts'),
  transformExt('.acss', '.less'),
];
