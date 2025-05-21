import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import mixinValue from '../mixins/value';
import { resolveEventValue, resolveEventValues } from '../_util/platform';
import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../_util/simply';
import { DatePickerDefaultProps } from './props';
import {
  getDateByValue,
  getRangeData,
  getValidValue,
  getValueByDate,
} from './util';

Component({
  props: DatePickerDefaultProps,
  data: {
    currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
    formattedValueText: '',
    columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
    forceUpdate: 0, // 强制更新picker组件，已知需处理的情况：value超限，但是需要更新format，由于picker的参数均未变化，无法触发picker的渲染
    visible: null,
  },
  pickerVisible: false,
  methods: {
    // visible受控判断
    isVisibleControlled() {
      /// #if ALIPAY || ALIPAYNATIVE
      return 'visible' in getValueFromProps(this);
      /// #endif
      /// #if WECHAT
      return getValueFromProps(this, 'visible') !== null;
      /// #endif
    },
    // 当前选中的picker值，处理无cValue时的情况，优先取当前时间，不在时间范围内取开始时间
    getCurrentValueWithCValue(currentProps) {
      const realValue = this.getValue();
      const { min, max, precision, defaultPickerValue } = currentProps;
      if (realValue) {
        return getValueByDate(realValue, precision,);
      }
      // 处理默认值
      let baseDate: Date | null = null;
      if (defaultPickerValue) {
        try {
          // 判断defaultPickerValue用户配置格式
          let defaultDate = dayjs(defaultPickerValue, ['YYYY-MM-DD', 'YYYY/MM/DD', 'HH:mm:ss', 'HH:mm', 'HH']);
          if (!defaultDate.isValid() && typeof defaultPickerValue === 'string' && defaultPickerValue.includes(':')) {
            const [hours, minutes, seconds] = defaultPickerValue.split(':').map(Number);
            const now = dayjs();
            defaultDate = now
              .set('hour', hours || 0)
              .set('minute', minutes || 0)
              .set('second', seconds || 0);
          }
          baseDate = defaultDate.isValid() ? defaultDate.toDate() : new Date();
        } catch (e) {
          baseDate = new Date();
        }
      }else {
        // 没有 defaultPickerValue 时，回退原逻辑
        const now = new Date();
        const minDayjs = this.getMin(min);
        const maxDayjs = this.getMax(max);
        if (dayjs(now).isBefore(minDayjs) || dayjs(now).isAfter(maxDayjs)) {
          baseDate = minDayjs.toDate();
        } else {
          baseDate = now;
        }
      }

      // 获取最大最小日期
      const minDayjs = this.getMin(min);
      const maxDayjs = this.getMax(max);

      // 校验日期
      let adjustedDate = dayjs(baseDate);
      // 强制对齐
      if (adjustedDate.isBefore(minDayjs)) {
        adjustedDate = minDayjs;
      } else if (adjustedDate.isAfter(maxDayjs)) {
        adjustedDate = maxDayjs;
      }

      return getValueByDate(adjustedDate.toDate(), precision);
    },

    getMin(min) {
      return min ? dayjs(min as any) : dayjs().subtract(10, 'year');
    },

    getMax(max) {
      return max ? dayjs(max as any) : dayjs().add(10, 'year');
    },
    /**
     * didUpdate、弹窗打开触发
     */
    setCurrentValue(currentProps) {
      const currentValue = this.getCurrentValueWithCValue(currentProps);
      const newColumns = this.generateData(currentValue, currentProps);
      if (!equal(newColumns, this.data.columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData({
              currentValue,
              formattedValueText: this.onFormat(),
            });
          }
        );
      }
    },

    // 生成选项数据，didmound、picker change、打开弹窗触发
    generateData(currentValue, currentProps) {
      const { precision, min: propsMin, max: propsMax } = currentProps;
      const min = this.getMin(propsMin);
      const max = this.getMax(propsMax);
      if (max < min) {
        return [];
      }
      let currentPickerDay = dayjs();
      if (currentValue.length > 0) {
        currentPickerDay = dayjs(getDateByValue(currentValue));
      }
      if (currentPickerDay < min || currentPickerDay > max) {
        currentPickerDay = min;
      }
      const newColumns = getRangeData(
        precision,
        min,
        max,
        currentPickerDay,
        this.onFormatLabel.bind(this)
      );
      return newColumns;
    },
    onFormatLabel(type, value) {
      const onFormatLabel = getValueFromProps(this, 'onFormatLabel');
      const formatValueByProps = onFormatLabel && onFormatLabel(type, value);
      if (formatValueByProps !== undefined && formatValueByProps !== null) {
        return String(formatValueByProps);
      }
      return this.defaultFormatLabel(type, value);
    },
    defaultFormatLabel(type, value) {
      const suffixMap = {
        year: '年',
        month: '月',
        day: '日',
        hour: '时',
        minute: '分',
        second: '秒',
      };
      return `${value}${suffixMap[type]}`;
    },
    onChange(selectedIdx) {
      const [pmin, pmax, format, precision] = getValueFromProps(this, [
        'min',
        'max',
        'format',
        'precision',
      ]);
      let [selectedIndex] = resolveEventValues(getValidValue(selectedIdx));
      let date = getDateByValue(selectedIndex);
      const min = this.getMin(pmin);
      const max = this.getMax(pmax);
      if (dayjs(date).isBefore(min)) {
        date = min.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      if (dayjs(date).isAfter(max)) {
        date = max.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      const newColumns = this.generateData(
        selectedIndex,
        getValueFromProps(this)
      );

      if (!equal(newColumns, this.data.columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData({ currentValue: selectedIndex });
            const date = getDateByValue(selectedIndex);
            triggerEventValues(this, 'pickerChange', [
              date,
              dayjs(date).format(format),
            ]);
          }
        );
      } else {
        this.setData({ currentValue: selectedIndex });
        const date = getDateByValue(selectedIndex);

        triggerEventValues(this, 'pickerChange', [
          date,
          dayjs(date).format(format),
        ]);
      }
    },

    onCancel(e) {
      triggerEventOnly(this, 'cancel', e);
    },

    onOk() {
      const { currentValue } = this.data;
      const format = getValueFromProps(this, 'format');
      const date = getDateByValue(currentValue);
      if (!this.isControlled()) {
        this.update(date);
      }
      triggerEventValues(this, 'ok', [date, dayjs(date).format(format)]);
    },
    defaultFormat(value, valueStr) {
      const format = getValueFromProps(this, 'format');
      if (format && valueStr) {
        return valueStr;
      }
      return '';
    },
    onFormat() {
      const [format, onFormat] = getValueFromProps(this, [
        'format',
        'onFormat',
      ]);
      const realValue = this.getValue();
      const formatValueByProps =
        onFormat &&
        onFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
      if (formatValueByProps !== undefined && formatValueByProps !== null) {
        return formatValueByProps;
      }
      return this.defaultFormat(
        realValue,
        realValue ? dayjs(realValue).format(format) : null
      );
    },

    onVisibleChange(visible) {
      this.pickerVisible = visible;
      if (!this.isVisibleControlled() && visible) {
        this.setCurrentValue(getValueFromProps(this));
      }
      triggerEvent(this, 'visibleChange', resolveEventValue(visible));
    },
  },

  mixins: [
    mixinValue({
      transformValue(value) {
        return {
          value: value ? dayjs(value).toDate() : undefined,
          needUpdate: true,
        };
      },
    }),
  ],

  /// #if ALIPAY || ALIPAYNATIVE
  onInit() {
    this.pickerVisible = false;
    const [visible, defaultVisible] = getValueFromProps(this, [
      'visible',
      'defaultVisible',
    ]);
    this.setData({
      visible: this.isVisibleControlled() ? visible : defaultVisible,
      formattedValueText: this.onFormat(),
    });
  },
  didUpdate(prevProps, prevData) {
    const currentProps = getValueFromProps(this);
    const visible = getValueFromProps(this, 'visible');
    if (this.isVisibleControlled() && !equal(prevProps.visible, visible)) {
      this.pickerVisible = visible;
      this.setData({ visible });
      if (this.pickerVisible) {
        this.setCurrentValue(currentProps);
      }
    }
    if (!this.isEqualValue(prevData)) {
      this.setData({
        forceUpdate: this.data.forceUpdate + 1,
        formattedValueText: this.onFormat(),
      });
      // 展开状态才更新picker的数据，否则下次triggerVisible触发
      if (this.pickerVisible) {
        this.setCurrentValue(currentProps);
      }
    }
  },
  /// #endif
  /// #if WECHAT
  created() {
    this.pickerVisible = false;
    const [visible, defaultVisible] = getValueFromProps(this, [
      'visible',
      'defaultVisible',
    ]);
    this.setData({
      visible: this.isVisibleControlled() ? visible : defaultVisible,
      formattedValueText: this.onFormat(),
    });
  },
  observers: {
    'mixin.value': function () {
      this.setData({
        forceUpdate: this.data.forceUpdate + 1,
        formattedValueText: this.onFormat(),
      });
      // 展开状态才更新picker的数据，否则下次triggerVisible触发
      if (this.pickerVisible) {
        this.setCurrentValue(getValueFromProps(this));
      }
    },
    'visible': function (data) {
      const prevVisible = this._prevVisible;
      this._prevVisible = data;
      const currentProps = getValueFromProps(this);
      const visible = getValueFromProps(this, 'visible');
      if (this.isVisibleControlled() && prevVisible !== visible) {
        this.pickerVisible = visible;
        this.setData({
          visible,
        });
        if (this.pickerVisible) {
          this.setCurrentValue(currentProps);
        }
      }
    },
  },
  /// #endif
});
