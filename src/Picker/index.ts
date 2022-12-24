import equal from 'fast-deep-equal';
import { PickerDefaultProps } from './props';
import {
  getMatchedItemByValue,
  getMatchedItemByIndex,
  getStrictMatchedItemByValue,
} from './utils';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

const component2 = my.canIUse('component2');

Component({
  props: PickerDefaultProps,
  data: {
    formatValue: '',
    columns: [],
    visible: false,
    selectedIndex: [],
  },
  mixins: [mixinValue()],
  tempSelectedIndex: null,
  single: false,
  isChangingPickerView: false,
  onInit() {
    this.initData();
  },
  didMount() {
    if (!component2) {
      this.initData();
    }
  },
  deriveDataFromProps(nextProps) {
    this.updateValue(this.props, nextProps);
  },
  didUpdate(prevProps) {
    if (!component2) {
      this.updateValue(prevProps, this.props);
    }
  },
  methods: {
    initData() {
      const columns = this.getterColumns(this.props.options);
      this.setData(
        {
          columns,
        },
        () => {
          const formatValue = this.getterFormatText();
          const selectedIndex = this.getterSelectedIndex();
          this.setData({
            formatValue,
            selectedIndex,
          });
        }
      );
    },
    updateValue(prevProps, currentProps) {
      if (!equal(prevProps.options, currentProps.options)) {
        const newColums = this.getterColumns(currentProps.options);
        this.setData(
          {
            columns: newColums,
          },
          () => {
            // 如果是在滚动过程中columns发生变化，以onChange里抛出的selectedIndex为准
            if (!this.isChangingPickerView) {
              this.tempSelectedIndex = null;
              const selectedIndex = this.getterSelectedIndex();
              this.setData({
                selectedIndex,
              });
            }
            this.isChangingPickerView = false;
          }
        );
      }
      if (!equal(currentProps.value, prevProps.value)) {
        const selectedIndex = this.getterSelectedIndex();
        this.tempSelectedIndex = null;
        this.setData({
          selectedIndex,
        });
      }
      const formatValue = this.getterFormatText();
      if (formatValue !== this.data.formatValue) {
        this.setData({
          formatValue,
        });
      }
    },
    getterColumns(options) {
      let columns = [];
      if (options.length > 0) {
        if (options.every((item) => item instanceof Array)) {
          this.single = false;
          columns = options.slice();
        } else {
          this.single = true;
          columns = [options];
        }
      }
      return columns;
    },
    defaultFormat(value, column) {
      if (column instanceof Array) {
        return column
          .filter((c) => c !== undefined)
          .map(function (c) {
            if (typeof c === 'object') {
              return c.label;
            }
            return c;
          })
          .join('-');
      }
      return (column && column.label) || column || '';
    },
    getterFormatText() {
      const { onFormat } = this.props;
      const { columns } = this.data;
      const realValue = this.getValue();
      const { matchedColumn } = getStrictMatchedItemByValue(
        columns,
        realValue,
        this.single
      );
      const formatValueByProps = onFormat && onFormat(realValue, matchedColumn);
      if (typeof formatValueByProps !== 'undefined') {
        return formatValueByProps;
      }
      return this.defaultFormat(realValue, matchedColumn);
    },
    getterSelectedIndex() {
      const selectedIndex = [];
      const columns = this.data.columns;
      const realValue = this.getValue();
      let value = realValue;
      if (this.single) {
        value = [realValue];
      }
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const compareValue = value[i];
        if (compareValue === undefined || compareValue === null) {
          selectedIndex[i] = 0;
        }
        let index = column.findIndex((c) => {
          return c === compareValue || c.value === compareValue;
        });
        if (index === -1) {
          index = 0;
        }
        selectedIndex[i] = index;
      }
      return selectedIndex;
    },

    onOpen() {
      const { disabled } = this.props;
      if (!disabled) {
        this.tempSelectedIndex = null;
        this.setData({
          visible: true,
        });
        this.triggerPicker(true);
      }
    },

    triggerPicker(visible) {
      const { onVisibleChange } = this.props;
      if (onVisibleChange) {
        onVisibleChange(visible, fmtEvent(this.props));
      }
    },

    onMaskDismiss() {
      const { onCancel } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onCancel) {
        return onCancel(fmtEvent(this.props, { detail: { type: 'mask' } }));
      }
    },

    onCancel() {
      const { onCancel } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onCancel) {
        return onCancel(fmtEvent(this.props, { detail: { type: 'cancel' } }));
      }
    },

    onChange(e) {
      const { onChange } = this.props;
      const { value: selectedIndex } = e.detail;
      this.tempSelectedIndex = selectedIndex;
      this.isChangingPickerView = true;
      const { matchedColumn, matchedValues } = getMatchedItemByIndex(
        this.data.columns,
        this.tempSelectedIndex,
        this.single
      );
      this.setData({
        selectedIndex,
      });
      if (onChange) {
        onChange.call(
          this,
          matchedValues,
          matchedColumn,
          fmtEvent(this.props, e)
        );
      }
    },

    async onOk() {
      let result;
      if (this.tempSelectedIndex) {
        result = getMatchedItemByIndex(
          this.data.columns,
          this.tempSelectedIndex,
          this.single
        );
      } else {
        result = getMatchedItemByValue(
          this.data.columns,
          this.getValue(),
          this.single
        );
      }
      const { matchedColumn, matchedValues } = result;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (!this.isControlled()) {
        this.update(matchedValues);
      }
      if (this.props.onOk) {
        this.props.onOk.call(
          this,
          matchedValues,
          matchedColumn,
          fmtEvent(this.props)
        );
      }
    },
  },
});
