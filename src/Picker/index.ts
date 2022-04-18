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
      if (
        onFormat &&
        realValue &&
        realValue.length > 0 &&
        realValue.every((v) => v !== undefined)
      ) {
        formatValue = onFormat(realValue, data);
      }
      if (this.data.formatValue !== formatValue) {
        this.setData({ formatValue });
      }
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
        onTriggerPicker(visible);
      }
    },

    onDismiss() {
      const { onDismiss } = this.props;
      this.setData({
        visible: false,
      });
      this.triggerPicker(false);
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
      this.triggerPicker(false);
      this.setData({
        visible: false,
      });
    },
  },
});
