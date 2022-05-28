import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import formMixin from '../mixins/form';
import computed from '../mixins/computed';
import equal from 'fast-deep-equal';
import { getRangeData, getDateByValue, getValueByDate } from './util';

Component({
  mixins: [computed, formMixin()],

  props: DatePickerDefaultProps,

  data: {
    currentValue: [],
    data: [],
    cValue: null,
  },

  didMount() {
    const { value, min, max } = this.props;
    if (value) {
      if ((!min || value >= min) && (!max || value <= max)) {
        this.setData({ cValue: value });
      } else {
        console.warn('invalid value');
      }
    }
    this.generateData();
  },

  methods: {
    computed() {
      const { data, currentValue } = this.data;
      const { min, max, precision } = this.props;
      // currentValue为空为当前时间
      let pikerValue = [];
      if (data && data.length) {
        if (currentValue && currentValue.length) {
          pikerValue = currentValue;
        } else {
          const now = new Date();
          if (
            !(min && dayjs(now).isBefore(dayjs(min))) ||
            !(max && dayjs(now).isAfter(dayjs(max)))
          ) {
            pikerValue = getValueByDate(now, precision);
          }
        }
      }
      return { pikerValue };
    },
    getMin() {
      const { min } = this.props;
      //@ts-ignore
      return min ? dayjs(min) : dayjs().subtract(10, 'year');
    },

    getMax() {
      const { max } = this.props;
      //@ts-ignore
      return max ? dayjs(max) : dayjs().add(10, 'year');
    },
    /**
     * 每次打开弹窗，重置开始、结束、picker选中值
     */
    setCurrentValue() {
      const { cValue } = this.data;
      const { precision } = this.props;
      this.setData({
        currentValue: cValue ? getValueByDate(cValue, precision) : [],
      });
    },
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
      this.setData({ currentValue: selectedIndex });
      this.generateData();

      if (onPickerChange) {
        const date = getDateByValue(selectedIndex);
        onPickerChange(date, dayjs(date).format(format), selectedIndex);
      }
    },

    onDismiss() {
      const { onDismiss } = this.props;
      if (onDismiss) {
        onDismiss();
      }
    },

    onOk() {
      const { currentValue } = this.data;
      const { format } = this.props;
      const date = getDateByValue(currentValue);
      this.setData({ cValue: date });
      if (this.props.onOk) {
        this.props.onOk(date, dayjs(date).format(format), currentValue);
      }
    },

    onFormat(values) {
      const { onFormat, format } = this.props;
      const { cValue } = this.data;
      return onFormat.call(
        this,
        cValue,
        cValue ? dayjs(cValue).format(format) : null,
        values
      );
    },

    onTriggerPicker(visible) {
      const { onTriggerPicker } = this.props;
      if (visible) {
        this.setCurrentValue();
      }
      if (onTriggerPicker) {
        onTriggerPicker(visible);
      }
    },
  },
});
