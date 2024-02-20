import { useEvent, useRef } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
import { chooseImage } from '../_util/jsapi/choose-image';
import {
  File,
  IUploaderProps,
  LocalFile,
  UploaderFunctionalProps,
} from './props';
import { useId } from 'functional-mini/compat';

/**
 * 获取一个内部使用的 uid
 * 每次获取时自增
 */
const useCounter = () => {
  const counterRef = useRef(0);
  // 使用 Date.now() 与 useId 作为前缀，防止每次前缀都相同
  const prefix = useId() + '-' + Date.now();
  return {
    getCount() {
      counterRef.current = counterRef.current + 1;
      return `${prefix}-${counterRef.current}`;
    },
  };
};

const ImageUpload = (props: IUploaderProps) => {
  const { getCount } = useCounter();
  const [fileList, { isControlled, update, triggerUpdater }] = useMixState(
    props.defaultFileList,
    {
      value: props.fileList,
      postState(fileList) {
        return {
          valid: true,
          value: (fileList || []).map((item) => {
            const file = {
              ...item,
            };
            if (typeof item.url === 'undefined') {
              file.url = '';
            }
            if (typeof item.uid === 'undefined') {
              file.uid = getCount();
            }
            if (typeof item.status === 'undefined') {
              file.status = 'done';
            }
            return file;
          }),
        };
      },
    }
  );

  triggerRefEvent();
  const { triggerEvent } = useComponentEvent(props);

  async function uploadFile(localFile: LocalFile) {
    const { onUpload } = props;

    const uid = getCount();

    triggerUpdater((oldFiles) => {
      const tempFileList: File[] = [
        ...oldFiles,
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          path: localFile.path,
          size: localFile.size,
          uid,
          status: 'uploading',
        },
      ];
      triggerEvent('change', tempFileList);
      return tempFileList;
    });
    try {
      const url = await onUpload(localFile);
      if (typeof url !== 'string' || !url) {
        updateFile(uid, {
          status: 'error',
        });
        return;
      }
      updateFile(uid, {
        status: 'done',
        url,
      });
    } catch (err) {
      updateFile(uid, {
        status: 'error',
      });
    }
  }

  async function updateFile(uid: string, file: Partial<File>) {
    triggerUpdater((old) => {
      const tempFileList = old.map((item) => {
        if (item.uid === uid) {
          return {
            ...item,
            ...file,
          };
        }
        return item;
      });
      triggerEvent('change', tempFileList);
      return tempFileList;
    });
  }

  useEvent('chooseImage', async () => {
    const { onBeforeUpload, onUpload, maxCount, sourceType } = props;
    if (!onUpload || typeof onUpload !== 'function') {
      throw new Error('need props onUpload');
    }
    let localFileList: LocalFile[];
    try {
      const chooseImageRes = await chooseImage({
        count:
          typeof maxCount === 'undefined'
            ? Infinity
            : maxCount - fileList.length,
        sourceType,
      });
      localFileList = (
        chooseImageRes.tempFiles ||
        chooseImageRes.tempFilePaths ||
        chooseImageRes.apFilePaths ||
        chooseImageRes.filePaths ||
        []
      )
        .map((item) => {
          if (typeof item === 'string') {
            return {
              path: item,
            };
          }
          if (item.path) {
            return {
              path: item.path,
              size: item.size,
            };
          }
        })
        .filter((item) => !!item);
    } catch (err) {
      triggerEvent('chooseImageError', err);
      return;
    }

    if (onBeforeUpload && typeof onBeforeUpload === 'function') {
      try {
        const beforeUploadRes = await onBeforeUpload(localFileList);
        if (beforeUploadRes === false) {
          return;
        }
        if (Array.isArray(beforeUploadRes)) {
          localFileList = beforeUploadRes;
        }
      } catch (err) {
        return;
      }
    }

    const tasks = localFileList.map((file) => uploadFile(file));
    await Promise.all(tasks);
  });

  useEvent('onRemove', async (e) => {
    const { uid } = e.currentTarget.dataset;
    const file = fileList.find((item) => item.uid === uid);
    if (props.onRemove && typeof props.onRemove === 'function') {
      const result = await props.onRemove(file);
      if (result === false) {
        return;
      }
    }
    const tempFileList = fileList.filter((item) => item.uid !== uid);
    if (!isControlled) {
      update(tempFileList);
    }
    triggerEvent('change', tempFileList);
  });

  useEvent('onPreview', (e) => {
    const { uid } = e.currentTarget.dataset;
    const file = fileList.find((item) => item.uid === uid);
    triggerEvent('preview', file);
  });

  useEvent('update', (e) => {
    if (isControlled) {
      return;
    }
    update(e);
  });

  return {
    mixin: {
      value: fileList,
    },
  };
};

mountComponent(ImageUpload, UploaderFunctionalProps);
