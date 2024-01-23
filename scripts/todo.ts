import { join } from 'path';
import * as fs from 'fs';

async function check() {
  const filesList = await fs.readdirSync('src');
  const pagesList = await fs.readdirSync('demo/pages');

  const { src, pages } = JSON.parse(
    await fs.readFileSync('config/wechat.json', 'utf-8')
  );

  const doneSet = new Set(
    ['.umi-production', '.umi', 'tsxml', 'IndexBar']
      .concat(src)
      .concat(pages.map((o) => o.replace('pages/', '')))
  );

  console.log('------pages-------');
  pagesList.forEach((e) => {
    if (!doneSet.has(e)) {
      console.log(e);
    }
  });

  console.log('------files-------');
  filesList.forEach((e) => {
    if (!doneSet.has(e)) {
      const lines = fs
        .readFileSync(join(`src/${e}/index.ts`), 'utf8')
        .split('\n').length;
      console.log(e, lines);
    }
  });
}

check();
