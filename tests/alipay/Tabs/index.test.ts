import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { createSelectorQueryFactory } from 'tests/selector-query';

describe('Tabs', () => {
  let selectName = '';

  const mockCreateSelectorQuery = {
    select: vi.fn((selector) => {
      selectName = selector;
      return mockCreateSelectorQuery;
    }),
    boundingClientRect: vi.fn(() => mockCreateSelectorQuery),
    exec: vi.fn((callback) => {
      const rect = {
        width: 300,
        height: 300,
        top: 300,
        right: 300,
        bottom: 300,
        left: 300,
      };
      const results = {
        '#ant-tabs-bar-scroll-view-1': {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        '#ant-tabs-bar-item-1-2': {
          width: 900,
          height: 900,
          top: 900,
          right: 900,
          bottom: 900,
          left: 900,
        },
      };
      const mockedResult = results[selectName] || rect;
      callback([mockedResult]);
    }),
  };

  const my = {
    canIUse() {
      return false;
    },
    createSelectorQuery: vi.fn(() => mockCreateSelectorQuery),
  };
  const items = [
    {
      title: 'tab 1',
      content: 'tab 1 content',
    },
    {
      title: 'tab 2',
      content: 'tab 2 content',
    },
    {
      title: 'tab 3',
      content: 'tab 3 content',
    },
  ];

  it('onChange', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Tabs',
      {
        onChange,
        items,
      },
      my
    );

    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    await sleep(20);
    expect(instance.getData().mixin.value).toBe(2);
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledTimes(1);
  });

  it('control mode', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Tabs',
      {
        onChange,
        items,
        current: 1,
      },
      my
    );

    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    await sleep(20);
    expect(instance.getData().mixin.value).toBe(1);
  });

  it('horizontal scroll', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Tabs',
      {
        onChange,
        items,
      },
      my
    );

    instance.callMethod('onScroll', { detail: { scrollLeft: 100 } });
    await sleep(20);
    expect(instance.getData().leftFade).toBe(true);
    await sleep(100);
    expect(instance.getData().scrollLeft).toBe(400);

    instance.setProps({
      items: [
        ...items,
        {
          title: 'tab 4',
          content: 'tab 4 content',
        },
      ],
    });
    await sleep(20);
    expect(instance.getData().scrollLeft - 400 < 1).toBe(true);
  });

  it('vertical scroll', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Tabs',
      {
        onChange,
        items,
        direction: 'vertical',
      },
      my
    );

    instance.callMethod('onScroll', { detail: { scrollTop: 100 } });
    await sleep(100);
    expect(instance.getData().scrollTop).toBe(400);

    instance.setProps({
      items: [
        ...items,
        {
          title: 'tab 4',
          content: 'tab 4 content',
        },
      ],
    });
    await sleep(20);
    expect(instance.getData().scrollTop - 400 < 1).toBe(true);
  });

  it('scroll', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Tabs',
      {
        onChange,
        items,
      },
      {
        ...my,
        createSelectorQuery: createSelectorQueryFactory(() => {
          return null;
        }),
      }
    );

    instance.callMethod('onScroll', { detail: { scrollTop: 100 } });
    await sleep(200);
    // 如果正常运行，就说明没有问题
  });
});
