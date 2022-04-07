/* eslint-disable @typescript-eslint/no-explicit-any */
import equal from "fast-deep-equal";
import type { IUserComponentOptions } from "@mini-types/alipay";

/**
 * @description 处理通用受控非受控模式
 * @param propsValue 一般是 'value', 也可能是 'checked', 甚至是自定的，比如 'activeIndex'
 *
 * export default {
 *  mixins: [controlled],
 *  methods: {
 *    handleChange(e) {
 *      this.triggerChange(e.detail.value)
 *    }
 *  }
 * }
 *
 * <input onChange="handleChange" value="{{cValue}}" />
 *
 *
 * export default {
 *  mixins: [controlled({propsValue: 'checked', propsTriggerChange: 'onChange', defaultPropsValue: false  })],
 *  methods: {
 *    handleChange(e) {
 *      this.triggerChange(e.detail.value)
 *    }
 *  }
 * }
 *
 * <checkbox onChange="handleChange" checked="{{cValue}}" />
 */

type ControlledMixInParams  = {
  propsValue?: string, 
  propsTriggerChange?: string,
  defaultPropsValue? :  any 
}

export default ( params: ControlledMixInParams = {}): IUserComponentOptions<
{ cValue: any },
{ [prop: string]: any },
{ triggerChange: (v: any) => void },
{},
Record<string, unknown>,
[]
> => {
  const { propsValue = 'value', propsTriggerChange = 'onChange',  defaultPropsValue = ''}  = params
  return {
    data: {
      cValue: defaultPropsValue
    },
  
    didMount() {
      if (propsValue in this.props) {
        this.setData({
          cValue: this.props[propsValue]
        })
      }
    },
  
    didUpdate(prevProps) {
      const value = this.props[propsValue];
      if (!equal(prevProps[propsValue], value) && !equal(this.data.cValue, value)) {
        this.setData({
          cValue: value
        })
      }
    },
  
    methods: {
      triggerChange(value) {
        this.props[propsTriggerChange]?.(value)
        this.setData({
          cValue: value
        })
      }
    }
  }
}
