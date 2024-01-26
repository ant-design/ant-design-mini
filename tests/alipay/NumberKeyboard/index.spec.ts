import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { INumberKeyboardProps } from '../../../src/NumberKeyboard/props';

function createNumberKeyboard(
  props: Partial<INumberKeyboardProps>,
  myOverride?: Record<string, any>
) {
  const canIUse = vi.fn().mockImplementation(() => true);
  const onChange = vi.fn();
  const onClose = vi.fn();
  const vibrateShort = vi.fn();
  const my = {
    canIUse(args: string) {
      return canIUse(args);
    },
    vibrateShort,
    ...myOverride,
  };
  const instance = getInstance(
    'NumberKeyboard',
    {
      onChange,
      onClose,
      ...props,
    },
    my
  );

  async function clickKey(key: string) {
    instance.callMethod('tapButton', {
      currentTarget: {
        dataset: {
          key,
        },
      },
    });
    await sleep(20);
  }

  return { onClose, instance, canIUse, vibrateShort, onChange, clickKey };
}

it('默认的 number keyboard', () => {
  const { instance } = createNumberKeyboard({});
  expect(instance.getData()).toEqual({
    'numArr': [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    'randomArr': [],
  });
});

it('测试点击', async () => {
  const { instance, clickKey, onChange, onClose } = createNumberKeyboard({});
  expect(instance.getData()).toEqual({
    'numArr': [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    'randomArr': [],
  });
  onChange.mockImplementation((v) => {
    instance.setProps({
      value: v,
    });
  });
  await clickKey('del');
  expect(onChange.mock.lastCall[0]).toEqual('');
  await clickKey('1');
  expect(onChange.mock.lastCall[0]).toEqual('1');
  await clickKey('5');
  expect(onChange.mock.lastCall[0]).toEqual('15');
  await clickKey('del');
  await clickKey('del');
  await clickKey('del');
  expect(onChange.mock.lastCall[0]).toEqual('');
  expect(onClose).toBeCalledTimes(0);
  await clickKey('enter');
  expect(onClose).toBeCalledTimes(2);
});

it('测试点击', async () => {
  const { clickKey, onClose, vibrateShort } = createNumberKeyboard({
    confirmDisabled: true,
  });

  expect(onClose).toBeCalledTimes(0);
  expect(vibrateShort).toBeCalledTimes(0);
  await clickKey('enter');
  expect(onClose).toBeCalledTimes(0);
  expect(vibrateShort).toBeCalledTimes(0);
});

it('测试点击 vibrate', async () => {
  const { clickKey, vibrateShort } = createNumberKeyboard({
    confirmDisabled: true,
    vibrate: true,
  });

  expect(vibrateShort).toBeCalledTimes(0);
  await clickKey('enter');
  expect(vibrateShort).toBeCalledTimes(1);
  await clickKey('enter');
  expect(vibrateShort).toBeCalledTimes(2);
});

describe('random', () => {
  it('测试点击', async () => {
    const { instance } = createNumberKeyboard({
      random: true,
    });
    expect(instance.getData().randomArr.length).toBe(3);
    const previousRandom = JSON.parse(
      JSON.stringify(instance.getData().randomArr)
    );
    instance.callMethod('catchAppearModal');
    await sleep(20);
    expect(previousRandom).not.toEqual(instance.getData().randomArr);
    expect(instance.getData().randomArr.length).toBe(3);
  });
});
