import get from 'lodash/get';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { BladeViewDefaultProps } from './props';

/** 每个sideBarItem的高度 */
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
    // 数据源变化时需要重新计算高度
    if (!isEqual(prevProps.data, this.props.data)) {
      this.computeTopRange();
      this.computeSideBar();
    }
  },
  methods: {
    // 渲染后计算每个group距离容器顶部的top值，并设置currentKey
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
          // 初始化时设置currentKey
          const { scrollToKey } = this.props;
          const findItem = this.topRange.find((item) => item.key === scrollToKey);
          this.setData({
            currentKey: scrollToKey || get(this.props, 'data[0].key', ''),
            scrollTop: scrollToKey ? findItem.top - findItem.height : 0,
          });
        });
    },
    // 渲染后找出sidebar中的每个item按钮距离页面上边距的top值
    computeSideBar() {
      (my.createSelectorQuery as any)()
        .selectAll('.amd-blade-view-sidebar-item')
        .boundingClientRect()
        .exec((res) => {
          if (res[0] === null) throw new Error('找不到元素');
          this.sidebarDistance = res[0].map((item) => ({ top: item.top, key: item.dataset.key }));
        });
    },
    setNotScrolling() {
      this.isScrolling = false;
    },
    // 滚动监听
    onScroll(e) {
      // 判断是否正在滚动
      this.isScrolling = true;
      this.debounce(this.setNotScrolling);
      const { scrollTop } = e.detail;
      // 标题和sidebar联动
      const currentKey = get(
        this.topRange.find((item) => scrollTop < item.top - DEVIATION),
        'key',
      );
      if (this.data.currentKey === currentKey) return;
      this.setData({ currentKey });
    },
    // 点击sidebar
    onTapSideItem(e, moveKey) {
      // 如果容器正在滚动是不能触发侧边栏点击的，否则会导致不可控bug
      if (this.isScrolling) return;
      const key = get(e, 'target.dataset.key', moveKey);
      if (key === this.data.currentKey) return;
      const findItem = this.topRange.find((item) => item.key === key);
      const scrollTop = findItem.top - findItem.height;
      this.setData({
        currentKey: key,
        scrollTop: scrollTop + Number(this.data.scrollTop === scrollTop),
        //如果上次的scrollTop和这次的scrollTop值相同，需要让scrollTop变化一点点触发滚动（前后两次scrollTop值不变的话不会触发滚动）
      });
    },
    onTouchMove(e) {
      const currentY = e.changedTouches[0].pageY;
      const moveOnElement =
        this.sidebarDistance.find((item) => currentY < item.top + DEVIATION) ||
        this.sidebarDistance[this.sidebarDistance.length - 1];
      // 触摸到某个可以，就触发点击选中事件（根据 sidebar中的item距离页面顶部距离 和 触摸时手指距离页面顶部距离 来找出触摸到了哪个item）
      this.onTapSideItem(undefined, moveOnElement.key);
    },
    onTouchStart() {
      this.setData({ isTouchingSideBar: true });
    },
    onTouchEnd() {
      this.setData({ isTouchingSideBar: false });
    },
    // 点击每一项
    onTapItem(e) {
      const { item, group } = e.target.dataset;
      this.props.onSelectItem(item, group);
    },
  },
});
