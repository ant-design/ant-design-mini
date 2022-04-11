import { TipsDefaultProps } from './props';
import { log } from '../_util/console';

Component({
  props: TipsDefaultProps,
  data: {
    _show: false
  },
  didMount() {
    this.setData({
      _show: this.props.visible
    })
  },
  didUpdate(prevProps) {
    if(prevProps.visible !== this.props.visible){
      this.setData({
        _show: this.props.visible
      })
      if(this.props.visible === false){
        this.beforeClose()
      }
    }
  },
  methods: {
    onButtonTap() {
      const { onButtonTap } = this.props;
      if (onButtonTap) {
        return onButtonTap();
      }
    },
    onHideTips(t) {
      this.setData({
        _show: t,
      });
      this.beforeClose()
    },
    beforeClose(){
      if(typeof this.props.onClose ==="function"){
        this.props.onClose()
      }
    }
  },
});
