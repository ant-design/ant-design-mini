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

## 注意事项
- 使用条件：小程序项目需开启 `Component2` 选项

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

## API

### 所有Form组件都包括的属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| name | 名称 | `string` | - |
| label | 文本 | `string` | - |
| position | 布局，可选 `horizontal` `vertical` | `string` | horizontal |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选 `default` `success` `error` `validating` | `string` | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | `string` | - |
| tooltip | 表单项提示信息 | `string` | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | `boolean` | false |
| message | 校验错误信息。如不设置，则会根据校验规则自动生成 | `string` | false |
| requiredMark | 必填选填的标记样式，可选 `asterisk` `text-required` `text-optional` | `string` | asterisk |


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
同 Input，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| inputClassName | 对应Input组件className | `string` | - |
| inputStyle | 对应Input组件style | `string` | - |

### FormSwitch
同 Switch，添加

### FormStepper
同 Switch，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| stepperClassName | 对应Stepper组件className | `string` | - |
| stepperStyle | 对应Stepper组件style | `string` | - |

### FormCheckGroup
同 CheckGroup，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checkboxPosition | 对应CheckGroup组件position | `string` | - |

### FormRadioGroup
同 RadioGroup，添加：

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| radioPosition | 对应RadioGroup组件position | `string` | - |

### FormPicker
同 DatePicker

### FormDatePicker
同 DatePicker

### FormRangePicker
同 RangePicker

### FormCascaderPicker
同 CascaderPicker

### FormSlider
同 Slider

### FormSelector
同 Selector

### FormImageUpload
同 ImageUpload
