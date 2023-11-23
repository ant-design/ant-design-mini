import { Form } from '../../../compiled/alipay/src/Form/form';
import { resolve } from 'path';
import { getInstance, runInMiniprogram } from 'tests/utils';
import { expect, it } from 'vitest';

it('测试 updateRules', () => {
  const form = runInMiniprogram<Form>(resolve(__dirname, 'form.ts'), {});
  const instance = getInstance('Form/FormPicker', {
    name: 'test',
  });
  form.addItem((instance.componentInstance() as any).ref());
  expect(instance.getData().formData.required).toBeFalsy();
  form.updateRules({
    test: [
      {
        required: true,
        message: '请输入姓名',
      },
    ],
  });
  expect(instance.getData().formData.required).toBeTruthy();
  instance.setProps({ label: 'label' });
  expect(instance.getData().formData.required).toBeTruthy();
});
