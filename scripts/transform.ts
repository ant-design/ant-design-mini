import * as path from 'path';
import * as fs from 'fs/promises';
import * as ofs from 'fs';
import * as cp from 'child_process';
import * as os from 'os';

const folder = process.argv[2];

const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.resolve(rootDir, folder);
const tsxmlFixtureRoot = path.resolve(rootDir, 'scripts/tsxml/fixtures');
const files = ofs.readdirSync(path.resolve(rootDir, 'scripts/tsxml/fixtures'));

const examples = files
  .map((file) => {
    if (!file.endsWith('.tsx')) {
      return;
    }
    const content = ofs.readFileSync(
      path.resolve(tsxmlFixtureRoot, file),
      'utf-8'
    );

    const axml = ofs.readFileSync(
      path.resolve(tsxmlFixtureRoot, 'snapshot', file.replace('.tsx', '.axml'))
    );
    return `
原始的代码
\`\`\`xml
${axml}
\`\`\`

转换后的代码

\`\`\`tsx
${content}
\`\`\`
    `.trim();
  })
  .filter(Boolean)
  .join('\n\n');

let extraPromo = '';

try {
  const jsonConfig = ofs.readFileSync(
    path.resolve(sourceDir, 'index.json'),
    'utf-8'
  );
  extraPromo = `
你可以参考下面的 json 配置， 还有一些额外的要求

\`\`\`
${jsonConfig}
\`\`\`

1. 根据上方 usingComponents 的内容, 获取组件实际导入的位置, 从对应路径导入

举个例子, 假设 usingComponents 是这样的

\`\`\`
"usingComponents": {
  "ant-button": "../../../src/Button/index",
  "container": "../../../src/Container/index"
}
\`\`\`

那么 tsx 的转换结果应该是这样的

\`\`\`
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
\`\`\`

2. 如果最外层有多个组件，用 <Page /> 或者 <Component / > 包裹起来 , 如果配置了 component: true, 用 <Component /> 包裹起来。
  `.trim();
} catch (error) {
  // 忽略
}

const prompt = `
你现在是一个前端专家，帮我把下面的代码转化为 tsx.

首先是一些例子

${examples}

然后是一些额外的要求

1. import-sjs 转化为 import.  比如 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'

2. 不要定义 props 类型，从 './props' 导入，举例子 import { IconProps } from 'tsxml';

3. 返回结果请包含在 markdown 的代码块里。

${extraPromo}

请转换下面的代码
`;

(async () => {
  const stat = await fs.stat(sourceDir);
  if (!stat.isDirectory()) {
    console.log(folder, 'is not a directory');
  }

  let clipboardData = '';

  const target = path.resolve(rootDir, 'tsxml', folder);
  await fs.rm(target, { recursive: true, force: true });
  await fs.mkdir(target, { recursive: true });
  await fs.cp(sourceDir, target, {
    recursive: true,
    filter: (src, destination) => {
      const basename = path.basename(src);
      if (basename === '__tests__') {
        return false;
      }
      const ext = path.extname(src);
      if (ext === '.axml') {
        const axmlContent = ofs.readFileSync(src, 'utf-8');
        clipboardData = clipboardData + `\n${prompt}\n\n${axmlContent}`;
        const tsxmlPath = destination + '.tsx';
        ofs.writeFileSync(tsxmlPath, '');
        return false;
      }
      for (const handler of handlers) {
        if (handler(src, destination) === true) {
          return false;
        }
      }
      return true;
    },
  });
  if (os.platform() === 'darwin') {
    const randomDir = path.resolve(
      os.tmpdir(),
      Math.random().toString(36).slice(2)
    );
    ofs.writeFileSync(randomDir, clipboardData);
    cp.execSync(`cat ${randomDir} | pbcopy`);
    console.log('已经复制到剪切板了，可以直接粘贴到 markdown 里了');
  }
})();

function transformExt(originalExt: string, newExt: string) {
  return (src: string, destination: string) => {
    const ext = path.extname(src);
    if (ext !== originalExt) {
      return false;
    }
    const content = ofs.readFileSync(src, 'utf-8');
    ofs.unlinkSync(src);
    ofs.writeFileSync(
      path.resolve(path.dirname(destination), path.basename(src, ext) + newExt),
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
