import type { ObjectType } from './index';

export type Type = 'object' | 'array' | 'string' | 'number';

export type DisplayType = 'row' | 'column';

export interface Footer {
  text: string;
  type: 'default' | 'primary';
}

export interface Protocol {
  name: string;
  url: string;
}
export interface Operation {
  flex: boolean;
  fixedFooter: boolean;
  protocolPrefix: string;
  showProtocolCheck: boolean;
  footer: Footer[];
  protocols: Protocol[];
}

export interface Rule {
  pattern?: string;
  message: string;
  type?: string;
  required?: boolean;
  validator?: (_: any, value: ObjectType) => Promise;
}

export interface FormItem {
  title?: string;
  /**
   * @description 是否必填
   */
  required: boolean;
  type: Type;
  /**
   * @description 表单项类型 input、picker等
   */
  widget: string;
  value: any;
  path?: string;
  visible?: boolean;
  order: number;
  /**
   * @description 当基础字段不够描述组件的展示时，使用 props 字段作为扩展
   */
  props: ObjectType;
  /**
   * @description 表单项是否置灰
   */
  disabled: boolean;
  requiredMarkStyle?: 'empty' | 'text-not-required' | 'text-required' | 'asterisk';
  /**
   * @description 用于描述细致的、定制化的校验，支持 async-validator 所有的 api
   */
  rules: Rule | Rule[];
  /**
   * @description 用于在元素下展示更多说明信息，extra 可以是 html string，也可以是纯文案，会展示在元素下面一行紧贴
   */
  extra: string | { widget: string };

  relation: (formData: ObjectType) => ObjectType;
}

export interface Group {
  title: string;
  type: Type;
  className?: string;
  /**
   * 分组类型 默认值card
   */
  widget?: 'card' | 'card-radius' | 'card-overall' | 'card-overall-radius';
  props?: ObjectType;
  /**
   * @description 组件是否隐藏状态
   * @default true
   */
  visible: boolean;
  extra?: string | {
    widget: string;
    text: string;
  };
  order: number;
  displayType?: DisplayType;
  relation: (formData: ObjectType) => ObjectType;
  properties: Record<string, FormItem>
}
export interface SchemaBase {
  /**
   * 表单唯一标识
   */
  formId: string;
  /**
   * 底部操作栏配置
   */
  operation: Operation | null;

  /**
   * @description Label 与 widget 的展示关系，row 表示并排展示，column 表示两排展示，写在 schema 顶层时代表表单整体的排列方式
   * @default 'row'
   */
  displayType: DisplayType;

  /**
   * @description schema类型
   * @default 'object'
   */
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'range' | 'html';
  properties: Record<string, Group>
}

export type Schema = Partial<SchemaBase>;

export as namespace ISchema;
