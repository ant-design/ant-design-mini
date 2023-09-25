import fs from 'fs/promises';
import path from 'path';
import { expect, it } from 'vitest';
import { TransformContext } from './context';
import { tsxmlToAxml } from './parser';
import { alipay } from './platform';
import { parseCode } from './utils';

async function textTsXml(fixtureName: string) {
  const fixture = await fs.readFile(
    path.resolve(__dirname, `./fixtures/${fixtureName}.tsx`),
    'utf-8'
  );
  const code = fixture;
  const ast = parseCode(fixture);
  const ctx = TransformContext.create(ast, alipay, code);
  const currentAxml = await tsxmlToAxml(ctx);

  expect(currentAxml).toMatchFileSnapshot(
    `fixtures/snapshot/${fixtureName}.axml`
  );
}

it('测试解析为 axml', async () => {
  await textTsXml('index');
  await textTsXml('if');
  await textTsXml('sjs');
  await textTsXml('style');
});

it('需要支持拍平 page 和 component', async () => {
  await textTsXml('page');
  await textTsXml('component');
});
