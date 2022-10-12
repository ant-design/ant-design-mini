

interface IndexArr {
    /**
     * @description 索引值，与indexList中对应
     */
    index: string;  
    /**
     * @description base 模式下的文本
     */
    name?: string; 
    /**
     * @description base 模式下的头像，不传则不会展示
     */
    avator?: string;
    /**
     * @description diy 模式下的头像，可传任意值
     */
    [key: string]: any;
}

export interface IndexListProps {
  /**
   * @description 组件模式 base | diy | only
   * @default 'base'
   */
  type: 'base' | 'diy' | 'only',
  indexList: string[],
  indexArr?: IndexArr[],
  scrollToKey: '',
  sticky: boolean,
  vibrate: boolean,
  'amd-index-list-index'?: string,
  'amd-index-list-item'?: string,
  'amd-index-list-list'?: string,
  'amd-index-list-key'?: string,
  onChange?: (index: string) => void,
}

export declare const IndexListDefaultProps: Partial<IndexListProps>;