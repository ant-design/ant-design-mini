import { IRateProps } from 'compiled-alipay/Rate/props';
import { createSelectorQueryFactory } from 'tests/selector-query';
import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';

export function testRate(props: Partial<IRateProps>) {
  const onChange = vi.fn();
  const selectorMock = vi.fn().mockImplementation(async () => {
    return {
      left: 0,
      width: 116,
    };
  });

  const my = {
    canIUse() {
      return true;
    },
    createSelectorQuery: createSelectorQueryFactory(selectorMock),
  };
  const instance = getInstance(
    'Rate',
    {
      ...(props ?? {}),
      onChange,
    },
    my
  );

  async function startTap(value: number) {
    instance.callMethod('handleStarTap', {
      detail: {
        clientX: value,
      },
    });
    await sleep(20);
  }
  async function starMove(value: number) {
    instance.callMethod('handleStarMove', {
      touches: [
        {
          clientX: value,
        },
      ],
    });
    await sleep(20);
  }
  async function starMoveEnd() {
    instance.callMethod('handleStarMoveEnd', {});
    await sleep(20);
  }
  return {
    instance,
    selectorMock,
    onChange,
    startTap,
    starMove,
    starMoveEnd,
  };
}
