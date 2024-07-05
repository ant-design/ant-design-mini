import { getInstance, sleep } from 'tests/utils';
import { expect, it } from 'vitest';
import { createForm } from './utils';

it('测试 updateRules', async () => {
  const form = createForm();
  const instance = getInstance('Form/FormPicker', {
    name: 'test',
  });
  form.addItem(instance.ref());
  expect(instance.getData().formData.required).toBeFalsy();
  form.updateRules({
    test: [
      {
        required: true,
        message: '请输入姓名',
      },
    ],
  });
  await sleep(10);
  expect(instance.getData().formData.required).toBeTruthy();
  instance.setProps({ label: 'label' });
  expect(instance.getData().formData.required).toBeTruthy();
});

it('测试 updateRules', async () => {
  const form = createForm({
    validateMessages: {
      required: '需要输入${label}',
      string: {
        min: '${label}最少${min}个字符',
      },
    },
    rules: {
      test: [
        {
          required: true,
          min: 6,
        },
      ],
    },
  });
  const instance = getInstance('Form/FormInput', {
    name: 'test',
    label: 'input',
  });
  form.addItem(instance.ref());
  instance.callMethod('onChange', '');
  await sleep(10);
  expect(form.getFieldValidatorStatus('test')).toEqual({
    'errors': ['需要输入input'],
    'status': 'error',
  });

  instance.callMethod('onChange', '1');
  await sleep(10);
  expect(form.getFieldValidatorStatus('test')).toEqual({
    'errors': ['input最少6个字符'],
    'status': 'error',
  });

  // 测试 getFieldValidatorStatus 找不到字段的情况
  expect(form.getFieldValidatorStatus('xx')).toEqual(undefined);
});

it('测试 实例方法', async () => {
  const form = createForm({
    validateMessages: {
      required: '需要输入${label}',
      string: {
        min: '${label}最少${min}个字符',
      },
    },
    rules: {
      test: [
        {
          required: true,
          min: 6,
        },
      ],
    },
  });
  const instance = getInstance('Form/FormInput', {
    name: 'test',
    label: 'input',
  });
  form.addItem(instance.ref());

  let changedValue;
  let changedAllValues;
  form.onValueChange('test', (value) => {
    changedValue = value;
  });

  form.onValuesChange((allValues) => {
    changedAllValues = allValues;
  });
  instance.callMethod('onChange', '111');
  await sleep(10);
  expect(changedValue).toEqual('111');
  expect(changedAllValues).toEqual({
    test: '111',
  });

  // 校验不通过
  try {
    await form.submit();
  } catch (err) {
    expect(err.errorFields.length > 0).toBeTruthy();
  }

  // 通过校验
  instance.callMethod('onChange', '1234567');
  const values = await form.submit();
  expect(values.test).toEqual('1234567');
});

it('测试 字段嵌套', async () => {
  const initName = '123123';
  const initPhone = '10086';
  const form = createForm({
    rules: {
      'user.name': [
        {
          required: true,
          min: 6,
        },
      ],
    },
    initialValues: {
      user: {
        name: initName,
        phone: initPhone,
      },
    },
  });
  const nameInstance = getInstance('Form/FormInput', {
    name: 'user.name',
    label: 'input',
  });
  const phoneInstance = getInstance('Form/FormInput', {
    name: 'user.phone',
    label: 'input',
  });
  form.addItem(nameInstance.ref());
  form.addItem(phoneInstance.ref());
  expect(nameInstance.getData().formData.value).toEqual(initName);
  expect(form.getFieldValue('user.name')).toEqual(initName);
  expect(form.getFieldValue('user.phone')).toEqual(initPhone);
  expect(form.getFieldsValue()).toEqual({
    user: {
      name: initName,
      phone: initPhone,
    },
  });

  const changeName = 'andy';
  // onChange 触发之后回调
  form.onValueChange('user.name', (value, allValues) => {
    expect(value).toEqual(changeName);
    expect(allValues).toEqual({ user: { name: changeName, phone: initPhone } });
  });
  form.onValuesChange((value, allValues) => {
    expect(value).toEqual({ user: { name: changeName } });
    expect(allValues).toEqual({ user: { name: changeName, phone: initPhone } });
  });
  nameInstance.callMethod('onChange', changeName);
  expect(nameInstance.getData().formData.value).toEqual(changeName);
  expect(form.getFieldValue('user.name')).toEqual(changeName);
  expect(form.getFieldsValue()).toEqual({
    user: {
      name: changeName,
      phone: initPhone,
    },
  });

  await sleep(10);
  expect(form.getFieldValidatorStatus('user.name')).toEqual({
    'errors': ['user.name must be at least 6 characters'],
    'status': 'error',
  });

  form.reset();
  expect(form.getFieldsValue()).toEqual({
    user: {
      name: initName,
      phone: initPhone,
    },
  });

  // setInitialValues需要配合reset一起用，才可生效
  form.setInitialValues({
    user: { name: 'tony', phone: '10000' },
  });
  form.reset();

  expect(form.getFieldsValue()).toEqual({
    user: {
      name: 'tony',
      phone: '10000',
    },
  });

  expect(form.getFieldValue('user.name')).toEqual('tony');

  form.setFieldValue('user.phone', '808080');

  expect(form.getFieldValue('user.phone')).toEqual('808080');

  form.setFieldsValue({ user: { name: 'william', phone: '110110' } });
  expect(form.getFieldsValue()).toEqual({
    user: { name: 'william', phone: '110110' },
  });
  expect(form.getFieldsValue(['user.name'])).toEqual({
    user: {
      name: 'william',
    },
  });
  expect(form.getFieldsValue(['user.phone'])).toEqual({
    user: {
      phone: '110110',
    },
  });

  expect(await form.submit()).toEqual({
    user: {
      name: 'william',
      phone: '110110',
    },
  });
});
