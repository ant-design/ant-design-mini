import { Component, triggerEvent } from '../../_util/simply';
import { ChecklistItemDefaultProps } from './props';
Component(ChecklistItemDefaultProps, {
    onChecklistItemClick: function () {
        triggerEvent(this, 'change', this.properties.item);
    }
});
