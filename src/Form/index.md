---
nav:
  path: /components
group:
  title: 实验性质的组件
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
- 配合 a:for 指令使用时，推荐指定 key 值，否则可能出现异常情况
- 当页面内有多个表单实例时，Form 标签的 form 属性值与其内部 FormItem 标签 的form 属性值必须相同，且`页面唯一`；内部的 FormItem 标签的 name 属性必须`一致`。详见下方代码示例。

## 代码示例

### 基本使用
<code src="../../demo/pages/FormMulti" ></code>

### 结合表单组件
<code src="../../demo/pages/Form" ></code>

### 表单分组
<code src="../../demo/pages/FormGroup" ></code>
### 必填展示样式
<code src="../../demo/pages/FormRequiredMarkStyle" ></code>

### 动态表单
<code src="../../demo/pages/FormDynamic" ></code>

### 实例方法使用
<code src="../../demo/pages/FormInsMethod" ></code>



## 属性

#### Form
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| form | string | 否 | - | 表单 uid，当前页面有多个表单实例时必传且`页面唯一` |
| initialValues | Record<sring, any> | 否 | - | 表单初始值 |
| position | 'horizontal' &verbar;  'vertical' | 否 | 'horizontal' | 布局 |
| requiredMarkStyle | 'asterisk' &verbar;  'text-required' &verbar;  'text-optional' | 否 | 'asterisk' | 必填选填的标记样式	 |

#### FormItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| form | string | 否 | - | 表单 uid，当前页面有多个表单实例时必传且`页面唯一` |
| name | string | 是 | - | 字段 uid |
| label | string | 否 | - | 字段名称 |
| position | 'horizontal' &verbar;  'vertical' | 否 | - | 布局，优先级高于Form的position |
| arrow | boolean | 否 | false | 表单项右侧箭头 |
| required | boolean | 否 | false | 是否必填，label展示必填标识 |
| initialValue | any| 否 | - | 表单初始值 |
| rules | [Rule](#rule)[] | 否 | [] | 校验规则，设置字段的校验逻辑。点击[查看](#rule) |
| validateFirst | boolean | 否 | false | 当某一规则校验不通过时，是否停止剩下的规则的校验 |
| dependencies | string[] | 否 | [] | 当字段间存在依赖关系时使用。如果一个字段设置了 dependencies 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验 |

#### FromGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| header | string | 否 | - | FormGroup 名称 |
| radius | boolean | 否 | false | FormGroup 形状是否为圆角 |

#### Rule

| 名称 | 说明 | 类型 | 
| -----|:-----:|:-----:|
| message | string | 错误信息，不设置时会自动生成 | 
| required | boolean | 是否为必填字段 | 
| pattern | RegExp | 正则表达式匹配 | 
| type | string | 类型，常见有 string &verbar; number &verbar; boolean &verbar; url &verbar; email。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | 
| enum | any[] | 是否匹配枚举中的值（需要将 type 设置为 enum） | 
| len | number | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | 
| max | number | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | 
| min | number | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | 
| whitespace | boolean | 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效 | 

## 事件

#### Form
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onValuesChange | 字段更新，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onFinish | 表单提交后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |

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



<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(2) {
    width: 180px;
}
.__dumi-default-layout-content article table:nth-of-type(7) th:nth-of-type(2) {
    width: 180px;
}
#rule ~ .__dumi-default-table th:nth-of-type(1) {
    width: 20%;
}
#rule ~ .__dumi-default-table th:nth-of-type(2) {
    width: 20%;
}
.__dumi-default-mobile-previewer:nth-of-type(2)::after,
.__dumi-default-mobile-previewer:nth-of-type(4)::after,
.__dumi-default-mobile-previewer:nth-of-type(6)::after,
.__dumi-default-mobile-previewer:nth-of-type(8)::after,
.__dumi-default-mobile-previewer:nth-of-type(10)::after {
    border-bottom: none!important;
}
</style> 