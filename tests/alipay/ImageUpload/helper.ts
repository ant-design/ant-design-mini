import { getInstance, sleep } from 'tests/utils';
import { expect, vi } from 'vitest';

export function createImageUpload(props = {}) {
  const onUpload = vi.fn().mockImplementation((file) => {
    return `path-${file.path}-size-${file.size}`;
  });
  const onRemove = vi.fn();
  const onChange = vi.fn();
  const onPreview = vi.fn();
  const onChooseImageError = vi.fn();
  const onBeforeUpload = vi.fn();
  const chooseImage = vi.fn().mockImplementation(({ success }) => {
    return success({
      tempFiles: [
        {
          path: '2',
          size: 2,
        },
      ],
    });
  });
  const my = {
    chooseImage: chooseImage,
  };
  const instance = getInstance(
    'ImageUpload',
    {
      ...props,
      onUpload,
      onPreview,
      onRemove,
      onChooseImageError,
      onBeforeUpload,
      onChange,
    },
    my
  );

  return {
    onUpload,
    onChange,
    instance,
    onPreview,
    onRemove,
    onChooseImageError,
    onBeforeUpload,
    chooseImage,
  };
}

export async function callChooseImage(instance) {
  instance.callMethod('chooseImage');
  await sleep(10);
}

function removeUid(files) {
  return files.map(removeFileUid);
}

export function removeFileUid(file) {
  return {
    ...file,
    uid: typeof file.uid,
  };
}

export async function expectData(instance, expectData) {
  expect(removeUid(instance.getData().mixin.value)).toEqual(expectData);
}

export async function callOnPreview(instance, index: number) {
  const data = instance.getData().mixin.value;
  const item = data[index];
  instance.callMethod('onPreview', {
    currentTarget: {
      dataset: {
        uid: item.uid,
      },
    },
  });
  await sleep(10);
}

export async function callOnRemove(instance, index: number) {
  const data = instance.getData().mixin.value;
  const item = data[index];
  instance.callMethod('onRemove', {
    currentTarget: {
      dataset: {
        uid: item.uid,
      },
    },
  });
  await sleep(10);
}
