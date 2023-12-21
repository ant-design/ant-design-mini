import * as ofs from 'fs';
import * as os from 'os';
import * as path from 'path';

const rootDir = path.resolve(__dirname, '..');

export function copyDirSourceCode(sourceDir: string) {
  console.log(sourceDir);
  const files = ofs.readdirSync(
    path.resolve(rootDir, 'scripts/tsxml/fixtures')
  );
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
转换例子:
axml
${markdownCode(axml)}
tsx
${markdownCode(tsx)}
  `.trim();
    })
    .filter(Boolean)
    .join('\n\n');

  const json = tryRead(path.resolve(sourceDir, 'index.json'));
  const props = tryRead(path.resolve(sourceDir, 'props.ts'));
  const axml = tryRead(path.resolve(sourceDir, 'index.axml'));

  const isComponent = !!props;

  const randomPath = path.resolve(
    os.tmpdir(),
    Math.random().toString(36).slice(2)
  );

  ofs.writeFileSync(
    randomPath,
    `
  ${examples}

请参考上面的例子，学习 axml 是如何转换为 tsx 的。
然后将我写的 axml 转换为 tsx。

下面是一些额外的要求, 请仔细阅读。

  1. 不要写 import React from 'react';
  2. 分析 json 的内容。 如果组件在 usingComponents 中存在, 则从正确的位置导入。

    2.1 比如 <component-name />  就需要写 import ComponentName from 'component_path.axml'; component 的名字需要改成驼峰。
    2.2 导入 component 的时候，需要以 .axml 结尾。 例如 "component-name": "component_path"  就需要写 import ComponentName from 'component_path.axml';

  3. 如果组件不存在，就从 tsxml 导入, 比如 <view / > 就需要写 import { View } from 'tsxml';
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

   6. 所有的事件处理保持字符串, 例如 <view onClick="onClick" />.  ref 也是一样 <view ref="handleRef" />

  ${
    isComponent
      ? `7. 你需要学习 props 的内容

      7.1 你需要从 props 的代码里获取 props 的名字。然后 在生成的 tsx 里面添加正确的导入
      7.2 请不要自己定义 props 类型，而是从 './props' 导入，举例子 import { IconProps } from 'tsxml';
      7.3 注意, IconProps 只是举个例子，要写的是正确的 props 的名字。 在使用的时候，不要忘记用 TSXMLProps 包一层。
      7.3 对于 props 上为使用到的变量，请忽略
      7.4 对于 props 里未声明的变量，请使用 InternalData

        import { InternalData } from 'tsxml'
        export default (
          { className, style, imageMode, maxCount }: IUploaderProps,
          { value }: InternalData
        )
      7.5. 请直接从 props 解构获取数据，而不是声明 props 变量。

        <Text style={style} /> 而不是 <Text style={props.style} />
        `
      : ''
  }
  8. Adjust the style field to use a string instead of an object in the TSX code. For example, style="color: red; font-size: 12px;" instead of style={{ color: 'red', fontSize: '12px' }}
  9. import-sjs 转化为 import.  比如 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'
  10. 组件的 prop 字段。如果在 axml 中使用了 class , 在转换后请保持 class。 而不是转换为 className
  11. 组件的 style 字段，请不要使用对象。 请使用字符串。 例如 style="color: red; font-size: 12px;"
  12. 组件最外层需要用 ${isComponent ? `<Component / >` : `<Page />`} 。
  13. 输出结果里不要有 a:if

  Take a deep breath and work on this problem step-by-step.
  Finally, please return the complete result of tsx at one time. Instead of returning import and code separately.
  ${JSON.stringify({ json, props, axml }, null, 2)}
  `
  );
  console.log(randomPath);
}

function tryRead(filePath: string) {
  try {
    return ofs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return '';
  }
}

function markdownCode(content: string) {
  return `
\`\`\`
${content}
\`\`\`
  `.trim();
}
