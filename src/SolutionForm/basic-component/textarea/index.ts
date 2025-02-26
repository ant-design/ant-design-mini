Component<
  {},
  {
    field: string;
    config: any;
    onTriggerChange: (val: string, field: string) => {};
  }
>({
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v?.trim() || '', this.props.field);
    },
    onBlur(v) {
      this.props?.config?.onBlur?.(v, this.props.field);
    },
    onFocus(v) {
      this.props?.config?.onFocus?.(v, this.props.field);
    },
    onConfirm(v) {
      this.props?.config?.onConfirm?.(v, this.props.field);
    },
  },
});
