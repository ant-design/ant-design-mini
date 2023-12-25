import { Form } from '../../../compiled/alipay/src/Form/form';
import { resolve } from 'path';
import { getInstance, runInMiniprogram, sleep } from 'tests/utils';
import { expect, it } from 'vitest';

it('测试 updateRules', async () => {
  const form = runInMiniprogram<Form>(resolve(__dirname, 'form.ts'), {});
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
