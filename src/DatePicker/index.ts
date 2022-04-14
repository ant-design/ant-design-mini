import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import controlled from '../mixins/controlled';
import equal from 'fast-deep-equal';
import { getRangeData, getDateByValue } from './util';

Component({
  mixins: [
    controlled({
      defaultPropsValue: [],
      propsTriggerChange: 'onOk',
    }),
  ],
  props: DatePickerDefaultProps,
  data: {
    currentValue: [],
    visible: false,
    data: [],
  },
  didMount() {
    this.generateData();
  },
  didUpdate() {
    console.log('update');
  },
  methods: {
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
    generateData() {
      const { precision } = this.props;
      const { data } = this.data;
      const min = this.getMin();
      const max = this.getMax();
      if (max < min) {
        this.setData({ data: [] });
        return;
      }
      let currentPicker = dayjs();
      //@ts-ignore
      if (this.tempSelectedValues) {
        currentPicker = dayjs(getDateByValue(this.tempSelectedValues));
      }
      if (currentPicker < min || currentPicker > max) {
        currentPicker = min;
      }
      const newData = getRangeData(precision, min, max, currentPicker);
      if (!equal(data, newData)) {
        this.setData({ data: newData });
      }
    },
    onChange(selectedValues) {
      this.setData({ currentValue: selectedValues });
      //@ts-ignore
      this.tempSelectedValues = selectedValues;
      this.generateData();
      const { onChange } = this.props;
      if (onChange) {
        onChange(selectedValues);
      }
    },
    onDismiss() {
      const { onDismiss } = this.props;
      if (onDismiss) {
        onDismiss();
      }
    },
    onOk(values, columns) {
      this.triggerChange(values, columns);
    },
    onFormat(values, columns) {
      const { onFormat, format } = this.props;
      const { cValue } = this.data;
      if (onFormat) {
        return onFormat(values, columns);
      }
      if (format && cValue && cValue.length > 0) {
        return dayjs(getDateByValue(cValue)).format(format);
      }
      return '';
    },
    onTriggerPicker(visible) {
      this.setData({ currentValue: null });
      const { onTriggerPicker } = this.props;
      if (onTriggerPicker) {
        onTriggerPicker(visible);
      }
    },
  },
});
