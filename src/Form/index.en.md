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

## Code example

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

Use `validateStatus: success` and `footer slot` Customize the error style.
<!-- <code src='pages/FormCustomError/index'></code> -->

### Custom Form Item

by using [FormItem](#formitem)、[createForm](#createform) Customizable form items. In the example `form-checklist`、`form-location` For custom form item components.
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
| getFieldsValidatorStatus | Get a set of form validation states. If no nameList is passed, all fields pairs are returned.             | (nameList?: string[]) => Record<string, [ValidatorStatus](#validatorstatus)>           |
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

Used when there is a dependency between fields. For example, the "Password" and "Confirm Password" fields of the registered user form, where the "Confirm Password" verification depends on the "Password" field. Setup `dependencies` After that, the "Password" field update will automatically trigger the "Confirm Password" verification.

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

`rules` can be in `new Form` can also be set in `FormItem` By `required` or `message` Property settings.

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

can refer [Asynchronous validator](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts#L4-L55) message,antd-mini added on this basis. `${label}`,`${len}`,`${min}`,`${max}`,`${pattern}`。

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

`setFieldValue` and `setFieldsValue` Will not trigger `onValueChange` and `onValuesChange`。`onValueChange` and `onValuesChange` It is only triggered by user action. If in `setFieldValue` or `setFieldsValue` then want to trigger `onValueChange` or `onValuesChange`you need to call these methods manually.

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

with `Input` Same.

### FormTextarea

with `Textarea` Same.

### FormSwitch

with `Switch` Same.

### FormStepper

with `Stepper` Same, but with the following added attributes:

| Property             | Description                              | Type   | Default Value |
| ---------------- | --------------------------------- | ------ | ------ |
| stepperClassName | Corresponding `Stepper` Components `className` | string | -      |
| stepperStyle     | Corresponding `Stepper` Components `style`     | string | -      |

### FormCheckGroup

with `CheckGroup` Same, but with the following added attributes:

| Property             | Description                                | Type   | Default Value |
| ---------------- | ----------------------------------- | ------ | ------ |
| checkboxLabel    | Corresponding `CheckGroup` Components `label`    | slot   | -      |
| checkboxPosition | Corresponding `CheckGroup` Components `position` | string | -      |

### FormRadioGroup

with `RadioGroup` Same, but with the following added attributes:

| Property          | Description                                | Type   | Default Value |
| ------------- | ----------------------------------- | ------ | ------ |
| radioLabel    | Corresponding `RadioGroup` Components `label`    | slot   | -      |
| radioPosition | Corresponding `RadioGroup` Components `position` | string | -      |

### FormPicker

with `Picker` Same, but with the following added attributes:

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean | -      |

### FormDatePicker

with `DatePicker` Same, but with the following added attributes:

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean | -      |

### FormRangePicker

with `RangePicker` Same, but with the following added attributes:

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean | -      |

### FormCascaderPicker

with `CascaderPicker` Same, but with the following added attributes:

| Property  | Description                                                     | Type              | Default Value |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean | -      |

### FormSlider

with `Slider` Same.

### FormSelector

with `Selector` Same.

### FormImageUpload

with `ImageUpload` Same.

### createForm

`createForm` is a `mixin`for custom form items.

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

For more methods, please refer `createForm` Method-related documentation. Use `formData` and `emit` The implementation of the custom form item is complete.
