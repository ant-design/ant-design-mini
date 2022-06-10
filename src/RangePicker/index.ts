import { DateRangePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import formMixin from '../mixins/form';
import computed from '../mixins/computed';
import equal from 'fast-deep-equal';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
} from '../DatePicker/util';
export {
  getRangeData,
  getDateByValue,
  getValueByDate,
} from '../DatePicker/util';

Component({
  mixins: [computed, formMixin({ trigger: 'onOk' })],

  props: DateRangePickerDefaultProps,

  data: {
    cValue: null,
    currentValue: [], // 当前开始/结束的选中值，控制picker-view的选中
    data: [], // 当前可选项，切换开始/结束会变化
    pickerType: 'start' as 'start' | 'end',
    currentStartValue: null, // 展开时开始时间，date格式，有value，则取value[0]，否则取当天，需要判断当天是否在可选范围内
    currentEndValue: null, // 展开时开始时间，date格式，有value，则取value[1]，否则取开始时间
  },

  didMount() {
    const { value, min, max } = this.props;
    if (value && value[0] && value[1] && value[1] >= value[0]) {
      if ((!min || value[0] >= min) && (!max || value[1] <= max)) {
        this.setData({ cValue: value });
      } else {
        console.warn('invalid value');
      }
    }
    this.generateData();
  },

  methods: {
    computed() {
      const { currentStartValue, currentEndValue, pickerType } = this.data;
      const { format } = this.props;
      if (pickerType)
        return {
          currentStartValueStr: currentStartValue
            ? dayjs(currentStartValue).format(format)
            : '',
          currentEndValueStr: currentEndValue
            ? dayjs(currentEndValue).format(format)
            : '',
        };
    },
    getMin() {
      const { min } = this.props;
      const { pickerType, currentStartValue } = this.data;
      let realMin = min;
      if (pickerType === 'end') {
        if (currentStartValue) {
          realMin = currentStartValue;
        }
        if (
          currentStartValue &&
          min &&
          dayjs(currentStartValue).isAfter(dayjs(min))
        ) {
          realMin = currentStartValue;
        }
      }
      //@ts-ignore
      return realMin ? dayjs(realMin) : dayjs().subtract(10, 'year');
    },

    getMax() {
      const { max } = this.props;
      const { pickerType, currentEndValue } = this.data;
      let realMax = max;
      if (pickerType === 'start') {
        if (currentEndValue) {
          realMax = currentEndValue;
        }
        if (
          currentEndValue &&
          max &&
          dayjs(currentEndValue).isBefore(dayjs(max))
        ) {
          realMax = currentEndValue;
        }
      }
      //@ts-ignore
      return realMax ? dayjs(realMax) : dayjs().add(10, 'year');
    },
    /**
     * 每次打开弹窗，重置开始、结束、picker选中值
     */
    setCurrentValue() {
      const { min, max, precision } = this.props;
      const { cValue } = this.data;
      let currentStartValue = null;
      let currentEndValue = null;
      let currentValue = [];
      if (cValue) {
        currentStartValue = cValue[0];
        currentEndValue = cValue[1];
        currentValue = getValueByDate(cValue[0], precision);
      } else {
        currentStartValue = new Date();
        if (min && dayjs(currentStartValue).isBefore(dayjs(min))) {
          currentStartValue = min;
        }
        if (max && dayjs(currentStartValue).isAfter(dayjs(max))) {
          currentStartValue = max;
        }
        currentValue = getValueByDate(currentStartValue, precision);
      }
      this.setData({ currentStartValue, currentEndValue, currentValue });
    },
    /**
     * 生成当前可选项，展开时、切换picker-view时、切换开始/结束时 触发
     */
    generateData() {
      const { precision } = this.props;
      const { data, currentValue } = this.data;
      const min = this.getMin();
      const max = this.getMax();
      if (max < min) {
        this.setData({ data: [] });
        return;
      }
      let currentPickerDay = dayjs();
      if (currentValue.length > 0) {
        currentPickerDay = dayjs(getDateByValue(currentValue));
      }
      if (currentPickerDay < min || currentPickerDay > max) {
        currentPickerDay = min;
      }

      const newData = getRangeData(precision, min, max, currentPickerDay);
      if (!equal(data, newData)) {
        this.setData({ data: newData });
      }
    },

    onChange(selectedIndex) {
      selectedIndex = getValidValue(selectedIndex);
      const { onPickerChange, format, precision } = this.props;
      let date = getDateByValue(selectedIndex);
      const min = this.getMin();
      const max = this.getMax();
      if (dayjs(date).isBefore(min)) {
        date = min.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      if (dayjs(date).isAfter(max)) {
        date = max.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      const { pickerType } = this.data;
      const newData: any = {
        currentValue: selectedIndex,
      };
      if (pickerType === 'start') {
        newData.currentStartValue = date;
      } else {
        newData.currentEndValue = date;
      }
      this.setData(newData);
      this.generateData();
      if (onPickerChange) {
        onPickerChange(
          pickerType,
          date,
          dayjs(date).format(format),
          selectedIndex
        );
      }
    },

    onDismiss() {
      const { onDismiss } = this.props;
      if (onDismiss) {
        onDismiss();
      }
    },

    onOk() {
      const { format, precision } = this.props;
      const { currentStartValue, currentEndValue } = this.data;
      let cValue = null;
      if (currentStartValue && currentEndValue) {
        cValue = [currentStartValue, currentEndValue];
      }
      this.setData({ cValue });
      if (this.props.onOk) {
        this.props.onOk(
          cValue,
          cValue ? cValue.map((v) => dayjs(v).format(format)) : null,
          cValue ? cValue.map((v) => getValueByDate(v, precision)) : null
        );
      }
    },

    onFormat() {
      const { onFormat, format, precision } = this.props;
      const { cValue } = this.data;
      return onFormat.call(
        this,
        cValue,
        cValue ? cValue.map((v) => dayjs(v).format(format)) : null,
        cValue ? cValue.map((v) => getValueByDate(v, precision)) : null
      );
    },
    /**
     * 显示/隐藏切换
     * @param visible
     */
    onTriggerPicker(visible) {
      const { onTriggerPicker } = this.props;
      if (visible) {
        this.setData({ pickerType: 'start' });
        this.setCurrentValue();
      }
      if (onTriggerPicker) {
        onTriggerPicker(visible);
      }
    },
    onChangeCurrentPicker(e) {
      const { type } = e.target.dataset;
      let { pickerType, currentEndValue, currentStartValue } = this.data;
      const { precision } = this.props;
      if (type !== pickerType) {
        if (type === 'end') {
          if (!currentEndValue) {
            currentEndValue = currentStartValue;
          }
        }
        let newDate = type === 'start' ? currentStartValue : currentEndValue;
        this.setData({
          pickerType: type,
          currentEndValue,
          currentValue: newDate ? getValueByDate(newDate, precision) : [],
        });
        this.generateData();
      }
    },
  },
});
