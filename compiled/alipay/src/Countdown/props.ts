export interface ICountdownProps {
  className?: string; // 容器的 class
  countdownEndTime?: string; // 倒计时结束时间戳
  countdownStartTime?: string; // 倒计时开始的时间戳
  time?: number; // 数字格式的倒计时时间长度，优先级比时间戳低
  countdownType?: '' | 'day'; // 倒计时类型，目前支持普通的和天维度的
  autoShowDay?: boolean; // 自动展示"天"
  onCountdownChange?: () => void; // 倒计时变化时的回调
  onCountdownFinish?: () => void; // 倒计时结束回调
}

export const CountdownDefaultProps: ICountdownProps = {
  className: '',
  time: 0,
  countdownStartTime: '',
  countdownEndTime: '', // 倒计时结束时间戳
  countdownType: '',
  autoShowDay: true,
  onCountdownChange: () => {}, // 倒计时变化时的回调
  onCountdownFinish: () => {}, // 倒计时结束回调
};
