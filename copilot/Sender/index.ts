import { Component, getValueFromProps, triggerEvent, triggerEventOnly } from '../../src/_util/simply';
import { SenderProps } from './props';

Component(SenderProps, {
  handleMainBtn() {
    const [ loading ] = getValueFromProps(this, ['loading']);
    if (loading) {
      this.handleCancel();
    } else {
      this.handleSubmit();
    }
  },
  handleSubmit() {
    const [ value ] = getValueFromProps(this, ['value']);
    triggerEvent(this, 'submit', value);
  },
  handleCancel() {
    triggerEventOnly(this, 'cancel');
  },
  handleInput(e) {
    triggerEvent(this, 'change', e.detail.value);
  },
},{},[],{
  multipleSlots: true,
});
