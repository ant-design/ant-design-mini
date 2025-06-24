import { Component } from 'miniapp-store';

Component({
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
    onClickQuestionIcon(e) {
      const {
        text,
        type,
        title = '',
        buttonText = '',
      } = e?.currentTarget?.dataset?.tooltip || {};
      if (type === 'alert') {
        my.alert({ content: text, title, buttonText });
      }
    },
  },
});
