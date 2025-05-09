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
    onSelectMax(...arg) {
      this.props?.config?.onSelectMax?.(...arg);
    },
    onSelectMin(...arg) {
      this.props?.config?.onSelectMin?.(...arg);
    },
  },
});
