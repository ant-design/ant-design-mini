import { IMixin4Legacy } from '@mini-types/alipay';
import { getValueFromProps } from '../_util/simply';

function equal(a, b) {
  if (a === b) {
    return true;
  }
  if (a !== a && b !== b) {
    return true;
  }
  return false;
}

/// #if ALIPAY
const component2 = my.canIUse('component2') || typeof ac === 'object';
/// #endif

export default ({
  valueKey = 'value',
  defaultValueKey = 'defaultValue',
  scopeKey = 'mixin',
  transformValue = (value) => ({
    needUpdate: true,
    value,
  }),
}: {
  valueKey?: string;
  defaultValueKey?: string;
  scopeKey?: string;
  transformValue?: (
    this: any,
    value: any,
    extra: { nextProps: Record<string, any> },
    ...args: any
  ) => {
    needUpdate: boolean;
    value?: any;
  };
} = {}) => {
  let mixin = {
    data: {
      [scopeKey]: {
        value: undefined,
        updated: false,
        controlled: false,
      },
    },
    /// #if ALIPAY
    onInit() {
      this.init();
    },
    deriveDataFromProps(nextProps) {
      if (!equal(nextProps[valueKey], getValueFromProps(this, valueKey))) {
        this.update(nextProps[valueKey], {
          nextProps,
        });
      }
    },
    didUpdate(prevProps) {
      if (component2) {
        return;
      }
      if (!equal(prevProps[valueKey], getValueFromProps(this, valueKey))) {
        this.update(getValueFromProps(this, valueKey), {
          nextProps: getValueFromProps(this),
        });
      }
    },
    didMount() {
      if (component2) {
        return;
      }
      this.init();
    },
    /// #endif

    /// #if WECHAT
    created() {
      this.init();
    },
    observers: {
      [`${valueKey}`]: function (value) {
        this.update(value, {
          nextProps: this.properties,
        });
      },
    },

    attached() {
      const value =
        this.properties[valueKey] !== null
          ? this.properties[valueKey]
          : this.properties[defaultValueKey];
      const { needUpdate } = this.update(value, {
        nextProps: this.properties,
      });
      if (!needUpdate) {
        this.updateControlled();
      }
    },
    /// #endif
    methods: {
      init() {
        let value;
        /// #if ALIPAY
        value =
          getValueFromProps(this, valueKey) !== undefined
            ? getValueFromProps(this, valueKey)
            : getValueFromProps(this, defaultValueKey);
        /// #endif
        /// #if WECHAT
        value =
          getValueFromProps(this, valueKey) !== null
            ? getValueFromProps(this, valueKey)
            : getValueFromProps(this, defaultValueKey);
        /// #endif
        const { needUpdate } = this.update(value, {
          nextProps: getValueFromProps(this),
        });
        if (!needUpdate) {
          this.updateControlled();
        }
      },
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
        if ('controlled' in getValueFromProps(this)) {
          return getValueFromProps(this, 'controlled');
        }

        /// #if ALIPAY
        return valueKey in getValueFromProps(this);
        /// #endif
        /// #if WECHAT
        return getValueFromProps(this, valueKey) !== null;
        /// #endif
      },
      updateControlled() {
        this.setData({
          [scopeKey]: {
            controlled: this.isControlled(),
          },
        });
      },
      update(val, extra?, ...args) {
        const { needUpdate, value } =
          transformValue.call(this, val, extra, ...args) || {};
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
      updateControlled(): void;
      update(
        val: any,
        extra?: any,
        ...args: any
      ): {
        needUpdate: boolean;
        value: any;
      };
      isEqualValue(prevData: any): boolean;
    }
  >;

  /// #if WECHAT
  // @ts-ignore
  mixin = Behavior(mixin);
  /// #endif

  return mixin;
};
