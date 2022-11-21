import equal from 'fast-deep-equal';
import { PickerDefaultProps } from './props';
import {
  getMatchedItemByValue,
  getMatchedItemByIndex,
  getStrictMatchedItemByValue,
} from './utils';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: PickerDefaultProps,
  data: {
    formatValue: '',
    columns: [],
    visible: false,
    selfValue: undefined,
    selectedIndex: [],
  },
  tempSelectedIndex: null,
  single: false,
  isChangingPickerView: false,
  didMount() {
    const columns = this.getterColumns();
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
  didUpdate(prevProps) {
    if (!equal(prevProps.options, this.props.options)) {
      const newColums = this.getterColumns();
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
    if (!equal(this.props.value, prevProps.value)) {
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
  methods: {
    getterColumns() {
      let columns = [];
      if (this.props.options.length > 0) {
        if (this.props.options.every((item) => item instanceof Array)) {
          this.single = false;
          columns = this.props.options.slice();
        } else {
          this.single = true;
          columns = [this.props.options];
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
    getValue() {
      const { defaultValue, value } = this.props;
      const { selfValue } = this.data;
      if (typeof value !== 'undefined') {
        return value;
      }
      if (typeof selfValue !== 'undefined') {
        return selfValue;
      }
      return defaultValue;
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
      const { onTriggerPicker } = this.props;
      if (onTriggerPicker) {
        onTriggerPicker(visible, fmtEvent(this.props));
      }
    },

    onMaskDismiss() {
      const { onDismiss } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onDismiss) {
        return onDismiss(fmtEvent(this.props, { detail: { type: 'mask' } }));
      }
    },

    onDismiss() {
      const { onDismiss } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onDismiss) {
        return onDismiss(fmtEvent(this.props, { detail: { type: 'cancel' } }));
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
      if (this.props.onBeforeOk) {
        const isContinue = await this.props.onBeforeOk(
          matchedValues,
          matchedColumn,
          fmtEvent(this.props)
        );
        if (!isContinue) {
          return;
        }
      }
      if (typeof this.props.value === 'undefined') {
        this.setData({
          selfValue: matchedValues,
        });
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
