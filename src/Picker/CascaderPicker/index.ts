import { CascaderDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import equal from 'fast-deep-equal';
import mixinValue from '../../mixins/value';

const component2 = my.canIUse('component2');

Component({
  pickerVisible: false,
  props: CascaderDefaultProps,
  data() {
    return {
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、picker变化时更新
      columns: [], // 可选项，didmound、弹窗打开、picker变化时更新
    };
  },
  mixins: [mixinValue()],
  onInit() {
    this.initColumns();
  },
  didMount() {
    if (!component2) {
      this.initColumns();
    }
  },
  didUpdate(prevProps) {
    const { value, options } = this.props;
    const { columns, currentValue } = this.data;
    // onTriggerPicker展开时会自动重置数据，此处只有展开状态下才需要重置columns和currentValue，否则只需设置cValue
    if (this.pickerVisible) {
      if (options !== prevProps.options) {
        const newData: any = {};
        if (!equal(value, prevProps.value)) {
          const newColumns = this.getterColumns(value);
          newData.columns = newColumns;
          const currentValue = this.getValidValue(value, newColumns);
          newData.currentValue = currentValue;
        } else {
          const newColumns = this.getterColumns(currentValue);
          newData.columns = newColumns;
        }
        this.setData(newData);
      } else {
        if (!equal(value, prevProps.value)) {
          const realValue = this.getValue();
          const currentValue = this.getValidValue(realValue, columns);
          this.setData({ currentValue });
        }
      }
    } else {
      const realValue = this.getValue();
      if (!equal(value, prevProps.value)) {
        this.setData({
          cValue: value,
          currentValue: this.getValidValue(realValue, columns),
        });
      }
    }
  },

  methods: {
    initColumns() {
      const realValue = this.getValue();
      const columns = this.getterColumns(realValue);
      // 首次无需校验value有效性，onOk时会校验
      this.setData({ columns });
    },
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
      const { onChange } = this.props;
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
      if (onChange) {
        onChange(
          selectedValue,
          this.getOptionByValue(selectedValue),
          fmtEvent(this.props)
        );
      }
    },
    async onOk() {
      const { currentValue, columns } = this.data;
      const { onOk } = this.props;
      // 完成时再次校验value，避免visible状态下props无效
      const validValue = this.getValidValue(currentValue, columns);
      if (!this.isControlled()) {
        this.update(validValue);
      }
      if (onOk) {
        onOk(
          validValue,
          this.getOptionByValue(validValue),
          fmtEvent(this.props)
        );
      }
    },
    onVisibleChange(visible) {
      const { onVisibleChange } = this.props;
      const { columns } = this.data;
      this.pickerVisible = visible;
      const realValue = this.getValue();
      if (visible) {
        const newColumns = this.getterColumns(realValue);
        const currentValue = this.getValidValue(realValue, newColumns);
        const newData: any = { currentValue };
        if (!equal(columns, newColumns)) {
          newData.columns = newColumns;
        }
        this.setData(newData);
      }
      if (onVisibleChange) {
        onVisibleChange(visible, fmtEvent(this.props));
      }
    },
    defaultFormat(value, options) {
      if (options) {
        return options.map((v) => v.label).join('');
      }
      return '';
    },
    onFormat() {
      const realValue = this.getValue();
      const { onFormat } = this.props;
      const formatValueByProps =
        onFormat && onFormat(realValue, this.getOptionByValue(realValue));
      if (typeof formatValueByProps !== 'undefined') {
        return formatValueByProps;
      }
      return this.defaultFormat(realValue, this.getOptionByValue(realValue));
    },

    onCancel(e) {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel(fmtEvent(this.props, e));
      }
    },
  },
});
