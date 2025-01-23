import { Component, triggerEvent, triggerEventOnly } from '../../src/_util/simply';
import { SenderProps } from './props';

Component(SenderProps, {
  handleMainBtn() {
    if (this.props.loading) {
      this.handleCancel();
    } else {
      this.handleSubmit();
    }
  },
  handleSubmit() {
    triggerEvent(this, 'submit', this.props.value);
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
