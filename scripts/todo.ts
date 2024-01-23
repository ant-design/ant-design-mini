import * as fs from 'fs';

async function check() {
  const files = await fs.readdirSync('src');

  const { src } = JSON.parse(
    await fs.readFileSync('config/wechat.json', 'utf-8')
  );

  const doneSet = new Set(['.umi-production', '.umi', 'tsxml'].concat(src));

  files.forEach((e) => {
    if (!doneSet.has(e)) {
      console.log(e);
    }
  });
}

check();
