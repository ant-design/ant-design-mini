import { IBaseProps, IconType } from '../_base';


/**
 * @description 评分
 */
export interface IRateProps extends IBaseProps {
  /**
  * @description 当前值
  * @default 0
  */
  value: number;
  /**
  * @description icon类型
  * @default "HeartOutline"
  */
  iconType?: IconType;
  /**
  * @description 激活icon颜色
  * @default "#ffd21e"
  */
  activeColor: string;
  /**
   * @description 内联尺寸
   * @default "medium"
   */
  inlineSize?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
  * @description 最大值
  * @default 5
  */
  count?: number; //star 总数	
  /**
  * @description 是否允许再次点击后清除
  * @default true
  */
  allowClear?: boolean;
  /**
  * @description 是否允许半选
  * @default false
  */
  allowHalf?: boolean;
  /**
  * @description 只读
  * @default false
  */
  readOnly?: boolean;
  /**
  * @description 改变事件，触发回调
  */
  onChange?: (e: number) => void;
}
export declare const RateDefaultProps: Partial<IRateProps>;
