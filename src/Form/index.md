---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 16
toc: 'content'
---

# Form 表单
Form 表单	高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式


## 何时使用
- 用于创建一个实体或收集信息
- 需要对输入的数据类型进行校验时

## 注意事项
- 使用条件：小程序项目需开启 `Component2` 选项
- 配合 a:for 指令使用时，推荐指定 key 值，否则可能出现异常情况
- Form 标签的 form 属性值与其内部 FormItem 标签 的form 属性值必须相同，且`全局唯一`；内部的 FormItem 标签的 name 属性必须`唯一`。详见下方代码示例。
- 配合组件库内的表单组件使用时候，需表单组件的 `mode` 属性值为 `form`。

## 代码示例

### 基本使用
<code src="../../demo/pages/FormBasic" ></code>

### 结合表单组件
<code src="../../demo/pages/Form" ></code>


### 动态表单
<code src="../../demo/pages/FormDynamic" ></code>

### 必填展示样式
<code src="../../demo/pages/FormRequiredMarkStyle" ></code>

### 实例方法使用
<code src="../../demo/pages/FormInsMethod" ></code>



## 属性

#### Form
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| form | string | 是 | - | 表单 uid |
| initialValues | Record<sring, any> | 否 | - | 表单初始值 |
| position | 'horizontal' &verbar;  'vertical'  | 否 | 'horizontal' | 布局 |
| requiredMarkStyle |  'asterisk' &verbar;  'text-required' &verbar;  'text-optional' | 否 | 'asterisk' |必填选填的标记样式 |
| className | string | 否 | - | 类名 |


#### FormItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| form | string | 是 | default | 表单 uid |
| name | string | 是 | default | 字段 uid |
| label | string | 否 | - | 字段名称 |
| position | 'horizontal' &verbar;  'vertical'| 否 | 'horizontal' | 布局，优先级高于Form的position |
| arrow | boolean | 否 | false | 表单项右侧箭头 |
| required | boolean | 否 | false | 是否必填，label展示必填标识 |
| help | string | 否 | - | label的解释说明 |
| className | string | 否 | - | 类名 |

## 事件

#### Form
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onValuesChange | 字段更新，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onFinish | 表单提交后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |

## 插槽



#### FormItem
| 名称 | 说明 |
| ----|----|
| extra | 表单项额外内容 |

## 实例方法

#### Form
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| getComponentIns | 获取组件示例，其值等同于[默认的 ref 返回值](https://opendocs.alipay.com/mini/framework/component-ref)  | () => Component |
| setFieldsValue | 设置表单字段值 | ( formName: `string`, fieldsVals: `Record<string, any>` ) => void |

