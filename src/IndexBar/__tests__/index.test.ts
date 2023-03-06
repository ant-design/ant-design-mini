import { getInstance } from '../../../tests/utils';

const my = {
    createSelectorQuery() {
      return {
        select(selector) {
          return {
            boundingClientRect() {
              return {
                exec(callback) {
                  if (selector.startsWith('#ant-alphabet-0')) {
                    if (selector.indexOf('*') < 0) {
                      callback([{
                        left: 100,
                        top: 100,
                        bottom: 200,
                        right: 200,
                        width: 100,
                        height: 100,
                      }]);
                    } else {
                      callback([{
                        left: 100,
                        top: 100,
                        bottom: 200,
                        right: 200,
                        width: 100,
                        height: 100,
                      }]);
                    } 
                  } else {
                    callback([
                      {
                        width: 20,
                        height: 20,
                      }
                    ]);
                  }
                }
              }
            }
          }
        },
        selectAll(selector) {
            return {
              boundingClientRect() {
                return {
                  exec(callback) {
                    if (selector.startsWith('.ant-indexbar-side-list')) {
                      if (selector.indexOf('*') < 0) {
                        callback([[
                            {
                                left: 100,
                                top: 100,
                                bottom: 200,
                                right: 200,
                                width: 100,
                                height: 100,
                              }
                        ]]);
                      } else {
                        callback([[{
                            left: 100,
                            top: 100,
                            bottom: 200,
                            right: 200,
                            width: 100,
                            height: 100,
                          }]]);
                      } 
                    }
                  }
                }
              }
            }
          }
      }
    },
    vibrateShort() {}
};

describe('indexbar init', () => {
    it('init height',async () => {
  
      const instance = getInstance('IndexBar', {}, my);
      await new Promise(r => setTimeout(r, 0));
      expect(instance.getData().itemHeight).toBe(100);
    });
});

describe('indexbar onChange', () => {
    it('onChange',async () => {
        const onChange = jest.fn();
        const instance = getInstance('IndexBar', {
            onChange
        }, my);
        instance.callMethod('onAlphabetClick', {}, {});
        await new Promise(r => setTimeout(r, 0));
        expect(onChange).toBeCalled();
    });
});
