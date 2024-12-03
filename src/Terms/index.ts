import isEqual from 'lodash.isequal';
import { Component, triggerEvent, triggerEventValues } from '../_util/simply';
import { DefaultProps } from './props';

Component(
  DefaultProps,
  {
    dealAllCountdown(val) {
      // 如果时间表的没有变，直接返回
      const newCountdownRecord = val.map((item) => item.countdown);
      if (isEqual(this.countdownTimeRecord, newCountdownRecord)) return;
      this.setData({
        countdownArr: new Array(val.length),
      });
      newCountdownRecord.forEach((item, index) => {
        if (item && item !== this.countdownTimeRecord[index]) {
          this.dealCountdown(item, index);
        }
      });
      this.countdownTimeRecord = newCountdownRecord; // 缓存每一项的倒计时时间，用来对比每一项的倒计时是否变化，决定要不要重置倒计时
    },
    dealCountdown(timeNum, index) {
      // 每一项倒计时的处理方法，注意这种行为是存在性能浪费的（可能会有多个定时器同时在跑），
      // 只是因为预判操作按钮不可能太多所以为了简单才这样做，如果数量过多是需要考虑同一个一个定时器算多个倒计时的。
      if (this.countdownTimerArr[index]) {
        clearTimeout(this.countdownTimerArr[index] as number);
      }
      const countdownArr = [...this.data.countdownArr];
      this.setData({
        countdownArr: countdownArr.splice(index, 1, timeNum),
      });
      const countdownTimer = (time) => {
        this.setData({
          countdownArr: countdownArr.splice(index, 1, time),
        });
        this.timer = setTimeout(() => {
          if (time - 1 > 0) {
            countdownTimer(time - 1);
          } else {
            this.setData({
              countdownArr: countdownArr.splice(index, 1, 0),
            });
            const item = this.props.buttons[index];
            triggerEventValues(this, 'countdownFinish', [item, index]);
            // 倒计时结束时，自动触发一次按钮对应的点击事件
            if (item && !item.noAutoExecute) {
              this.onActionTap({
                currentTarget: {
                  dataset: { item, index },
                },
              });
            }
          }
        }, 1000);
      };

      countdownTimer(timeNum);
    },

    onCheckChange(checked) {
      this.setData({
        checked,
      });
      triggerEvent(this, 'checkChange', checked);
    },

    onTermPrefixTap() {
      const { checked } = this.data;
      this.setData({
        checked: !checked,
      });
      triggerEvent(this, 'termPrefixTap', !checked);
    },

    onTermTap(event) {
      const { item, index } = event.currentTarget.dataset;
      triggerEventValues(this, 'termTap', [item, index], event);
    },

    onButtonTap(event) {
      const { item, index } = event.currentTarget.dataset;
      triggerEventValues(this, 'buttonTap', [item, index], event);
    },
  },
  {
    checked: false,
    countdownArr: [],
  },
  undefined,
  {
    /// #if ALIPAY
    onInit() {
      this.countdownTimeRecord = []; // 缓存记录需要倒计时的项和时间，变化时用于判断要不要重置倒计时
      this.countdownTimerArr = []; // 记录倒计时timerId，方便销毁组件时销毁
      const { buttons } = this.props;
      if (
        Array.isArray(buttons) &&
        buttons.length &&
        buttons.some((item) => item.countdown)
      ) {
        // 数组形式
        this.dealAllCountdown(buttons);
      }
    },
    async deriveDataFromProps(nextProps) {
      const { buttons } = nextProps;
      if (!isEqual(this.props.buttons, buttons)) {
        if (
          Array.isArray(buttons) &&
          buttons.length &&
          buttons.some((item) => item.countdown)
        ) {
          // 数组形式
          this.dealAllCountdown(buttons);
        }
      }
    },
    /// #endif
    /// #if WECHAT

    /// #endif
  }
);
