---
order: 3
nav:
  path: /form
group:
  title: 通用
  order: 0
---

# 表单 schema

schema 是表单渲染的所有数据配置集合，包含表单布局、表单分组的配置以及每个表单项自身的配置数据和方法勾子，涵盖布局、校验等方方面面的信息，下面通过类型的形式详细说下表单schema有哪些配置参数


```js
interface SchemaBase {
  /**
   * 底部操作栏配置
   */
  operation: Operation | null;

  /**
   * label 与 widget 的展示关系，row 表示并排展示，column 表示两排展示，写在 schema 顶层时代表表单整体的排列方式
   * @default 'row'
   */
  displayType: DisplayType;

  /**
   * schema类型
   * @default 'object'
   */
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  /**
   * 表单项的信息，可能是分组也可是具体的表单项
   * @default 'object'
   */
  properties: Record<string, Group ｜ FormItem>
}


interface Operation {
  /**
   * 按钮的布局是否 flex
   * @default false
   */
  flex: boolean;
  /**
   * 按钮是否吸底
   * @default false
   */
  fixedFooter: boolean;
  /**
   * 协议前面的文案
   */
  protocolPrefix: string;
  /**
   * 是否展示协议勾选的选择框
   */
  showProtocolCheck: boolean;
  /**
   * 操作区按钮列表
   */
  footer: Footer[];
  /**
   * 协议列表
   */
  protocols: Protocol[];
  /**
   * 协议项点击的回调
   */
  onProtocolTap: (protocol: Protocol) => void;
  /**
   * 按钮点击的回调
   */
  onActionTap: (Footer: Footer) => void;
  /**
   * 按钮禁用点击的回调
   */
  onDisabledTap: (footer: Footer) => void;
  /**
   * 协议勾选状态更改的回调
   */
  onProtocolChange: (checked: boolean) => void;
  /**
   * 按钮部分第一次展示的回调
   */
  onFooterFirstAppear: () => void;
}

interface Group {
  /**
   * 分组名称
   */
  title: string;
  /**
   * 分组类型 分组的场景下都是 object
   */
  type: Type;
  /**
   * 分组节点的样式类
   */
  className?: string;
  /**
   * 分组类型
   * @default card
   */
  widget?: 'card' | 'card-radius' | 'card-overall' | 'card-overall-radius';
  /**
   * 组件是否显示
   * @default true
   */
  visible: boolean;
  /**
   * 分组排序
   */
  order: number;
  /**
   * label 与 widget 的展示关系，优先级高于 SchemaBase.displayType
   */
  displayType?: DisplayType;
  /**
   * 联动勾子，可以根据当前表单的填入数据动态修改当前分组的配置信息
   */
  relation: (formData: ObjectType) => ObjectType;
  /**
   * 分组下的表单子项
   */
  properties: Record<string, FormItem>
}

interface FormItem {
  /**
   * 表单项标题
   */
  title?: string;
  /**
   * 是否必填
   */
  required: boolean;
  /**
   * 表单项值的类型
   */
  type: Type;
  /**
   * 表单项类型 input、picker等，也可以是自定义的组件类型
   */
  widget: string;
  /**
   * 表单值
   */
  value: any;
  /**
   * 表单项的key值 默认是groupPath.formItem
   */
  path?: string;
  /**
   * 表单项是否显示
   */
  visible?: boolean;
  /**
   * 表单项在分组内的顺序
   */
  order: number;
  /**
   * 当基础字段不够描述组件的展示时，使用 props 字段作为扩展
   */
  props: ObjectType;
  /**
   * 表单项是否置灰
   */
  disabled: boolean;
  /**
   * 必填标识类型
   */
  requiredMarkStyle?: 'empty' | 'text-not-required' | 'text-required' | 'asterisk';
  /**
   * 用于描述细致的、定制化的校验，支持 async-validator 所有的 api
   */
  rules: Rule | Rule[];
  /**
   * 用于在元素下展示更多说明信息，extra 可以是 html string，也可以是纯文案，会展示在元素下面一行紧贴
   */
  extra?: string | {
    /**
     * 自定义类型，用于slot自定义识别
     */
    widget: string;
    text: string;
  };
  /**
   * 联动勾子，可以根据当前表单的填入数据动态修改当前表单项的配置信息
   */ 
  relation: (formData: ObjectType) => ObjectType;
}

```
