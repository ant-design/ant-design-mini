/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AutoResizeDefaultProps } from './props';

const createSelectorQuery = my.canIUse('createSelectorQuery');

Component({
  props: AutoResizeDefaultProps,
  data: {
    /** 换行或省略号样式 */
    wrapAndEllipsisStyle: '',
  },
  didMount() {
    // 如果 createSelectorQuery 返回为不可用，则不返回该组件
    if (!createSelectorQuery) {
      return;
    }
    this.adjustFontSize();
  },

  methods: {
    adjustFontSize() {
      // 用createSelectorQuery来获取容器尺寸信息
      const query = this.createSelectorQuery();
      query.select('.ant-autoresize-fontsize-container').boundingClientRect();
      query.exec((res) => {
        // 假设自适应逻辑是基于容器宽度来设置字号
        if (res && res[0]) {
          const containerWidth = res[0].width;
          const textLength = this.props.text.length;

          /** 判断是否还有空隙 总宽度 - 字体宽度 > 0 */
          const hasSpace =
            containerWidth -
              (this.props.maxFontSize / this.props.ratio) * textLength >
            0;

          if (!hasSpace) {
            this.checkTextOverflow();
          }
        }
      });
    },
    // 检查是否超长
    checkTextOverflow() {
      const query = this.createSelectorQuery();
      // 子组件插槽的类名是default-slot
      query.select('.ant-autoresize-slot').boundingClientRect();
      query.select('.ant-autoresize-fontsize-container').boundingClientRect();
      query.exec((res) => {
        const textRect = res[0];
        const containerRect = res[1];
        if (textRect && containerRect) {
          let newStyle = '';
          // 如果容器宽度小于文本宽度，且容器高度支持换行，则换行；
          // wrap为true时，文案超长会换行，注意样式如margin-top重叠
          if (containerRect.height / 2 > textRect.height || this.props.wrap) {
            newStyle = `font-size: ${this.props.minFontSize}rpx; overflow: visible; white-space: pre-wrap; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;`;
          } else {
            // 如果不支持换行，则直接出现省略号；
            newStyle = `font-size: ${this.props.minFontSize}rpx; max-width: ${textRect.width}; width: ${textRect.width}; overflow: hidden; display: inline-block; text-overflow: ellipsis; white-space: nowrap; -webkit-box-orient: vertical;`;
          }
          // 设置样式...
          this.setData({
            wrapAndEllipsisStyle: newStyle,
          });
        }
      });
    },
  },
});
