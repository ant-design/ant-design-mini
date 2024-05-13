import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { ChecklistItemDefaultProps } from './props';

Component(ChecklistItemDefaultProps, {
  onChecklistItemClick() {
    triggerEvent(this, 'change', getValueFromProps(this, 'item'));
  },
});
