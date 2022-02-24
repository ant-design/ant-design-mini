import { VTabsDefaultProps } from './props';
import { getTabArray, componentContext } from './context';
import { objectValues } from '../_util/tools';
import { IBoundingClientRect } from "../_base"

Component({
  props: VTabsDefaultProps,
  data: {
    tabTop: 0,
    _tabs: {},
    _index: 0,
    wrapScrollTop: null,
    wrapScrollHeight: null,
  },
  async didMount() {
    this.isScrolling = false;
    this.onlyChangeTab = false;
    this.timerId = null;
    await this.calcHeight();

    componentContext.onUpdate((value) => {
      this.setData({
        _tabs: value,
      });
    });
    const { index } = this.props;
    this.setData({
      _tabs: objectValues(getTabArray),
      wrapScrollHeight: this.scrollWrapHeight,
    });
    // 初次加载时的情况
    if (this.data._index !== index) {
      this.onChange(index);
      this.setData({
        _index: index,
      });
    }
  },
  didUpdate(prevProps, prevData) {
    const { index } = this.props;
    const { _index } = this.data;
    if (prevProps.index !== index && prevData._index === _index) {
      this.onChange(index);
    }
  },
  didUnmount() {
    componentContext.clearEvent();
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  },
  methods: {
    async onWrapTouchStart() {
      await this.calcHeight();
    },
    async calcHeight() {
      this.anchorMap = {};
      this.indexTop = {};
      this.indexMap = {};

      this.wrapHeight = await new Promise((resolve) => {
        my.createSelectorQuery()
          .select(`#amd-vtabs-content-slides-${this.$id}`)
          .boundingClientRect()
          .exec((ret) => {
            resolve((<IBoundingClientRect>ret[0]).height);
          });
      });

      this.wrapTop = await new Promise((resolve) => {
        my.createSelectorQuery()
          .select(`#amd-vtabs-content-slides-${this.$id}`)
          .scrollOffset()
          .exec((ret) => {
            resolve((<my.ScrollOffset>ret[0]).scrollTop);
          });
      });

      const rects: [] = await new Promise((resolve) => {
        my.createSelectorQuery()
          .selectAll(`#amd-vtabs-content-slides-${this.$id} .amd-vtabs-item`)
          .boundingClientRect()
          .exec((res) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resolve((res[0] as any).sort((a, b) => a.top - b.top));
          });
      });

      let prevHeight = 0;
      for (let i = 0; i < rects.length; i += 1) {
        const { height } = rects[i];
        this.anchorMap[i] = Math.floor(prevHeight);
        this.indexMap[i] = Math.floor(height);

        if (i === 0) {
          this.indexTop[0] = 0;
        } else {
          this.indexTop[i] = this.indexTop[i - 1] + (<IBoundingClientRect>rects[i - 1])?.height;
        }

        prevHeight += height;
        this.scrollWrapHeight = prevHeight;
      }
    },
    async onChange(e) {
      await this.calcHeight();
      let index: number;
      if (typeof e === 'number' && !isNaN(e)) {
        index = e;
        this.setData({
          _index: index,
        });
        this.moveScrollBar(index);
      } else {
        index = e?.currentTarget?.dataset?.payload;
        if (this.data._tabs[index]?.disabled) {
          return;
        }
      }

      if (!this.isScrolling || this.onlyChangeTab) {
        this.setData({
          wrapScrollTop: { _v: this.indexTop[index] },
        });
        this.moveScrollBar(index);
      }
    },
    moveScrollBar(current) {
      const { onChange } = this.props;
      let tabTop;
      // tabTop 用来控制侧边 tab 的 scroll-view 滚动位置
      if (current < 6) {
        tabTop = 0;
      } else {
        tabTop = (current - 5) * 55;
      }
      // vtabItem 滚动时，对侧边 tab 的影响
      if (this.data._index !== current) {
        if (onChange) {
          onChange(current);
        }
        this.setData({
          _index: current,
        });
      }
      this.setData({
        tabTop,
      });
    },
    onScroll(e) {
      const { scrollTop } = e.detail;
      const keys = Object.keys(this.anchorMap);

      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }

      this.timerId = setTimeout(() => {
        this.isScrolling = false;
      }, 100);

      const anchorLength = keys.length;
      for (let i = 0; i < anchorLength; i++) {
        if (i === anchorLength - 1) {
          // 如果是最后一个只需满足 scrollTop 高于当前 vtabItem 的高度
          if (scrollTop >= this.anchorMap[keys[i]]) {
            this.moveScrollBar(i);
            break;
          }
        }

        if (scrollTop >= this.anchorMap[keys[i]] &&
          scrollTop < this.anchorMap[keys[i + 1]]) {
          // 如果每个 vtabItem 高度小于 scroll-view 高度，到达底部后就不需要根据 scrollTop 再去判断左侧的选择项
          if (scrollTop + this.wrapHeight < this.scrollWrapHeight) {
            this.moveScrollBar(i);
          }
          break;
        }
      }
    },
    onWrapTouchMove() {
      this.isScrolling = true;
      this.onlyChangeTab = true;
    },
  },
});
