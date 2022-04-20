import { PickerDefaultProps } from './props';
import computed from '../mixins/computed';
import controlled from '../mixins/controlled';
import equal from 'fast-deep-equal';
import formMixin from '../mixins/form';
import _extends from '@babel/runtime/helpers/extends';
import { store } from '../Form/store';

const noop = (v) => {
  return v.join(',');
};

Component({
  mixins: [computed, controlled(), formMixin()],
  props: _extends({}, { onFormat: noop }, PickerDefaultProps),
  data: {
    visible: false,
    cValue: [],
    showValue: [],
    valueIndex: [],
    changeValue: [],
  },
  onInit() {
    const updatePickerFiledValue = (v) => {
      const changeValue = v.map((item, index) => {
        return this.props.data[index].findIndex((target) => item === target);
      });
      this.formatValue = v;
      const showValue = this.props.onFormat ? this.props.onFormat(v) : noop(v);
      this.setData({
        showValue,
        valueIndex: changeValue,
      });
    };
    if (!this.$page._getCurrentField) return;
    const { form: formFn, field: fieldFn } = this.$page._getCurrentField();
    const form = formFn();
    const field = fieldFn();
    store.addUpdateFiledValue(form, field, updatePickerFiledValue);
  },
  didMount() {
    const { data } = this.props;
    this.dataList = data;
    this.transferValue();
  },
  didUpdate(prevProps) {
    if (!equal(prevProps.value, this.props.value)) {
      const pValueIndex = [];
      for (let i = 0; i < this.props.value.length; i++) {
        pValueIndex.push(this.dataList[i].indexOf(this.props.value[i]));
      }
      this.formatValueFn(pValueIndex);
      this.setData({
        valueIndex: pValueIndex,
      });
    }
    this.correctChangeValue(prevProps.data, this.props.data);
  },
  methods: {
    correctChangeValue(prevData, curData) {
      const shouldCorrectChangeIndex =
        prevData.some((col, index) => col.length !== curData[index].length);
      if (shouldCorrectChangeIndex) {
        const newChangedValue = this.data.changeValue.map((colIndex, index) => {
          // 长度 大 -> 小 取小
          if (prevData[index].length > curData[index].length) {
            return curData[index].length - 1;
          }
          return colIndex;
        });
        this.setData({
          changeValue: newChangedValue,
        });
      }
    },
    transferValue() {
      const { cValue } = this.data;
      const newValue = [];
      if (this.dataList && cValue) {
        for (let i = 0; i < cValue.length; i++) {
          newValue.push(this.dataList[i].indexOf(cValue[i]));
        }
      }
      this.formatValueFn(newValue);
    },
    computed(props) {
      const { value } = props;
      return {
        cValue: value,
        showValue: this.props?.onFormat(this.formatValue ? this.formatValue : []),
      };
    },
    triggerPicker() {
      const { disabled, onTriggerPicker } = this.props;
      const { valueIndex, cValue } = this.data;
      if (this.dataList && valueIndex.length <= 0) {
        const vIndex = [];
        for (let i = 0; i < cValue.length; i++) {
          vIndex.push(this.dataList[i].indexOf(cValue[i]));
        }
        this.setData({
          valueIndex: vIndex,
        });
      }
      if (!disabled) {
        this.setData({
          visible: true,
        });
      }
      if (onTriggerPicker) {
        onTriggerPicker.call(this.props);
      }
    },
    onDismiss() {
      const { onDismiss } = this.props;
      if (onDismiss) {
        this.setData({
          changeValue: this.data.valueIndex,
          visible: false,
        });
        return onDismiss();
      }
    },
    onChange(v) {
      const { onChange } = this.props;

      if (onChange) {
        const { value } = v.detail;
        const valueTemp = [];
        if (this.dataList) {
          for (let i = 0; i < value.length; i++) {
            valueTemp.push(this.dataList[i][value[i]]);
          }
        }
        this.setData({
          changeValue: value,
          cValue: valueTemp,
        });
        onChange.call(this.props, valueTemp);
      }
    },
    onOk() {
      const { onOk, isDatePicker, onChange } = this.props;
      const { changeValue } = this.data;
      let pickerValueChanged = false;
      if (changeValue?.length) {
        for (let i = 0; i < changeValue.length; i++) {
          if (changeValue[i] !== this.data.valueIndex[i]) {
            pickerValueChanged = true;
          }
        }
      }
      if (pickerValueChanged || isDatePicker) {
        this.formatValueFn(changeValue);
        this.setData({
          cValue: this.formatValue,
          showValue: this.props.onFormat(this.formatValue),
          valueIndex: changeValue,
          visible: false,
        });
        onOk?.(changeValue);
        const { _getCurrentField } = this.props;
        if (_getCurrentField) {
          onChange.call(this.props, this.formatValue);
        } else {
          onChange?.(changeValue);
        }

        pickerValueChanged = false;
      } else {
        this.setData({
          visible: false,
        });
      }
    },
    formatValueFn(nv) {
      this.formatValue = [];
      for (let i = 0; i < nv.length; i++) {
        this.formatValue.push(this.dataList[i][nv[i]]);
      }
    },
  },
});
