import { getInstance } from '../../../../tests/utils';
import { describe, it, expect } from 'vitest';

describe('badge overCount', () => {
  it('badge overCount true', () => {
    const instance = getInstance('Form/FormImageUpload', {
      onRemove: () => {
        return false;
      },
    });

    expect(instance.callMethod('onRemove')).toBe(false);
  });
});
