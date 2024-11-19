Page({
  data: {
    countdownTen: +new Date() + 10000, // 截止时间戳，当前时间加10s，即倒计时10s
    currentDelayed: +new Date() + 500, // 有些许偏差的起点时间戳，模拟正常设备正常网络时，服务端下发的起始时间戳
    wrongCurrent: +new Date() - 50000, // 当前时间戳减50s，会被判定为偏差大
    countdownDay: +new Date() + 500000000, // 当前时间戳减50s，会被判定为偏差大
    countdownCurrent: +new Date(), // 截止时间戳，当前时间，用于测试初始就是0的情况
    countdownAutoDay: +new Date() + 86405000, // 自动计算“天”的展示
  },
  handleCountdownChange(e) {
    console.log('倒计时变化', JSON.stringify(e));
  },
  handleCountdownEnd() {
    console.log('倒计时结束');
  },
});
