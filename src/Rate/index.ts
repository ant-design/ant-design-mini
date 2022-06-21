import { RateDefaultProps } from './props';

Component({
  data: {
    rate: 0,
    iconWidth: 0,
  },
  props: RateDefaultProps,
  startX: 0,
  didMount () {
    const { defaultValue } = this.props
    const rate = this.formatRate(defaultValue)
    this.setData({ rate })
  },
  methods: {
    formatRate (rate) {
      if (rate % 0.5 !== 0) {
        return Math.round(rate)
      }
      return rate
    },
    handleRateTap (e) {
      const { dataset } = e.currentTarget
      const { rate } = dataset
      const newRate = this.calculateRate(rate)
      if (newRate === this.data.rate) return

      this.setData({ rate: newRate })
      this.props.onRateEnd?.(newRate)
    },
    calculateRate (rate) {
      if (this.props.allowClear && (this.data.rate === (this.props.allowHalf ? rate : Math.floor(rate)))) return 0
      if (this.props.readOnly) return rate
      if (!this.props.allowHalf) return Math.round(rate)
      
      return rate
    },
    // getIconWidth () {
    //   my.createSelectorQuery().select('.amd-rate-star').boundingClientRect().exec(res => {
    //     this.setData({
    //       iconWidth: res[0].width
    //     })
    //   })
    // },
    // handleTouchMove (e) {
    //   const { changedTouches = [], currentTarget = {} } = e
    //   const { rate } = currentTarget.dataset
    //   const { clientX } = changedTouches[0]
    //   if (Math.abs(clientX - this.startX) > (this.data.iconWidth / 2)) {
    //     this.setData({
    //       rate: this.calculateRate(rate)
    //     })
    //   }
    // },
    // handleTouchStart (e) {
    //   const { changedTouches = [], currentTarget } = e
    //   const { rate } = currentTarget.dataset
    //   const { clientX } = changedTouches[0]
    //   this.startX = clientX
    //   console.log(rate)
    // },
    // handleTouchEnd (e) {
      
    // }
  },
});
