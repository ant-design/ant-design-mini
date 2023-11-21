import * as fs from 'fs';
import { globSync } from 'glob';
import * as path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname, '../');

function readFile(filePath) {
  let res = '';
  try {
    res = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    // 忽略
  }
  return res;
}

function parseSrc(fileName, sourceRoot, targetRoot) {
  const tsx = fs.readFileSync(path.resolve(sourceRoot, fileName), 'utf-8');
  const props = readFile(
    path.resolve(sourceRoot, path.dirname(fileName), 'props.ts')
  );
  const json = readFile(
    path.resolve(sourceRoot, path.dirname(fileName), 'index.json')
  );
  const axml = fs.readFileSync(
    path.resolve(targetRoot, fileName.replace('.tsx', '')),
    'utf-8'
  );
  return {
    prompt: 'transform axml to tsx',
    input: {
      props,
      axml,
      json,
    },
    output: tsx,
  };
}

const run = async () => {
  const componentRoot = path.resolve(rootDir, './src');
  const alipayComponentRoot = path.resolve(rootDir, 'compiled/alipay/src');
  const componentFiles = globSync('**/*.axml.tsx', {
    cwd: componentRoot,
  });
  const components = await Promise.all(
    componentFiles.map((fileName) =>
      parseSrc(fileName, componentRoot, alipayComponentRoot)
    )
  );

  const demoRoot = path.resolve(rootDir, './demo');
  const alipayDemoRoot = path.resolve(rootDir, 'compiled/alipay/demo');
  const demoFiles = globSync('**/*.axml.tsx', {
    cwd: demoRoot,
  });
  const demos = await Promise.all(
    demoFiles.map((fileName) => parseSrc(fileName, demoRoot, alipayDemoRoot))
  );
  await fs.writeFileSync(
    path.resolve(rootDir, 'knowledge.json'),
    JSON.stringify(components.concat(demos), null, 2)
  );
};

run();
