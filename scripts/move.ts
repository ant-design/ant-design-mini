import * as path from 'path';
import * as fs from 'fs/promises';
import * as ofs from 'fs';
import * as cp from 'child_process';
import * as os from 'os';

const folder = process.argv[2];

const rootDir = path.resolve(__dirname, '..');

const sourceDir = path.resolve(rootDir, folder);

const prompt = `
帮我把下面的代码转化为 tsx.

1. import-sjs 转化为 import.

举例子
1.1。 <import-sjs from="./scroll.sjs" name="scroll"></import-sjs>  转化为  import scroll from './scroll.sjs'

2. <view a:if="{{expression}}" /> 转化为  {!!expression && <view />

3. <view a:for="{{ monthList }}" a:for-item="currentMonth"> 转化为

  monthList.map((currentMonth)=><view/>)

4. 返回的 tsx 是通过 export default 导出。

类似于 export default ({className})=><view></view>

请把代码里用到的变量都放到 props 里。 注意， export default 里不要用 return.  而是直接返回 ()=><view/>

返回结果请包含在 markdown 的代码块里。
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
      if (ext === '.sjs') {
        const sjsContent = ofs.readFileSync(src, 'utf-8');
        const sjsTs = destination + '.ts';
        ofs.writeFileSync(sjsTs, sjsContent);
        return false;
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
