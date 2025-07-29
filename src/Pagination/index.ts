import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component } from '../_util/simply';
import { PaginationDefaultProps } from './props';

Component({
  props: PaginationDefaultProps,
  data: {
    pageDeg: 0,
    supportSjs: true,
  },
  wrapWidth: 0,
  methods: {
    async clacWidth() {
      const rect = await getInstanceBoundingClientRect(
        this,
        `#ant-pageInfinite${this.$id ? `-${this.$id}` : ''}`
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
  onInit() {
    /// #if ALIPAY
    let supportSjs;
    if (typeof my === 'undefined') {
      supportSjs = true;
    }
    supportSjs = my.canIUse('sjs.event');
    this.setData({ supportSjs });
    /// #endif
  },
});
