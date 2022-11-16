import { TabsDefaultProps } from './props';
import { IBoundingClientRect } from "../_base";
import fmtEvent from '../_util/fmtEvent';

function getBoundingClientRect(selector: string) {
  return new Promise<IBoundingClientRect>(resolve => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        }
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
    leftFade: true,
    rightFade: true,
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
    onScroll(e) {
      this.scrollLeft = e.detail.scrollLeft;
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
      this.setData({
        scrollLeft: (this.scrollLeft || 0) + item.left - Math.max((view.width - item.width) / 2, 0),
      });
    },
    appearLeft() {
      this.setData({
        leftFade: false,
      });
    },
    disappearLeft() {
      this.setData({
        leftFade: true,
      });
    },
    appearRight() {
      this.setData({
        rightFade: false,
      });
    },
    disappearRight() {
      this.setData({
        rightFade: true,
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
