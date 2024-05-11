import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('popover', () => {
  const my = {
    canIUse() {
      return false;
    },
    getSystemInfo({ success }) {
      success({
        windowWidth: 600,
        windowHeight: 1000,
      });
    },
    createSelectorQuery() {
      return {
        select(selector) {
          return {
            boundingClientRect() {
              return {
                exec(callback) {
                  if (selector.startsWith('#ant-popover-children-')) {
                    if (selector.indexOf('*') < 0) {
                      callback([
                        {
                          left: 100,
                          top: 100,
                          bottom: 200,
                          right: 200,
                          width: 100,
                          height: 100,
                        },
                      ]);
                    } else {
                      callback([
                        {
                          left: 100,
                          top: 100,
                          bottom: 200,
                          right: 200,
                          width: 100,
                          height: 100,
                        },
                      ]);
                    }
                  } else {
                    callback([
                      {
                        width: 20,
                        height: 20,
                      },
                    ]);
                  }
                },
              };
            },
          };
        },
      };
    },
  };

  it('popover top', async () => {
    const instance = getInstance(
      'Popover',
      {
        defaultVisible: true,
      },
      my
    );
    await sleep(50);
    expect(instance.getData().adjustedPlacement).toBe('top');
    const placements = [
      'bottom',
      'left',
      'right',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
      'left-top',
      'left-bottom',
      'right-top',
      'right-bottom',
    ];
    for (let i = 0; i < placements.length; i++) {
      const placement = placements[i];
      instance.setProps({
        placement,
      });
      await sleep(50);
      expect(instance.getData().adjustedPlacement).toBe(placement);
    }
  });

  it('visible 优先级大于 defaultVisible', async () => {
    const instance = getInstance(
      'Popover',
      {
        visible: false,
        defaultVisible: true,
      },
      my
    );
    await sleep(20);
    expect(instance.getData().adjustedPlacement).toBe('');
  });

  describe('trigger', () => {
    it('测试受控模式', async () => {
      const mock = vi.fn();
      const instance = getInstance(
        'Popover',
        {
          visible: false,
          onVisibleChange: mock,
        },
        my
      );
      await sleep(20);
      expect(instance.getData().adjustedPlacement).toBe('');
      instance.callMethod('onVisibleChange', { target: {} });
      await sleep(20);
      expect(instance.getData().mixin.value).toEqual(false);
      expect(mock.mock.calls.length).toBe(1);
      expect(mock.mock.calls[0][0]).toBe(true);
      instance.setProps({ visible: true });
      await sleep(20);
      expect(instance.getData().mixin.value).toEqual(true);
    });

    it('测试非受控模式', async () => {
      const mock = vi.fn();
      const instance = getInstance(
        'Popover',
        {
          defaultVisible: true,
          onVisibleChange: mock,
        },
        my
      );
      await sleep(20);
      expect(instance.getData().mixin.value).toEqual(true);
      instance.callMethod('onVisibleChange', { target: {} });
      await sleep(20);
      expect(instance.getData().mixin.value).toEqual(false);
      expect(mock.mock.calls.length).toBe(1);
      expect(mock.mock.calls[0][0]).toBe(false);
    });
  });
});
