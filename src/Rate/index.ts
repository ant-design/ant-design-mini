import { RateDefaultProps } from './props';

Component({
  data: {
    rate: 0,
  },
  props: RateDefaultProps,
  didMount () {
    const { value } = this.props
    if (value !== void 0) {
      const rate = this.formatRate(value)
      this.setData({ rate })
    }
  },
  didUpdate (prev) {
    if (prev.value !== this.props.value) {
      const rate = this.formatRate(this.props.value)
      this.setData({ rate })
    }
  },
  methods: {
    formatRate (rate) {
      if (rate % 0.5 !== 0) {
        return Math.round(rate)
      }
      return rate
    },
    handleRateTap (e) {
      if (this.props.readOnly || this.props.disabled) return
      const { dataset } = e.currentTarget
      const { rate } = dataset
      const newRate = this.calculateRate(rate)
      if (newRate === this.data.rate) return
      this.setData({ rate: newRate })
      this.props.onRateEnd?.(newRate)
    },
    calculateRate (rate) {
      const curRate = this.data.rate
      
      if (this.props.allowHalf) {
        if (rate == curRate) {
          // 全星 -> 半星
          return rate - 0.5
        } else if (rate == curRate + 0.5) {
          // 全星 -> 半星
          return curRate + 0.5
        } else {
          return rate - 0.5
        }
      }
      
      return rate
    },
  },
});
