import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';
import { createSelectorQueryFactory } from 'tests/selector-query';

describe('rare-words-keyboard', () => {
  const my = {
    createSelectorQuery: createSelectorQueryFactory((id) => {
      return {
        '.ant-rare-words-keyboard-match_words_hidden': {
          id: '',
          dataset: {},
          left: -9999,
          right: -9962.5,
          top: -9246,
          bottom: -9226.8125,
          width: 36.5,
          height: 19.1875,
        },
        '.ant-rare-words-keyboard-match_words_inner': {
          id: '',
          dataset: {},
          left: 4,
          right: 370,
          top: 763,
          bottom: 791,
          width: 366,
          height: 28,
        },
      }[id];
    }),
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
    await new Promise((r) => setTimeout(r, 20));
    expect(instance.getData().maxDisplayNum).toBe(10);
  });

  it('rare-words-keyboard showErrorPage', async () => {
    const onError = vi.fn();
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

    await new Promise((r) => setTimeout(r, 20));
    expect(instance.getData().showErrorPage).toBe(true);
    expect(onError).toBeCalled();
  });

  it('rare-words-keyboard onClose', () => {
    const onClose = vi.fn();
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
        onClose,
      },
      my
    );
    instance.callMethod('handleHide');
    expect(onClose).toBeCalled();
  });

  it('rare-words-keyboard onChange', () => {
    const onChange = vi.fn();
    const onClose = vi.fn();
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
    expect(onChange).toBeCalledWith('䶮', fmtEvent({}));
    expect(onClose).toBeCalled();
  });

  it('rare-words-keyboard inputValue', async () => {
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      {
        ...my,
        loadFontFace: (option) => {
          option.success();
        },
      }
    );
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'Y' }));
    await sleep(0);

    expect(instance.getData().inputValue[0]).toBe('Y');
    instance.callMethod('handleDelete');
    await sleep(0);
    expect(instance.getData().inputValue[0]).toBe(undefined);
  });

  it('测试重试的情况', async () => {
    const loadFontFaceRequests = [];
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      {
        ...my,
        loadFontFace: (option) => {
          loadFontFaceRequests.push(option);
        },
      }
    );
    instance.getData().loading = true;
    instance.getData().showMoreWords = true;
    loadFontFaceRequests[loadFontFaceRequests.length - 1].fail(
      new Error('fail')
    );
    await new Promise((r) => setTimeout(r, 20));
    expect(instance.getData().loading).toBe(false);
    expect(instance.getData().showErrorPage).toBe(true);

    instance.callMethod('handleRetry');

    await new Promise((r) => setTimeout(r, 20));
    expect(instance.getData().loading).toBe(true);
    expect(instance.getData().showErrorPage).toBe(true);

    loadFontFaceRequests[loadFontFaceRequests.length - 1].success();

    await new Promise((r) => setTimeout(r, 20));
    expect(instance.getData().loading).toBe(false);
    expect(instance.getData().showErrorPage).toBe(false);
  });

  it('test hanleLookMore', async () => {
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      {
        ...my,
        loadFontFace: (option) => {
          option.success();
        },
      }
    );
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'T' }));
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'U' }));
    await sleep(20);
    instance.callMethod('hanleLookMore');
    await sleep(20);
    expect(instance.getData().showMoreWords).toBe(true);
    expect(instance.getData().displayStr).toBe('TU');
    expect(
      instance.getData().matchWordsList.map((o) => o.charId)
    ).toMatchFileSnapshot('tu.txt');
    instance.callMethod('hanleLookMore');
    await sleep(20);
    expect(instance.getData().showMoreWords).toBe(false);
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'I' }));
    await sleep(20);
    expect(instance.getData().matchWordsList.length).toEqual(4);
    await sleep(20);
    instance.callMethod('hanleLookMore');
    await sleep(20);
    expect(instance.getData().matchWordsList.length).toEqual(0);
    expect(instance.getData().inputValue).toEqual([]);
  });

  it('test handleDelete', async () => {
    const instance = getInstance(
      'RareWordsKeyboard',
      {
        visible: true,
        showMask: true,
      },
      {
        ...my,
        loadFontFace: (option) => {
          option.success();
        },
      }
    );
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'T' }));
    await sleep(20);
    instance.callMethod('handleKeyClick', fmtEvent({ 'data-value': 'T' }));
    await sleep(20);
    expect(instance.getData().inputValue).toEqual(['T', 'T']);
    instance.callMethod('handleDelete');
    await sleep(20);
    instance.callMethod('handleDelete');
    instance.callMethod('handleDelete');
    await sleep(20);
    expect(instance.getData().inputValue).toEqual([]);
  });
});
