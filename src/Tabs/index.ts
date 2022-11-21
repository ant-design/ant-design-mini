import { TabsDefaultProps } from './props';
import { IBoundingClientRect } from "../_base";
import fmtEvent from '../_util/fmtEvent';

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

function getValue(value, selfValue, defaultValue) {
  if (typeof value !== 'undefined') {
    return value;
  }
  if (typeof selfValue !== 'undefined') {
    return selfValue;
  }
  return defaultValue || 0;
}


Component({
  props: TabsDefaultProps,
  data: {
    scrollLeft: 0,
    leftFade: false,
    rightFade: false,
    selfCurrent: undefined,
  },
  scrollLeft: 0,
  didMount() {
    this.updateScrollLeft();
  },
  didUpdate(prevProps, prevData) {
    if (prevProps.current !== this.props.current || prevProps.items !== this.props.items || prevData.selfCurrent !== this.data.selfCurrent) {
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
      const current = getValue(this.props.current, this.data.selfCurrent, this.props.defaultCurrent);
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
        scrollLeft = (this.scrollLeft || 0) + item.left + item.width - view.width;
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
      if (typeof this.props.current === 'undefined') {
        if (index === this.data.selfCurrent) {
          return;
        }
        this.setData({
          selfCurrent: index,
        });
      } else {
        if (index === this.props.current) {
          return;
        }
      }
      if (onChange) {
        onChange(index, fmtEvent(this.props, e));
      }
    },
  }
});
