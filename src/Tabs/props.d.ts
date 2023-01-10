
import { IBaseProps } from '../_base';

export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basic(基础)，capsule(胶囊)，mixin(混合)
   * @default "basic"
   */
  type?: 'basic' | 'capsule' | 'mixin';

  /**
   * @description tabs方向
   */
   direction?: 'horizontal' | 'vertical';

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
    disabled?: boolean; 
   }[];

   /**
    * 选项初始值
    */
   defaultCurrent?: number;
}
export declare const TabsDefaultProps: Partial<ITabsProps>;
