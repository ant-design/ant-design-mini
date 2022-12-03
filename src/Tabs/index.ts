import { TabsDefaultProps } from './props';
import { IBoundingClientRect } from "../_base";
import fmtEvent from '../_util/fmtEvent';
import createValue from '../mixins/value';

function getBoundingClientRect(selector: string) {
  return new Promise<IBoundingClientRect>((resolve, reject) => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
          return;
        }
        reject();
      });
  });
}

Component({
  props: TabsDefaultProps,
  data: {
    scrollLeft: 0,
    leftFade: false,
    rightFade: false,
  },
  mixins: [createValue({
    valueKey: 'current',
    defaultValueKey: 'defaultCurrent',
  })],
  scrollLeft: 0,
  didMount() {
    this.updateScrollLeft();
  },
  didUpdate(prevProps, prevData) {
    if (prevProps.items !== this.props.items || !this.isEqualValue(prevData)) {
      this.updateScrollLeft();
    }
  },
  methods: {
    async onScroll(e) {   
      this.scrollLeft = e.detail.scrollLeft;
      this.updateFade();
    },
    async updateFade() {
      this.setData({
        leftFade: !!this.scrollLeft,
      });
      const [view, item] = await Promise.all([
        getBoundingClientRect(`#amd-tabs-bar-scroll-view-${this.$id}`),
        getBoundingClientRect(`#amd-tabs-bar-item-${this.$id}-${this.props.items.length - 1}`),
      ]);
      this.setData({
        rightFade: item.left + item.width / 2 > view.width,
      });
    },
    async updateScrollLeft() {
      if (this.props.vertical) {
        return;
      }
      const current = this.getValue();
      const [view, item] = await Promise.all([
        getBoundingClientRect(`#amd-tabs-bar-scroll-view-${this.$id}`),
        getBoundingClientRect(`#amd-tabs-bar-item-${this.$id}-${current}`),
      ]);
      let scrollLeft = this.scrollLeft || 0;
      let needScroll = false;
      if (item.left < 0) {
        scrollLeft = (this.scrollLeft || 0) + item.left;
        needScroll = true;
      } else if (item.left + item.width > view.width) {
        scrollLeft = (this.scrollLeft || 0) + Math.min(item.left + item.width - view.width, item.left);
        needScroll = true;
      }
      if (needScroll) {
        if (scrollLeft === this.data.scrollLeft) {
          scrollLeft += Math.random();
        }
        this.setData({
          scrollLeft,
        });
        this.updateFade();
      }
    },
    scroll(scrollLeft: number) {
      this.setData({
        scrollLeft: this.data.scrollLeft === scrollLeft ? scrollLeft - Math.random() : scrollLeft,
      });
    },
    onChange(e) {
      const { onChange } = this.props;
      const index = parseInt(e.currentTarget.dataset.index, 10);
      if (this.props.items[index].disabled) {
        return;
      }
      if (this.getValue() === index) {
        return;
      }
      if (!this.isControlled()) {
        this.update(index);
      }
      if (onChange) {
        onChange(index, fmtEvent(this.props, e));
      }
    },
  }
});
