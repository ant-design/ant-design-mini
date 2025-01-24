import { IBaseProps } from '../../src/_util/base';

interface IBubbleProps extends IBaseProps {
  /**
   * @description 气泡内容
   */
  content: string;
  /**
   * @description 是否为用户消息(右侧)
   * @default start
   */
  placement?: 'start' | 'end';
  /**
   * @description 气泡形状
   * @default 'default'
   */
  shape?: 'round' | 'corner' | 'default';
  /**
   * @description 气泡样式
   * @default filled
   */
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow';
  /**
   * @description 头像地址
   */
  avatar?: string;
  /**
   * @description 是否正在加载中
   * @default false
   */
  loading?: boolean;
  /**
   * @description 设置聊天内容打字动画
   * @default false
   */
  typing?: boolean | { step?: number, interval?: number };
  /**
   * @description 打字动画完成时触发
   */
  onTypingComplete?: () => void;
}

export const BubbleProps: IBubbleProps = {
  content: '',
  placement: 'start',
  loading: false,
  typing: false,
  shape: 'default',
  variant: 'filled',
  avatar: '',
};

export type { IBubbleProps };
