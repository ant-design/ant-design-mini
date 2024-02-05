import { Component, triggerEvent } from '../../_util/simply';
import { ChecklistItemDefaultProps } from './props';

Component(ChecklistItemDefaultProps, {
  onChecklistItemClick() {
    triggerEvent(this, 'change', this.props.item);

  }
})