Component<{}, {
  field: string;
  onTriggerChange: (val: string, field: string) => {};
}>({
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
  },
});
