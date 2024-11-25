export interface ITableProps {
  dataSource: []; // 数据源
  columns: []; // 表格列的配置描述
  scrollHeight?: string; // 可滚动高度
  displayType?: 'FULL' | 'DEFAULT'; // 布局类型  FULL:内容撑满一屏展示; DEFAULT: 默认展示，可配置左侧固定和每列的宽度等
}

export interface RenderRuleProps {
  key?: string;
  sorter?: (a: any, b: any) => number;
  sorterStatus?: 'normal' | 'forward' | 'reverse';
}

export const TableDefaultProps: ITableProps = {
  dataSource: [],
  columns: [],
  displayType: 'DEFAULT',
};
