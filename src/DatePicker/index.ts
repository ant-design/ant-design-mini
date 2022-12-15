import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
  isEqualDate,
} from './util';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

Component({
  props: DatePickerDefaultProps,
  pickerVisible: false,
  data() {
    return {
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
      columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
      forceUpdate: 0, // 强制更新picker组件，已知需处理的情况：value超限，但是需要更新format，由于picker的参数均未变化，无法触发picker的渲染
    };
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
  didMount() {
    this.pickerVisible = false;
  },

  didUpdate(prevProps) {
    if (!isEqualDate(prevProps.value, this.props.value)) {
      this.setData({
        forceUpdate: this.data.forceUpdate + 1,
      });
      // 展开状态才更新picker的数据，否则下次triggerVisible触发
      if (this.pickerVisible) {
        this.setCurrentValue();
      }
    }
  },
  methods: {
    // 当前选中的picker值，处理无cValue时的情况，优先取当前时间，不在时间范围内取开始时间
    getCurrentValueWithCValue() {
      const realValue = this.getValue();
      const { min, max, precision } = this.props;
      if (realValue) {
        return getValueByDate(realValue, precision);
      } else {
        const now = new Date();
        if (
          !(min && dayjs(now).isBefore(dayjs(min as any))) &&
          !(max && dayjs(now).isAfter(dayjs(max as any)))
        ) {
          return getValueByDate(now, precision);
        } else {
          return getValueByDate(this.getMin().toDate(), precision);
        }
      }
    },

    getMin() {
      const { min } = this.props;
      return min ? dayjs(min as any) : dayjs().subtract(10, 'year');
    },

    getMax() {
      const { max } = this.props;
      return max ? dayjs(max as any) : dayjs().add(10, 'year');
    },
    /**
     * didUpdate、弹窗打开触发
     */
    setCurrentValue() {
      const currentValue = this.getCurrentValueWithCValue();
      const newColumns = this.generateData(currentValue);
      if (!equal(newColumns, this.data.columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData({
              currentValue,
            });
          }
        );
      } else {
        this.setData({
          currentValue,
        });
      }
    },

    // 生成选项数据，didmound、picker change、打开弹窗触发
    generateData(currentValue) {
      const { precision } = this.props;
      const min = this.getMin();
      const max = this.getMax();
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
      const newColumns = getRangeData(precision, min, max, currentPickerDay);
      return newColumns;
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
      const newColumns = this.generateData(selectedIndex);
      if (!equal(newColumns, this.data.columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData({ currentValue: selectedIndex });
            if (onPickerChange) {
              const date = getDateByValue(selectedIndex);
              onPickerChange(
                date,
                dayjs(date).format(format),
                fmtEvent(this.props)
              );
            }
          }
        );
      } else {
        this.setData({ currentValue: selectedIndex });
        if (onPickerChange) {
          const date = getDateByValue(selectedIndex);
          onPickerChange(
            date,
            dayjs(date).format(format),
            fmtEvent(this.props)
          );
        }
      }
    },

    onCancel(e) {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel(fmtEvent(this.props, e));
      }
    },

    onOk() {
      const { currentValue } = this.data;
      const { format } = this.props;
      const date = getDateByValue(currentValue);
      if (!this.isControlled()) {
        this.update(date);
      }
      if (this.props.onOk) {
        this.props.onOk(date, dayjs(date).format(format), fmtEvent(this.props));
      }
    },
    defaultFormat(value, valueStr) {
      if (this.props.format && valueStr) {
        return valueStr;
      }
      return '';
    },
    onFormat() {
      const { onFormat, format } = this.props;
      const realValue = this.getValue();
      const formatValueByProps =
        onFormat &&
        onFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
      if (typeof formatValueByProps !== 'undefined') {
        return formatValueByProps;
      }
      return this.defaultFormat(
        realValue,
        realValue ? dayjs(realValue).format(format) : null
      );
    },

    onVisibleChange(visible) {
      this.pickerVisible = visible;
      const { onVisibleChange } = this.props;
      if (visible) {
        this.setCurrentValue();
      }
      if (onVisibleChange) {
        onVisibleChange(visible, fmtEvent(this.props));
      }
    },
  },
});
