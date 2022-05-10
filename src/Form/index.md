---
nav:
  path: /components
group:
  title: 信息输入
  order: 16
toc: false
---

# Form 表单
Form 表单	高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式


## 何时使用
- 用于创建一个实体或收集信息
- 需要对输入的数据类型进行校验时

## 注意事项
- 使用条件：小程序项目需开启 `Component2` 选项
- 当页面内有多个表单实例时，Form 标签的 form 属性值与其内部 FormItem 标签 的form 属性值必须相同，且`页面唯一`。
- 配合 a:for 指令使用时，推荐指定 key 值，否则可能出现异常情况
## 代码示例

### 基础使用
<code src="../../demo/pages/Form" ></code>

### 表单验证
<code src="../../demo/pages/FormValidate" ></code>

### 表单类型
<code src="../../demo/pages/FormType" ></code>

### 动态表单
<code src="../../demo/pages/FormDynamic" ></code>

### 表单分组
<code src="../../demo/pages/FormGroup" ></code>

### 必填展示样式
<code src="../../demo/pages/FormRequiredMarkStyle" ></code>

### 实例方法使用
<code src="../../demo/pages/FormInsMethod" ></code>

### 页面多个表单 - 指定uid
<code src="../../demo/pages/FormMulti" ></code>

## 属性

#### Form
| 属性 |  说明 | 类型 | 默认值 |
| -----|:-----:|:-----:|:-----:|
| initialValues | 表单初始值 |  Record<sring, any> | - |
| position | 布局 | 'horizontal' &verbar;  'vertical'  | 'horizontal' |
| requiredMarkStyle | 必填选填的标记样式 |  'asterisk' &verbar;  'text-required' &verbar;  'text-optional' | 'asterisk' |
| form | 表单 uid，当前页面有多个表单实例时必传且`页面唯一` | string | - |
| className |  类名 | string | - |

#### FormItem
| 属性 |  说明 | 类型 | 默认值 |
| -----|:-----:|:-----:|:-----:|
| name | 字段key  | string| - |
| label | 字段显示名称  | string | - |
| position | 布局，优先级高于Form的position  |  'horizontal' &verbar;  'vertical' | - |
| arrow | 表单项右侧箭头 | boolean | false |
| required | 是否必填，label展示必填标识 | boolean | false |
| initialValue |  表单初始值,优先级低于Form的initialValues | any | - |
| rules |  校验规则，设置字段的校验逻辑。点击[查看](#rule) | [Rule](#rule)[] | [] |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验 | boolean | false |
| dependencies | 当字段间存在依赖关系时使用。如果一个字段设置了 dependencies 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验  | string[]  | [] |
| form |  表单 uid，当前页面有多个表单实例时必传且`页面唯一` | string | - |

#### FromGroup
| 属性 |  说明 | 类型 | 默认值 |
| -----|:-----:|:-----:|:-----:|
| header | FormGroup 名称 | string | - |
| radius | FormGroup 形状是否为圆角 | boolean | false |

#### Rule

| 名称 | 说明 | 类型 | 
| -----|:-----:|:-----:|
| message | 错误信息，不设置时会自动生成 |  string | 
| required | 是否为必填字段  | boolean | 
| pattern |  正则表达式匹配 | RegExp | 
| type | 类型，常见有 string &verbar; number &verbar; boolean &verbar; url &verbar; email。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | string  | 
| enum |  是否匹配枚举中的值（需要将 type 设置为 enum） | any[] | 
| len |  类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度  | number | 
| max |  必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | number | 
| min |  必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度  |number | 
| whitespace | 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效 | boolean | 

## 事件

#### Form
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onValuesChange | 字段更新，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onFinish | 表单提交验证成功后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onFinishFailed | 表单提交验证失败后，触发此回调 | ( allFields: `Record<string, any>`, errors: `Record<string, any>` ) => void |

## 插槽

#### FormGroup
| 名称 | 说明 |
| ----|----|
| header | 标题内容 |


#### FormItem
| 名称 | 说明 |
| ----|----|
| extra | 表单项额外内容 |

## 实例方法

#### Form
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| setFieldsValue | 设置表单字段值 | ( fieldValues: `Record<string, any>` ) => void |
| getFieldsValue | 获取表单字段值 | () => `Reacord<string,any>`|
| validate | 校验表单字段 | ( validateFields?: string[] ) => void |


## 样式类

#### Form
| 类名 | 说明 |
| -----|-----|
| amd-form | 整体样式 |
| amd-form-footer | footer 样式 |

#### FormGroup
| 类名 | 说明 |
| -----|-----|
| amd-form-group-header | 标题样式 |
| amd-form-group-radius | 圆角样式 |


#### FormItem

| 类名 | 说明 |
| -----|-----|
| amd-form-item-label | 标签样式 |
| amd-form-item-field | 字段样式 |
| amd-form-item-extra | 额外内容样式 |
| amd-form-item-arrow | 箭头样式 |
