import { getInstance } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('grid onTap', () => {
  it('grid onTap', () => {
    const onTap = vi.fn();
    const instance = getInstance('Grid', {
      onTap,
    });
    instance.callMethod('onTap', { currentTarget: { dataset: { item: {} } } });
    expect(onTap).toBeCalled();
  });
});
describe('grid onFirstAppear', () => {
  it('grid onFirstAppear', () => {
    const onFirstAppear = vi.fn();
    const instance = getInstance('Grid', {
      onFirstAppear,
    });
    instance.callMethod('onFirstAppear', { currentTarget: { dataset: { item: {} } } });
    expect(onFirstAppear).toBeCalled();
  });
});
