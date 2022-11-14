import fmtEvent from '../_util/fmtEvent';
import { RateDefaultProps } from './props';

Component({
  data: {
    rate: 0,
    starWidth: 0
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
      this.props.onChange?.(newRate, fmtEvent(this.props))
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
    handleStarMove (e) {
      if (this.props.readOnly || this.props.disabled) return
      const { touches } = e
      const { clientX } = touches[0]
      this.startMove = true
      
      my.createSelectorQuery()
        .select(`.amd-rate-${this.$id}`)
        .boundingClientRect()
        .exec(res => {
          const pos = res[0]
          const rawValue = ((clientX - pos.left) / pos.width) * this.props.maxRate
          const ceiledValue = this.props.allowHalf
            ? Math.ceil(rawValue * 2) / 2
            : Math.ceil(rawValue)

          this.setData({
            rate: Math.min(this.props.maxRate, Math.max(0, ceiledValue))
          })
        })
    },
    handleStarMoveEnd () {
      if (this.props.readOnly || this.props.disabled) return
      if (!this.startMove) return
      this.startMove = false
      this.props.onChange?.(this.data.rate, fmtEvent(this.props))
    }
  },
});
