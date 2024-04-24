import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { INoticeBarProps } from '../../../src/NoticeBar/props';
import { SelectorQuery } from '../../selector-query';

const createNoticeBar = (options?: Partial<INoticeBarProps>) => {
  const handleQuery = vi.fn();
  const selector = SelectorQuery.create(handleQuery);

  const my = {
    canIUse() {
      return true;
    },
    createSelectorQuery() {
      return selector;
    },
  };
  const onTransitionEnd = vi.fn();
  const onTap = vi.fn();
  const instance = getInstance(
    'NoticeBar',
    {
      onTransitionEnd,
      onTap,
      handleQuery,
      ...options,
    },
    my
  );
  return {
    instance,
    onTransitionEnd,
    handleQuery,
    onTap,
  };
};

describe('modal onClose', () => {
  it('测试 enableMarquee', async () => {
    const { instance, handleQuery } = createNoticeBar({
      enableMarquee: true,
    });
    handleQuery.mockImplementation((id: string, index: number) => {
      return {
        width: {
          ['.ant-notice-bar-marquee-1']: [200],
          ['.ant-notice-bar-content-1']: [100],
        }[id][index],
      };
    });
    await sleep(30);
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(-100px, 0, 0); transition: 2.5s all linear 0.5s;',
      'show': true,
    });
    handleQuery.mockImplementation((id: string, index: number) => {
      return {
        width: {
          ['.ant-notice-bar-marquee-1']: [300],
          ['.ant-notice-bar-content-1']: [100],
        }[id][index],
      };
    });
    instance.setProps({
      mode: 'link',
    });
    await sleep(30);
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(-200px, 0, 0); transition: 5s all linear 0.5s;',
      'show': true,
    });
  });

  it('测试 loop', async () => {
    const { instance, handleQuery } = createNoticeBar({
      enableMarquee: true,
      loop: true,
    });
    handleQuery.mockImplementation((id: string, index: number) => {
      return {
        width: {
          ['.ant-notice-bar-marquee-1']: [200],
          ['.ant-notice-bar-content-1']: [100],
        }[id][index],
      };
    });
    await sleep(30);
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(-200px, 0, 0); transition: 5s all linear 0.5s;',
      'show': true,
    });
    handleQuery.mockImplementation(async (id: string, index: number) => {
      await sleep(300, true);
      return {
        width: {
          ['.ant-notice-bar-marquee-1']: [200],
          ['.ant-notice-bar-content-1']: [100],
        }[id][index],
      };
    });
    // expect(handleQuery).toBeCalledTimes(4);
    // await sleep(500); // 不会无脑循环
    // expect(handleQuery).toBeCalledTimes(4);

    instance.callMethod('onTransitionEnd');
    await sleep(100, true);
    // 需要等 200 ms 才开始调用
    // expect(handleQuery).toBeCalledTimes(4);
    await sleep(100 + 300 * 2, true);
    await sleep(20);

    // 执行 reset
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(100px, 0, 0); transition: 0s all linear;',
      'show': true,
    });

    await sleep(300 * 2, true);
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(-200px, 0, 0); transition: 5s all linear 0.5s;',
      'show': true,
    });

    await sleep(300 * 3, true);
    // 触发 use effect
    // expect(handleQuery).toBeCalledTimes(10);
    expect(instance.getData()).toEqual({
      'marqueeStyle':
        'transform: translate3d(-200px, 0, 0); transition: 5s all linear 0.5s;',
      'show': true,
    });
  }, 10000);

  it('测试 overflowWidth < 0', async () => {
    const { instance, handleQuery } = createNoticeBar({
      enableMarquee: true,
    });

    handleQuery.mockImplementation((id: string, index: 0) => {
      return {
        width: {
          ['.ant-notice-bar-marquee-1']: [100],
          ['.ant-notice-bar-content-1']: [200],
        }[id][index],
      };
    });
    await sleep(30);
    expect(instance.getData()).toEqual({
      'marqueeStyle': '',
      'show': true,
    });
  });
});

describe('tab', () => {
  it('测试 closeable', async () => {
    const { instance, onTap } = createNoticeBar({
      mode: 'closeable',
    });

    instance.callMethod('onTap');
    await sleep(30);
    expect(instance.getData().show).toEqual(false);
    expect(onTap).toBeCalledTimes(1);
  });

  it('测试 closeable 且 onTap 不是函数', async () => {
    const { instance } = createNoticeBar({
      mode: 'closeable',
      onTap: null,
    });

    instance.callMethod('onTap');
    await sleep(30);
    expect(instance.getData().show).toEqual(true);
  });

  it('测试 link', async () => {
    const { instance, onTap } = createNoticeBar({
      mode: 'link',
    });

    instance.callMethod('onTap');
    await sleep(30);
    expect(instance.getData().show).toEqual(true);
    expect(onTap).toBeCalledTimes(1);
  });
});
