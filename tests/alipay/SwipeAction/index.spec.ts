import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, Mock, vi } from 'vitest';
import { ISwipeActionProps } from '../../../src/SwipeAction/props';
import { SelectorQuery } from '../../selector-query';
import _ from 'lodash';

const createSwipeAction = (
  options: Partial<ISwipeActionProps>,
  handleQuery: Mock,
  myProps: Record<string, any> = {}
) => {
  const selector = SelectorQuery.create(handleQuery);
  const my = {
    SDKVersion: '2.1.0',
    canIUse() {
      return true;
    },
    createSelectorQuery() {
      return selector;
    },
    ...myProps,
  };
  const onSwipeStart = vi.fn();
  const onSwipeEnd = vi.fn();
  const onButtonTap = vi.fn();
  const rightButtons = [
    {
      text: 'one',
      width: 100,
    },
    {
      text: 'two',
      width: 200,
    },
    {
      text: 'three',
    },
  ];
  const leftButtons = [
    {
      text: 'l1',
      width: 100,
    },
  ];
  const instance = getInstance(
    'SwipeAction',
    {
      rightButtons,
      leftButtons,
      onSwipeStart,
      onSwipeEnd,
      onButtonTap,
      ...options,
    },
    my
  );
  return {
    instance,
    onSwipeStart,
    onSwipeEnd,
    onButtonTap,
    leftButtons,
    rightButtons,
  };
};

