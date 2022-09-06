import equal from 'fast-deep-equal';
import { PickerDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';
import {
  getMatchedItemByValue,
  getMatchedItemByIndex,
  getStrictMatchedItemByValue,
} from './utils';
import fmtEvent from '../_util/fmtEvent';

Component({
  mixins: [controlled(), formMixin({ trigger: 'onOk' })],
  props: PickerDefaultProps,
  data: {
    formatValue: '',
    columns: [],
    visible: false,
  },
  tempSelectedIndex: null,
  single: false,
  isChangingPickerView: false,
  didMount() {
    const columns = this.getterColumns();
    this.setData({
      columns
    }, () => {
      const formatValue = this.getterFormatText()
      const selectedIndex = this.getterSelectedIndex()
      this.setData({
        formatValue,
        selectedIndex
      })
    })
  },
  didUpdate(prevProps, prevData) {
    const { cValue } = this.data;
    const { cValue: prevCValue } = prevData;
    if (!equal(prevProps.data, this.props.data)) {
      const newColums = this.getterColumns();
      this.setData({
        columns: newColums
      }, () => {
        // 如果是在滚动过程中columns发生变化，以onChange里抛出的selectedIndex为准
        if (!this.isChangingPickerView) {
          this.tempSelectedIndex = null;
          const selectedIndex = this.getterSelectedIndex()
          this.setData({
            selectedIndex
          })
        }
        this.isChangingPickerView = false;
      })
    }
    if (!equal(cValue, prevCValue)) {
      const selectedIndex = this.getterSelectedIndex()
      this.tempSelectedIndex = null;
      this.setData({
        selectedIndex,
      })
    }
    const formatValue = this.getterFormatText()
    if (formatValue !== this.data.formatValue) {
      this.setData({
        formatValue
      })
    }
  },
  methods: {
    getterColumns() {
      let columns = [];
      if (this.props.data.length > 0) {
        if (this.props.data.every((item) => item instanceof Array)) {
          this.single = false;
          columns = this.props.data.slice();
        } else {
          this.single = true;
          columns = [this.props.data];
        }
      }
      return columns;
    },
    getterFormatText() {
      const { onFormat } = this.props;
      const { cValue, columns } = this.data;
      let formatValue = '';
      const { matchedColumn } = getStrictMatchedItemByValue(
        columns,
        cValue,
        this.single
      );
      formatValue = onFormat(cValue, matchedColumn, this.props.data);
      return formatValue;
    },

    getterSelectedIndex() {
      const selectedIndex = [];
      const columns = this.data.columns;
      const { cValue } = this.data;
      let value = cValue;
      if (this.single) {
        value = [cValue];
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
        return onDismiss(fmtEvent(this.props, { detail: {type: 'mask'} }));
      }
    },
 
    onDismiss() {
      const { onDismiss } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (onDismiss) {
        return onDismiss(fmtEvent(this.props, { detail: {type: 'cancel'} }));
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
      if (onChange) {
        onChange.call(this, matchedValues, matchedColumn, fmtEvent(this.props, e));
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
          this.data.cValue,
          this.single
        );
      }
      const { matchedColumn, matchedValues } = result;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
      if (this.props.onBeforeOk) {
        const isContinue = await this.props.onBeforeOk(matchedValues, matchedColumn, fmtEvent(this.props));
        if (!isContinue) {
          return
        }
      }
      this.setData({
        cValue: matchedValues,
      });
      if (this.props.onOk) {
        this.props.onOk.call(this, matchedValues, matchedColumn, fmtEvent(this.props));
      }
    },
  },
});
