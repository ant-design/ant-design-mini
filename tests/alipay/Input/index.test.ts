import { callMethod, getInstance, wrapValue } from 'tests/utils';
import { expect, it, vi } from 'vitest';
import { textInputAndTextArea } from './common';

textInputAndTextArea('Input', {
  'precision': -1,
});

it('数字键盘精度和范围限制', async () => {
  const onBlur = vi.fn();
  const instance = getInstance('Input', {
    type: 'number',
    max: 200,
    min: -10,
    precision: 2,
    onBlur,
  });
  await callMethod(instance, 'onBlur', wrapValue('400.0'));
  expect(onBlur.mock.calls.map((o) => o[0])[0]).toEqual('200.00');

  await callMethod(instance, 'onBlur', wrapValue('-100'));
  expect(onBlur.mock.calls.map((o) => o[0])[1]).toEqual('-10.00');

  await callMethod(instance, 'onBlur', wrapValue('20.0122'));
  expect(onBlur.mock.calls.map((o) => o[0])[2]).toEqual('20.01');

  // 输入有效数字后生效
  await callMethod(instance, 'onBlur', wrapValue('-1.2..0'));
  expect(onBlur.mock.calls.map((o) => o[0])[3]).toEqual('-1.2..0');
});
