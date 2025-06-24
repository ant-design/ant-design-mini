import { Component } from 'miniapp-store';

Component({
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
  },
});
