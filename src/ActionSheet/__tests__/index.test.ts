import { getInstance } from '../../../tests/utils';
import fmtEvent from '../../_util/fmtEvent';
import { describe, it, expect, vi } from 'vitest';

describe('actionSheet onClose', () => {
  it('actionSheet onClose', () => {
    const onClose = vi.fn();
    const instance = getInstance('ActionSheet', {
      onClose,
    });
    instance.callMethod('onClose');
    expect(onClose).toBeCalled();
  });
});

describe('actionSheet onAction', () => {
  it('actionSheet onAction', () => {
    const onClose = vi.fn();
    const onAction = vi.fn();
    const instance = getInstance('ActionSheet', {
      onClose,
      onAction,
      disabled: true,
    });

    instance.callMethod(
      'onAction',
      fmtEvent({ 'data-item': {}, 'data-index': 1 })
    );
    expect(onClose).toBeCalled();
    expect(onAction).toBeCalledWith({}, 1, fmtEvent({}));
  });
  it('actionSheet disabled', () => {
    const onClose = vi.fn();
    const onAction = vi.fn();
    const instance = getInstance('ActionSheet', {
      onClose,
      onAction,
    });

    instance.callMethod(
      'onAction',
      fmtEvent({ 'data-item': { disabled: true }, 'data-index': 1 })
    );
    expect(onClose).not.toBeCalled();
    expect(onAction).not.toBeCalled();
  });
});
