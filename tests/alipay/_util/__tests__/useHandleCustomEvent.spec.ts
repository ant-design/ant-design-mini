import { useEvent, useState, alipayComponent } from 'functional-mini/component';
import { sleep, createInstance } from '../../../utils';
import { expect, it } from 'vitest';
import {
  useHandleCustomEvent,
  useMultipleValueHandleCustomEvent,
  useHandleCustomEventOnly,
} from 'compiled-alipay/_util/hooks/useHandleCustomEvent';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';

const testMy = {
  canIUse() {
    return true;
  },
};

it('test useHandleCustomEvent', async () => {
  const Test = () => {
    const [count, setCount] = useState(1);
    useHandleCustomEvent('handleEvent', (value, event) => {
      return {
        value,
        event,
        count,
      };
    });
    useEvent('updateCount', function (v) {
      setCount(v);
      return 'ok';
    });
    return {
      count,
    };
  };

  const componentOptions = alipayComponent(Test, {});
  const instance = createInstance(componentOptions as any, {}, testMy);
  expect(
    instance.callMethod('handleEvent', 2, fmtEvent({ 'data-a': 1 })).count
  ).toBe(1);
  expect(instance.callMethod('updateCount', 10)).toEqual('ok');
  await sleep(20);
  expect(instance.getData().count).toEqual(10);
  expect(
    instance.callMethod('handleEvent', 2, fmtEvent({ 'data-a': 1 }))
  ).toEqual({
    value: 2,
    event: {
      currentTarget: { dataset: { 'a': 1 } },
      target: { dataset: { 'a': 1 }, targetDataset: { 'a': 1 } },
    },
    count: 10,
  });
  expect(instance.callMethod('updateCount', 30)).toEqual('ok');
  await sleep(20);
  expect(instance.getData().count).toEqual(30);
});

it('test useMultipleValueHandleCustomEvent', async () => {
  const Test = () => {
    useMultipleValueHandleCustomEvent('handleEvent', (...args) => {
      return {
        args,
      };
    });
    return {};
  };

  const componentOptions = alipayComponent(Test, {});
  const instance = createInstance(componentOptions as any, {}, testMy);
  expect(
    instance.callMethod('handleEvent', 1, 2, fmtEvent({ 'data-a': 1 }))
  ).toEqual({
    args: [
      1,
      2,
      {
        currentTarget: { dataset: { 'a': 1 } },
        target: { dataset: { 'a': 1 }, targetDataset: { 'a': 1 } },
      },
    ],
  });

  expect(instance.callMethod('handleEvent')).toEqual({
    args: [],
  });

  expect(instance.callMethod('handleEvent', fmtEvent({ 'data-a': 1 }))).toEqual(
    {
      args: [
        {
          currentTarget: { dataset: { 'a': 1 } },
          target: { dataset: { 'a': 1 }, targetDataset: { 'a': 1 } },
        },
      ],
    }
  );
});

it('test useHandleCustomEventOnly', async () => {
  const Test = () => {
    useHandleCustomEventOnly('handleEvent', (...args) => {
      return {
        args,
      };
    });
    return {};
  };

  const componentOptions = alipayComponent(Test, {}) as any;
  const instance = createInstance(componentOptions, {}, testMy);
  expect(instance.callMethod('handleEvent', fmtEvent({ 'data-a': 1 }))).toEqual(
    {
      args: [
        {
          currentTarget: { dataset: { 'a': 1 } },
          target: { dataset: { 'a': 1 }, targetDataset: { 'a': 1 } },
        },
      ],
    }
  );
});
