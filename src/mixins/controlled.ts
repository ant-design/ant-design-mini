/* eslint-disable @typescript-eslint/no-explicit-any */
import equal from 'fast-deep-equal';
import type { IUserComponentOptions } from '@mini-types/alipay';

/**
 * @description 处理通用受控非受控模式
 * @param propsValue 一般是 'value', 也可能是 'checked', 甚至是自定的，比如 'activeIndex'
 */

type ControlledMixInParams = {
  propsValue?: string;
  propsTriggerChange?: string;
  dataValue?: string;
  defaultPropsValue?: any;
};

export default (
  params: ControlledMixInParams = {}
): IUserComponentOptions<
  Record<string, any>,
  { [prop: string]: any },
  { triggerChange: (v: any) => void },
  Record<string, unknown>,
  Record<string, unknown>,
  []
> => {
  const {
    propsValue = 'value',
    dataValue='cVaule',
    propsTriggerChange = 'onChange',
    defaultPropsValue = '',
  } = params;
  return {
    data: {
      [dataValue]: defaultPropsValue,
    },

    didMount() {
      if (propsValue in this.props) {
        this.setData({
          [dataValue]: this.props[propsValue],
        });
      }
    },

    didUpdate(prevProps) {
      const value = this.props[propsValue];
      if (
        !equal(prevProps[propsValue], value) &&
        !equal(this.data[dataValue], value)
      ) {
        this.setData({
          [dataValue]: value,
        });
      }
    },

    methods: {
      triggerChange(value, ...args) {
        this.props[propsTriggerChange]?.bind(this)(value, ...args);
        if (!this.props.controlled) {
          this.setData({
            [dataValue]: value,
          });
        }
      },
    },
  };
};
