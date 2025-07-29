import equal from 'fast-deep-equal';
import createValue from '../mixins/value';
import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventValues,
} from '../_util/simply';
import { DefaultProps } from './props';

Component({
  props: DefaultProps,
  data: {
    checked: false,
    countdownArr: [],
  },
  methods: {
    dealAllCountdown(val) {
      // 如果时间表的没有变，直接返回
      const newCountdownRecord = val.map((item) => item.countdownTime);
      if (equal(this.countdownTimeRecord, newCountdownRecord)) return;
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
      if (this.countdownTimerArr[index]) {
        clearTimeout(this.countdownTimerArr[index] as number);
      }
      const countdownArr = this.data.countdownArr;
      countdownArr[index] = timeNum;
      this.setData({
        countdownArr,
      });
      const countdownTimer = (time) => {
        countdownArr[index] = time;
        this.setData({
          countdownArr,
        });
        this.timer = setTimeout(() => {
          if (time - 1 > 0) {
            countdownTimer(time - 1);
          } else {
            countdownArr[index] = 0;
            this.setData({
              countdownArr,
            });
            const buttons = getValueFromProps(this, 'buttons');
            const item = buttons[index];
            triggerEventValues(this, 'countdownFinish', [item, index]);
          }
        }, 1000);
      };

      countdownTimer(timeNum);
    },

    onCheckChange(value) {
      let checked;
      /// #if ALIPAY
      checked = value;
      /// #endif
      /// #if WECHAT
      checked = value.detail;
      /// #endif
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
      const { checked } = this.data;
      triggerEventValues(this, 'buttonTap', [item, index, checked], event);
    },

    onReadSwiperTap(event) {
      const { index } = event.currentTarget.dataset;
      this.onReadChange({ detail: { current: index } });
    },

    onReadChange(event) {
      const { current } = event.detail;
      this.update(current);
      triggerEvent(this, 'readChange', current, event);
    },
  },
  mixins: [
    createValue({
      valueKey: 'readCurrent',
      defaultValueKey: 'defaultReadCurrent',
    }),
  ],
  /// #if ALIPAY
  onInit() {
    this.countdownTimeRecord = []; // 缓存记录需要倒计时的项和时间，变化时用于判断要不要重置倒计时
    this.countdownTimerArr = []; // 记录倒计时timerId，方便销毁组件时销毁
    const buttons = getValueFromProps(this, 'buttons');
    if (
      Array.isArray(buttons) &&
      buttons.length &&
      buttons.some((item) => item.countdownTime)
    ) {
      // 数组形式
      this.dealAllCountdown(buttons);
    }
  },
  async deriveDataFromProps(nextProps) {
    const { buttons } = nextProps;
    if (!equal(getValueFromProps(this, 'buttons'), buttons)) {
      if (
        Array.isArray(buttons) &&
        buttons.length &&
        buttons.some((item) => item.countdownTime)
      ) {
        // 数组形式
        this.dealAllCountdown(buttons);
      }
    }
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.countdownTimeRecord = []; // 缓存记录需要倒计时的项和时间，变化时用于判断要不要重置倒计时
    this.countdownTimerArr = []; // 记录倒计时timerId，方便销毁组件时销毁
    const buttons = getValueFromProps(this, 'buttons');
    if (
      Array.isArray(buttons) &&
      buttons.length &&
      buttons.some((item) => item.countdownTime)
    ) {
      // 数组形式
      this.dealAllCountdown(buttons);
    }
  },
  observers: {
    'buttons': function (data) {
      if (
        Array.isArray(data.buttons) &&
        data.buttons.length &&
        data.buttons.some((item) => item.countdownTime)
      ) {
        // 数组形式
        this.dealAllCountdown(data.buttons);
      }
    },
  },
  /// #endif
});
