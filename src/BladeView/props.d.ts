type GroupType = { key: string; title: string; items: Array<GroupItemType> };

type GroupItemType = { label: ValueType; value: ValueType };

type ValueType = string | number;
export interface Data {
  currentKey: string;
  scrollTop: number;
  isTouchingSideBar: boolean;
}

export interface Props {
  data: Array<GroupType>; // 数据源
  scrollToKey?: string; // 首次渲染时滚到的元素key值
  sticky?: boolean; // 默认为true
  selectValue?: ValueType; // 外部受控选择的值，对应GroupItemType的value
  onSelectItem?: (item: GroupItemType, groups?: GroupItemType) => void; // 选择项时的回调
}

export interface Methods {
  [key: string]: Function;
}

export interface Instance {
  topRange: { id: string; key: string; top: number; height: number }[];
  sidebarDistance: { key: string; top: number }[];
  isScrolling: boolean;
  debounce: any;
}
