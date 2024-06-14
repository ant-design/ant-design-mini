import { PaginationDefaultProps } from './props';
import { IBoundingClientRect } from '../_base';

Component({
  props: PaginationDefaultProps,
  data: {
    pageDeg: 0,
    supportSjs: my.canIUse('sjs.event'),
  },
  didMount() {
    if (this.renderer === 'native') {
      this.setData({
        supportSjs: false,
      });
    }
  },
  wrapWidth: 0,
  methods: {
    async clacWidth() {
      return new Promise<number>((resolve) => {
        my.createSelectorQuery()
          .select(`#pageInfinite${this.$id}`)
          .boundingClientRect()
          .exec((ret) => {
            if (ret && ret[0]) {
              this.wrapWidth = (<IBoundingClientRect>ret[0]).width;
            }
            resolve(this.wrapWidth);
          });
      });
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
});
