import { FLoatingPanelDefaultProps, SCROLL_POS } from './props';

Component({
  props: FLoatingPanelDefaultProps,
  data: {
    sys: null,
    height: 0,
    scrollViewHeight: 0,
    // 面板最大高度
    maxHeight: 0,
    // 面板中间高度
    middleHeight: 0,
    // 面板最小高度
    minHeight: 0,
    // scroll-view 是否可以滚动
    scrollY: false,
    arrow: 'UP',
    arrowHeight: 24,
    mounted: false,
    id: null,
  },
  async didMount() {
    this.setData({ mounted: true });
    const sys = this.props.systemInfo;
    if (!sys) {
      const sys = await this.getSystemInfo();
      this.setData({ sys });
    }
    this.calculateHeight(sys);
  },
  methods: {
    // 方便sjs调试打印
    console(...arg) {
      console.log('console', ...arg);
    },
    async calculateHeight(sys) {
      sys = sys || this.data.sys || {};
      const [headerHeight, footerHeight, listHeight] = await Promise.all([
        this.getWrapperHeight('.amd-floatpanel-header'),
        this.getWrapperHeight('.amd-floatpanel-footer'),
        this.getWrapperHeight('.amd-floatpanel-scroll-view-content'),
      ]);
      const contentHeight = headerHeight + listHeight + footerHeight;
      const { windowHeight = 375 } = sys;
      let maxHeight = windowHeight * (this.props.maxHeight || 0.95);
      // 当内容高度小于 0.95 视窗大小时，缩短面板最大高度
      maxHeight = contentHeight < maxHeight ? contentHeight : maxHeight;

      let middleHeight = windowHeight * (this.props.middleHeight || 0.35);
      middleHeight =
        contentHeight < middleHeight ? contentHeight : middleHeight;

      let minHeight = windowHeight * (this.props.minHeight || 0.18);
      minHeight = contentHeight < minHeight ? contentHeight : minHeight;
      const scrollViewHeight = maxHeight - headerHeight - footerHeight;
      this.setData({
        minHeight,
        maxHeight,
        middleHeight,
        scrollViewHeight,
        height: minHeight,
      });
    },
    getWrapperHeight(classname): Promise<number> {
      return new Promise((resolve) => {
        my.createSelectorQuery()
          .select(classname)
          .boundingClientRect()
          .exec((ret) => {
            const height = ret[0]?.height || 0;
            resolve(height);
          });
      });
    },
    getSystemInfo() {
      return new Promise((resolve) => {
        my.getSystemInfo({
          success: (res) => {
            resolve(res);
          },
          fail: () => {
            resolve({});
          },
        });
      });
    },
    disableScrollY() {
      this.setData({ scrollY: false });
    },
    enableScrollY() {
      this.setData({ scrollY: true });
    },
    changeArrow(type) {
      this.setData({
        arrow: type,
        arrowHeight: type === 'MIDDLE' ? 8 : 24,
      });
    },
    onScrollViewToBottom() {
      this.props.onContentToBottom?.();
    },
    scrollStatus(pos: SCROLL_POS) {
      this.props.onScroll?.(pos);
    },
  },
});
