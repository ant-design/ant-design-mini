import { getInstance } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('init', () => {
  it('测试默认值', () => {
    const instance = getInstance('Modal', {});

    const {
      bodyClassName,
      bodyStyle,
      maskClassName,
      maskStyle,
      maskClosable,
      type,
      closable,
      duration,
      animation,
      zIndex,
      title,
      content,
      visible,
      destroyOnClose,
      primaryButtonText,
      secondaryButtonText,
      cancelButtonText,
      primaryButtonStyle,
      secondaryButtonStyle,
      cancelButtonStyle,
    } = instance.getConfig().props;
    expect({
      bodyClassName,
      bodyStyle,
      maskClassName,
      maskStyle,
      maskClosable,
      type,
      closable,
      duration,
      animation,
      zIndex,
      title,
      content,
      visible,
      destroyOnClose,
      primaryButtonText,
      secondaryButtonText,
      cancelButtonText,
      primaryButtonStyle,
      secondaryButtonStyle,
      cancelButtonStyle,
    }).toMatchFileSnapshot('snapshot/alipay_config_props.txt');
  });
});

describe('modal onClose', () => {
  it('modal onClose', () => {
    const onClose = vi.fn();
    const instance = getInstance('Modal', {
      onClose,
    });
    instance.callMethod('onClose');
    expect(onClose).toBeCalled();
  });
});
describe('modal onMaskClose', () => {
  it('modal onMaskClose', () => {
    const onClose = vi.fn();
    const instance = getInstance('Modal', {
      onClose,
      maskClosable: true,
    });
    instance.callMethod('onMaskClose');
    expect(onClose).toBeCalled();
  });

  it('maskClosable false', () => {
    const onClose = vi.fn();
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
    const onPrimaryButtonTap = vi.fn();
    const instance = getInstance('Modal', {
      onPrimaryButtonTap,
    });
    instance.callMethod('onPrimaryButtonTap');
    expect(onPrimaryButtonTap).toBeCalled();
  });

  it('modal onSecondaryButtonTap', () => {
    const onSecondaryButtonTap = vi.fn();
    const instance = getInstance('Modal', {
      onSecondaryButtonTap,
    });
    instance.callMethod('onSecondaryButtonTap');
    expect(onSecondaryButtonTap).toBeCalled();
  });
  it('modal onCancelButtonTap', () => {
    const onCancelButtonTap = vi.fn();
    const instance = getInstance('Modal', {
      onCancelButtonTap,
    });
    instance.callMethod('onCancelButtonTap');
    expect(onCancelButtonTap).toBeCalled();
  });
});
