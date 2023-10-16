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

function markdownCode(content: string) {
  return `
\`\`\`
${content}
\`\`\`
  `.trim();
}

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
你可以根据下面的 json 配置, 生成代码。

index.json 的内容为

${markdownCode(jsonConfig)}

请根据 index.json 的内容, 导入正确的组件。

举个例子, 假设 usingComponents 是这样的

\`\`\`
"usingComponents": {
  "component-name": "component_path",
}


\`\`\`


1. 如果组件在 usingComponents 中存在, 则从正确的位置导入。

比如 <component-name />  就需要写 import ComponentName from 'component_path.axml'; component 的名字需要改成驼峰。

2. 如果组件不存在，就从 tsxml 导入

比如 <view / > 就需要写 import { View } from 'tsxml';

3. 如果最外层有多个组件，需要用 <Page /> 或者 <Component / > 包裹起来。 如果index.json 配置了 component: true, 用 <Component /> 包裹起来。
  `.trim();
} catch (error) {
  // 忽略
}

let propsProps = '';

try {
  const propsContent = ofs.readFileSync(
    path.resolve(sourceDir, 'props.ts'),
    'utf-8'
  );

  propsProps = `

props.ts 的内容为：

${markdownCode(propsContent)}

你需要参考 props.ts 的内容，获取 props 的名字。

在生成的 tsx 里面添加正确的导入。 格式类似于  import { IProps } from './props';

!! 注意, IProps 只是举个例子，要写的是正确的 props 的名字。
`.trim();
} catch (error) {
  //
}

const prompt = `
你现在是一个前端专家，帮我把下面的代码转化为 tsx.

首先是一些例子

${examples}

然后是一些额外的要求

1. import-sjs 转化为 import.  比如 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'

2. 不要定义 props 类型，从 './props' 导入，举例子 import { IconProps } from 'tsxml';

${propsProps}

${extraPromo}

参考上面的配置文件, 请转换下面的代码。
`;

(async () => {
  const stat = await fs.stat(sourceDir);
  if (!stat.isDirectory()) {
    console.log(folder, 'is not a directory');
  }

  let clipboardData = '';

  const files = await fs.readdir(sourceDir);
  for (const fileName of files) {
    const src = path.resolve(sourceDir, fileName);
    if (ofs.statSync(src).isDirectory()) {
      continue;
    }
    const ext = path.extname(fileName);
    if (ext === '.axml') {
      const axmlContent = ofs.readFileSync(
        path.resolve(sourceDir, fileName),
        'utf-8'
      );
      clipboardData =
        clipboardData + `\n${prompt}\n\n${markdownCode(axmlContent)}`;
      const tsxmlPath = path.resolve(sourceDir, fileName) + '.tsx';
      ofs.writeFileSync(tsxmlPath, '');
    }
    for (const handler of handlers) {
      if (handler(path.resolve(sourceDir, fileName)) === true) {
        return false;
      }
    }
  }
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
