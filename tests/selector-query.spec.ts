import { expect, it } from 'vitest';
import { SelectorQuery } from './selector-query';

it('测试 SelectorQuery', async () => {
  const selector = SelectorQuery.create((select, index) => {
    return { select, index };
  });

  selector
    .select('b')
    .boundingClientRect()
    .exec((res) => {
      expect(res).toMatchInlineSnapshot(`
        [
          {
            "index": 0,
            "select": "b",
          },
        ]
      `);
    });
});
