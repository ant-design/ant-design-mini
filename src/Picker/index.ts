import { PickerDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formed from '../Form/mixin';
import { getMatchedValuesByValue, getMatchedValuesByIndex } from './utils';

Component({
  mixins: [
    controlled({
      defaultPropsValue: [],
      propsTriggerChange: 'onOk',
    }),
    formed({
      propsTriggerChange: 'onOk',
    }),
  ],
  props: PickerDefaultProps,
  data: {
    visible: false,
    formatValue: '',
  },

  didMount() {
    this.tempSelectedIndex = null;
    this.formatText(this.props.value);
  },
  didUpdate() {
    this.formatText();
  },
  methods: {
    formatText(value?) {
      const { onFormat, data } = this.props;
      const { cValue } = this.data;
      const realValue = value || cValue;
      let formatValue = '';
      if (onFormat && realValue && realValue.length > 0) {
        formatValue = onFormat(realValue, data);
      }
      if (this.data.formatValue !== formatValue) {
        this.setData({ formatValue });
      }
    },
    triggerPicker() {
      const { disabled, onTriggerPicker } = this.props;
      if (!disabled) {
        this.tempSelectedIndex = null;
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
      this.setData({
        visible: false,
      });
      if (onDismiss) {
        return onDismiss();
      }
    },

    onChange(e) {
      const { onChange } = this.props;
      const { value: selectedIndex } = e.detail;
      this.tempSelectedIndex = selectedIndex;
      const { matchedColumn, matchedValues } = getMatchedValuesByIndex(
        this.props.data,
        this.tempSelectedIndex
      );
      if (onChange) {
        onChange(matchedValues, matchedColumn);
      }
    },

    onOk() {
      let result;
      if (this.tempSelectedIndex) {
        result = getMatchedValuesByIndex(
          this.props.data,
          this.tempSelectedIndex
        );
      } else {
        result = getMatchedValuesByValue(this.props.data, this.data.cValue);
      }
      const { matchedColumn, matchedValues } = result;
      this.triggerChange(matchedValues, matchedColumn);
      this.setData({
        visible: false,
      });
    },
  },
});
