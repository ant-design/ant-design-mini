import { getInstance } from '../../../tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('listItem onTap', () => {
  it('listItem onTap', () => {
    const onTap = vi.fn();
    const instance = getInstance('List/ListItem', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
  it('listItem disabled', () => {
    const onTap = vi.fn();
    const instance = getInstance('List/ListItem', {
      onTap,
      disabled: true,
    });
    instance.callMethod('onTap');
    expect(onTap).not.toBeCalled();
  });
});

describe('listItem catchTap', () => {
  it('listItem catchTap', () => {
    const catchTap = vi.fn();
    const instance = getInstance('List/ListItem', {
      catchTap,
    });
    instance.callMethod('catchTap');
    expect(catchTap).toBeCalled();
  });
  it('listItem disabled', () => {
    const catchTap = vi.fn();
    const instance = getInstance('List/ListItem', {
      catchTap,
      disabled: true,
    });
    instance.callMethod('catchTap');
    expect(catchTap).not.toBeCalled();
  });
});
