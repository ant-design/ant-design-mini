import { TabsElevatorDefaultProps } from './props';
import { IBoundingClientRect } from '../_base';

Component({
  props: TabsElevatorDefaultProps,
  data: {
    activeIndex: 0,
    scrollTop: 0,
    statusBarHeight: 0,
  },
  topHeight: 0,
  tabPositions: null as IBoundingClientRect[],
  disableSetActiveByTapTab: false,
  scrollY: 0,
  didMount() {
    const { getRef, transparentTitle } = this.props;
    if (transparentTitle) {
      const res = my.getSystemInfoSync();
      let statusBarHeight = res.statusBarHeight + res.titleBarHeight;
      this.setData({ statusBarHeight });
    }
    this.getTopHeight();
    this.getTabPositions();
    if (getRef) {
      getRef(this);
    }
  },
  didUpdate() {
    this.getTabPositions();
  },
  pageEvents: {
    onPageScroll(e) {
      const scrollY = e.scrollTop;
      this.scrollY = scrollY;
      const { tabs } = this.props;
      if (!tabs || tabs.length === 0) return;
      this.setActiveIndex(true);
    },
  },
  methods: {
    getTabPositions() {
      return new Promise((resolve) => {
        my.createSelectorQuery()
          .selectAll('.amd-tabs-elevator-content-item')
          .boundingClientRect()
          .exec((ret) => {
            if (ret?.[0]) {
              this.tabPositions = ret[0];
            }
            resolve(null);
          });
      });
    },
    getTopHeight() {
      my.createSelectorQuery()
        .select('.amd-tabs-elevator-bar')
        .boundingClientRect()
        .exec((ret) => {
          if (ret[0]) {
            this.setTopHeight(ret[0].top);
          }
        });
    },
    setActiveIndex(isScroll = false) {
      const { scrollY, tabPositions, disableSetActiveByTapTab, topHeight } =
        this;
      const { activeIndex: currentActiveIndex, statusBarHeight } = this.data;
      const { onChange } = this.props;
      if (disableSetActiveByTapTab) return;
      if (tabPositions) {
        let activeIndex = -1;
        for (let i = 0; i < tabPositions.length; i++) {
          if (
            scrollY + statusBarHeight >=
              topHeight +
                tabPositions
                  .slice(0, i)
                  .reduce((re, item) => re + item.height, 0) &&
            scrollY + statusBarHeight <
              topHeight +
                tabPositions
                  .slice(0, i + 1)
                  .reduce((re, item) => re + item.height, 0)
          ) {
            activeIndex = i;
            break;
          }
        }
        if (scrollY < topHeight) {
          activeIndex = 0;
        }
        if (activeIndex !== currentActiveIndex) {
          this.setData({ activeIndex });
          if (isScroll) {
            if (onChange) {
              onChange(activeIndex, 'scroll');
            }
          }
        }
      }
    },
    onTabClick(index) {
      this.setActiveTab(index);
    },
    setTopHeight(height) {
      this.topHeight = height;
    },
    setActiveTab(index) {
      const { onTabClick, onChange } = this.props;
      const { tabPositions, topHeight } = this;
      if (tabPositions) {
        let { activeIndex, statusBarHeight } = this.data;
        activeIndex = index;
        this.disableSetActiveByTapTab = true;
        const scrollTop =
          topHeight +
          tabPositions
            .slice(0, index)
            .reduce((re, item) => re + item.height, 0) -
          statusBarHeight;
        my.pageScrollTo({ scrollTop });
        this.setData({ scrollTop, activeIndex });

        if (onTabClick) {
          onTabClick(index);
        }
        if (onChange) {
          onChange(index, 'click');
        }
        // 此处加入500ms延迟，避免滚动时触发setActiveIndex事件
        setTimeout(() => {
          this.disableSetActiveByTapTab = false;
        }, 500);
      }
    },
  },
});
