import get from 'lodash/get';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { BladeViewDefaultProps } from './props';

const DEVIATION = 8;

Component({
  props: BladeViewDefaultProps,
  data: {
    currentKey: '',
    scrollTop: 0,
    isTouchingSideBar: false
  },
  didMount() {
    this.computeTopRange();
    this.computeSideBar();
    this.debounce = debounce((func, ...rest) => {
      func.call(this, ...rest);
    }, 50);
  },
  didUpdate(prevProps) {
    if (!isEqual(prevProps.data, this.props.data)) {
      this.computeTopRange();
      this.computeSideBar();
    }
  },
  methods: {
    computeTopRange() {
      (my.createSelectorQuery as any)()
        .selectAll('.amd-blade-view-body-group')
        .boundingClientRect()
        .exec((res) => {
          if (res[0] === null) throw new Error('找不到元素');
          this.topRange = res[0].reduce((pre, cur) => {
            pre.push({
              id: cur.id,
              key: cur.id.replace('amd-blade-view-group-', ''),
              height: cur.height,
              top: cur.height + get(pre, `[${pre.length - 1}].top`, 0),
            });
            return pre;
          }, []);
          const { scrollToKey } = this.props;
          const findItem = this.topRange.find((item) => item.key === scrollToKey);
          this.setData({
            currentKey: scrollToKey || get(this.props, 'data[0].key', ''),
            scrollTop: scrollToKey ? findItem.top - findItem.height : 0,
          });
        });
    },

    computeSideBar() {
      (my.createSelectorQuery as any)()
        .selectAll('.amd-blade-view-sidebar-item')
        .boundingClientRect()
        .exec((res) => {
          if (res[0] === null) throw new Error('找不到元素');
          this.sidebarDistance = res[0].map((item) => ({ top: item.top, key: item.dataset.key }));
        });
    },

    onScroll(e) {
      this.isScrolling = true;
      this.debounce(() => {
        this.isScrolling = false;
      });
      const { scrollTop } = e.detail;

      const currentKey = get(
        this.topRange.find((item) => scrollTop < item.top - DEVIATION),
        'key',
      );
      if (this.data.currentKey === currentKey) return;
      this.setData({ currentKey });
    },

    onTapSideItem(e, moveKey) {
      const key = get(e, 'target.dataset.key', moveKey);

      if (this.isScrolling) return;
      if (key === this.data.currentKey) return;

      const findItem = this.topRange.find((item) => item.key === key);
      const scrollTop = findItem.top - findItem.height;

      this.setData({
        currentKey: key,
        scrollTop: scrollTop + Number(this.data.scrollTop === scrollTop),
      });
    },

    onTouchMove(e) {
      const currentY = e.changedTouches[0].pageY;
      const moveOnElement =
        this.sidebarDistance.find((item) => currentY < item.top + DEVIATION) ||
        this.sidebarDistance[this.sidebarDistance.length - 1];
      this.onTapSideItem(undefined, moveOnElement.key);
    },

    onTouchStart() {
      this.setData({ isTouchingSideBar: true });
    },

    onTouchEnd() {
      this.setData({ isTouchingSideBar: false });
    },

    onTapItem(e) {
      const { item, group } = e.target.dataset;
      this.props.onChange(item, group);
    },
  },
});
