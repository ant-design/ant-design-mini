export var CountdownDefaultProps = {
    className: '',
    time: 0,
    countdownStartTime: '',
    countdownEndTime: '',
    countdownType: '',
    autoShowDay: true,
    themeDisabled: false,
    theme: {
        // 主题
        backgroundColor: '#1677ff',
        timeColor: '#ffffff',
        textColor: '#666666', // 文本颜色
    },
    onCountdownChange: function () { },
    onCountdownFinish: function () { },
    decisecond: false, // 秒后一位(厘秒)倒计时
};
