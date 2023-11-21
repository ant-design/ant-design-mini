import * as ofs from 'fs';
import * as os from 'os';
import * as path from 'path';

const folder = process.argv[2];

const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.resolve(rootDir, folder);

function tryRead(filePath: string) {
  try {
    return ofs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return '';
  }
}

const json = tryRead(path.resolve(sourceDir, 'index.json'));
const props = tryRead(path.resolve(sourceDir, 'props.ts'));
const axml = tryRead(path.resolve(sourceDir, 'index.axml'));

const randomPath = path.resolve(
  os.tmpdir(),
  Math.random().toString(36).slice(2) + '.json'
);
ofs.writeFileSync(randomPath, JSON.stringify({ json, props, axml }));
console.log(randomPath);
