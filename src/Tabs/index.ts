import { TabsDefaultProps } from './props';
import { IBoundingClientRect } from '../_util/base';
import fmtEvent from '../_util/fmtEvent';
import createValue from '../mixins/value';
import '../_util/assert-component2';

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
  mixins: [
    createValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ],
  scrollLeft: 0,
  scrollTop: 0,
  didMount() {
    this.updateScroll();
  },
  didUpdate(prevProps, prevData) {
    if (prevProps.items !== this.props.items || !this.isEqualValue(prevData)) {
      this.updateScroll();
    }
  },
  methods: {
    async onScroll(e) {
      if (this.props.direction === 'vertical') {
        this.scrollTop = e.detail.scrollTop;
        return;
      }
      this.scrollLeft = e.detail.scrollLeft;
      this.updateFade();
    },
    async updateFade() {
      this.setData({
        leftFade: !!this.scrollLeft,
      });
      const [view, item] = await Promise.all([
        getBoundingClientRect(`#ant-tabs-bar-scroll-view-${this.$id}`),
        getBoundingClientRect(
          `#ant-tabs-bar-item-${this.$id}-${this.props.items.length - 1}`
        ),
      ]);
      this.setData({
        rightFade: item.left + item.width / 2 > view.width,
      });
    },
    async updateScroll() {
      const current = this.getValue();
      const [view, item] = await Promise.all([
        getBoundingClientRect(`#ant-tabs-bar-scroll-view-${this.$id}`),
        getBoundingClientRect(`#ant-tabs-bar-item-${this.$id}-${current}`),
      ]);
      if (this.props.direction === 'vertical') {
        let scrollTop = this.scrollTop || 0;
        let needScroll = false;
        if (this.props.scrollMode === 'center') {
          needScroll = true;
          scrollTop +=
            item.top - view.top - Math.max((view.height - item.height) / 2, 0);
        } else {
          const distance = item.top - view.top;
          if (distance < 0) {
            scrollTop += distance;
            needScroll = true;
          } else if (distance + item.height > view.height) {
            scrollTop += Math.min(
              distance + item.height - view.height,
              distance
            );
            needScroll = true;
          }
        }
        if (needScroll) {
          if (scrollTop === this.data.scrollTop) {
            scrollTop += Math.random();
          }
          this.setData({
            scrollTop,
          });
        }
        return;
      }
      let scrollLeft = this.scrollLeft || 0;
      let needScroll = false;
      if (this.props.scrollMode === 'center') {
        needScroll = true;
        scrollLeft +=
          item.left - view.left - Math.max((view.width - item.width) / 2, 0);
      } else {
        const distance = item.left - view.left;
        if (distance < 0) {
          scrollLeft += distance;
          needScroll = true;
        } else if (distance + item.width > view.width) {
          scrollLeft += Math.min(distance + item.width - view.width, distance);
          needScroll = true;
        }
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
        scrollLeft:
          this.data.scrollLeft === scrollLeft
            ? scrollLeft - Math.random()
            : scrollLeft,
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
  },
});
