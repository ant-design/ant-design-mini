import { getInstance } from '../../../tests/utils';

describe('modal onClose', () => {
  it('modal onClose', () => {
    const onClose = jest.fn();
    const instance = getInstance('Modal', {
      onClose,
    });
    instance.callMethod('onClose');
    expect(onClose).toBeCalled();
  });

});
describe('modal onMaskClose', () => {
  it('modal onMaskClose', () => {
    const onClose = jest.fn();
    const instance = getInstance('Modal', {
      onClose,
      maskClosable: true,
    });
    instance.callMethod('onMaskClose');
    expect(onClose).toBeCalled();
  });

  it('maskClosable false', () => {
    const onClose = jest.fn();
    const instance = getInstance('Modal', {
      onClose,
      maskClosable: false,
    });
    instance.callMethod('onMaskClose');
    expect(onClose).not.toBeCalled();
  });
});
describe('modal button function', () => {
  it('modal onPrimaryButtonTap', () => {
    const onPrimaryButtonTap = jest.fn();
    const instance = getInstance('Modal', {
      onPrimaryButtonTap,
    });
    instance.callMethod('onPrimaryButtonTap');
    expect(onPrimaryButtonTap).toBeCalled();
  });

  it('modal onSecondaryButtonTap', () => {
    const onSecondaryButtonTap = jest.fn();
    const instance = getInstance('Modal', {
      onSecondaryButtonTap,
    });
    instance.callMethod('onSecondaryButtonTap');
    expect(onSecondaryButtonTap).toBeCalled();
  });
  it('modal onCancelButtonTap', () => {
    const onCancelButtonTap = jest.fn();
    const instance = getInstance('Modal', {
      onCancelButtonTap,
    });
    instance.callMethod('onCancelButtonTap');
    expect(onCancelButtonTap).toBeCalled();
  });
});
