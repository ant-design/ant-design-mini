import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, getValueFromProps } from '../_util/simply';
import { AutoResizeDefaultProps } from './props';

Component({
  props: AutoResizeDefaultProps,
  data: {
    /** 换行或省略号样式 */
    wrapAndEllipsisStyle: '',
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    async getBoundingClientRect(query: string) {
      return await getInstanceBoundingClientRect(this.getInstance(), query);
    },
    adjustFontSize() {
      // 用createSelectorQuery来获取容器尺寸信息
      this.getBoundingClientRect(
        `.ant-autoresize-fontsize-container-${this.$id}`
      ).then((rect) => {
        if (!rect) return;
        const [text, maxFontSize, ratio] = getValueFromProps(this, [
          'text',
          'maxFontSize',
          'ratio',
        ]);
        // 假设自适应逻辑是基于容器宽度来设置字号
        const containerWidth = rect.width;
        const textLength = text.length;

        /** 判断是否还有空隙 总宽度 - 字体宽度 > 0 */
        const hasSpace =
          containerWidth - (maxFontSize / ratio) * textLength > 0;

        if (!hasSpace) {
          this.checkTextOverflow();
        }
      });
    },
    // 检查是否超长
    checkTextOverflow() {
      // 子组件插槽的类名是default-slot
      Promise.all([
        this.getBoundingClientRect('.ant-autoresize-slot'),
        this.getBoundingClientRect('.ant-autoresize-fontsize-container'),
      ]).then((rects) => {
        const textRect = rects[0];
        const containerRect = rects[1];
        if (textRect && containerRect) {
          const [wrap, minFontSize] = getValueFromProps(this, [
            'wrap',
            'minFontSize',
          ]);
          let newStyle = '';
          // 如果容器宽度小于文本宽度，且容器高度支持换行，则换行；
          // wrap为true时，文案超长会换行，注意样式如margin-top重叠
          if (containerRect.height / 2 > textRect.height || wrap) {
            newStyle = `font-size: ${minFontSize}rpx; overflow: visible; white-space: pre-wrap; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;`;
          } else {
            // 如果不支持换行，则直接出现省略号；
            newStyle = `font-size: ${minFontSize}rpx; max-width: ${textRect.width}px; width: ${textRect.width}px; overflow: hidden; display: inline-block; text-overflow: ellipsis; white-space: nowrap; -webkit-box-orient: vertical;`;
          }
          // 设置样式...
          this.setData({
            wrapAndEllipsisStyle: newStyle,
          });
        }
      });
    },
  },
  /// #if ALIPAY
  didMount() {
    this.adjustFontSize();
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.adjustFontSize();
  },
  /// #endif
});
