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

导入 component 的时候，需要以 .axml 结尾。 例如 "component-name": "component_path"  就需要写 import ComponentName from 'component_path.axml';

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

你需要参考 props.ts 的内容，获取 props 的名字。然后 在生成的 tsx 里面添加正确的导入
不要自己定义 props 类型，而是从 './props' 导入，举例子 import { IconProps } from 'tsxml';

!! 注意, IconProps 只是举个例子，要写的是正确的 props 的名字。 在使用的时候，不要忘记用 TSXMLProps 包一层。
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

2. 参考下面的代码，如果用户使用的 slot 有默认值, 需要在 slob 标签的前后加上 if alipay 的注释。

3. 所有的事件不要转换成 props 里的函数。 例如必要写 <view onClick={this.onClick} />  而是保持 <view onClick="onClick" />

${markdownCode(`
{/* #if ALIPAY */}
<Slot name="extraBrief">
  {/* #endif */}

  {extraBrief}

  {/* #if ALIPAY */}
</Slot>
{/* #endif */}`)}

请加上注释。 不要使用三元表达式

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
  let axmlContent = '';
  for (const fileName of files) {
    const src = path.resolve(sourceDir, fileName);
    if (ofs.statSync(src).isDirectory()) {
      continue;
    }
    const ext = path.extname(fileName);
    if (ext === '.axml') {
      axmlContent = ofs.readFileSync(
        path.resolve(sourceDir, fileName),
        'utf-8'
      );
      clipboardData =
        clipboardData + `\n${prompt}\n\n${markdownCode(axmlContent)}`;
      const tsxmlPath = path.resolve(sourceDir, fileName) + '.tsx';
      ofs.writeFileSync(tsxmlPath, '');
    }
    for (const handler of handlers) {
      handler(path.resolve(sourceDir, fileName));
    }
  }
  if (os.platform() === 'darwin') {
    const randomDir = path.resolve(
      os.tmpdir(),
      Math.random().toString(36).slice(2)
    );
    ofs.writeFileSync(randomDir, clipboardData);
    const randomJSon = randomDir + '.json';
    ofs.writeFileSync(randomJSon, JSON.stringify({ text: clipboardData }));
    console.log(randomDir);
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
