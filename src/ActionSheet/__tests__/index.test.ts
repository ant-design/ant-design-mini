import { getInstance } from '../../../tests/utils';
import fmtEvent from '../../_util/fmtEvent';

describe('actionSheet onClose', () => {
  it('actionSheet onClose', () => {
    const onClose = jest.fn();
    const instance = getInstance('ActionSheet', {
      onClose,
    });
    instance.callMethod('onClose');
    expect(onClose).toBeCalled();
  });
});

describe('actionSheet onAction', () => {
  it('actionSheet onAction', () => {
    const onClose = jest.fn();
    const onAction = jest.fn();
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
    const onClose = jest.fn();
    const onAction = jest.fn();
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
