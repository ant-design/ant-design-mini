import { Component, triggerEvent } from '../../_util/simply';
import { ChecklistItemDefaultProps } from './props';

Component(ChecklistItemDefaultProps, {
  onChecklistItemClick() {
    /// #if ALIPAY
    triggerEvent(this, 'change', this.props.item);
    /// #endif

    /// #if WECHAT
    triggerEvent(this, 'change', this.properties.item);
    /// #endif
  }
})