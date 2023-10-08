import * as path from 'path';
import * as fs from 'fs/promises';
import * as ofs from 'fs';
import * as cp from 'child_process';
import * as os from 'os';

const folder = process.argv[2];

const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.resolve(rootDir, folder);

const prompt = `
1. 参考这个例子

原始代码

<text
  class="ant-icon ant-icon-{{ type }} {{ className ? className : '' }}"
  style="{{ style }}"
  onTap="{{ onTap ? 'onTap' : '' }}"
  catchTap="{{ catchTap ? 'catchTap' : '' }}" />

转换结果

import { Text } from 'tsxml';
import { IconProps } from './props';

export default ({ type, className, style, onTap, catchTap }: IconProps) => (
  <Text
    class={\`ant-icon ant-icon-\${type} \${className ? className : ''}\`}
    style={style}
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
  ></Text>
);


2. import-sjs 转化为 import.  比如 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'

2. <view a:if="{{expression}}" /> 转化为  {!!expression && <view />

3. <view a:for="{{ monthList }}" a:for-item="currentMonth"> 转化为

  monthList.map((currentMonth)=><view/>)

4. 不要定义 props 类型，从 ./props 导入

5. 返回结果请包含在 markdown 的代码块里。

你现在是一个前端专家，帮我把下面的代码转化为 tsx.

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
        const texmlPath = destination + '.tsx';
        ofs.writeFileSync(texmlPath, '');
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

  const randomDir = path.resolve(
    os.tmpdir(),
    Math.random().toString(36).slice(2)
  );
  ofs.writeFileSync(randomDir, clipboardData);
  cp.execSync(`cat ${randomDir} | pbcopy`);
  console.log('已经复制到剪切板了，可以直接粘贴到 markdown 里了');
})();

function transformExt(originalExt: string, newExt: string) {
  return (src: string, destination: string) => {
    const ext = path.extname(src);
    if (ext !== originalExt) {
      return false;
    }
    const content = ofs.readFileSync(src, 'utf-8');
    ofs.writeFileSync(
      path.basename(destination, originalExt) + newExt,
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
