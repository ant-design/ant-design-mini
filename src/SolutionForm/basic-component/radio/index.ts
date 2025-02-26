Component<
  {},
  {
    field: string;
    onTriggerChange: (val: string, field: string) => {};
  }
>({
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
