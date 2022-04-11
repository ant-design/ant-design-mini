/* eslint-disable @typescript-eslint/no-explicit-any */
import equal from "fast-deep-equal";
import type { IUserComponentOptions } from "@mini-types/alipay";

/**
 * @description 处理通用受控非受控模式
 * @param propsValue 一般是 'value', 也可能是 'checked', 甚至是自定的，比如 'activeIndex'
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
Record<string, unknown>,
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
        this.props[propsTriggerChange]?.bind(this)(value)
        if (!this.props.controlled) {
          this.setData({
            cValue: value
          })
        }
       
      }
    }
  }
}
