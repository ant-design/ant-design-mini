---
nav:
  path: /components
group:
  title: 信息输入
  order: 12
toc: 'content'
---

# Form 表单

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

Form 表单。包含数据录入、校验以及对应样式。Form 组件需要 [component2](https://opendocs.alipay.com/mini/framework/custom-component-overview)。

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

### 表单侦听

<code src='pages/FormWatch/index'></code>

### 校验

<code src='pages/FormRules/index'></code>

### 增加删除表单项

<code src='pages/FormDynamic/index'></code>

### 表单项联动

<code src='pages/FormDependency/index'></code>

### 自定义表单项校验

<code src='pages/FormValidate/index'></code>

### 自定义表单校验消息

<code src='pages/FormValidateMessages/index'></code>

### 多个表单

<code src='pages/FormMultiple/index'></code>

### 图片校验

<code src='pages/FormImageUploadRules/index'></code>

### json 生成表单

<code src='pages/FormJSON/index'></code>

### 自定义错误样式

使用 validateStatus: success 及 footer slot 来自定义错误样式。
<code src='pages/FormCustomError/index'></code>

### 自定义表单项

通过使用 [FormItem](#formitem)、[createForm](#createform) 可自定义表单项。示例里 `form-checklist`, `form-location` 为自定义表单项组件。
<code src='pages/FormCustom/index'></code>

## API

### FormItem

所有 Form 组件都包括的属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| dependencies | 设置依赖字段，查看[详细说明](#dependencies) | string[] | - |
| footer | 底部 slot，接收 errors、status | slot | - |
| name | 名称 | string | - |
| label | 文本 | string | - |
| labelWidth | 文本宽度 | string | - |
| position | 布局，可选 `horizontal` `vertical` | string | horizontal |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选 `default` `success` `error` `validating` | string | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string | - |
| header | 顶部 slot，接收 errors、status | slot | - |
| tooltip | 表单项提示信息 | string | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |
| message | 校验错误信息。如不设置，则会根据校验规则自动生成 | string | false |
| requiredMark | 必填选填的标记样式，可选 `asterisk` `text-required` `text-optional` | string | asterisk |

### Form

| 属性             | 说明             | 类型                                      |
| ---------------- | ---------------- | ----------------------------------------- |
| rules            | 可选，校验规则   | 查看[rules](#rules)                       |
| initialValues    | 可选，初始值     | Record<string, any>                       |
| validateMessages | 可选，校验消息。 | 查看[validateMessages](#validatemessages) |

### Form 实例方法

| 属性                     | 说明                                                                 | 类型                                                                                   |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| addItem                  | 添加表单项                                                           | (formItem: Ref) => void                                                                |
| updateRules              | 更新 form 的校验规则, 每次都需要传入全量的 rules                     | (rules:Rules) =>void, Rules 的类型可以看[rules](#rules)                                |
| getFieldValue            | 得到表单项的值                                                       | (name: string) => any                                                                  |
| getFieldsValue           | 获取一组字段名对应的值。不传 nameList 则返回全部 fields 对           | (nameList?: string[]) => Record<string, any>                                           |
| getFieldValidatorStatus  | 得到表单校验状态                                                     | (name: string) => [ValidatorStatus](#validatorstatus)                                  |
| getFieldsValidatorStatus | 得到一组表单校验状态。。不传 nameList 则返回全部 fields 对           | (nameList?: string[]) => Record<string, [ValidatorStatus](#validatorstatus)}>          |
| reset                    | 重置表单为初始值                                                     | () => void                                                                             |
| isFieldTouched           | 判断表单项是否被修改过                                               | () => boolean                                                                          |
| onValueChange            | 侦听指定表单项的值修改，查看[详细说明](#onvaluechangeonvalueschange) | (name: string, (changedValue: any, allValues: Record<string, any>) => void) => void    |
| onValuesChange           | 侦听表单项的值修改，查看[详细说明](#onvaluechangeonvalueschange)     | ((changedValues: Record<string, any>, allValues: Record<string, any>) => void) => void |
| setFieldValue            | 设置表单项的值                                                       | (name: string, value: any) => void;                                                    |
| setFieldsValue           | 设置表单项的值                                                       | (values: Record<string, any>) => void;                                                 |
| setFieldValidatorStatus  | 设置表单校验状态                                                     | (name: string, validatorStatus: [ValidatorStatus](#validatorstatus)) => void           |
| setFieldsValidatorStatus | 设置一组表单校验状态                                                 | (fieldsValidatorStatus: Record<string, [ValidatorStatus](#validatorstatus)>) => void   |
| setInitialValues         | 设置表单初始值                                                       | (initialValues: Record<string, any>) => void                                           |
| submit                   | 提交表单，返回 promise 表单值，校验错误会抛出                        | () => Promise<Record<string, any>>                                                     |

### dependencies

当字段间存在依赖关系时使用。如果一个字段设置了 dependencies 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 dependencies 后，“密码”字段更新会重新触发“校验密码”的校验。

### rules

示例：

```js
{
  account: [
    {
      required: true,
      message: '需要输入用户名'
    },
  ],
  password: [
    {
      required: true,
    },
  ],
  confirm: [
    {
      required: true,
      message: '需要输入确认密码'
    },
    (form) => ({
      async validator(_, value) {
        if (!value || form.getFieldValue('password') === value) {
          return;
        }
        throw new Error('验证密码需要跟密码相同');
      },
    }),
  ]
}
```

rules 可以在 new Form 里设置，还可以在 FormItem 里通过 `required`, `message` 属性加上。

```html
<form-input
  label="用户名"
  name="account"
  required
  message="请输入用户名"
  ref="handleRef"
/>
```

### validateMessages

可查看[message](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts#L4-L55) antd-mini 在这个 message 上加上了 `${label}`,`${len}`,`${min}`,`${max}`,`${pattern}`

示例：

```js
{
  required: '需要输入${label}',
  string: {
    min: '${label}最少${min}个字符',
  },
  pattern: {
    mismatch: '${label}需要满足${pattern}',
  },
}
```

### onValueChange,onValuesChange

setFieldValue，setFieldsValue 不会触发 onValueChange, onValuesChange。onValueChange, onValuesChange 只会被用户操作才会触发。要是你需要在 setFieldValue，setFieldsValue 之后想要去触发 onValueChange, onValuesChange，你可以手动去调用 onValueChange, onValuesChange 方法。

示例：

```js
const onValuesChangeCallback = (changedValues) => {
  console.log(changedValues);
};
this.form.onValuesChange(onValuesChangeCallback);
this.form.setFieldValue(name, value);
onValuesChangeCallback({
  [name]: value,
});
```

### ValidatorStatus

```js
type ValidatorStatus = {
  status: 'default' | 'success' | 'error' | 'validating',
  errors: string[],
};
```

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

| 属性             | 说明                        | 类型   | 默认值 |
| ---------------- | --------------------------- | ------ | ------ |
| stepperClassName | 对应 Stepper 组件 className | string | -      |
| stepperStyle     | 对应 Stepper 组件 style     | string | -      |

### FormCheckGroup

同 CheckGroup，添加：

| 属性             | 说明                          | 类型   | 默认值 |
| ---------------- | ----------------------------- | ------ | ------ |
| checkboxLabel    | 对应 CheckGroup 组件 label    | slot   | -      |
| checkboxPosition | 对应 CheckGroup 组件 position | string | -      |

### FormRadioGroup

同 RadioGroup，添加：

| 属性          | 说明                          | 类型   | 默认值 |
| ------------- | ----------------------------- | ------ | ------ |
| radioLabel    | 对应 RadioGroup 组件 label    | slot   | -      |
| radioPosition | 对应 RadioGroup 组件 position | string | -      |

### FormPicker

同 Picker，添加：

| 属性  | 说明                                                 | 类型              | 默认值 |
| ----- | ---------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选`right` `up` `down`，传 true 为`right` | string \| boolean | -      |

### FormDatePicker

同 DatePicker，添加：

| 属性  | 说明                                                 | 类型              | 默认值 |
| ----- | ---------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选`right` `up` `down`，传 true 为`right` | string \| boolean | -      |

### FormRangePicker

同 RangePicker，添加：

| 属性  | 说明                                                 | 类型              | 默认值 |
| ----- | ---------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选`right` `up` `down`，传 true 为`right` | string \| boolean | -      |

### FormCascaderPicker

同 CascaderPicker，添加：

| 属性  | 说明                                                 | 类型              | 默认值 |
| ----- | ---------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选`right` `up` `down`，传 true 为`right` | string \| boolean | -      |

### FormSlider

同 Slider

### FormSelector

同 Selector

### FormImageUpload

同 ImageUpload

### createForm

createForm 是一个 mixin，在自定义表单项使用

```js
import { createForm } from 'antd-mini/es/Form/form';

Component({
  mixins: [createForm()],
  methods: {
    onChange(value) {
      this.emit('onChange', value);
    },
  },
});
```

createForm 会在 Component 加上

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

更多方法可查看 createForm 方法。使用`formData`, `emit` 即可完成自定义表单项。
