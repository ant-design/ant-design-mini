import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import formMixin from '../mixins/form';
import equal from 'fast-deep-equal';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
  isEqualDate,
} from './util';
import fmtEvent from '../_util/fmtEvent';

Component({
  mixins: [formMixin({ trigger: 'onOk' })],

  props: DatePickerDefaultProps,

  data() {
    return {
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
      columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
      cValue: null,
      forceUpdate: 0, // 强制更新picker组件，已知需处理的情况：value超限，但是需要更新format，由于picker的参数均未变化，无法触发picker的渲染
    };
  },

  didMount() {
    this._visible = false;
    const cValue = this.getValidPropValue();
    this.setData({
      cValue,
    });
  },

  didUpdate(prevProps) {
    if (!isEqualDate(prevProps.value, this.props.value)) {
      const cValue = this.getValidPropValue();
      this.setData({
        cValue,
        forceUpdate: this.data.forceUpdate + 1,
      });
      // 展开状态才更新picker的数据，否则下次triggerVisible触发
      if (this._visible) {
        this.setCurrentValue();
      }
    }
  },
  methods: {
    // 当前选中的picker值，处理无cValue时的情况，优先取当前时间，不在时间范围内取开始时间
    getCurrentValueWithCValue() {
      const { cValue } = this.data;
      const { min, max, precision } = this.props;
      if (cValue) {
        return getValueByDate(cValue, precision);
      } else {
        const now = new Date();
        if (
          !(min && dayjs(now).isBefore(dayjs(min))) &&
          !(max && dayjs(now).isAfter(dayjs(max)))
        ) {
          return getValueByDate(now, precision);
        } else {
          return getValueByDate(this.getMin().toDate(), precision);
        }
      }
    },

    // 判断value是否有效
    getValidPropValue() {
      const { min, max, value } = this.props;
      let cValue = null;
      if (
        value instanceof Date &&
        (!min || value >= min) &&
        (!max || value <= max)
      ) {
        cValue = value;
      }
      return cValue;
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
                selectedIndex,
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
            selectedIndex,
            fmtEvent(this.props)
          );
        }
      }
    },

    onDismiss(e) {
      const { onDismiss } = this.props;
      if (onDismiss) {
        onDismiss(fmtEvent(this.props, e));
      }
    },

    onOk() {
      const { currentValue } = this.data;
      const { format } = this.props;
      const date = getDateByValue(currentValue);
      this.setData({ cValue: date });
      if (this.props.onOk) {
        this.props.onOk(
          date,
          dayjs(date).format(format),
          currentValue,
          fmtEvent(this.props)
        );
      }
    },

    onFormat(values) {
      const { onFormat, format, value } = this.props;
      const { cValue } = this.data;
      const realValue = cValue || value;
      return onFormat.call(
        this,
        realValue,
        realValue ? dayjs(realValue).format(format) : null,
        values
      );
    },

    onTriggerPicker(visible) {
      this._visible = visible;
      const { onTriggerPicker } = this.props;
      if (visible) {
        this.setCurrentValue();
      }
      if (onTriggerPicker) {
        onTriggerPicker(visible, fmtEvent(this.props));
      }
    },
  },
});
