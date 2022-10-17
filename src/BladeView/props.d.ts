interface IndexObj {
    /**
     * @description group key
     */
     key: string;  
    /**
     * @description group title
     */
     title: string; 
    /**
     * @description group items
     */
     items?: object[];
}

export interface BladeViewProps {
  /**
   * @description 组件模式 base | diy | only
   * @default 'base'
   */
  type?: 'base' | 'diy' | 'only',
  data: IndexObj[],
  scrollToKey?: string,
  value?: string,
  className?: string,
  sticky?: boolean,
  vibrate?: boolean,
  onChange?: (item: object, groups: IndexObj) => void,
  onChangeSwipeKey?: (obj: IndexObj) => void,
}

export declare const BladeViewDefaultProps: Partial<BladeViewProps>;