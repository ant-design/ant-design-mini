import { IMixin4Legacy } from '@mini-types/alipay';

function equal(a, b) {
  if (a === b) {
    return true;
  }
  if (a !== a && b !== b) {
    return true;
  }
  return false;
}

const component2 = my.canIUse('component2');

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
  transformValue?: (this: any, value: any, extra: { nextProps: Record<string, any> }, ...args: any) => {
    needUpdate: boolean;
    value?: any;
  };
} = {}) => {
  return {
    data: {
      [scopeKey]: {
        value: undefined,
        updated: false,
        controlled: false,
      },
    },
    onInit() {
      const value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
      const { needUpdate } = this.update(value, {
        nextProps: this.props,
      });
      if (!needUpdate) {
        this.updateControlled();
      }
    },
    deriveDataFromProps(nextProps) {
      if (!equal(nextProps[valueKey], this.props[valueKey])) {
        this.update(nextProps[valueKey], {
          nextProps,
        });
      }
    },
    didUpdate(prevProps) {
      if (component2) {
        return;
      }
      if (!equal(prevProps[valueKey], this.props[valueKey])) {
        this.update(this.props[valueKey], {
          nextProps: this.props,
        });
      }
    },
    didMount() {
      if (component2) {
        return;
      }
      const value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
      const { needUpdate } = this.update(value, {
        nextProps: this.props,
      });
      if (!needUpdate) {
        this.updateControlled();
      }
    },
    
    methods: {
      getValue(prevData?) {
        return (prevData || this.data)[scopeKey].value;
      },
      isEqualValue(prevData) {
        if (!prevData[scopeKey].updated) {
          return true;
        }
        return equal(this.getValue(prevData), this.getValue());
      },
      isControlled() {
        if ('controlled' in this.props) {
          return this.props.controlled;
        }
        return valueKey in this.props;
      },
      updateControlled() {
        this.setData({
          [scopeKey]: {
            controlled: this.isControlled(),
          },
        });
      },
      update(val, extra?, ...args) {
        const { needUpdate, value } = transformValue.call(this, val, extra, ...args) || {};
        if (needUpdate) {
          this.setData({
            [scopeKey]: {
              value,
              updated: true,
              controlled: this.isControlled(),
            },
          });
        }
        return {
          needUpdate,
          value,
        };
      },
    },
  } as IMixin4Legacy<
    Record<string, any>,
    Record<string, any>,
    {
      getValue(prevData?: any): any;
      isControlled(): boolean;
      updateControlled() : void;
      update(val: any, extra?: any, ...args: any): {
        needUpdate: boolean;
        value: any;
      };
      isEqualValue(prevData: any): boolean;
    }
  >
};
