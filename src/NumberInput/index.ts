import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import { assertAilpayNativeNotSupport } from '../_util/support';
import { NumberInputProps } from './props';

assertAilpayNativeNotSupport('NumberInput');

const UNIT_LIST = [
  '百',
  '千',
  '万',
  '十万',
  '百万',
  '千万',
  '亿',
  '十亿',
  '百亿',
  '千亿',
];

Component({
  props: NumberInputProps,
  data: {
    unit: '',
  },
  methods: {
    // 统一处理输入值
    update(value: string) {
      this.setUnit(value);
      triggerEvent(this, 'change', value);
    },
    handleInput(val) {
      let value = val;
      /// #if WECHAT
      value = val.detail;
      /// #endif
      // 处理金额输入格式
      const formattedValue = this.formatAmount(value);
      const checkedValue = this.checkMaxValue(formattedValue);
      this.update(checkedValue);
    },

    handleQuickInput(e) {
      const { value } = e.currentTarget.dataset;
      this.update(value);
    },

    formatAmount(value: string) {
      // 移除非数字和小数点
      value = value.replace(/[^\d.]/g, '');
      // 保留两位小数
      const parts = value.split('.');
      if (parts.length > 2) {
        // 移除多余的小数点
        value = parts[0] + '.' + parts[1];
      }
      if (parts[1]?.length > 2) {
        // 保留两位小数
        value = parts[0] + '.' + parts[1].slice(0, 2);
      }
      return value;
    },
    checkMaxValue(value: string) {
      const maxValue = getValueFromProps(this, 'maxValue');
      if (Number(value) > maxValue) {
        return maxValue;
      }
      return value;
    },
    handleLinkTap() {
      triggerEventOnly(this, 'linkTap');
    },

    setUnit(value: string) {
      const intValue = parseInt(value);
      let unit = '';
      if (intValue) {
        unit = UNIT_LIST[intValue.toString().length - 3] || '';
      }
      this.setData({ unit });
    },
  },

  /// #if WECHAT
  attached() {
    this.triggerEvent('ref', this);
  },
  /// #endif
});
