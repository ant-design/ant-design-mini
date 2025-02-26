import { Component, getValueFromProps, triggerEvent } from '../../_util/simply';
import { ChecklistItemDefaultProps } from './props';

Component({
  props: ChecklistItemDefaultProps,
  methods: {
    onChecklistItemClick() {
      triggerEvent(this, 'change', getValueFromProps(this, 'item'));
    },
  },
});
