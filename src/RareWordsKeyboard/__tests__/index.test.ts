import fmtEvent from '../../_util/fmtEvent';
import { getInstance } from '../../../tests/utils';

describe('rare-words-keyboard', () => {
  const my = {
    createSelectorQuery() {
      return {
        select() {
          return {
            boundingClientRect() {
              return {
                select() {
                  return {
                    boundingClientRect() {
                      return {
                        exec(callback) {
                          callback([
                            {
                              id: '',
                              dataset: {},
                              left: -9999,
                              right: -9962.5,
                              top: -9246,
                              bottom: -9226.8125,
                              width: 36.5,
                              height: 19.1875,
                            },
                            {
                              id: '',
                              dataset: {},
                              left: 4,
                              right: 370,
                              top: 763,
                              bottom: 791,
                              width: 366,
                              height: 28,
                            },
                          ]);
                        },
                      };
                    },
                  };
                },
              };
            },
          };
        },
      };
    },
  };
  it('rare-words-keyboard maxDisplayNum', async () => {
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      my
    );
    await new Promise((r) => setTimeout(r, 0));
    expect(instance.getData().maxDisplayNum).toBe(10);
  });

  it('rare-words-keyboard showErrorPage', async () => {
    const onError = jest.fn();
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
        onError,
      },
      {
        ...my,
        loadFontFace() {
          throw new Error('not support');
        },
      }
    );

    await new Promise((r) => setTimeout(r, 0));
    expect(instance.getData().showErrorPage).toBe(true);
    expect(onError).toBeCalled();
  });

  it('rare-words-keyboard onClose', () => {
    const onClose = jest.fn();
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
        onClose,
      },
      my
    );
    instance.callMethod('onHide');
    expect(onClose).toBeCalled();
  });

  it('rare-words-keyboard onChange', () => {
    const onChange = jest.fn();
    const onClose = jest.fn();
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
        onChange,
        onClose,
      },
      my
    );
    instance.callMethod('handleWordClick', fmtEvent({ 'data-value': '䶮' }));
    expect(onChange).toBeCalledWith('䶮');
    expect(onClose).toBeCalled();
  });

  it('rare-words-keyboard inputValue', async () => {
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      my
    );
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'Y' }));
    await new Promise((r) => setTimeout(r, 0));
    expect(instance.getData().inputValue[0]).toBe('Y');
    instance.callMethod('handleDelete');
    await new Promise((r) => setTimeout(r, 0));
    expect(instance.getData().inputValue[0]).toBe(undefined);
  });
});
