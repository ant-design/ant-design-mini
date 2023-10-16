import { getInstance } from '../../../../../tests/utils';
import { describe, it, expect } from 'vitest';

describe('popover', () => {
  it('popover top', async () => {
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
    const instance = getInstance(
      'Popover',
      {
        visible: true,
      },
      my
    );
    await new Promise((r) => setTimeout(r, 0));
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
      await new Promise((r) => setTimeout(r, 0));
      expect(instance.getData().adjustedPlacement).toBe(placement);
    }
  });
});
