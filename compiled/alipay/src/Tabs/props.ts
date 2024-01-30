import { IBaseProps } from '../_util/base';

export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basic(基础)，capsule(胶囊)，mixin(混合)
   * @default "basic"
   */
  type: 'basic' | 'capsule' | 'mixin';

  /**
   * @description tabs方向
   */
  direction: 'horizontal' | 'vertical';

  /**
   * @description tab 切换时的回调
   */
  onChange: (index: number, e: Record<string, any>) => void;

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
    subTitle?: string;
  }[];

  /**
   * 选项初始值
   */
  defaultCurrent: number;

  /**
   * 滚动方式，direction为horizontal生效
   */
  scrollMode: 'edge' | 'center';

  /**
   * @description tabs bar类名
   */
  tabsBarClassName?: string;
  /**
   * @description tab类名
   */
  tabClassName?: string;

  /**
   *@description tab active类名
   */
  tabActiveClassName?: string;
}

export const TabsDefaultProps: Partial<ITabsProps> = {
  type: 'basic',
  defaultCurrent: 0,
  items: [],
  scrollMode: 'edge',
};

export const TabsFunctionalProps: Partial<ITabsProps> = {
  type: 'basic',
  direction: 'horizontal',
  current: null,
  defaultCurrent: 0,
  items: [],
  scrollMode: 'edge',
  tabsBarClassName: '',
  tabActiveClassName: '',
  tabClassName: '',
};
