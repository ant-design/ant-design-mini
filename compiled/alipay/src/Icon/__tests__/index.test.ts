import { getInstance } from '../../../../../tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('icon onTap', () => {
  it('icon onTap', () => {
    const onTap = vi.fn();
    const instance = getInstance('Icon', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
});

describe('icon catchTap', () => {
  it('icon catchTap', () => {
    const catchTap = vi.fn();
    const instance = getInstance('Icon', {
      catchTap,
    });
    instance.callMethod('catchTap');
    expect(catchTap).toBeCalled();
  });
});
