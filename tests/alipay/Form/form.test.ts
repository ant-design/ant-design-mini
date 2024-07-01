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