describe('modal onClose', () => {
  const handleQuery = vi.fn();
  it('测试 _leftButtons 与 _leftButtons', async () => {
    const { instance } = createSwipeAction({}, handleQuery);
    await sleep(50);
    expect(
      _.pick(
        instance.getData(),
        '_rightButtons',
        '_leftButtons',
        'leftWidth',
        'rightWidth'
      )
    ).toEqual({
      'leftWidth': 100,
      'rightWidth': 450,
      '_leftButtons': [
        {
          'text': 'l1',
          'width': 100,
        },
      ],
      '_rightButtons': [
        {
          'text': 'one',
          'width': 100,
        },
        {
          'text': 'two',
          'width': 200,
        },
        {
          'text': 'three',
          'width': 150,
        },
      ],
    });
  });

  it('测试 defaultSwiped', async () => {
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-right-1': 450,
        }[id],
      };
    });
    const { instance } = createSwipeAction(
      {
        defaultSwiped: 'right',
        leftButtons: [],
      },
      handleQuery
    );
    await sleep(50);
    expect(_.pick(instance.getData(), 'swipeX', 'swipedR', 'swipedL')).toEqual({
      'swipeX': -450.01,
      'swipedL': false,
      'swipedR': true,
    });
  });
  it('测试 defaultSwiped left', async () => {
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-left-1': 100,
        }[id],
      };
    });
    const { instance } = createSwipeAction(
      {
        defaultSwiped: 'left',
        rightButtons: [],
      },
      handleQuery
    );
    await sleep(50);
    expect(_.pick(instance.getData(), 'swipeX', 'swipedR', 'swipedL')).toEqual({
      'swipeX': 100.01,
      'swipedL': true,
      'swipedR': false,
    });
  });

  it('测试左滑', async () => {
    const rightButtons = [
      {
        text: 'one',
        width: 100,
        confirmType: 'tap' as const,
      },
      {
        text: 'two',
        width: 200,
      },
      {
        text: 'three',
      },
    ];

    const { instance, onButtonTap } = createSwipeAction(
      { rightButtons: rightButtons },
      handleQuery
    );
    await sleep(50);
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-right-1': 450,
        }[id],
      };
    });
    instance.callMethod('onTouchStart');
    await sleep(50);
    instance.callMethod('onChange', { detail: { x: -50 } });
    await sleep(50);
    instance.callMethod('onChangeEnd', { detail: { x: -100 } });
    instance.callMethod('onTouchEnd');
    await sleep(50);
    expect(_.pick(instance.getData(), 'swipeX', 'swipedR', 'swipedL')).toEqual({
      'swipeX': -470.01,
      'swipedL': false,
      'swipedR': false,
    });
    expect(_.pick(instance.getData(), 'tapTypeR')).toEqual({
      tapTypeR: '',
    });
    instance.callMethod('onItemTap', {
      currentTarget: {
        dataset: {
          item: {
            item: rightButtons[0],
            idx: 0,
          },
        },
      },
    });
    await sleep(100);
    expect(onButtonTap).toBeCalledTimes(0);
    expect(_.pick(instance.getData(), 'tapTypeR')).toEqual({
      tapTypeR: 'R-0',
    });
    instance.callMethod('onItemTap', {
      currentTarget: {
        dataset: {
          item: {
            item: rightButtons[0],
            idx: 0,
          },
        },
      },
    });
    await sleep(50);
    expect(_.pick(instance.getData(), 'tapTypeR')).toEqual({
      tapTypeR: '',
    });
    expect(onButtonTap).toBeCalledTimes(1);

    instance.callMethod('onTouchStart');
    await sleep(50);
    instance.callMethod('onChange', { detail: { x: -50 } });
    await sleep(50);
    instance.callMethod('onChangeEnd', { detail: { x: -100 } });
    instance.callMethod('onTouchEnd');
    await sleep(50);

    instance.callMethod('onItemTap', {
      currentTarget: {
        dataset: {
          item: {
            item: rightButtons[1],
            idx: 1,
          },
        },
      },
    });
    await sleep(50);
    expect(onButtonTap).toBeCalledTimes(2);
  });

  it('测试右滑, 双重确认', async () => {
    const leftButtons = [
      {
        text: 'l1',
        width: 100,
        confirmType: 'tap' as const,
      },
    ];
    const { instance, onButtonTap } = createSwipeAction(
      {
        leftButtons,
      },
      handleQuery
    );
    await sleep(50);
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-left-1': 100,
        }[id],
      };
    });
    instance.callMethod('onTouchStart');
    await sleep(50);
    instance.callMethod('onChange', { detail: { x: 10 } });
    await sleep(50);
    instance.callMethod('onChangeEnd', { detail: { x: 30 } });
    instance.callMethod('onTouchEnd');
    await sleep(50);
    instance.getData();
    expect(_.pick(instance.getData(), 'swipeX', 'swipedR', 'swipedL')).toEqual({
      'swipeX': 120.01,
      'swipedL': false,
      'swipedR': false,
    });
    instance.callMethod('onItemTap', {
      currentTarget: {
        dataset: {
          item: {
            itemL: leftButtons[0],
            idx: 0,
          },
        },
      },
    });
    await sleep(100);
    expect(onButtonTap).toBeCalledTimes(0);
    expect(_.pick(instance.getData(), 'tapTypeL')).toEqual({
      'tapTypeL': 'L-0',
    });

    instance.callMethod('onItemTap', {
      currentTarget: {
        dataset: {
          item: {
            itemL: leftButtons[0],
            idx: 0,
          },
        },
      },
    });
    await sleep(50);
    expect(_.pick(instance.getData(), 'tapTypeL')).toEqual({
      'tapTypeL': '',
    });
    expect(onButtonTap).toBeCalledTimes(1);
  });

  it('测试右滑, 滑动确认', async () => {
    const rightButtons = [
      {
        text: 'l1',
        width: 100,
        confirmType: 'move' as const,
      },
    ];
    const vibrateShort = vi.fn();
    const { instance, onButtonTap } = createSwipeAction(
      {
        rightButtons,
      },
      handleQuery,
      { vibrateShort }
    );
    await sleep(50);
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-right-1': 100,
        }[id],
      };
    });
    instance.callMethod('onTouchStart');
    await sleep(10);
    instance.callMethod('onChange', { detail: { x: -100 } });
    await sleep(200);
    instance.callMethod('onChange', { detail: { x: -150 } });
    instance.callMethod('onChangeEnd', { detail: { x: -150 } });
    await sleep(50);
    expect(vibrateShort).toBeCalledTimes(1);
    expect(onButtonTap).toBeCalledTimes(1);
  });

  it('测试右滑, 滑动确认', async () => {
    const leftButtons = [
      {
        text: 'l1',
        width: 100,
        confirmType: 'move' as const,
      },
    ];
    const vibrateShort = vi.fn();
    const { instance, onButtonTap } = createSwipeAction(
      {
        leftButtons,
      },
      handleQuery,
      { vibrateShort }
    );
    await sleep(50);
    handleQuery.mockImplementation((id) => {
      return {
        width: {
          '.ant-swipe-action-movable-left-1': 100,
        }[id],
      };
    });
    instance.callMethod('onTouchStart');
    await sleep(10);
    instance.callMethod('onChange', { detail: { x: 50 } });
    await sleep(200);
    instance.callMethod('onChange', { detail: { x: 150 } });
    await sleep(200);
    instance.callMethod('onTouchCancel', { detail: { x: 150 } });
    await sleep(50);
    expect(vibrateShort).toBeCalledTimes(1);
    expect(onButtonTap).toBeCalledTimes(1);
  });
});
