import { getInstance } from '../../../../../../tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('test FormTextarea', () => {
  it('onFocus', () => {
    const my = {
      canIUse() {
        return false;
      },
    };
    const onFocus = vi.fn();
    const instance = getInstance(
      'Form/FormTextarea',
      {
        onFocus,
      },
      my
    );
    instance.callMethod('onFocus');
    expect(onFocus).toBeCalled();
  });
});
