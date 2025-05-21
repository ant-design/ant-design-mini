import { effect } from '@preact/signals-core';
import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import computed from '../../mixins/computed';
import mixinValue from '../../mixins/value';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../../_util/simply';
import i18nController from '../../_util/store';
import {
  getDateByValue,
  getRangeData,
  getValidValue,
  getValueByDate,
} from '../util';
import { DateRangePickerDefaultProps } from './props';

ComponentWithSignalStoreImpl({
  storeOptions: {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  props: DateRangePickerDefaultProps,
  data: {
    currentValue: [], // 当前picker选中值，didmount、弹窗打开、切换开始结束、picker变化时更新
    columns: [], // 当前可选项，didmound、弹窗打开、切换开始结束、picker变化时更新
    pickerType: 'start' as 'start' | 'end',
    currentStartDate: null, // 展开时开始时间，date格式，有value，则取value[0]，否则取当天，需要判断当天是否在可选范围内
    currentEndDate: null, // 展开时开始时间，date格式，有value，则取value[1]，否则取开始时间
    forceUpdate: 0, // 强制更新picker组件，已知需处理的情况：value超限，但是需要更新format，由于picker的参数均未变化，无法触发picker的渲染
    formattedValueText: '',
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
    computed() {
      const { currentStartDate, currentEndDate, pickerType } = this.data;
      const format = getValueFromProps(this, 'format');

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
    getMin(min) {
      return min ? dayjs(min as any) : dayjs().subtract(10, 'year');
    },

    getMax(max) {
      return max ? dayjs(max as any) : dayjs().add(10, 'year');
    },
    // didUpdate、弹窗打开、切换pickerType触发
    setCurrentValue(currentProps) {
      const { pickerVisible } = this; // 隐藏状态下从CValue触发，展开状态使用当前数据
      const { precision } = currentProps;
      const { pickerType, columns } = this.data;
      const realValue = this.getValue();
      let { currentStartDate, currentEndDate } = this.data;
      const currentStartDateByCValue = realValue?.[0] || null;
      const currentEndDateByCValue = realValue?.[1] || null;

      // 展开状态，说明在切换pickerType
      if (pickerVisible) {
        if (pickerType === 'start') {
          if (!currentStartDate) {
            currentStartDate = currentEndDate;
          }
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
          const min = this.getMin(currentProps.min).toDate();
          const { max } = currentProps;
          currentStartDate = new Date();
          if (
            (min && dayjs(currentStartDate).isBefore(min, precision)) ||
            (max && dayjs(currentStartDate).isAfter(max, precision)) ||
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
      const newColumns = this.generateData(currentValue, currentProps);
      if (!equal(newColumns, columns)) {
        this.setData({ columns: newColumns }, () => {
          this.setData({
            currentStartDate,
            currentEndDate,
            currentValue,
            formattedValueText: this.onFormat(),
          });
        });
      } else {
        this.setData({
          currentStartDate,
          currentEndDate,
          currentValue,
          formattedValueText: this.onFormat(),
        });
      }
    },
    /**
     * 生成选项数据，didmound、picker change、打开弹窗、切换picker type触发
     */
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

    onChange(selectedIdx) {
      let [selectedIndex] = resolveEventValues(getValidValue(selectedIdx));
      const [format, precision, pmax, pmin] = getValueFromProps(this, [
        'format',
        'precision',
        'max',
        'min',
      ]);
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
      const { pickerType, columns, currentEndDate, currentStartDate } =
        this.data;
      const newData: any = {
        currentValue: selectedIndex,
        formattedValueText: this.onFormat(),
      };
      if (pickerType === 'start') {
        newData.currentStartDate = date;
        if (currentEndDate && dayjs(date).isAfter(currentEndDate)) {
          newData.currentEndDate = null;
        }
      } else {
        newData.currentEndDate = date;
        if (currentStartDate && dayjs(date).isBefore(currentStartDate)) {
          newData.currentStartDate = null;
        }
      }
      const newColumns = this.generateData(
        selectedIndex,
        getValueFromProps(this)
      );
      if (!equal(newColumns, columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData(newData);
            triggerEventValues(this, 'pickerChange', [
              pickerType,
              date,
              dayjs(date).format(format),
            ]);
          }
        );
      } else {
        this.setData(newData);
        triggerEventValues(this, 'pickerChange', [
          pickerType,
          date,
          dayjs(date).format(format),
        ]);
      }
    },

    onCancel(e) {
      triggerEventOnly(this, 'cancel', e);
    },

    onOk() {
      const format = getValueFromProps(this, 'format');
      const { currentStartDate, currentEndDate } = this.data;
      const realValue = [currentStartDate, currentEndDate] as any;
      if (!this.isControlled()) {
        this.update(realValue);
      }
      triggerEventValues(this, 'ok', [
        realValue,
        realValue.map((v) => dayjs(v).format(format)),
      ]);
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
    defaultFormat(date, valueStrs) {
      const [format, splitCharacter] = getValueFromProps(this, [
        'format',
        'splitCharacter',
      ]);
      if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
        return valueStrs.join(`${splitCharacter}`);
      }
      return '';
    },
    onFormat() {
      const [onFormat, format] = getValueFromProps(this, [
        'onFormat',
        'format',
      ]);
      const realValue = this.getValue();
      const formatValueByProps =
        onFormat &&
        onFormat(
          realValue,
          realValue
            ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
            : null
        );
      if (formatValueByProps !== undefined && formatValueByProps !== null) {
        return formatValueByProps;
      }
      return this.defaultFormat(
        realValue,
        realValue
          ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
          : null
      );
    },
    /**
     * 显示/隐藏切换
     * @param visible
     */
    onVisibleChange(visible) {
      if (!this.isVisibleControlled() && visible) {
        this.setData({ pickerType: 'start' });
        this.setCurrentValue(getValueFromProps(this));
        this.pickerVisible = visible;
      }
      triggerEvent(this, 'visibleChange', resolveEventValue(visible));
    },
    onChangeCurrentPickerType(e) {
      const { type } = e.currentTarget.dataset;
      const { pickerType } = this.data;
      if (type !== pickerType) {
        this.setData({
          pickerType: type,
        });
        this.setCurrentValue(getValueFromProps(this));
      }
    },
  },
  mixins: [
    mixinValue({
      transformValue(value) {
        return {
          value:
            value && value[0] && value[1]
              ? [dayjs(value[0]).toDate(), dayjs(value[1]).toDate()]
              : undefined,
          needUpdate: true,
        };
      },
    }),
    computed(),
  ],
  /// #if ALIPAY || ALIPAYNATIVE
  didMount() {
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
      this.setData({ visible });
      this.setCurrentValue(currentProps);
      this.pickerVisible = visible;
    }

    if (!this.isEqualValue(prevData)) {
      this.setData({
        forceUpdate: this.data.forceUpdate + 1,
        formattedValueText: this.onFormat(),
      });
      if (this.pickerVisible) {
        // 展开状态才更新picker的数据，否则下次triggerVisible触发
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
    'visible': function (data) {
      const prevVisible = this._prevVisible;
      this._prevVisible = data;
      const currentProps = getValueFromProps(this);
      const visible = getValueFromProps(this, 'visible');
      if (this.isVisibleControlled() && prevVisible !== visible) {
        this.setData({ visible });
        this.setCurrentValue(currentProps);
        this.pickerVisible = visible;
      }
    },
    'mixin.value': function () {
      const currentProps = getValueFromProps(this);
      this.setData({
        forceUpdate: this.data.forceUpdate + 1,
        formattedValueText: this.onFormat(),
      });
      if (this.pickerVisible) {
        // 展开状态才更新picker的数据，否则下次triggerVisible触发
        this.setCurrentValue(currentProps);
      }
    },
  },
  /// #endif
});
