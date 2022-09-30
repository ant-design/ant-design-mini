import { CascaderDefaultProps } from './props';
import formMixin from '../mixins/form';
import fmtEvent from '../_util/fmtEvent';
import equal from 'fast-deep-equal';

Component({
  mixins: [formMixin({ trigger: 'onOk' })],
  _visible: false,
  props: CascaderDefaultProps,
  data() {
    return {
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
      columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
      cValue: null,
    };
  },
  didMount() {
    const { value } = this.props;
    const columns = this.getterColumns(value);
    // 首次无需校验value有效性，onOk时会校验
    this.setData({ columns, cValue: value });
  },
  didUpdate(prevProps) {
    const { value, options } = this.props;
    const { columns, currentValue } = this.data;
    // onTriggerPicker展开时会自动重置数据，此处只有展开状态下才需要重置columns和currentValue，否则只需设置cValue
    if (this._visible) {
      if (options !== prevProps.options) {
        const newData: any = {};
        if (!equal(value, prevProps.value)) {
          const newColumns = this.getterColumns(value);
          newData.columns = newColumns;
          const currentValue = this.getValidValue(value, newColumns);
          newData.currentValue = currentValue;
          newData.cValue = value;
        } else {
          const newColumns = this.getterColumns(currentValue);
          newData.columns = newColumns;
        }
        this.setData(newData);
      } else {
        if (!equal(value, prevProps.value)) {
          const currentValue = this.getValidValue(value, columns);
          this.setData({ cValue: value, currentValue });
        }
      }
    } else {
      if (!equal(value, prevProps.value)) {
        this.setData({
          cValue: value,
          currentValue: this.getValidValue(value, columns),
        });
      }
    }
  },

  methods: {
    getterColumns(value) {
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
      const { options } = this.props;
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
      const { options } = this.props;
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
      const { onPickerChange } = this.props;
      const { columns } = this.data;
      const newColumns = this.getterColumns(selectedValue);
      // columns没变化说明selectedValue在范围内，无需重置
      const newData: any = {};
      if (!equal(columns, newColumns)) {
        selectedValue = this.getValidValue(selectedValue, newColumns);
        newData.columns = newColumns;
      }
      newData.currentValue = selectedValue;
      this.setData(newData);
      if (onPickerChange) {
        onPickerChange(
          selectedValue,
          this.getOptionByValue(selectedValue),
          fmtEvent(this.props)
        );
      }
    },
    async onOk() {
      const { currentValue, columns } = this.data;
      const { onOk, onBeforeOk } = this.props;
      // 完成时再次校验value，避免visible状态下props无效
      const validValue = this.getValidValue(currentValue, columns);
      if (onBeforeOk) {
        const isContinue = await onBeforeOk(
          validValue,
          this.getOptionByValue(validValue),
          fmtEvent(this.props)
        );
        if (!isContinue) {
          return;
        }
      }
      this.setData({ cValue: validValue });
      if (onOk) {
        onOk(
          validValue,
          this.getOptionByValue(validValue),
          fmtEvent(this.props)
        );
      }
    },
    onTriggerPicker(visible) {
      const { onTriggerPicker } = this.props;
      const { cValue, columns } = this.data;
      this._visible = visible;
      if (visible) {
        const newColumns = this.getterColumns(cValue);
        const currentValue = this.getValidValue(cValue, newColumns);
        const newData: any = { currentValue };
        if (!equal(columns, newColumns)) {
          newData.columns = newColumns;
        }
        this.setData(newData);
      }
      if (onTriggerPicker) {
        onTriggerPicker(visible, fmtEvent(this.props));
      }
    },
    onFormat() {
      const { cValue } = this.data;
      return this.props.onFormat.call(
        this,
        cValue,
        this.getOptionByValue(cValue)
      );
    },

    onDismiss(e) {
      const { onDismiss } = this.props;
      if (onDismiss) {
        onDismiss(fmtEvent(this.props, e));
      }
    },
  },
});
