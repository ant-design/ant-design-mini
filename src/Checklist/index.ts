import { ChecklistDefaultProps } from './props';
import controlled from '../mixins/controlled'

Component({
  props: ChecklistDefaultProps,
  mixins: [controlled()],
  didMount() {
    const { multiple, value } = this.props
    if (multiple && !Array.isArray(value)) {
      this.setData({
        cValue: []
      })
    }
  },
  methods: {
    onChange(value) {
      const { multiple, options } = this.props
      let items = null
      if (multiple && Array.isArray(value)) {
        items = value.map(v => {
          return options.filter(o => o.value === v)?.[0]
        })
      } else {
        items =  options.filter(o => o.value === value)?.[0];
      }
      this.cOnChange(value, items)
    }
  },
});
