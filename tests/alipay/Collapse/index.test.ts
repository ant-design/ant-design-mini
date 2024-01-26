import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { createSelectorQueryFactory, MockSelect } from 'tests/selector-query';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { ICollapseProps } from '../../../src/Collapse/props';

function createCollapse(props: Partial<ICollapseProps>, mock: MockSelect) {
  const my = {
    canIUse() {
      return true;
    },
    createSelectorQuery: createSelectorQueryFactory(mock),
  };

  const onChange = vi.fn();

  const instance = getInstance(
    'Collapse',
    {
      onChange,
      ...props,
    },
    my
  );

  async function clickIndex(index: string | number) {
    instance.callMethod('onChange', {
      currentTarget: {
        dataset: { index },
      },
    });
    await sleep(40);
  }

  async function resetContentHeight(index: string | number) {
    instance.callMethod('resetContentHeight', {
      currentTarget: {
        dataset: { index },
      },
    });
    await sleep(40);
  }

  return { instance, clickIndex, resetContentHeight, onChange };
}

describe('', () => {
  const mockSelector: MockSelect = () => {
    return {
      height: 100,
    };
  };
  const mockItems = [
    {
      title: '0',
      content: 'one',
    },
    {
      title: '2',
      content: '',
      disabled: true,
    },
    {
      title: '3',
      content: '',
    },
    {
      title: '4',
      content: '',
    },
  ];
  it('测试 contentHeight', async () => {
    const { instance } = createCollapse(
      {
        items: mockItems,
      },
      mockSelector
    );
    await sleep(100);
    expect(instance.getData().contentHeight).toEqual([
      '0px',
      '0px',
      '0px',
      '0px',
    ]);
    expect(instance.getData().hasChange).toEqual(true);
    expect(instance.getData().mixin.value).toEqual([]);
  });

  it('测试事件', async () => {
    const { instance, clickIndex, onChange } = createCollapse(
      {
        current: [0, 1, 2],
        items: mockItems,
      },
      mockSelector
    );
    expect(instance.getData().contentHeight).toEqual(['', '0px', '', '0px']);
    await clickIndex(0);
    expect(instance.getData().mixin.value).toEqual([0, 2]);
    expect(onChange.mock.calls[0]).toEqual([[2], fmtEvent({})]);
    await sleep(30);
    instance.setProps({
      current: [2],
    });
    await sleep(30);
    expect(instance.getData().contentHeight).toEqual(['0px', '0px', '', '0px']);
  });

  it('测试点击', async () => {
    const { instance, clickIndex, resetContentHeight } = createCollapse(
      {
        items: mockItems,
      },
      mockSelector
    );
    await clickIndex(0);
    expect(instance.getData().mixin.value).toEqual([0]);
    await clickIndex(1);
    expect(instance.getData().contentHeight).toEqual([
      '100px',
      '0px',
      '0px',
      '0px',
    ]);
    expect(instance.getData().mixin.value).toEqual([0]);
    await clickIndex(2);
    expect(instance.getData().mixin.value).toEqual([0, 2]);
    await clickIndex(3);
    expect(instance.getData().mixin.value).toEqual([0, 2, 3]);
    await clickIndex(0);
    expect(instance.getData().mixin.value).toEqual([2, 3]);
    expect(instance.getData().contentHeight).toEqual([
      '0px',
      '0px',
      '100px',
      '100px',
    ]);
    instance.setProps({
      accordion: true,
    });
    expect(instance.getData().mixin.value).toEqual([2, 3]);
    await clickIndex(0);
    expect(instance.getData().mixin.value).toEqual([0]);
    expect(instance.getData().contentHeight).toEqual([
      '100px',
      '0px',
      '0px',
      '0px',
    ]);
    await clickIndex(3);
    expect(instance.getData().mixin.value).toEqual([3]);
    expect(instance.getData().contentHeight).toEqual([
      '0px',
      '0px',
      '0px',
      '100px',
    ]);
    await resetContentHeight(3);
    await resetContentHeight(100);
    expect(instance.getData().contentHeight).toEqual(['0px', '0px', '0px', '']);
  });
});
