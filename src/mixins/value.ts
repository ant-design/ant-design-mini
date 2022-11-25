export default ({
  valueKey = 'value',
  defaultValueKey = 'defaultValue',
  scopeKey = 'mixin',
  transformValue = value => ({
    needUpdate: true,
    value,
  }),
}: {
  valueKey?: string;
  defaultValueKey?: string;
  scopeKey?: string;
  transformValue?: (value: any) => {
    needUpdate: boolean;
    value?: any;
  };
} = {} as any) => {
  return {
    data: {
      [scopeKey]: {
        value: undefined,
      },
    },
    didUpdate(prevProps) {
      if (prevProps[valueKey] !== this.props[valueKey]) {
        this.update(this.props[valueKey]);
      }
    },
    didMount() {
      const value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
      this.update(value);
    },
    methods: {
      getValue() {
        return this.data[scopeKey].value;
      },
      isControlled() {
        return [valueKey] in this.props;
      },
      update(...args) {
        const { needUpdate, value } = transformValue.call(this, ...args);
        if (needUpdate) {
          this.setData({
            [scopeKey]: {
              value,
            },
          });
        }
        return {
          needUpdate,
          value,
        };
      },
    },
  }
};
