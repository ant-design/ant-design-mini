import * as fs from 'fs/promises';
import * as path from 'path';
import { getFilesWithExtension } from './utils';
import { TransformCompiler } from '../compiler';

async function main({ inputDir }) {
  const inputFilesPath = await getFilesWithExtension(inputDir, '.axml');

  const transCodes = inputFilesPath.map(async (filePath) => {
    const axmlCode = await fs.readFile(filePath, 'utf-8');

    const Compiler = new TransformCompiler();
    const transCode = Compiler.compile(axmlCode);
    return { filePath, transCode };
  });

  const ouputPath = path.resolve(__dirname, `../output`);
  if ((await fs.stat(ouputPath)).isDirectory()) {
    await fs.rm(ouputPath, { recursive: true });
  }
  await fs.mkdir(ouputPath);
  transCodes.forEach(async (i) => {
    const item = await i;
    const ouputFilePath = path.resolve(
      ouputPath,
      path.relative(inputDir, item.filePath)
    );
    await fs.mkdir(path.dirname(ouputFilePath), { recursive: true });
    fs.writeFile(ouputFilePath, item.transCode);
  });
}

main({ inputDir: path.resolve(__dirname, `../fixtures`) });
