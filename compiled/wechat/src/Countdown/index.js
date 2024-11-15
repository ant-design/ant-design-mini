import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { CountdownDefaultProps } from './props';
dayjs.extend(duration);
function countdown(startTimestamp, endTimestamp, callback) {
    // if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
    //   return;
    // }
    var currentTime = Date.now(); // 当前时间戳
    if (currentTime - Math.round(startTimestamp) < 10000 &&
        Math.round(startTimestamp) - currentTime < 10000) {
        // 如果服务端下发的startTime时间戳和本机的时间戳相差10s以内，以本地时间戳为准
        var getRemainingTime_1 = function () {
            // 本地时间戳与服务端时间戳差距在10s以内都属于正常的，可以直接用本地时间。
            var remainingTime;
            var newCurrentTime = +new Date();
            // 判断是否到达结束时间
            if (newCurrentTime >= endTimestamp) {
                remainingTime = 0;
            }
            else {
                remainingTime = endTimestamp - newCurrentTime;
            }
            return remainingTime;
        };
        var updateCountdown_1 = function () {
            var remainingTime = getRemainingTime_1();
            // 调用setData方法更新UI
            callback(remainingTime);
            if (remainingTime > 0) {
                // 若还有剩余时间，延迟1秒后递归调用自身
                setTimeout(updateCountdown_1, 1000);
            }
        };
        // 预先调一次
        var remainingTime = getRemainingTime_1();
        callback(remainingTime);
        if (remainingTime === 0) {
            // 如果第一次就是0，可以直接停了
            return;
        }
        // 初始化倒计时
        updateCountdown_1();
    }
    else {
        // 否则以服务端时间为准，直接算出当前剩余时间，按秒循环即可
        var remainingTime_1 = endTimestamp - startTimestamp;
        var totalCount_1 = Math.round(remainingTime_1 / 1000);
        var count_1 = 0;
        // 立刻调一次
        callback(remainingTime_1 - count_1 * 1000);
        // 每秒调一次，循环count次
        var intervalId_1 = setInterval(function () {
            if (count_1 >= totalCount_1) {
                clearInterval(intervalId_1);
            }
            else {
                count_1++;
                // console.log('111111', remainingTime, count, remainingTime - count * 1000)
                callback(remainingTime_1 - count_1 * 1000);
            }
        }, 1000);
    }
}
Component({
    data: {
        countdownDay: null,
        countdownHour: null,
        countdownMin: null,
        countdownSec: null,
        showDecisecond: true, // 倒计时结束时不展示秒后一位(厘秒)
    },
    props: CountdownDefaultProps,
    onInit: function () {
        var _this = this;
        var _a = this.props, countdownStartTime = _a.countdownStartTime, countdownEndTime = _a.countdownEndTime, countdownType = _a.countdownType, time = _a.time;
        var timeNum = isNaN(Number(time)) ? 0 : Number(time);
        var defaultEndTime = +new Date() + timeNum * 1000;
        var currentTimeStr = "".concat(countdownStartTime || +new Date());
        var endTimeStr = "".concat(countdownEndTime || defaultEndTime);
        // 如果服务端给的是秒级别的时间戳，自动补3个0转成毫秒的
        var finalCurrentTimeStr = "".concat(currentTimeStr).concat(currentTimeStr.length === 10 ? '000' : '');
        var finalEndTimeStr = "".concat(endTimeStr).concat(endTimeStr.length === 10 ? '000' : '');
        var finalStartTime = parseInt(finalCurrentTimeStr, 10);
        var finalEndTime = parseInt(finalEndTimeStr, 10);
        var autoShowDay = this.props.autoShowDay;
        this.setData({
            showDay: autoShowDay ? this.data.countdownDay !== '0' : true,
        });
        countdown(finalStartTime, finalEndTime, function (remainTime) {
            if (remainTime < 1) {
                // 小于1s了，说明倒计时该结束了
                _this.props.onCountdownFinish();
                _this.setData({
                    showDecisecond: false,
                });
            }
            var durationTime = dayjs.duration(remainTime);
            var day = Math.floor(durationTime.asDays()).toString();
            var hour = '';
            if (countdownType === 'day') {
                hour = durationTime.format('HH');
            }
            else {
                var hoursNum = Math.floor(durationTime.asHours());
                hour = "".concat(hoursNum < 10 ? '0' : '').concat(hoursNum);
            }
            var min = durationTime.format('mm');
            var sec = durationTime.format('ss');
            _this.setData({
                countdownDay: day,
                countdownHour: hour,
                countdownMin: min,
                countdownSec: sec,
            });
            if (_this.props.onCountdownChange) {
                _this.props.onCountdownChange({ remainTime: remainTime, day: day, hour: hour, min: min, sec: sec });
            }
        });
    },
    didUpdate: function (prevProps) {
        var autoShowDay = this.props.autoShowDay;
        if (prevProps.autoShowDay !== autoShowDay) {
            this.setData({
                showDay: autoShowDay ? this.data.countdownDay !== '0' : true,
            });
        }
    },
});
