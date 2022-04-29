import { RateDefaultProps } from './props';
Component({
  props: RateDefaultProps,
  data: {
    currentValue: 0
  },
  async onInit() {
    const { value } = this.props
    this.setData({
      currentValue: value
    })
  },
  methods: {
    clickHandle(e: any) {
      const { readOnly, allowClear, onChange } = this.props
      if (readOnly) return
      const { value } = e.target.dataset
      const result = allowClear && this.data.currentValue === value ? 0 : value
      this.setData({
        currentValue: result
      })
      onChange(result)
    }
  },
});
