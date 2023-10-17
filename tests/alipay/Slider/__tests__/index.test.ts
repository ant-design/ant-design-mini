import { expect, it, vi } from 'vitest';
import { getInstance, sleep } from 'tests/utils';

function testSlider(props) {
  const my = {
    canIUse() {
      return true;
    },
  };
  const instance = getInstance('Slider', props, my);
  return instance;
}

it('受控模式', async () => {
  const instance = testSlider({
    checked: false,
    min: 2,
    max: 3,
    step: 0.5,
    showTicks: true,
  });
  await sleep(20);
  expect(instance.getData().tickList).toMatchInlineSnapshot(`
    [
      {
        "left": 0,
        "value": 2,
      },
      {
        "left": 50,
        "value": 2.5,
      },
      {
        "left": 100,
        "value": 3,
      },
    ]
  `);
});
