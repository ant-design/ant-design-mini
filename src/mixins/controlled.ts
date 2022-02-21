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
 *      this.cOnChange(e.detail.value)
 *    }
 *  }
 * }
 *
 * <input onChange="handleChange" value="{{cValue}}" />
 *
 *
 * export default {
 *  mixins: [controlled('checked')],
 *  methods: {
 *    handleChange(e) {
 *      this.cOnChange(e.detail.value)
 *    }
 *  }
 * }
 *
 * <checkbox onChange="handleChange" checked="{{cValue}}" />
 */
export default (
  propsValue = "value"
): IUserComponentOptions<
  { cValue: any },
  { value: any; onInput: (v: any) => void; [prop: string]: any },
  { cOnChange: (v: any, v1?: any) => void; cOnInput: (v: any) => void },
  { cTrigger: (v: any) => void },
  Record<string, unknown>
> => ({
  data: {
    cValue: null,
  },
  didMount() {
    this.cTrigger = (v) => {
      this.setData({
        cValue: v,
      });
    };
    this.cTrigger(this.props[propsValue]);
  },
  didUpdate(prevProps) {
    const value = this.props[propsValue];
    if (!equal(prevProps[propsValue], value)) {
      this.cTrigger(value);
    }
  },
  methods: {
    cOnChange(v: any, v1?: any) {
      if (!this.props.controlled) {
        this.cTrigger(v);
      }
      this.props.onChange?.(v, v1);
    },
    cOnInput(v: any) {
      if (!this.props.controlled) {
        this.cTrigger(v);
      }
      this.props.onInput?.(v);
    },
  },
});
