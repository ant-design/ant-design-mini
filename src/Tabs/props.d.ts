
import { IBaseProps } from '../_base';

export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basis(基础)，capsule(胶囊)，mixin(混合)
   * @default "basis"
   */
  type?: 'basis' | 'capsule' | 'mixin';

  /**
   * @description 垂直
   */
  vertical?: boolean;

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
   }[]
}
export declare const TabsDefaultProps: Partial<ITabsProps>;
