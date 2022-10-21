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
  isEqualDate,
} from '../DatePicker/util';
import fmtEvent from '../_util/fmtEvent';

Component({
  mixins: [computed, formMixin({ trigger: 'onOk' })],

  props: DateRangePickerDefaultProps,

  data() {
    return {
      cValue: null,
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、切换开始结束、picker变化时更新
      columns: [], // 当前可选项，didmound、弹窗打开、切换开始结束、picker变化时更新
      pickerType: 'start' as 'start' | 'end',
      currentStartDate: null, // 展开时开始时间，date格式，有value，则取value[0]，否则取当天，需要判断当天是否在可选范围内
      currentEndDate: null, // 展开时开始时间，date格式，有value，则取value[1]，否则取开始时间
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
    if (
      !isEqualDate(prevProps.value?.[0], this.props.value?.[0]) ||
      !isEqualDate(prevProps.value?.[1], this.props.value?.[1])
    ) {
      const cValue = this.getValidPropValue();
      this.setData({
        cValue,
        forceUpdate: this.data.forceUpdate + 1,
      });
      if (this._visible) {
        // 展开状态才更新picker的数据，否则下次triggerVisible触发
        this.setCurrentValue();
      }
    }
  },
  methods: {
    // 判断value是否有效
    getValidPropValue() {
      const { value, min, max } = this.props;
      let cValue = null;
      if (
        value?.[0] instanceof Date &&
        (!min || value[0] >= min) &&
        (!max || value[0] <= max)
      ) {
        cValue = [value[0]];
      }
      if (
        value?.[1] instanceof Date &&
        (!min || value[1] >= min) &&
        (!max || value[1] <= max)
      ) {
        if (cValue) {
          cValue.push(value[1]);
        } else {
          cValue = [null, value[1]];
        }
      }
      return cValue;
    },
    computed() {
      const { currentStartDate, currentEndDate, pickerType } = this.data;
      const { format } = this.props;
      if (pickerType)
        return {
          currentStartValueStr: currentStartDate
            ? dayjs(currentStartDate).format(format)
            : '',
          currentEndValueStr: currentEndDate
            ? dayjs(currentEndDate).format(format)
            : '',
        };
    },
    getMin() {
      const { min } = this.props;
      const { pickerType, currentStartDate, currentEndDate } = this.data;
      let realMin = min;
      if (pickerType === 'end') {
        if (currentStartDate) {
          realMin = currentStartDate;
        }
        if (
          currentStartDate &&
          min &&
          dayjs(currentStartDate).isAfter(dayjs(min))
        ) {
          realMin = currentStartDate;
        }
      }
      //@ts-ignore
      let res = realMin ? dayjs(realMin) : dayjs().subtract(10, 'year');
      // 从end切回start的情况，end取了打开时的十年前，min再取当前时间十年前会出现>max的情况
      if (currentEndDate && res.isAfter(currentEndDate)) {
        res = dayjs(currentEndDate);
      }
      return res;
    },

    getMax() {
      const { max } = this.props;
      const { pickerType, currentEndDate } = this.data;
      let realMax = max;
      if (pickerType === 'start') {
        if (currentEndDate) {
          realMax = currentEndDate;
        }
        if (
          currentEndDate &&
          max &&
          dayjs(currentEndDate).isBefore(dayjs(max))
        ) {
          realMax = currentEndDate;
        }
      }
      //@ts-ignore
      return realMax ? dayjs(realMax) : dayjs().add(10, 'year');
    },
    // didUpdate、弹窗打开、切换pickerType触发
    setCurrentValue() {
      const { _visible } = this; // 隐藏状态下从CValue触发，展开状态使用当前数据
      const { precision } = this.props;
      const { cValue, pickerType, columns } = this.data;
      let { currentStartDate, currentEndDate } = this.data;
      const currentStartDateByCValue = cValue?.[0] || null;
      const currentEndDateByCValue = cValue?.[1] || null;

      // 展开状态，说明在切换pickerType
      if (_visible) {
        if (pickerType === 'start') {
          // currentStartDate 无需变化
        } else {
          // pickerType=end start已存在
          // 结束时间默认选中开始
          if (!currentEndDate) {
            currentEndDate = currentStartDate;
          }
        }
      } else {
        // 否则是在从cValue初始化
        currentStartDate = currentStartDateByCValue;
        currentEndDate = currentEndDateByCValue;
        // 开始默认取优先取当前时间，不在时间范围内取开始时间
        if (!currentStartDate) {
          const min = this.getMin().toDate();
          const { max } = this.props;
          currentStartDate = new Date();
          if (
            (min && currentStartDate < min) ||
            (max && currentStartDate > max) ||
            (currentEndDateByCValue &&
              currentStartDate > currentEndDateByCValue)
          ) {
            currentStartDate = min;
          }
        }
      }
      const currentValue = getValueByDate(
        pickerType === 'start' ? currentStartDate : currentEndDate,
        precision
      );
      const newColumns = this.generateData(currentValue);
      if (!equal(newColumns, columns)) {
        this.setData({ columns: newColumns }, () => {
          this.setData({ currentStartDate, currentEndDate, currentValue });
        });
      } else {
        this.setData({ currentStartDate, currentEndDate, currentValue });
      }
    },
    /**
     * 生成选项数据，didmound、picker change、打开弹窗、切换picker type触发
     */
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
      const { pickerType, columns } = this.data;
      const newData: any = {
        currentValue: selectedIndex,
      };
      if (pickerType === 'start') {
        newData.currentStartDate = date;
      } else {
        newData.currentEndDate = date;
      }
      const newColumns = this.generateData(selectedIndex);
      if (!equal(newColumns, columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData(newData);
            if (onPickerChange) {
              onPickerChange(
                pickerType,
                date,
                dayjs(date).format(format),
                selectedIndex,
                fmtEvent(this.props)
              );
            }
          }
        );
      } else {
        this.setData(newData);
        if (onPickerChange) {
          onPickerChange(
            pickerType,
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
      const { format, precision } = this.props;
      const { currentStartDate, currentEndDate } = this.data;
      const cValue = [currentStartDate, currentEndDate];
      this.setData({ cValue });
      if (this.props.onOk) {
        this.props.onOk(
          cValue,
          cValue.map((v) => dayjs(v).format(format)),
          cValue.map((v) => getValueByDate(v, precision)),
          fmtEvent(this.props)
        );
      }
    },

    onFormat() {
      const { onFormat, format, precision, value } = this.props;
      const { cValue } = this.data;
      const realValue = cValue && cValue[0] && cValue[1] ? cValue : value;
      return onFormat.call(
        this,
        realValue,
        realValue
          ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
          : null,
        realValue
          ? realValue.map((v) => (v ? getValueByDate(v, precision) : null))
          : null
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
        onTriggerPicker(visible, fmtEvent(this.props));
      }
      this._visible = visible;
    },
    onChangeCurrentPickerType(e) {
      const { type } = e.target.dataset;
      const { pickerType } = this.data;
      if (type !== pickerType) {
        this.setData({
          pickerType: type,
        });
        this.setCurrentValue();
      }
    },
  },
});
