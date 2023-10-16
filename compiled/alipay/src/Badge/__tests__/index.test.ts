import { getInstance } from '../../../../../tests/utils';
import { describe, it, expect } from 'vitest';

describe('badge overCount', () => {
  it('badge overCount true', () => {
    const instance = getInstance('Badge', {
      text: 102,
    });
    expect(instance.getData().overCount).toBe(true);
  });
  it('badge overCount false', () => {
    const instance = getInstance('Badge', {
      text: 75,
    });

    expect(instance.getData().overCount).toBe(false);
  });
});
