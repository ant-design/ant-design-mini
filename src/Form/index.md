---
nav:
  path: /components
group:
  title: 数据录入
  order: 12
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Form 表单

Form 表单包含数据录入、校验以及相应的样式。Form 组件需要 [component2](https://opendocs.alipay.com/mini/framework/custom-component-overview) 支持。

- 用于创建实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 引入

> 以输入框为例

在 `index.json` 中引入组件

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

逻辑层将输入框组件 ref 注册到 Form 中

```xml
<form-input
  label="用户名"
  name="account"
  placeholder="请输入用户名"
  tooltip="用户名说明"
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

## 代码示例

### 基本使用

<code src='../../demo/pages/Form/FormBasic/index'></code>

### 布局

<code src='../../demo/pages/Form/FormLayout/index'></code>

### 初始值

<code src='../../demo/pages/Form/FormInitialValues/index'></code>

### 初始值异步加载

<code src='../../demo/pages/Form/FormInitialValuesAsync/index'></code>

### 表单侦听

<code src='../../demo/pages/Form/FormWatch/index'></code>

### 校验

<code src='../../demo/pages/Form/FormRules/index'></code>

### 增加删除表单项

<code src='../../demo/pages/Form/FormDynamic/index'></code>

### 表单项联动

<code src='../../demo/pages/Form/FormDependency/index'></code>

### 自定义表单项校验

<code src='../../demo/pages/Form/FormValidate/index'></code>

### 自定义表单校验消息

<code src='../../demo/pages/Form/FormValidateMessages/index'></code>

### 多个表单

<code src='../../demo/pages/Form/FormMultiple/index'></code>

### 表单项只读

<code src='../../demo/pages/Form/FormReadonly/index'></code>

### 图片校验

<code src='../../demo/pages/Form/FormImageUploadRules/index'></code>

### JSON 生成表单

<code src='../../demo/pages/Form/FormJSON/index'></code>

### 自定义错误样式

使用 `validateStatus: success` 及 `footer slot` 来自定义错误样式。

<code src='../../demo/pages/Form/FormCustomError/index'></code>

### 自定义表单项

通过使用 [FormItem](#formitem)、[createForm](#createform) 可自定义表单项。示例里 `form-checklist`、`form-location` 为自定义表单项组件。

<code src='../../demo/pages/Form/FormCustom/index'></code>

### Demo 代码

<code src='../../demo/pages/Form/index'></code>

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
| tooltip | 表单项提示信息 | string\|slot | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |
| message | 校验错误信息。如不设置，则会根据校验规则自动生成 | string | false |
| requiredMark | 必填选填的标记样式，可选 `asterisk` `text-required` `text-optional` | string | asterisk |

### Form

| 属性             | 说明           | 类型                                      |
| ---------------- | -------------- | ----------------------------------------- |
| rules            | 可选，校验规则 | 查看[rules](#rules)                       |
| initialValues    | 可选，初始值   | Record<string, any>                       |
| validateMessages | 可选，校验消息 | 查看[validateMessages](#validatemessages) |

### Form 实例方法

| 属性                     | 说明                                                                 | 类型                                                                                   |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| addItem                  | 添加表单项                                                           | (formItem: Ref) => void                                                                |
| updateRules              | 更新 form 的校验规则，每次都需要传入全量的 rules                     | (rules: Rules) => void, Rules 的类型可以查看[rules](#rules)                            |
| getFieldValue            | 得到表单项的值                                                       | (name: string) => any                                                                  |
| getFieldsValue           | 获取一组字段名对应的值。不传 nameList 则返回全部 fields 对           | (nameList?: string[]) => Record<string, any>                                           |
| getFieldValidatorStatus  | 得到表单校验状态                                                     | (name: string) => [ValidatorStatus](#validatorstatus)                                  |
| getFieldsValidatorStatus | 得到一组表单校验状态。不传 nameList 则返回全部 fields 对             | (nameList?: string[]) => Record<string, [ValidatorStatus](#validatorstatus)>           |
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

当字段间存在依赖关系时使用。例如注册用户表单的“密码”与“确认密码”字段，其中“确认密码”校验依赖于“密码”字段。设置 `dependencies` 后，“密码”字段更新将自动触发“确认密码”的校验。

### rules

示例：

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

`rules` 可以在 `new Form` 中设置，也可以在 `FormItem` 通过 `required` 或 `message` 属性设置。

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

可以参考 [Asynchronous validator](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts#L4-L55) 的 message，antd-mini 在此基础上加了 `${label}`,`${len}`,`${min}`,`${max}`,`${pattern}`。

示例：

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

### onValueChange 和 onValuesChange

`setFieldValue` 和 `setFieldsValue` 不会触发 `onValueChange` 和 `onValuesChange`。`onValueChange` 和 `onValuesChange` 只有在用户操作时才会被触发。如果在 `setFieldValue` 或 `setFieldsValue` 之后想要触发 `onValueChange` 或 `onValuesChange`，你需要手动调用这些方法。

**示例**：

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

### submit 校验和抛出错误

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

与 `Stepper` 相同，但添加了如下属性：

| 属性             | 说明                              | 类型   | 默认值 |
| ---------------- | --------------------------------- | ------ | ------ |
| stepperClassName | 对应 `Stepper` 组件的 `className` | string | -      |
| stepperStyle     | 对应 `Stepper` 组件的 `style`     | string | -      |

### FormCheckGroup

与 `CheckGroup` 相同，但添加了如下属性：

| 属性             | 说明                                | 类型   | 默认值 |
| ---------------- | ----------------------------------- | ------ | ------ |
| checkboxLabel    | 对应 `CheckGroup` 组件的 `label`    | slot   | -      |
| checkboxPosition | 对应 `CheckGroup` 组件的 `position` | string | -      |

### FormRadioGroup

与 `RadioGroup` 相同，但添加了如下属性：

| 属性          | 说明                                | 类型   | 默认值 |
| ------------- | ----------------------------------- | ------ | ------ |
| radioLabel    | 对应 `RadioGroup` 组件的 `label`    | slot   | -      |
| radioPosition | 对应 `RadioGroup` 组件的 `position` | string | -      |

### FormPicker

与 `Picker` 相同，但添加了如下属性：

| 属性  | 说明                                                     | 类型              | 默认值 |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormDatePicker

与 `DatePicker` 相同，但添加了如下属性：

| 属性  | 说明                                                     | 类型              | 默认值 |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormRangePicker

与 `RangePicker` 相同，但添加了如下属性：

| 属性  | 说明                                                     | 类型              | 默认值 |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormCascaderPicker

与 `CascaderPicker` 相同，但添加了如下属性：

| 属性  | 说明                                                     | 类型              | 默认值 |
| ----- | -------------------------------------------------------- | ----------------- | ------ |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | -      |

### FormSlider

与 `Slider` 相同。

### FormSelector

与 `Selector` 相同。

### FormImageUpload

与 `ImageUpload` 相同。

### createForm

`createForm` 是一个 `mixin`，用于自定义表单项。

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

`createForm` 会为组件增加以下内容：

- `data`

```js
{
  formData: {
    value: undefined, // 表单项的值
    status: 'default', // 表单项的校验状态，包括 `default`、`success`、`error`、`validating`
    errors: [], // 错误信息
  },
}
```

- `methods`

```js
// 修改表单项时，需调用 `emit` 方法。自定义表单项组件在值改变时，应该调用此方法。
function emit(trigger: 'onChange' | 'onBlur' | 'onFocus', value: any): void;
```

想要了解更多方法，请参考 `createForm` 方法相关文档。使用 `formData` 和 `emit` 即可完成自定义表单项的实现。

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注             |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --form-text-color     | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 表单文本颜色     |
| --form-item-color     | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | 表单项颜色       |
| --form-item-bg        | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div>    | 表单项背景颜色   |
| --form-error-color    | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | 表单错误颜色     |
| --form-extra-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 表单额外信息颜色 |
| --form-asterisk-color | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | 表单星号颜色     |
