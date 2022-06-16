/**
 * @description 索引，用户只需单击一下即可执行操作并做出选择。
 * 常用于列表的分类显示和快速定位。
 */

 type GroupType = { key: string; title: string; items: Array<GroupItemType> };

 type GroupItemType = { label: string; value: ValueType };
 
 type ValueType = string | number;
 
 export interface IBladeViewProps {
   /**
    * @description  数据源
    */
   data: {key: string; title: string; items: { label: ValueType; value: ValueType }[]}[];
 
   /**
    * @description 当前值
    */
   value?: ValueType;
 
   /**
    * @description 默认滚动到的元素
    */
   scrollToKey?: string;
 
   /**
    * @description 每项label展示是否支持吸顶
    * @default true
    */
   sticky?: boolean;
 
   /**
    * @description 选择项时的回调
    */
   onChange?: (item: GroupItemType, group?: GroupItemType) => void;
 }
 
 export declare const BladeViewDefaultProps: Partial<IBladeViewProps>;