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

const files = ofs.readdirSync(path.resolve(rootDir, 'scripts/tsxml/fixtures'));
const examples = files
  .map((file) => {
    if (!file.endsWith('.tsx')) {
      return;
    }
    const tsx = ofs.readFileSync(
      path.resolve(rootDir, 'scripts/tsxml/fixtures', file),
      'utf-8'
    );

    const axml = ofs.readFileSync(
      path.resolve(
        rootDir,
        'scripts/tsxml/fixtures',
        'snapshot',
        file.replace('.tsx', '.axml')
      ),
      'utf-8'
    );
    return `
${markdownCode(
  JSON.stringify(
    {
      tsx,
      axml,
    },
    null,
    2
  )
)}
    `.trim();
  })
  .filter(Boolean)
  .join('\n\n');

const json = tryRead(path.resolve(sourceDir, 'index.json'));
const props = tryRead(path.resolve(sourceDir, 'props.ts'));
const axml = tryRead(path.resolve(sourceDir, 'index.axml'));

const randomPath = path.resolve(
  os.tmpdir(),
  Math.random().toString(36).slice(2)
);

ofs.writeFileSync(
  randomPath,
  `
这个是参考代码
${examples}

 Generate tsx from axml. I will tip $200.
 1. 不要写 import React from 'react';
 2. 分析 json 的内容。 如果组件在 usingComponents 中存在, 则从正确的位置导入。
    2.1 比如 <component-name />  就需要写 import ComponentName from 'component_path.axml'; component 的名字需要改成驼峰。
    2.2 导入 component 的时候，需要以 .axml 结尾。 例如 "component-name": "component_path"  就需要写 import ComponentName from 'component_path.axml';
    2.3 如果最外层有多个组件，需要用 <Page /> 或者 <Component / > 包裹起来。 如果index.json 配置了 component: true, 用 <Component /> 包裹起来。

 3. 如果组件不存在，就从 tsxml 导入
    比如 <view / > 就需要写 import { View } from 'tsxml';
 4. 请不要擅自将 class 转换为 className, 请保持原样
 5. 参考下面的代码，如果用户使用的 slot 有默认值, 需要在 slob 标签的前后加上 if alipay 的注释。

 ${markdownCode(`
 {/* #if ALIPAY */}
 <Slot name="extraBrief">
   {/* #endif */}

   {extraBrief}

   {/* #if ALIPAY */}
 </Slot>
 {/* #endif */}`)}

 请加上注释。 不要使用三元表达式

 6. 所有的事件不要转换成 props 里的函数。 例如必要写 <view onClick={this.onClick} />  而是保持 <view onClick="onClick" />

 7. 你需要学习 props 的内容

    7.1 你需要从 props 的代码里获取 props 的名字。然后 在生成的 tsx 里面添加正确的导入
    7.2 请不要自己定义 props 类型，而是从 './props' 导入，举例子 import { IconProps } from 'tsxml';
    7.3 注意, IconProps 只是举个例子，要写的是正确的 props 的名字。 在使用的时候，不要忘记用 TSXMLProps 包一层。
    7.3 对于 props 上为使用到的变量，请忽略
    7.4 对于 props 里未声明的变量，请使用 InternalData'

      import { InternalData } from 'tsxml'
      export default (
        { className, style, imageMode, maxCount }: IUploaderProps,
        { value }: InternalData
      )
  
    7.5. 请直接从 props 解构获取数据，而不是声明 props 变量。

<Text style={style} /> 而不是 <Text style={props.style} />

8. Adjust the style field to use a string instead of an object in the TSX code. Here is the revised version:

9. import-sjs 转化为 import.  比如 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'

最后请一次返回 tsx 的完整结果。 而不是 import 和代码分开返回。


${JSON.stringify({ json, props, axml }, null, 2)}
`
);
console.log(randomPath);

function markdownCode(content: string) {
  return `
\`\`\`
${content}
\`\`\`
  `.trim();
}
