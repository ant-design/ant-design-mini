---
nav:
  path: /components
group:
  title: 信息输入
  order: 12
toc: 'content'
---

# Form 表单
Form 表单。包含数据录入、校验以及对应样式


## 何时使用
- 用于创建一个实体或收集信息
- 需要对输入的数据类型进行校验时


## 代码示例

### 基本使用
<code src='pages/Form/index'></code>

### 布局
<code src='pages/FormLayout/index'></code>

### 初始值
<code src='pages/FormInitialValues/index'></code>

### 初始值异步加载
<code src='pages/FormInitialValuesAsync/index'></code>

### 校验
<code src='pages/FormRules/index'></code>

### 增加删除表单项
<code src='pages/FormDynamic/index'></code>

### 表单项联动
<code src='pages/FormDependency/index'></code>

### 自定义表单项校验
<code src='pages/FormValidate/index'></code>

### 多个表单
<code src='pages/FormMultiple/index'></code>

### 图片校验
<code src='pages/FormImageUploadRules/index'></code>

### json生成表单
<code src='pages/FormJSON/index'></code>

### 自定义表单项
`form-checklist`, `form-location` 为自定义表单项。通过使用 [FormItem](#formitem)、[createForm](#createform) 可自定义表单项。
<code src='pages/FormCustom/index'></code>

## API

### FormItem

所有Form组件都包括的属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| dependencies | 设置依赖字段，查看[详细说明](#dependencies) | string[] | - |
| name | 名称 | string | - |
| label | 文本 | string | - |
| position | 布局，可选 `horizontal` `vertical` | string | horizontal |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选 `default` `success` `error` `validating` | string | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string | - |
| tooltip | 表单项提示信息 | string | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |
| message | 校验错误信息。如不设置，则会根据校验规则自动生成 | string | false |
| requiredMark | 必填选填的标记样式，可选 `asterisk` `text-required` `text-optional` | string | asterisk |


### Form实例方法
| 属性 | 说明 | 类型 |
| -----|-----|-----|
| addItem | 添加表单项 | (formItem: Ref) => void |
| setFieldValue | 设置表单项的值 | (name: string, value: any) => void; |
| setInitialValues | 设置表单初始值 | (initialValues: Record<string, any>) => void |
| getFieldValue | 得到表单项的值 | (name: string) => any |
| getFieldValidatorStatus | 得到表单校验状态 | () => {status: 'default' \| 'success' \| 'error' \| 'validating', errors: string[]} |
| reset | 重置表单为初始值 | () => void |
| isFieldTouched | 判断表单项是否被修改过 | () => boolean |
| onValueChange | 侦听表单项的值修改 | (name: string, (value: any) => void) => void |
| submit | 提交表单，返回promise表单值，校验错误会抛出 | () => Promise<Record<string, any>> |

### dependencies
当字段间存在依赖关系时使用。如果一个字段设置了 dependencies 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 dependencies 后，“密码”字段更新会重新触发“校验密码”的校验。

### submit 校验抛出错误
```js
{
  values: Record<string, any>
  errorFileds: {
    name: string;
    errors: string[];
  }[]
}
```

### FormInput
同 Input

### FormTextarea
同 Textarea

### FormSwitch
同 Switch

### FormStepper
同 Stepper，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| stepperClassName | 对应Stepper组件className | string | - |
| stepperStyle | 对应Stepper组件style | string | - |

### FormCheckGroup
同 CheckGroup，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checkboxLabel | 对应CheckGroup组件label | slot | - |
| checkboxPosition | 对应CheckGroup组件position | string | - |

### FormRadioGroup
同 RadioGroup，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| radioLabel | 对应RadioGroup组件label | slot | - |
| radioPosition | 对应RadioGroup组件position | string | - |

### FormPicker
同 Picker，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| arrow | 右侧箭头，可选`right` `up` `down`，传true为`right` | string \| boolean | - |

### FormDatePicker
同 DatePicker，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| arrow | 右侧箭头，可选`right` `up` `down`，传true为`right` | string \| boolean | - |

### FormRangePicker
同 RangePicker，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| arrow | 右侧箭头，可选`right` `up` `down`，传true为`right` | string \| boolean | - |

### FormCascaderPicker
同 CascaderPicker，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| arrow | 右侧箭头，可选`right` `up` `down`，传true为`right` | string \| boolean | - |

### FormSlider
同 Slider

### FormSelector
同 Selector

### FormImageUpload
同 ImageUpload

### createform

createform是一个mixin，在自定义表单项使用
```js
import { createform } from 'antd-mini/es/Form/form';

Component({
  mixins: [createform()],
  methods: {
    onChange(value) {
      this.emit('onChange', value);
    }
  }
})
```

createform会在Component加上
- data
```js
{
  formData: {
    value: undefined, // 表单项的值
    status: 'default', // 表单项校验状态，包括 default, success, error, validating
    errors: [], // 错误信息
  },
}
```
- methods
```js
// 表单项修改需要调用emit方法。需要自定义表单项组件在值修改去调用。
function emit(trigger: 'onChange' | 'onBlur' | 'onFocus' , value: any):  void;
```

更多方法可查看createForm方法。使用`formData`, `emit` 即可完成自定义表单项。


## FAQ

### Form好像没有没有调用
Form组件需要 `component2`，查看是否使用了 https://opendocs.alipay.com/mini/framework/component-ref