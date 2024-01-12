import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormImageUploadProps } from 'compiled-alipay/Form/FormImageUpload/props';
import { getInstance } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormImageUpload(props: Partial<FormImageUploadProps>) {
  const onChange = vi.fn();
  const onUpload = vi.fn();
  const onRemove = vi.fn();
  const onPreview = vi.fn();
  const onBeforeUpload = vi.fn();
  const onChooseImageError = vi.fn();

  const propsData = {
    onChange,
    onUpload,
    onRemove,
    onPreview,
    onBeforeUpload,
    onChooseImageError,
    name: 'upload',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormImageUpload', propsData);

  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);

  return {
    form,
    instance,
    onChange,
    onUpload,
    onRemove,
    onPreview,
    onBeforeUpload,
    onChooseImageError,
    propsData,
  };
}

describe('FormImageUpload', () => {
  it('测试集成 form', () => {
    const { instance, form } = createFormImageUpload({});
    const TestValue = ['image1.png', 'image2.png'];
    instance.callMethod('onChange', TestValue);
    expect(form.getFieldsValue()).toEqual({
      upload: TestValue,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormImageUpload({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    it('测试 onChange 事件', () => {
      const { instance, onChange } = createFormImageUpload({});
      const TestValue = ['image1.png', 'image2.png'];

      instance.callMethod('onChange', TestValue);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0]).toEqual([
        ['image1.png', 'image2.png'],
        {
          'currentTarget': {
            'dataset': {
              'test': 'test',
            },
          },
          'target': {
            'dataset': {
              'test': 'test',
            },
            'targetDataset': {
              'test': 'test',
            },
          },
        },
      ]);
    });

    it('测试 onUpload 事件', () => {
      const { instance, onUpload } = createFormImageUpload({});
      const TestFile = { name: 'image1.png' };

      instance.callMethod('handleUpload', TestFile);
      expect(onUpload).toHaveBeenCalledTimes(1);
      expect(onUpload).toHaveBeenCalledWith(TestFile);
    });

    it('测试 onRemove 事件', () => {
      const { instance, onRemove } = createFormImageUpload({});
      const TestFile = { name: 'image1.png' };

      instance.callMethod('handleRemove', TestFile);
      expect(onRemove).toHaveBeenCalledTimes(1);
      expect(onRemove.mock.calls[0]).toEqual([
        {
          'name': 'image1.png',
        },
      ]);
    });

    it('测试 onRemove 返回结果', () => {
      const { instance } = createFormImageUpload({
        onRemove: () => {
          return false;
        },
      });
      expect(instance.callMethod('handleRemove')).toBe(false);
    });

    it('测试 onPreview 事件', () => {
      const { instance, onPreview } = createFormImageUpload({});
      const TestFile = { name: 'image1.png' };

      instance.callMethod('onPreview', TestFile);
      expect(onPreview).toHaveBeenCalledTimes(1);
      expect(onPreview.mock.calls[0]).toEqual([
        {
          'name': 'image1.png',
        },
        {
          'currentTarget': {
            'dataset': {
              'test': 'test',
            },
          },
          'target': {
            'dataset': {
              'test': 'test',
            },
            'targetDataset': {
              'test': 'test',
            },
          },
        },
      ]);
    });

    it('测试 onBeforeUpload 事件', () => {
      const { instance, onBeforeUpload } = createFormImageUpload({});
      onBeforeUpload.mockImplementation((v) => v);
      const TestFileList = [{ name: 'image1.png' }];

      const res = instance.callMethod('handleBeforeUpload', TestFileList);
      expect(res).toEqual(TestFileList);
      expect(onBeforeUpload).toHaveBeenCalledTimes(1);
      expect(onBeforeUpload).toHaveBeenCalledWith(TestFileList);
    });

    it('测试 onChooseImageError 事件', () => {
      const { instance, onChooseImageError } = createFormImageUpload({});
      const TestError = { message: 'Error choosing image' };

      instance.callMethod('onChooseImageError', TestError);
      expect(onChooseImageError).toHaveBeenCalledTimes(1);
      expect(onChooseImageError.mock.calls[0]).toEqual([
        {
          'message': 'Error choosing image',
        },
        {
          'currentTarget': {
            'dataset': {
              'test': 'test',
            },
          },
          'target': {
            'dataset': {
              'test': 'test',
            },
            'targetDataset': {
              'test': 'test',
            },
          },
        },
      ]);
    });
  });
});
