import { IBoundingClientRect } from '../../_base';

const ANCHOR_SLIDE_OFFSET = 0.000000001; // 为了每次设置锚点都能生效，做的一个偏移，一般不用改

Component({
  props: {
    tabs: [],
    activeIndex: 0,
    onTabClick(index) {},
    top: 0,
  },
  data: {
    scrollLeft: 0,
    showLeftShadow: false,
    showRightShadow: false,
  },
  anchorPositions: null as IBoundingClientRect[],
  containerPosition: null as IBoundingClientRect,
  async didMount() {
    await this.computePosition();
    this.setActivePosition();
  },

  async didUpdate(prevProps) {
    if (
      prevProps.tabs !== this.props.tabs ||
      prevProps.activeIndex !== this.props.activeIndex
    ) {
      await this.computePosition();
      this.setActivePosition();
    }
  },

  methods: {
    onScroll() {
      this.computePosition();
    },

    async computePosition() {
      return new Promise((resolve) => {
        my.createSelectorQuery()
          .select(`.amd-tabs-elevator-bar-items`)
          .boundingClientRect()
          .selectAll(`.amd-tabs-elevator-bar-item`)
          .boundingClientRect()
          .exec((rets) => {
            if (rets) {
              const [container, anchors] = rets as any;
              if (container && anchors) {
                this.containerPosition = container;
                this.anchorPositions = anchors;
                this.setShadow();
              }
            }
            resolve(null);
          });
      });
    },

    setShadow() {
      const firstAnchor = this.anchorPositions[0];
      const lastAnchor = this.anchorPositions[this.anchorPositions.length - 1];
      if (firstAnchor && lastAnchor) {
        const showLeftShadow = firstAnchor.left < this.containerPosition.left;
        const showRightShadow = lastAnchor.right > this.containerPosition.right;
        if (
          showLeftShadow !== this.data.showLeftShadow ||
          showRightShadow !== this.data.showRightShadow
        ) {
          this.setData({ showLeftShadow, showRightShadow });
        }
      }
    },

    setActivePosition() {
      const { containerPosition, anchorPositions } = this;
      const { activeIndex } = this.props;
      if (
        containerPosition &&
        anchorPositions &&
        anchorPositions[activeIndex]
      ) {
        const anchor = anchorPositions[activeIndex];
        if (
          anchor.left < containerPosition.left ||
          anchor.right > containerPosition.right
        ) {
          const scrollLeft = anchorPositions
            .slice(0, activeIndex)
            .reduce((re, item) => re + item.width, 0);
          if (scrollLeft === this.data.scrollLeft) {
            // 设置两次是因为点了锚点A后，用户如果手动滚动列表后，再点A锚点会因为数据相同，而被容器视为不生效

            this.setData(
              {
                scrollLeft: scrollLeft + ANCHOR_SLIDE_OFFSET,
              },
              () => {
                this.setData({
                  scrollLeft,
                });
              }
            );
          } else {
            this.setData({
              scrollLeft,
            });
          }
        }
      }
    },

    onTabClick(e) {
      this.props.onTabClick(e.target.dataset.index);
    },
  },
});
