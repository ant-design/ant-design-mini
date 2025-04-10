export interface SpaceProps {
  /**
   * @description 间距方向
   * @default "horizontal"
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * @description 间距大小
   * @default "middle"
   */
  size?: 'small' | 'middle' | 'large' | number;

  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;

  /**
   * @description 对齐方式
   * @default "center"
   */
  align?: 'start' | 'end' | 'center' | 'baseline';

  /**
   * @description 主轴对齐方式
   * @default "start"
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';

  /**
   * @description 自定义类名
   */
  className?: string;

  /**
   * @description 自定义样式
   */
  style?: string;
}

export const SpaceDefaultProps = {
  direction: 'horizontal',
  size: 'middle',
  wrap: false,
  align: 'center',
  justify: 'start',
  className: '',
  style: '',
};
