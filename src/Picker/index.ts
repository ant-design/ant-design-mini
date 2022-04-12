import { PickerDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formed from '../Form/mixin'

Component({
  mixins: [controlled({
    defaultPropsValue: [],
    propsTriggerChange: 'onOk'
  }),  formed()],
  props:  PickerDefaultProps,
  data: {
    visible: false,
  },

  didMount() {
    this.temp = null
  },

  methods: {  
    triggerPicker() {
      const { disabled, onTriggerPicker } = this.props;     
      if (!disabled) {
        this.temp = null;
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
          visible: false,
        });
        return onDismiss();
      }
    },
  
    onChange(e) {
      const { onChange } = this.props;
      const  { value: selectedIndex } = e.detail
      this.temp  = selectedIndex;
      const value = this.temp.map((v, index) => {
        return  this.props.data[index][v]
      })
      if (onChange) {
        onChange.call(this.props, value);
      }
    },
  
    onOk() {
      let value = ''
      if (this.temp) {
        value = this.temp.map((v, index) => {
          return  this.props.data[index][v]
        })
      } else {
        value = this.data.cValue
      }
      this.triggerChange(value)
      this.setData({
        visible: false
      })
    },
  },
});
