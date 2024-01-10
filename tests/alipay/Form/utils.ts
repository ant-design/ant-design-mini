import { Form, FormConfig } from 'compiled-alipay/Form/form';
import { resolve } from 'path';
import { runInMiniprogram } from 'tests/utils';

export function createForm(formConfig?: FormConfig): Form {
  const FromComponent: any = runInMiniprogram(
    resolve(__dirname, 'form.ts'),
    {}
  );

  return new FromComponent(formConfig);
}
