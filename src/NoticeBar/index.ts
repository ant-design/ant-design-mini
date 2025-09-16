import { IBoundingClientRect } from '../_util/base';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import {
  Component,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import { NoticeBarDefaultProps } from './props';

Component({
  props: NoticeBarDefaultProps,
  data: {
    show: true,
    marqueeStyle: '',
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },

    async getBoundingClientRectWithId(prefix: string) {
      return await getInstanceBoundingClientRect(
        this.getInstance(),
        `${prefix}${this.$id ? `-${this.$id}` : ''}`
      );
    },
    onTap() {
      const mode = getValueFromProps(this, 'mode');
      if (mode === 'link') {
        triggerEventOnly(this, 'tap');
      }
      if (mode === 'closeable') {
        /// #if ALIPAY
        if (typeof this.props.onTap !== 'function') {
          return;
        }
        /// #endif
        this.setData({
          show: false,
        });
        triggerEventOnly(this, 'tap');
      }
    },
    startMarquee(state) {
      const loop = getValueFromProps(this, 'loop');
      const leading = 500;
      const { duration, overflowWidth, viewWidth } = state;
      let marqueeScrollWidth = overflowWidth;
      if (loop) {
        marqueeScrollWidth = overflowWidth + viewWidth;
        /// #if WECHAT
        // 微信的view标签不支持onTransitionEnd，需要这里实现循环
        const trailing = 200;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.measureText((state) => {
            this.resetMarquee.call(this, state);
            this.measureText((state) => {
              this.startMarquee.call(this, state);
            });
          });
          clearTimeout(this.timer);
        }, trailing + duration * 1000);
        /// #endif
      }
      const newMarqueeStyle = `transform: translate3d(${-marqueeScrollWidth}px, 0, 0); transition: ${duration}s all linear ${
        typeof leading === 'number' ? `${leading / 1000}s` : '0s'
      };`;

      this.setData({
        marqueeStyle: newMarqueeStyle,
      });
      return newMarqueeStyle;
    },

    measureText(callback) {
      const fps = 40;
      const loop = getValueFromProps(this, 'loop');
      // 计算文本所占据的宽度，计算需要滚动的宽度
      setTimeout(async () => {
        const marqueeSize: IBoundingClientRect | null =
          await this.getBoundingClientRectWithId('.ant-notice-bar-marquee');
        const contentSize: IBoundingClientRect | null =
          await this.getBoundingClientRectWithId('.ant-notice-bar-content');
        const overflowWidth =
          (marqueeSize &&
            contentSize &&
            marqueeSize.width - contentSize.width) ||
          0;

        const viewWidth = contentSize?.width || 0;
        let marqueeScrollWidth = overflowWidth;
        if (loop) {
          marqueeScrollWidth = overflowWidth + viewWidth;
        }
        if (overflowWidth > 0) {
          callback({
            overflowWidth,
            viewWidth,
            duration: marqueeScrollWidth / fps,
          });
        }
      }, 0);
    },
    // 文本滚动的计算
    resetMarquee(state) {
      const loop = getValueFromProps(this, 'loop');
      const { viewWidth } = state;
      let showMarqueeWidth = '0px';
      if (loop) {
        showMarqueeWidth = `${viewWidth}px`;
      }
      const marqueeStyle = `transform: translate3d(${showMarqueeWidth}, 0, 0); transition: 0s all linear;`;
      this.setData({
        marqueeStyle,
      });
    },

    /// #if ALIPAY
    onTransitionEnd() {
      const loop = getValueFromProps(this, 'loop');
      const trailing = 200;
      if (loop) {
        const timer = setTimeout(() => {
          this.measureText((state) => {
            this.resetMarquee.call(this, state);
          });
          clearTimeout(timer);
        }, trailing);
      }
    },
    /// #endif
  },

  /// #if ALIPAY
  didMount() {
    const { enableMarquee } = this.props;

    if (enableMarquee) {
      this.measureText((state) => {
        this.startMarquee.call(this, state);
      });
    }
  },

  didUpdate() {
    const { enableMarquee } = this.props;
    // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
    if (enableMarquee) {
      this.measureText((state) => {
        this.startMarquee.call(this, state);
      });
    }
  },

  pageEvents: {
    onShow() {
      if (this.props.enableMarquee) {
        this.setData({ marqueeStyle: '' });
        this.resetMarquee({
          overflowWidth: 0,
          duration: 0,
          viewWidth: 0,
        });
        this.measureText((state) => {
          this.startMarquee.call(this, state);
        });
      }
    },
  },
  /// #endif

  /// #if WECHAT
  attached() {
    const { enableMarquee } = this.properties;

    if (enableMarquee) {
      this.measureText((state) => {
        this.startMarquee.call(this, state);
      });
    }
  },

  observers: {
    'enableMarquee': function (enableMarquee) {
      // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
      if (enableMarquee) {
        this.measureText((state) => {
          this.startMarquee.call(this, state);
        });
      }
    },
  },

  pageLifetimes: {
    show: function () {
      if (this.properties.enableMarquee) {
        this.setData({ marqueeStyle: '' });
        this.resetMarquee({
          overflowWidth: 0,
          duration: 0,
          viewWidth: 0,
        });
        this.measureText((state) => this.startMarquee.call(this, state));
      }
    },
  },
  /// #endif
});
