import { createSelectorQueryFactory } from 'tests/selector-query';
import { getInstance, sleep } from 'tests/utils';
import { expect, it, vi } from 'vitest';

function createPagination(props, myOverride?: Record<string, any>) {
  const selectorMock = vi.fn();
  const canIUse = vi.fn().mockImplementation(() => true);
  const my = {
    canIUse(args: string) {
      return canIUse(args);
    },
    ...myOverride,
  };
  const instanceApi = {
    createSelectorQuery: createSelectorQueryFactory(selectorMock),
  };
  const instance = getInstance('Pagination', props, my, instanceApi);
  return { instance, selectorMock, canIUse };
}

it('test selectorMock', async () => {
  const { instance, selectorMock } = createPagination({});
  selectorMock.mockImplementation(async () => {
    return {
      left: 0,
      width: 100,
    };
  });
  await instance.callMethod('onScroll', {
    detail: {
      scrollLeft: 50,
      scrollWidth: 200,
    },
  });
  await sleep(30);
  expect(instance.getData().pageDeg).toEqual(50);
  await instance.callMethod('onScroll', {
    detail: {
      scrollLeft: 60,
      scrollWidth: 200,
    },
  });
  await sleep(30);
  expect(instance.getData().pageDeg).toEqual(60);
});

it('test supportSjs', async () => {
  const canIUse = vi.fn().mockImplementation((key) => {
    if (key === 'sjs.event') {
      return false;
    }
    return true;
  });
  const { instance } = createPagination(
    {},
    {
      canIUse,
    }
  );
  expect(instance.getData().supportSjs).toEqual(false);
});
