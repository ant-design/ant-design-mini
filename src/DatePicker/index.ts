import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import formMixin from '../mixins/form';
import controlled from '../mixins/controlled';
import equal from 'fast-deep-equal';
import { getRangeData, getDateByValue, getValueByDate } from './util';

Component({
  mixins: [controlled(), formMixin()],

  props: DatePickerDefaultProps,

  data: {
    currentValue: [],
    visible: false,
    data: [],
  },

  didMount() {
    this.generateData();
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
      if (this.tempSelectedIndex) {
        currentPicker = dayjs(getDateByValue(this.tempSelectedIndex));
      }
      if (currentPicker < min || currentPicker > max) {
        currentPicker = min;
      }
      const newData = getRangeData(precision, min, max, currentPicker);
      if (!equal(data, newData)) {
        this.setData({ data: newData });
      }
    },

    onChange(selectedIndex) {
      this.setData({ currentValue: selectedIndex });
      //@ts-ignore
      this.tempSelectedIndex = selectedIndex;
      this.generateData();
      const { onPickerChange, format } = this.props;
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

    onOk(values) {
      const { format } = this.props;
      const date = getDateByValue(values);
      this.setData({ cValue: date });
      if (this.props.onOk) {
        this.props.onOk(date, dayjs(date).format(format), values);
      }
    },

    onFormat(values) {
      const { onFormat, format } = this.props;
      const { cValue } = this.data;
      return onFormat.call(this, cValue, dayjs(cValue).format(format), values);
    },

    onTriggerPicker(visible) {
      const { cValue, data } = this.data;
      this.setData({
        currentValue: cValue ? getValueByDate(cValue, data) : null,
      });
      const { onTriggerPicker } = this.props;
      if (onTriggerPicker) {
        onTriggerPicker(visible);
      }
    },
  },
});
