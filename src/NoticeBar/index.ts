import { NoticeBarDefaultProps, INoticeBarData, INoticeBarMethods, INoticeBarProps } from './props';
import { log } from '../_util/console';
import { IBoundingClientRect } from "../_base"


Component<INoticeBarData, Partial<INoticeBarProps>, INoticeBarMethods>({
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

  pageEvents:{
    onShow(){
      this.resetState();
    },
  },

  methods: {
    resetState(){
      if(this.props.enableMarquee) {
        this.setData({
          marqueeStyle: '',
          animatedWidth: 0,
          overflowWidth: 0,
          duration: 0,
          viewWidth: 0,
        },()=>{
          this.resetMarquee();
          this.measureText(this.startMarquee.bind(this));
        });
      }
     
    },
    showError() {
      const { actions } = this.props;
      if (!Array.isArray(actions) && typeof actions !== 'undefined') {
        log.warn('NoticeBar', `当前定义的 actions 的类型为 ${typeof actions}，不符合属性定义，应该为数组，如：actions="{{['值', '值']}}`);
      }
    },
    onTap() {
      const { mode, onTap } = this.props;
      if (mode === 'link' && typeof onTap === 'function') {
        return onTap();
      }
      if (mode === 'closeable' && typeof onTap === 'function') {
        this.setData({
          show: false,
        });
        return onTap();
      }
    },
    onActionTap(e) {
      const { onActionTap } = this.props;
      if (onActionTap) {
        const { index } = e.currentTarget.dataset;
        return onActionTap(index);
      } else {
        log.error('NoticeBar', '缺少 onActionTap 回调。');
      }
    },
    // 文本滚动的计算
    resetMarquee() {
      const { loop } = this.props;
      const { viewWidth } = this.data;
      let showMarqueeWidth = '0px';
      if (loop) {
        showMarqueeWidth = `${viewWidth}px`;
      }
      const marqueeStyle = `transform: translate3d(${showMarqueeWidth}, 0, 0); transition: 0s all linear;`;
      this.setData({
        marqueeStyle,
      });
    },
    startMarquee() {
      const { loop } = this.props;
      const leading = 500;
      const { duration, overflowWidth, viewWidth } = this.data;
      let marqueeScrollWidth = overflowWidth;
      if (loop) {
        marqueeScrollWidth = overflowWidth + viewWidth;
      }
      const marqueeStyle = `transform: translate3d(${-marqueeScrollWidth}px, 0, 0); transition: ${duration}s all linear ${typeof leading === 'number' ? `${leading / 1000}s` : '0s'};`;
      if (this.data.marqueeStyle !== marqueeStyle) {
        this.setData({
          marqueeStyle,
        });
      }
    },
    onTransitionEnd() {
      const { loop } = this.props;
      const trailing = 200;
      if (loop) {
        setTimeout(() => {
          this.resetMarquee();
          this.measureText(this.startMarquee.bind(this));
        }, trailing);
      }
    },
    measureText(callback) {
      const fps = 40;
      const { loop } = this.props;
      // 计算文本所占据的宽度，计算需要滚动的宽度
      setTimeout(() => {
        my.createSelectorQuery()
          .select(`.amd-notice-bar-marquee-${this.$id}`)
          .boundingClientRect()
          .select(`.amd-notice-bar-content-${this.$id}`)
          .boundingClientRect()
          .exec((ret) => {
            // eslint-disable-next-line max-len
            const overflowWidth = (ret && ret[0] && ret[1] && ((<IBoundingClientRect>ret[0]).width - (<IBoundingClientRect>ret[1]).width)) || 0;
            const viewWidth = (<IBoundingClientRect>ret[1])?.width || 0;
            let marqueeScrollWidth = overflowWidth;
            if (loop) {
              marqueeScrollWidth = overflowWidth + viewWidth;
            }
            if (overflowWidth > 0) {
              this.setData({
                overflowWidth,
                viewWidth,
                duration: (marqueeScrollWidth / fps),
              });
              callback();
            }
          });
      }, 0);
    },
  },
});
