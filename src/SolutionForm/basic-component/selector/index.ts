import { Component } from 'miniapp-store';

Component({
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
    onSelectMax(...arg) {
      this.props?.config?.onSelectMax?.(...arg);
    },
    onSelectMin(...arg) {
      this.props?.config?.onSelectMin?.(...arg);
    },
  },
});
