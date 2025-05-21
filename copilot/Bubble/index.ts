// @ts-nocheck
import {
  Component,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import { BubbleProps } from './props';

Component({
  props: BubbleProps,
  data: {
    bubbleText: '',
  },
  methods: {
    startTyping() {
      const [loading, typing, content] = getValueFromProps(this, [
        'loading',
        'typing',
        'content',
      ]);
      if (loading) {
        return;
      }
      if (content) {
        const typingOptions = typing
          ? typing === true
            ? { step: 1, interval: 100 }
            : typing
          : false;
        if (typingOptions) {
          const { step = 1, interval = 100 } = typingOptions;
          const bubbleText = content;
          // todo 待优化
          const typingLoop = (length: number, typedLength: number) => {
            const typingText = bubbleText.slice(0, typedLength);
            this.setData({
              bubbleText: typingText,
            });
            if (typedLength < length) {
              setTimeout(() => {
                typingLoop(length, typedLength + step);
              }, interval);
            } else {
              triggerEventOnly(this, 'typingComplete');
            }
          };
          typingLoop(bubbleText.length, step);
        } else {
          this.setData({
            bubbleText: content,
          });
          triggerEventOnly(this, 'typingComplete');
        }
      }
    },
  },

  options: {
    // 使用基础库内置的数据变化观测器
    observers: true,
    multipleSlots: true,
  },
  observers: {
    loading: function (loading: boolean) {
      if (!loading) {
        this.startTyping();
      }
    },
  },
  /// #if ALIPAY || ALIPAYNATIVE
  didMount() {
    this.startTyping();
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.startTyping();
  },
  /// #endif
});
