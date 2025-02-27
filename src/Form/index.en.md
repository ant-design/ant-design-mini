---
nav:
  path: /components
group:
  title: Information Entry
  order: 12
toc: 'content'
---

# Form

The Form form contains data entry, validation, and corresponding styles. The Form component requires [component2](https://opendocs.alipay.com/mini/framework/custom-component-overview) Support.

- Used to create entities or collect information.
- When the input data type needs to be verified.

## Introduction

> Take the input box as an example

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "form-input": "antd-mini/es/Form/FormInput/index"
#endif
#if WECHAT
  "form-input": "antd-mini/Form/FormInput/index"
#endif
}
```

The logic layer registers the input box component ref into the Form

```xml
<form-input
  label="用户名"
  name="account"
  placeholder="请输入用户名"
  tooltip="用户名Description"
  allowClear
  ref="handleRef"
/>
```

```js
#if ALIPAY
import { Form } from 'antd-mini/es/Form/form';
#endif
#if WECHAT
import { Form } from 'antd-mini/Form/form';
#endif

Page({
  handleRef(ref) {
#if ALIPAY
    this.form.addItem(ref);
#endif
#if WECHAT
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
#endif
  },
});
```

## Code Sample

### Basic use

<code src='../../demo/pages/Form/FormBasic/index'></code>

### Layout

<code src='../../demo/pages/Form/FormLayout/index'></code>

### Initial value

<code src='../../demo/pages/Form/FormInitialValues/index'></code>

### Initial value asynchronous loading

<code src='../../demo/pages/Form/FormInitialValuesAsync/index'></code>

### Form listening

<code src='../../demo/pages/Form/FormWatch/index'></code>

### Calibration

<code src='../../demo/pages/Form/FormRules/index'></code>

### Add Delete Form Item

<code src='../../demo/pages/Form/FormDynamic/index'></code>

### Form Item Linkage

<code src='../../demo/pages/Form/FormDependency/index'></code>

### Custom Form Item Validation

<code src='../../demo/pages/Form/FormValidate/index'></code>

### Custom Form Validation Message

<code src='../../demo/pages/Form/FormValidateMessages/index'></code>

### Multiple Forms

<code src='../../demo/pages/Form/FormMultiple/index'></code>

### Form Item Read Only

<code src='../../demo/pages/Form/FormReadonly/index'></code>

### Picture verification

<code src='../../demo/pages/Form/FormImageUploadRules/index'></code>

### JSON Generate Form

<code src='../../demo/pages/Form/FormJSON/index'></code>

### Custom Error Styles

Use `validateStatus: success` and `footer slot` Customize the error style.

<code src='../../demo/pages/Form/FormCustomError/index'></code>

### Custom Form Item

by using [FormItem](#formitem)、[createForm](#createform) Customizable form items. In the example `form-checklist`、`form-location` For custom form item components.

<code src='../../demo/pages/Form/FormCustom/index'></code>

### Demo Code

<code src='../../demo/pages/Form/index'></code>

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

`setFieldValue` and `setFieldsValue` Will not trigger `onValueChange` and `onValuesChange`。`onValueChange` and `onValuesChange` It is only triggered when a user action is taken. If in `setFieldValue` or `setFieldsValue` then want to trigger `onValueChange` or `onValuesChange`you need to call these methods manually.

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
// 修改表单项时，需调用 `emit` 方法。Custom Form Item组件In值改变时，应该调用此方法。
function emit(trigger: 'onChange' | 'onBlur' | 'onFocus', value: any): void;
```

For more methods, please refer `createForm` Method-related documentation. Use `formData` and `emit` The implementation of the custom form item is complete.

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks             |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --form-text-color     | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | Form text color     |
| --form-item-color     | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | Form Item Color       |
| --form-item-bg        | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div>    | Form Item Background Color   |
| --form-error-color    | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | Form Error Color     |
| --form-extra-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Form extra information color |
| --form-asterisk-color | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | Form asterisk color     |
