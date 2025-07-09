---
nav:
  path: /form
group:
  title: 进阶使用
  order: 1
---

# 全局 API
> 需要注意为了保证表单单实例，目前只支持单页面单表单的模式

表单解决方案提供各种全局 API 来支持业务的各种诉求。

可以随时随地的获取当前表单的值和异常信息，也可以在任何地方设置表单相关的信息，也可在任何地方触发表单校验。


下面我们详细讲下每个 API 的使用。

## 设置表单值

提供全局方法 `setFieldsValue` 来手动设置表单的值，方法接收两个参数，第一个参数是设置的表单的值，第二个是是否触发校验

```js
import { setFieldsValue, setFieldsError, removeFieldsError } from '@alipay/form-render-mini/index';

async onTap(val) {
  await setFieldsValue(val, false);
}
```

## 重置表单值
Form Render Mini提供全局方法 `resetFieldsValue` 来手重置表单值，方法接收两个参数，第一个参数是重置的表单的值对象，第二个是是否触发校验

```js
import { resetFieldsValue } from '@alipay/form-render-mini/index';

async onTap(val) {
  await resetFieldsValue(val, false);
}
```

## 设置错误信息
Form Render Mini 提供全局方法 `setFieldsError` 来手动设置表单的值，方法接收一个参数，就是需要设置的错误信息

```js
import { setFieldsError } from '@alipay/form-render-mini/index';

async onTap() {
  await setFieldsError({
    address: {
      field: 'address',
      message: '识别的地址信息可能有误，请确认',
      actionText: '查看',
      extraInfo: {
        _address: '正确的地址信息'
      },
    }
  });
}
```

## 移除错误信息
Form Render Mini 提供全局方法 `removeFieldsError` 来手动移除表单的错误信息，方法接收一个参数，就是需要移除的表单项的key

```js
import { removeFieldsError } from '@alipay/form-render-mini/index';

async onTap() {
  await removeFieldsError('address');
}
```

## 表单校验
Form Render Mini 提供全局方法 `validate` 来校验表单，接收一个 option 参数， `validateFields` 是需要校验的表单项的key列表， `useSingleKey` 是否只校验一项，设置了就只会校验 `validateFields` 数组的第一个key。

校验返回一个对象，里面有当前校验异常的列表 `errors` ，以及当前表单的值 `values` 。

```js
import { validate } from '@alipay/form-render-mini/index';

// 校验单个表单
async onValidateSingleKey() {
  const { errors, values } = await validate({
    validateFields: ['address'],
    useSingleKey: true,
  });
};

// 校验所有表单项
async onTap() {
  const { errors, values } = await validate();
};
```

## 表单提交
Form Render Mini 提供全局方法 `onSubmit` 来提交表单，返回数据和 `props` 的 `onSubmit` 一样。

校验返回一个对象，里面有当前校验异常的列表 `errors` ，以及当前表单的值 `values` 。

```js
import { onSubmit } from '@alipay/form-render-mini/index';

async onTap() {
  const { errors, values } = await onSubmit();
};
```
## 获取表单值
Form Render Mini 提供全局方法 `getValues` 来获取当前表单的填入内容

```js
import { getValues } from '@alipay/form-render-mini/index';

async onTap() {
  const formData = await getValues();
}
```
## 获取表单错误信息
Form Render Mini 提供全局方法 `getErrorInfo` 来获取当前表单展示的错误信息。

```js
import { getErrorInfo } from '@alipay/form-render-mini/index';

async onTap() {
  const errorInfo = await getErrorInfo();
}
```

## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormAPI/index'></code>



