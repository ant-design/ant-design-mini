import { TabsDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: TabsDefaultProps,
  // data: {
  //   currentIndex: 0,
  // },
  didMount() {
    // const { index } = this.props;
    // this.setData({
    //   currentIndex: index,
    // });
  },
  didUpdate() {
    // const { index } = this.props;
    // this.setData({
    //   currentIndex: index,
    // });
  },
  methods: {
    onChange(e) {
      const { onChange } = this.props;
      const index = parseInt(e?.currentTarget?.dataset?.index, 10);
      // if (this.data._tabs[index]?.disabled) {
      //   return;
      // }
      if (onChange && index !== this.props.currentIndex) {
        //this.changeTap = true;
        // 获取当前元素的 offsetLeft 值
        //this.currentLeft = e?.currentTarget?.offsetLeft;
        return onChange(index, fmtEvent(this.props, e));
      }
    },
  }
});
