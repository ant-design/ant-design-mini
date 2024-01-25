import { NoticeBarDefaultProps } from './props';
import { log } from '../_util/console';
import { IBoundingClientRect } from '../_util/base';
import '../_util/assert-component2';

Component({
  props: NoticeBarDefaultProps,
  data: {
    show: true,
    marqueeStyle: '',
    animatedWidth: 0,
    overflowWidth: 0,
    duration: 0,
    viewWidth: 0,
  },
  didMount() {
    const { enableMarquee } = this.props;
    this.showError();

    if (enableMarquee) {
      this.measureText(this.startMarquee.bind(this));
    }
  },

  didUpdate() {
    const { enableMarquee } = this.props;
    this.showError();
    // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
    if (enableMarquee) {
      this.measureText(this.startMarquee.bind(this));
    }
  },

  pageEvents: {
    onShow() {
      this.resetState();
    },
  },

  methods: {
    resetState() {
      if (this.props.enableMarquee) {
        this.setData(
          {
            marqueeStyle: '',
            overflowWidth: 0,
            duration: 0,
            viewWidth: 0,
          },
          () => {
            this.resetMarquee();
            this.measureText(this.startMarquee.bind(this));
          }
        );
      }
    },
  },
});
