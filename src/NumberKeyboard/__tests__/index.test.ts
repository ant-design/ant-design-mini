import { getInstance } from '../../../tests/utils';

const my = {
  canIUse() {
    return true;
  }
}
describe('numberKeyboard onClose', () => {
  it('onClose', () => {
    const onClose = jest.fn();
    const instance = getInstance('NumberKeyboard', {
      onClose,
    }, my);
    instance.callMethod('onHide');
    expect(onClose).toBeCalled();
  });
});

describe('numberKeyboard onConfirm', () => {
  it('onConfirm', () => {
    const onConfirm = jest.fn();
    const instance = getInstance('NumberKeyboard', {
      onConfirm,
    }, my);
    instance.callMethod('onClickEnter');
    expect(onConfirm).toBeCalled();
  });
});

describe('numberKeyboard onChange', () => {
  it('onChange', () => {
    const onChange = jest.fn();
    const instance = getInstance('NumberKeyboard', {
      onChange,
    }, my);
    instance.callMethod('tapButton', { target: { dataset: { key: 'del' } } });
    expect(onChange).toBeCalled();
  });
});