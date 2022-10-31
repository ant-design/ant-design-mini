
import { IBaseProps } from '../_base';

export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basis(基础)，capsule(胶囊)，mixin(混合)
   * @default "basis"
   */
  type?: 'basis' | 'capsule' | 'mixin';

  /**
   * @description 是否支持吸顶
   * @default false
   */
  sticky?: boolean;

  /**
   * @description 吸顶高度
   * @default 0
   */
  stickyTop?: string | number;

  /**
   * @description tab 切换时的回调
   */
  onChange?: (index: number, e: Record<string, any>) => void;

  /**
   * @description 选项
   */
   current: number;

   /**
   * @description 列表
   */
   items: {
    title: string;
    content: string;
   }[]
}
export declare const TabsDefaultProps: Partial<ITabsProps>;
