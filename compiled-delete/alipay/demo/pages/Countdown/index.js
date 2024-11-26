Page({
    data: {
        countdownTen: +new Date() + 10000,
        currentDelayed: +new Date() + 500,
        wrongCurrent: +new Date() - 50000,
        countdownDay: +new Date() + 500000000,
        countdownCurrent: +new Date(),
        countdownAutoDay: +new Date() + 86405000, // 自动计算“天”的展示
    },
    handleCountdownChange(e) {
        console.log('倒计时变化', JSON.stringify(e));
    },
    handleCountdownEnd() {
        console.log('倒计时结束');
    },
});
