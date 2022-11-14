import { IBaseProps } from '../_base';

/**
 * @description 电梯组件
 */
export interface ITabsElevatorProps extends IBaseProps {
  /**
   * @description tabs选项
   */
  tabs: {
    title: string;
  }[];
  /**
   * @description 是否头部透明
   */
  transparentTitle: boolean;
  /**
   * @description 点击标题触发
   * @param index 
   */
  onTabClick(index: number): void;
  /**
   * @description 切换面板触发
   * @param index 
   * @param type 
   */
  onChange(index: number, type: 'scroll' | 'click'): void;
  /**
   * 非component2下获取组件实例
   * @param instance 
   */
  getRef(instance): void;
 
}

export declare const TabsElevatorDefaultProps: ITabsElevatorProps;
