---
nav:
  path: /components
group:
  title: 信息输入
  order: 12
toc: 'content'
---

# Form Form

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The Form form contains data entry, validation, and corresponding styles. The Form component requires [component2](https://opendocs.alipay.com/mini/framework/custom-component-overview) Support.

## When to use

- Used to create entities or collect information.
- When the input data type needs to be verified.

## Code Sample

### Basic use

<code src='../../demo/pages/Form/index'></code>

### Layout

<!-- <code src='pages/FormLayout/index'></code> -->

### Initial value

<!-- <code src='pages/FormInitialValues/index'></code> -->

### Initial value asynchronous loading

<!-- <code src='pages/FormInitialValuesAsync/index'></code> -->

### Form listening

<!-- <code src='pages/FormWatch/index'></code> -->

### Calibration

<!-- <code src='pages/FormRules/index'></code> -->

### Add Delete Form Item

<!-- <code src='pages/FormDynamic/index'></code> -->

### Form Item Linkage

<!-- <code src='pages/FormDependency/index'></code> -->

### Custom Form Item Validation

<!-- <code src='pages/FormValidate/index'></code> -->

### Custom Form Validation Message

<!-- <code src='pages/FormValidateMessages/index'></code> -->

### Multiple Forms

<!-- <code src='pages/FormMultiple/index'></code> -->

### Picture verification

<!-- <code src='pages/FormImageUploadRules/index'></code> -->

### JSON Generate Form

<!-- <code src='pages/FormJSON/index'></code> -->

### Custom Error Styles

使用 `validateStatus: success` 及 `footer slot` 来Custom Error Styles。
<!-- <code src='pages/FormCustomError/index'></code> -->

### Custom Form Item

by using [FormItem](#formitem)、[createForm](#createform) 可Custom Form Item。Example里 `form-checklist`、`form-location` 为Custom Form Item组件。
<!-- <code src='pages/FormCustom/index'></code> -->

## API

### FormItem

Properties Included in All Form Components
| Property | Description | Type | Default Value |
| -----|-----|-----|-----|
| dependencies | Set Dependent Fields, View[Detailed Description](#dependencies) | string[] | - |
| footer | Bottom slot, receiving errors, status | slot | - |
| name | Name | string | - |
| label | Text | string | - |
| labelWidth | Text Width | string | - |
| position | layout, optional `horizontal` `vertical` | string | horizontal |
| validateStatus | The verification status. If it is not set, it will be automatically generated according to the verification rules. Optional `default` `success` `error` `validating` | string | - |
| help | Prompt information, if not set, will be automatically generated according to the verification rules | string | - |
| header | Top slot, receiving errors, status | slot | - |
| tooltip | Form Item Prompt Information | string\|slot | - |
| required | Required style settings. If it is not set, it will be automatically generated according to the verification rules. | boolean | false |
| message | Verify the error message. If it is not set, it will be automatically generated according to the verification rules. | string | false |
| requiredMark | Required optional tag style, optional `asterisk` `text-required` `text-optional` | string | asterisk |



### Form

| Property             | Description           | Type                                      |
| ---------------- | -------------- | ----------------------------------------- |
| rules            | Optional, Validation Rules | View[rules](#rules)                       |
| initialValues    | Optional, initial value   | Record<string, any>                       |
| validateMessages | Optional, Verify Message | View[validateMessages](#validatemessages) |

### Form instance method

| Property                     | Description                                                                 | Type                                                                                   |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| addItem                  | Add Form Item                                                           | (formItem: Ref) => void                                                                |
| updateRules              | To update the verification rules of the form, you need to pass in the full number of rules each time.                     | (rules: Rules) => void, the type of Rules can be viewed[rules](#rules)                            |
| getFieldValue            | Get the value of a form item                                                       | (name: string) => any                                                                  |
| getFieldsValue           | Gets the value for a set of field names. If no nameList is passed, all fields pairs are returned.           | (nameList?: string[]) => Record<string, any>                                           |
| getFieldValidatorStatus  | Get form check status                                                     | (name: string) => [ValidatorStatus](#validatorstatus)                                  |
| getFieldsValidatorStatus | Get a set of form validation statuses. If no nameList is passed, all fields pairs are returned.             | (nameList?: string[]) => Record<string, [ValidatorStatus](#validatorstatus)>           |
| reset                    | Reset form to initial value                                                     | () => void                                                                             |
| isFieldTouched           | Determine whether a form item has been modified                                               | () => boolean                                                                          |
| onValueChange            | Listen for the value modification of the specified form item, view[Detailed Description](#onvaluechangeonvalueschange) | (name: string, (changedValue: any, allValues: Record<string, any>) => void) => void    |
| onValuesChange           | Listen for the value modification of a form item, view[Detailed Description](#onvaluechangeonvalueschange)     | ((changedValues: Record<string, any>, allValues: Record<string, any>) => void) => void |
| setFieldValue            | Set the value of a form item                                                       | (name: string, value: any) => void;                                                    |
| setFieldsValue           | Set the value of a form item                                                       | (values: Record<string, any>) => void;                                                 |
| setFieldValidatorStatus  | Set Form Verification Status                                                     | (name: string, validatorStatus: [ValidatorStatus](#validatorstatus)) => void           |
| setFieldsValidatorStatus | Set a set of form validation states                                                 | (fieldsValidatorStatus: Record<string, [ValidatorStatus](#validatorstatus)>) => void   |
| setInitialValues         | Set Form Initial Values                                                       | (initialValues: Record<string, any>) => void                                           |
| submit                   | Submit the form, return the promise form value, and the verification error will be thrown.                        | () => Promise<Record<string, any>>                                                     |

### dependencies

当字段间存在依赖关系时使用。例如注册用户表单的“密码”与“确认密码”字段，其中“确认密码”Calibration依赖于“密码”字段。设置 `dependencies` 后，“密码”字段更新将自动触发“确认密码”的Calibration。

### rules

Example:

```javascript
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
        throw new Error('两次密码需一致');
      },
    }),
  ]
}
```

`rules` 可以在 `new Form` 中设置，也可以在 `FormItem` 通过 `required` 或 `message` Property设置。

```html
<form-input
  label="用户名"
  name="account"
  required
  message="请输入用户名"
  ref="handleRef"
></form-input>
```

### validateMessages

can refer [Asynchronous validator](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts#L4-L55) 的 message，antd-mini 在此基础上加了 `${label}`,`${len}`,`${min}`,`${max}`,`${pattern}`。

Example:

```javascript
{
  required: '需要输入${label}',
  string: {
    min: '${label}最少${min}个字符',
  },
  pattern: {
    mismatch: '${label}需要满足${pattern}模式',
  },
}
```

### onValueChange and onValuesChange

`setFieldValue` 和 `setFieldsValue` 不会触发 `onValueChange` 和 `onValuesChange`。`onValueChange` 和 `onValuesChange` 只有在用户操作时才会被触发。如果在 `setFieldValue` 或 `setFieldsValue` 之后想要触发 `onValueChange` 或 `onValuesChange`，你需要手动调用这些方法。

**Example**：

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

### submit checksum throws error

```js
{
  values: Record<string, any>,
  errorFields: {
    name: string;
    errors: string[];
  }[]
}
```

### FormInput

与 `Input` 相同。

### FormTextarea

与 `Textarea` 相同。

### FormSwitch

与 `Switch` 相同。

### FormStepper

与 `Stepper` 相同，但添加了如下Property：

| Property             | Description                              | Type   | Default Value |
| ---------------- | --------------------------------- | ------ | ------ |
| stepperClassName | 对应 `Stepper` 组件的 `className` | string | -      |
| stepperStyle     | 对应 `Stepper` 组件的 `style`     | string | -      |

### FormCheckGroup

与 `CheckGroup` 相同，但添加了如下Property：

| Property             | Description                                | Type   | Default Value |
| ---------------- | ----------------------------------- | ------ | ------ |
| checkboxLabel    | 对应 `CheckGroup` 组件的 `label`    | slot   | -      |
| checkboxPosition | 对应 `CheckGroup` 组件的 `position` | string | -      |

### FormRadioGroup

与 `RadioGroup` 相同，但添加了如下Property：

| Property          | Description                                | Type   | Default Value |
| ------------- | ----------------------------------- | ------ | ------ |
| radioLabel    | 对应 `RadioGroup` 组件的 `label`    | slot   | -      |
| radioPosition | 对应 `RadioGroup` 组件的 `position` | string | -      |

### FormPicker

与 `Picker` 相同，但添加了如下Property：

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormDatePicker

与 `DatePicker` 相同，但添加了如下Property：

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormRangePicker

与 `RangePicker` 相同，但添加了如下Property：

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormCascaderPicker

与 `CascaderPicker` 相同，但添加了如下Property：

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormSlider

与 `Slider` 相同。

### FormSelector

与 `Selector` 相同。

### FormImageUpload

与 `ImageUpload` 相同。

### createForm

`createForm` 是一个 `mixin`，用于Custom Form Item。

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

`createForm` The following is added to the component:

- `data`

```js
{
  formData: {
    value: undefined, // 表单项的值
    status: 'default', // 表单项的Calibration状态，包括 `default`、`success`、`error`、`validating`
    errors: [], // 错误信息
  },
}
```

- `methods`

```js
// 修改表单项时，需调用 `emit` 方法。Custom Form Item组件在值改变时，应该调用此方法。
function emit(trigger: 'onChange' | 'onBlur' | 'onFocus', value: any): void;
```

想要了解更多方法，请参考 `createForm` 方法相关文档。使用 `formData` 和 `emit` 即可完成Custom Form Item的实现。
