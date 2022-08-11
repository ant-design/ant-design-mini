import { NoticeBarDefaultProps } from './props';
import { log } from '../_util/console';
import { IBoundingClientRect } from "../_base"


Component({
  props: NoticeBarDefaultProps,
  data: {
    _show: true,
    _marqueeStyle: '',
    _animatedWidth: 0,
    _overflowWidth: 0,
    _duration: 0,
    _viewWidth: 0,
  },
  didMount() {
    const { enableMarquee } = this.props;
    this.showError();

    if (enableMarquee) {
      this._measureText(this.startMarquee.bind(this));
    }
  },

  didUpdate() {
    const { enableMarquee } = this.props;
    this.showError();

    // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
    if (enableMarquee) {
      this._measureText(this.startMarquee.bind(this));
    }
  },

  
  methods: {
    resetState(){
      if(this.props.enableMarquee) {
        this.setData({
          _marqueeStyle: '',
          _animatedWidth: 0,
          _overflowWidth: 0,
          _duration: 0,
          _viewWidth: 0,
        },()=>{
          this.resetMarquee();
          this._measureText(this.startMarquee.bind(this));
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
          _show: false,
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
      const { _viewWidth } = this.data;
      let showMarqueeWidth = '0px';
      if (loop) {
        showMarqueeWidth = `${_viewWidth}px`;
      }
      const _marqueeStyle = `transform: translate3d(${showMarqueeWidth}, 0, 0); transition: 0s all linear;`;
      this.setData({
        _marqueeStyle,
      });
    },
    startMarquee() {
      const { loop } = this.props;
      const leading = 500;
      const { _duration, _overflowWidth, _viewWidth } = this.data;
      let marqueeScrollWidth = _overflowWidth;
      if (loop) {
        marqueeScrollWidth = _overflowWidth + _viewWidth;
      }
      const _marqueeStyle = `transform: translate3d(${-marqueeScrollWidth}px, 0, 0); transition: ${_duration}s all linear ${typeof leading === 'number' ? `${leading / 1000}s` : '0s'};`;
      if (this.data._marqueeStyle !== _marqueeStyle) {
        this.setData({
          _marqueeStyle,
        });
      }
    },
    onTransitionEnd() {
      const { loop } = this.props;
      const trailing = 800;
      if (loop) {
        setTimeout(() => {
          this.resetMarquee();
          this._measureText(this.startMarquee.bind(this));
        }, typeof trailing === 'number' ? trailing : 0);
      }
    },
    _measureText(callback) {
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
            const _overflowWidth = (ret && ret[0] && ret[1] && ((<IBoundingClientRect>ret[0]).width - (<IBoundingClientRect>ret[1]).width)) || 0;
            const _viewWidth = (<IBoundingClientRect>ret[1])?.width || 0;
            let marqueeScrollWidth = _overflowWidth;
            if (loop) {
              marqueeScrollWidth = _overflowWidth + _viewWidth;
            }
            if (_overflowWidth > 0) {
              this.setData({
                _overflowWidth,
                _viewWidth,
                _duration: (marqueeScrollWidth / fps),
              });
              callback();
            }
          });
      }, 0);
    },
  },
});
