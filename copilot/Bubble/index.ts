import { Component } from '../../src/_util/simply';
import { BubbleProps } from './props';

Component(
  BubbleProps,
  {
    startTyping() {
      if (this.props.loading) {
        return;
      }
      if (this.props.content) {
        const typingOptions = this.props.typing
          ? this.props.typing === true
            ? { step: 1, interval: 100 }
            : this.props.typing
          : false;
        if (typingOptions) {
          const { step = 1, interval = 100 } = typingOptions;
          const content = this.props.content;
          // todo 待优化
          const typingLoop = (length: number, typedLength: number) => {
            const typingText = content.slice(0, typedLength);
            this.setData({
              bubbleText: typingText,
            });
            if (typedLength < length) {
              setTimeout(() => {
                typingLoop(length, typedLength + step);
              }, interval);
            } else {
              this.props.onTypingComplete?.();
            }
          };
          typingLoop(content.length, step);
        } else {
          this.setData({
            bubbleText: this.props.content,
          });
          this.props.onTypingComplete?.();
        }
      }
    },
  },
  {
    bubbleText: '',
  },
  [],
  {
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
    didMount() {
      this.startTyping();
    },
  }
);
