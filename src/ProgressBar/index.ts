import { ProgressBarDefaultProps } from './props';

Component({
  props: ProgressBarDefaultProps,
  data: {
    curProgress: 0,
  },
  didMount () {
    this.calProgress()
  },
  didUpdate () {
    this.calProgress()
  },
  methods: {
    calProgress() {
      const progress = +this.props.progress
      if (isNaN(progress)) {
        return this.setData({ curProgress: 0 })
      }
      
      this.setData({
        curProgress: (progress > 100 ? 100 : progress < 0 ? 0 : progress).toFixed(2)
      })
    }
  },
});
