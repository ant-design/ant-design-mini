import { expect, it } from 'vitest';
import { transformTsxJS } from './index';

it('test', async () => {
  const code = `
  function a() {}

  export default {
    a
  }
  `;
  expect(await transformTsxJS(code, { forceCommonjs: true }))
    .toMatchInlineSnapshot(`
      "function a() {}
      module.exports = {
        a: a
      };"
    `);

  expect(await transformTsxJS(code)).toMatchInlineSnapshot(`
    "function a() {}
    export default {
      a: a
    };"
  `);
});
