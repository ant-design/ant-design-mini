import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import { CountdownDefaultProps } from './props';

dayjs.extend(duration);

Component({
  props: CountdownDefaultProps,
  data: {
    countdownDay: null, // 注意这些倒计时相关的都应该是字符串
    countdownHour: null, // 倒计时小时 注意都用字符串，避免0被判false的问题
    countdownMin: null, // 倒计时分钟
    countdownSec: null, // 倒计时秒
    showDecisecond: true, // 倒计时结束时不展示秒后一位(厘秒)
  },
  methods: {
    init() {
      const [
        countdownStartTime,
        countdownEndTime,
        countdownType,
        time,
        autoShowDay,
      ] = getValueFromProps(this, [
        'countdownStartTime',
        'countdownEndTime',
        'countdownType',
        'time',
        'autoShowDay',
      ]);
      const timeNum = isNaN(Number(time)) ? 0 : Number(time);

      const defaultEndTime = +new Date() + timeNum * 1000;
      const currentTimeStr = `${countdownStartTime || +new Date()}`;
      const endTimeStr = `${countdownEndTime || defaultEndTime}`;

      // 如果服务端给的是秒级别的时间戳，自动补3个0转成毫秒的
      const finalCurrentTimeStr = `${currentTimeStr}${
        currentTimeStr.length === 10 ? '000' : ''
      }`;
      const finalEndTimeStr = `${endTimeStr}${
        endTimeStr.length === 10 ? '000' : ''
      }`;
      const finalStartTime = parseInt(finalCurrentTimeStr, 10);
      const finalEndTime = parseInt(finalEndTimeStr, 10);

      this.setData({
        showDay: autoShowDay ? this.data.countdownDay !== '0' : true,
      });

      this.countdown(finalStartTime, finalEndTime, (remainTime) => {
        if (remainTime < 1) {
          // 小于1s了，说明倒计时该结束了
          triggerEventOnly(this, 'countdownFinish');
          this.setData({
            showDecisecond: false,
          });
        }

        const durationTime = dayjs.duration(remainTime);

        const day = Math.floor(durationTime.asDays()).toString();

        let hour = '';
        if (countdownType === 'day') {
          hour = durationTime.format('HH');
        } else {
          const hoursNum = Math.floor(durationTime.asHours());
          hour = `${hoursNum < 10 ? '0' : ''}${hoursNum > 0 ? hoursNum : '0'}`;
        }

        const min = durationTime.format('mm');
        const sec = durationTime.format('ss');

        this.setData({
          countdownDay: day,
          countdownHour: hour,
          countdownMin: min,
          countdownSec: sec,
        });

        triggerEvent(this, 'countdownChange', {
          remainTime,
          day,
          hour,
          min,
          sec,
        });
      });
    },
    countdown(
      startTimestamp: number,
      endTimestamp: number,
      callback: (remainingTime: number) => void
    ) {
      // if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
      //   return;
      // }
      const currentTime = Date.now(); // 当前时间戳
      if (
        currentTime - Math.round(startTimestamp) < 10000 &&
        Math.round(startTimestamp) - currentTime < 10000
      ) {
        // 如果服务端下发的startTime时间戳和本机的时间戳相差10s以内，以本地时间戳为准
        const getRemainingTime = (): number => {
          // 本地时间戳与服务端时间戳差距在10s以内都属于正常的，可以直接用本地时间。
          let remainingTime;
          const newCurrentTime = +new Date();

          // 判断是否到达结束时间
          if (newCurrentTime >= endTimestamp) {
            remainingTime = 0;
          } else {
            remainingTime = endTimestamp - newCurrentTime;
          }
          return remainingTime;
        };

        const updateCountdown = () => {
          const remainingTime = getRemainingTime();

          // 调用setData方法更新UI
          callback(remainingTime);
          if (remainingTime > 0) {
            // 若还有剩余时间，延迟1秒后递归调用自身
            this.timer = setTimeout(updateCountdown, 1000);
          }
        };

        // 预先调一次
        const remainingTime = getRemainingTime();
        callback(remainingTime);

        if (remainingTime === 0) {
          // 如果第一次就是0，可以直接停了
          return;
        }

        // 初始化倒计时
        updateCountdown();
      } else {
        // 否则以服务端时间为准，直接算出当前剩余时间，按秒循环即可
        const remainingTime = endTimestamp - startTimestamp;
        const totalCount = Math.round(remainingTime / 1000);
        let count = 0;

        // 立刻调一次
        callback(remainingTime - count * 1000);

        // 每秒调一次，循环count次
        this.intervalId = setInterval(() => {
          if (count >= totalCount) {
            clearInterval(this.intervalId);
          } else {
            count++;
            // console.log('111111', remainingTime, count, remainingTime - count * 1000)
            callback(remainingTime - count * 1000);
          }
        }, 1000);
      }
    },
  },

  /// #if ALIPAY || ALIPAYNATIVE
  onInit() {
    this.init();
  },
  didUnmount() {
    clearInterval(this.intervalId);
    clearTimeout(this.timer);
  },
  didUpdate(prevProps) {
    const autoShowDay = getValueFromProps(this, 'autoShowDay');
    if (prevProps.autoShowDay !== autoShowDay) {
      this.setData({
        showDay: autoShowDay ? this.data.countdownDay !== '0' : true,
      });
    }
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.init();
  },
  detached() {
    clearInterval(this.intervalId);
    clearTimeout(this.timer);
  },
  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      if (prevData.autoShowDay !== data.autoShowDay) {
        this.setData({
          showDay: data.autoShowDay ? this.data.countdownDay !== '0' : true,
        });
      }
    },
  },

  /// #endif
});
