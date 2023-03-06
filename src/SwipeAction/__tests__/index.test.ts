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
      }
    },
    SDKVersion: '2.0.1'
};

describe('swipeAction onTouchStart', () => {
    it('onTouchStart', () => {
        const onSwipeStart = jest.fn();
        const instance = getInstance('SwipeAction', {
            onSwipeStart
        }, my);
        instance.callMethod('onTouchStart');
        expect(onSwipeStart).toBeCalled();
    });
});

describe('swipeAction onTouchCancel', () => {
    it('onTouchCancel',async () => {
        const onSwipeEnd = jest.fn();
        const instance = getInstance('SwipeAction', {
            onSwipeEnd
        }, my);
        instance.callMethod('onSwipeLeft', true);
        await new Promise(r => setTimeout(r, 200));
        expect(onSwipeEnd).toBeCalled();
    });
});

describe('swipeAction onButtonTap', () => {
    it('onButtonTap', () => {
        const onButtonTap = jest.fn();
        const instance = getInstance('SwipeAction', {
            onButtonTap
        }, my);
        instance.callMethod('onItemTap', { target: { dataset: { item: { itemL: 'l', idx: 1, item: {  } } } } });
        expect(onButtonTap).toBeCalled();
    });
});

