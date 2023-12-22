import { Form } from 'compiled-alipay/Form/form';
import { resolve } from 'path';
import { runInMiniprogram } from 'tests/utils';

export function createForm(): Form {
  const form = runInMiniprogram<Form>(resolve(__dirname, 'form.ts'), {});
  return form;
}
