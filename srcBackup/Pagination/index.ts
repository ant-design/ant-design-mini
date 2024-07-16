import { Component } from '../_util/simply';
import { PaginationDefaultProps } from './props';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';

Component(
  PaginationDefaultProps,
  {
    async clacWidth() {
      const rect = await getInstanceBoundingClientRect(
        this,
        `#ant-pageInfinite-${this.$id ? `-${this.$id}` : ''}`
      );
      if (rect) {
        return rect.width;
      }
      return 0;
    },
    async onScroll(e) {
      const { scrollLeft, scrollWidth } = e.detail;
      const viewWidth = await this.clacWidth();
      if (viewWidth) {
        this.setData({
          pageDeg: Math.ceil((scrollLeft / (scrollWidth - viewWidth)) * 100),
        });
      }
    },
  },
  {
    pageDeg: 0,
    supportSjs: true,
  },
  undefined,
  {
    wrapWidth: 0,
    /// #if ALIPAY
    onInit() {
      let supportSjs;
      if (typeof my === 'undefined') {
        supportSjs = true;
      }
      supportSjs = my.canIUse('sjs.event');
      this.setData({ supportSjs });
    },
    /// #endif
  }
);
