import * as fs from 'fs/promises';
import * as path from 'path';
import { expect, it } from 'vitest';
import { TransformContext } from './context';
import { tsxmlToAxml } from './parser';
import { alipay, wechat } from './platform';
import { parseCode } from './utils';

async function textTsXml(fixtureName: string) {
  const fixture = await fs.readFile(
    path.resolve(__dirname, `./fixtures/${fixtureName}.tsx`),
    'utf-8'
  );
  const code = fixture;
  const ast = parseCode(fixture);
  const ctx = TransformContext.create(ast, alipay, code);

  expect(await tsxmlToAxml(ctx)).toMatchFileSnapshot(
    `fixtures/snapshot/${fixtureName}.axml`
  );
  expect(
    await tsxmlToAxml(TransformContext.create(ast, wechat, code))
  ).toMatchFileSnapshot(`fixtures/snapshot/${fixtureName}.wxml`);
}

it('index', async () => {
  await textTsXml('index');
});

it('if', async () => {
  await textTsXml('if');
});

it('测试解析为 axml', async () => {
  await textTsXml('sjs');
  await textTsXml('style');
});

it('需要支持拍平 page 和 component', async () => {
  await textTsXml('page');
  await textTsXml('component');
});

it('测试事件', async () => {
  await textTsXml('event');
});

it('template', async () => {
  await textTsXml('template');
});

it('command', async () => {
  await textTsXml('command');
});
