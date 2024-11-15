export interface ICountdownProps {
  className?: string; // 容器的 class
  countdownEndTime?: string; // 倒计时结束时间戳
  countdownStartTime?: string; // 倒计时开始的时间戳
  time?: number; // 数字格式的倒计时时间长度，优先级比时间戳低
  countdownType?: '' | 'day'; // 倒计时类型，目前支持普通的和天维度的
  autoShowDay?: boolean; // 自动展示"天"
  themeDisabled?: boolean; // 为了兼容老版本，禁用主题
  theme?: {
    // 主题
    backgroundColor: string; // 时间背景颜色
    timeColor?: string; // 时间文案颜色
    textColor?: string; // 文本颜色
  };
  onCountdownChange?: () => void; // 倒计时变化时的回调
  onCountdownFinish?: () => void; // 倒计时结束回调
  decisecond?: boolean; // 秒后一位(厘秒)倒计时
}

export const CountdownDefaultProps: ICountdownProps = {
  className: '',
  time: 0,
  countdownStartTime: '',
  countdownEndTime: '', // 倒计时结束时间戳
  countdownType: '',
  autoShowDay: true,
  themeDisabled: false,
  theme: {
    // 主题
    backgroundColor: '#1677ff', // 时间背景颜色
    timeColor: '#ffffff', // 时间文案颜色
    textColor: '#666666', // 文本颜色
  },
  onCountdownChange: () => {}, // 倒计时变化时的回调
  onCountdownFinish: () => {}, // 倒计时结束回调
  decisecond: false, // 秒后一位(厘秒)倒计时
};
