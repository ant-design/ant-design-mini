import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it } from 'vitest';
import {
  callChooseImage,
  callOnPreview,
  callOnRemove,
  createImageUpload,
  expectData,
  removeFileUid,
} from './helper';

describe('ImageUpload', () => {
  it('测试 defaultFileList', async () => {
    const { instance } = createImageUpload({
      defaultFileList: [{ url: 'a' }],
    });
    expectData(instance, [
      {
        status: 'done',
        uid: 'string',
        url: 'a',
      },
    ]);
  });

  it('fileList 优先级大于 defaultFileList', async () => {
    const { instance } = createImageUpload({
      fileList: [{ url: 'a1' }],
      defaultFileList: [{ url: 'a' }],
    });
    expectData(instance, [
      {
        status: 'done',
        uid: 'string',
        url: 'a1',
      },
    ]);
  });

  it('测试 Upload 流程', async () => {
    const { instance, onUpload } = createImageUpload();

    await callChooseImage(instance);
    expect(onUpload.mock.calls.length).toBe(1);
    expect(onUpload.mock.calls[0][0]).toEqual({
      path: '2',
      size: 2,
    });
    expectData(instance, [
      {
        path: '2',
        size: 2,
        status: 'done',
        uid: 'string',
        url: 'path-2-size-2',
      },
    ]);
  });

  it('ChooseImage 失败需要调用 onChooseImageError', async () => {
    const { instance, onChooseImageError, chooseImage } = createImageUpload();
    chooseImage.mockImplementation((e) => {
      e.fail(new Error('cancel'));
    });
    await callChooseImage(instance);
    expect(onChooseImageError.mock.calls.length).toBe(1);
    expect(onChooseImageError.mock.calls[0][0].message).toEqual('cancel');
  });

  it('测试 onBeforeUpload 过滤数据', async () => {
    const { instance, chooseImage, onBeforeUpload, onUpload } =
      createImageUpload();
    chooseImage.mockImplementation((e) => {
      e.success({ apFilePaths: ['1', '2'] });
    });
    onBeforeUpload.mockImplementation((o) => {
      return o.filter((o) => o.path === '2');
    });
    await callChooseImage(instance);
    expect(onBeforeUpload.mock.calls[0][0]).toEqual([
      {
        path: '1',
      },
      {
        path: '2',
      },
    ]);
    expect(onUpload.mock.calls.length).toBe(1);
    expect(onUpload.mock.calls[0][0]).toEqual({
      path: '2',
    });
  });

  it('测试 onBeforeUpload 返回 false', async () => {
    const { instance, chooseImage, onBeforeUpload, onUpload } =
      createImageUpload();
    chooseImage.mockImplementation((e) => {
      e.success({ apFilePaths: ['1', '2'] });
    });
    onBeforeUpload.mockImplementation(() => {
      return false;
    });
    await callChooseImage(instance);
    expect(onUpload.mock.calls.length).toBe(0);
  });

  it('测试 onPreview', async () => {
    const { instance, onPreview } = createImageUpload();
    await callChooseImage(instance);
    await callOnPreview(instance, 0);
    expect(onPreview.mock.calls.length).toBe(1);
    expect(removeFileUid(onPreview.mock.calls[0][0])).toEqual({
      path: '2',
      size: 2,
      status: 'done',
      uid: 'string',
      url: 'path-2-size-2',
    });
  });

  it('测试 onRemove', async () => {
    const { instance, onRemove, onChange } = createImageUpload();
    await callChooseImage(instance);
    await callOnRemove(instance, 0);
    expect(onRemove.mock.calls.length).toBe(1);
    expect(removeFileUid(onRemove.mock.calls[0][0])).toEqual({
      path: '2',
      size: 2,
      status: 'done',
      uid: 'string',
      url: 'path-2-size-2',
    });

    expect(onChange.mock.lastCall).toEqual([[], fmtEvent({})]);
    expectData(instance, []);
  });

  it('如果没有 onUpload, 需要报错', async () => {
    const instance = getInstance('ImageUpload', {}, {});
    let err: Error;
    try {
      await instance.callMethod('chooseImage');
    } catch (error) {
      err = error;
    }
    expect(err.message).toEqual('need props onUpload');
  });

  it('需要支持通过 update 更新数据', async () => {
    const instance = getInstance('ImageUpload', {}, {});
    await instance.callMethod('update', [
      {
        path: '2',
        size: 2,
        status: 'done',
        uid: 'string',
        url: 'path-2-size-2',
      },
    ]);
    await sleep(20);
    expect(instance.getData().mixin.value).toEqual([
      {
        'path': '2',
        'size': 2,
        'status': 'done',
        'uid': 'string',
        'url': 'path-2-size-2',
      },
    ]);
  });

  it('测试 onRemove 返回 false', async () => {
    const { instance, onRemove } = createImageUpload();
    onRemove.mockImplementation(() => false);
    await callChooseImage(instance);
    await callOnRemove(instance, 0);
    expect(onRemove.mock.calls.length).toBe(1);
    expect(removeFileUid(onRemove.mock.calls[0][0])).toEqual({
      path: '2',
      size: 2,
      status: 'done',
      uid: 'string',
      url: 'path-2-size-2',
    });
    expectData(instance, [
      {
        path: '2',
        size: 2,
        status: 'done',
        uid: 'string',
        url: 'path-2-size-2',
      },
    ]);
  });

  it('测试同时上传多个图片', async () => {
    const { instance, onChange, chooseImage, onUpload } = createImageUpload();
    onUpload.mockImplementation(async (file) => {
      await sleep(200);
      return `path-${file.path}-size-${file.size}`;
    });
    chooseImage.mockImplementation(({ success }) => {
      return success({
        tempFiles: [
          {
            path: '2',
            size: 2,
          },
          {
            path: '3',
            size: 3,
          },
        ],
      });
    });
    await callChooseImage(instance);
    expect(onChange.mock.calls.length).toEqual(2);
    expect(
      onChange.mock.calls[0].map((v, index) => {
        if (index === 0) {
          return v.map((item) => ({ ...item, uid: 'uid' }));
        }
        return v;
      })
    ).toEqual([
      [
        {
          path: '2',
          size: 2,
          status: 'uploading',
          uid: 'uid',
        },
      ],
      fmtEvent({}),
    ]);
    expect(
      onChange.mock.calls[1].map((v, index) => {
        if (index === 0) {
          return v.map((item) => ({ ...item, uid: 'uid' }));
        }
        return v;
      })
    ).toEqual([
      [
        {
          path: '2',
          size: 2,
          status: 'uploading',
          uid: 'uid',
          url: '',
        },
        {
          path: '3',
          size: 3,
          status: 'uploading',
          uid: 'uid',
        },
      ],
      fmtEvent({}),
    ]);

    await sleep(500);
    expect(onChange.mock.calls.length).toEqual(4);
  });

  it('测试受控模式', async () => {
    const { instance, onChange, chooseImage, onUpload } = createImageUpload({
      fileList: [{ url: 'a1' }],
    });
    onUpload.mockImplementation(async (file) => {
      return `path-${file.path}-size-${file.size}`;
    });
    chooseImage.mockImplementation(({ success }) => {
      return success({
        tempFiles: [
          {
            path: '2',
            size: 2,
          },
          {
            path: '3',
            size: 3,
          },
        ],
      });
    });
    onChange.mockImplementation((fileList) => {
      instance.setProps({
        fileList,
      });
    });
    await callChooseImage(instance);
    expect(onChange.mock.calls.length).toEqual(4);
    expect(
      onChange.mock.lastCall.map((v, index) => {
        if (index === 0) {
          return v.map((item) => ({ ...item, uid: 'uid' }));
        }
        return v;
      })
    ).toEqual([
      [
        { url: 'a1', uid: 'uid', status: 'done' },
        {
          path: '2',
          size: 2,
          uid: 'uid',
          status: 'done',
          url: 'path-2-size-2',
        },
        {
          path: '3',
          size: 3,
          uid: 'uid',
          status: 'done',
          url: 'path-3-size-3',
        },
      ],
      fmtEvent({}),
    ]);
  });
});
