import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../../_util/simply';
import { CascaderDefaultProps } from './props';
import equal from 'fast-deep-equal';
import mixinValue from '../../mixins/value';

Component(
  CascaderDefaultProps,
  {
    // visible受控判断
    isVisibleControlled() {
      return 'visible' in getValueFromProps(this);
    },
    initColumns() {
      const [options, visible, defaultVisible, value, defaultValue] =
        getValueFromProps(this, [
          'options',
          'visible',
          'defaultVisible',
          'value',
          'defaultValue',
        ]);

      const realValue = value || defaultValue || [];
      const columns = this.getterColumns(realValue, options);

      // 首次无需校验value有效性，onOk时会校验
      this.setData({
        columns,
        visible: this.isVisibleControlled() ? visible : defaultVisible,
        currentValue: realValue,
        formattedValueText: this.onFormat(),
      });
    },
    getterColumns(value, options) {
      const getColumns = (options, value, columns = []) => {
        columns.push(options.map((v) => ({ value: v.value, label: v.label })));
        const currentOption =
          options.find((v) => v.value === value?.[columns.length - 1]) ||
          options[0];
        if (currentOption?.children?.length > 0) {
          return getColumns(currentOption.children, value, columns);
        }
        return columns;
      };
      return getColumns(options, value);
    },
    // 获取有效value，若从x项开始在columns里找不到，则从此项开始都选第一条
    getValidValue(value, columns) {
      const result = [];
      for (let i = 0; i < columns.length; i++) {
        if (!columns[i].some((v) => v.value === value?.[i])) {
          result.push(...columns.slice(i).map((v) => v[0].value));
          break;
        } else {
          result[i] = value[i];
        }
      }
      return result;
    },
    getOptionByValue(value) {
      const options = getValueFromProps(this, 'options');
      if (!(value?.length > 0)) return null;
      const result = [];
      let item = options.find((v) => v.value === value[0]);
      for (let i = 0; i < value.length; i++) {
        if (!item) {
          return null;
        }
        result.push({
          value: item.value,
          label: item.label,
        });
        item = item.children?.find((v) => v.value === value[i + 1]);
      }
      return result;
    },
    onChange(selectedValue) {
      const options = getValueFromProps(this, 'options');
      const { columns } = this.data;
      const newColumns = this.getterColumns(selectedValue, options);
      // columns没变化说明selectedValue在范围内，无需重置
      const newData: any = {};
      if (!equal(columns, newColumns)) {
        selectedValue = this.getValidValue(selectedValue, newColumns);
        newData.columns = newColumns;
      }
      newData.currentValue = selectedValue;
      newData.formattedValueText = this.onFormat();
      this.setData(newData);
      triggerEventValues(this, 'change', [
        selectedValue,
        this.getOptionByValue(selectedValue),
      ]);
    },
    async onOk() {
      const { currentValue, columns } = this.data;
      // 完成时再次校验value，避免visible状态下props无效
      const validValue = this.getValidValue(currentValue, columns);
      if (!this.isControlled()) {
        this.update(validValue);
      }
      triggerEventValues(this, 'ok', [
        validValue,
        this.getOptionByValue(validValue),
      ]);
    },
    onVisibleChange(visible) {
      const options = getValueFromProps(this, 'options');
      const { columns } = this.data;
      const realValue = this.getValue();
      if (visible) {
        const newColumns = this.getterColumns(realValue, options);
        const currentValue = this.getValidValue(realValue, newColumns);
        const newData: any = {
          currentValue,
          formattedValueText: this.onFormat(),
        };
        if (!equal(columns, newColumns)) {
          newData.columns = newColumns;
        }
        this.setData(newData);
      }
      triggerEvent(this, 'visibleChange', visible);
    },
    defaultFormat(value, options) {
      if (options) {
        return options.map((v) => v.label).join('');
      }
      return '';
    },
    onFormat() {
      const realValue = this.getValue();
      const onFormat = getValueFromProps(this, 'onFormat');
      const formatValueByProps =
        onFormat && onFormat(realValue, this.getOptionByValue(realValue));
      if (formatValueByProps !== undefined && formatValueByProps !== null) {
        return formatValueByProps;
      }
      return this.defaultFormat(realValue, this.getOptionByValue(realValue));
    },

    onCancel(e) {
      triggerEventOnly(this, 'cancel', e);
    },
  },
  {
    currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
    columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
    formattedValueText: '',
    visible: false,
  },
  [mixinValue()],
  {
    onInit() {
      this.initColumns();
    },
    didUpdate(prevProps, prevData) {
      const options = getValueFromProps(this, 'options');
      if (!equal(options, prevProps.options)) {
        const { currentValue } = this.data;
        const newColumns = this.getterColumns(currentValue, options);
        this.setData({
          columns: newColumns,
        });
      }
      if (!this.isEqualValue(prevData)) {
        const realValue = this.getValue();
        const newColumns = this.getterColumns(realValue, options);
        const currentValue = this.getValidValue(realValue, newColumns);
        this.setData({ currentValue, formattedValueText: this.onFormat() });
      }
      const visible = getValueFromProps(this, 'visible');
      if (this.isVisibleControlled() && !equal(prevProps.visible, visible)) {
        this.setData({ visible });
      }
    },
  }
);
