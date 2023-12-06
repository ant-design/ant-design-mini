import { UploaderDefaultProps, File, LocalFile } from './props';
import { chooseImage } from '../_util/promisify';
import createValue from '../mixins/value';
import '../_util/assert-component2';

Component({
  props: UploaderDefaultProps,
  mixins: [createValue({
    defaultValueKey: 'defaultFileList',
    valueKey: 'fileList',
    transformValue(fileList = []) {
      return {
        needUpdate: true,
        value: fileList.map(item => {
          const file = {
            ...item,
          };
          if (typeof item.url === 'undefined') {
            file.url = '';
          }
          if (typeof item.uid === 'undefined') {
            file.uid = String(Math.random());
          }
          if (typeof item.status === 'undefined') {
            file.status = 'done';
          }
          return file;
        }),
      };
    },
  })],
  methods: {
    async chooseImage() {
      const { onBeforeUpload, onUpload } = this.props;
      if (!onUpload) {
        throw new Error('need props onUpload');
      }
      const fileList = this.getValue();
      const { maxCount, sourceType } = this.props;

      let localFileList: LocalFile[];
      try {
        const chooseImageRes = await chooseImage({
          count: typeof maxCount === 'undefined' ? Infinity : (maxCount - fileList.length),
          sourceType,
        });
        localFileList = (chooseImageRes.tempFiles || chooseImageRes.tempFilePaths || chooseImageRes.apFilePaths || chooseImageRes.filePaths || []).map(item => {
          if (typeof item === 'string') {
            return {
              path: item,
            };
          }
          if (item.path) {
            return {
              path: item.path,
              size: item.size,
            }
          }
        }).filter(item => !!item);
      } catch(err) {
        if (this.props.onChooseImageError) {
          this.props.onChooseImageError(err);
        }
        return;
      }

      if (onBeforeUpload) {
        try {
          const beforeUploadRes = await onBeforeUpload(localFileList);
          if (beforeUploadRes === false) {
            return;
          }
          if (Array.isArray(beforeUploadRes)) {
            localFileList = beforeUploadRes;
          }
        } catch(err) {
          return;
        }
      }

      const tasks = localFileList.map((file) => this.uploadFile(file));
      await Promise.all(tasks);
    },

    async uploadFile(localFile: LocalFile) {
      const { onUpload } = this.props;

      const uid = String(Math.random());
      const tempFileList = [...this.getValue(), {
        path: localFile.path,
        size: localFile.size,
        uid,
        status: 'uploading'
      }];

      if (!this.isControlled()) {
        this.update(tempFileList);
      }
      if (this.props.onChange) {
        this.props.onChange(tempFileList);
      }

      try {
        const url = await onUpload(localFile);
        if (typeof url !== 'string' || !url) {
          this.updateFile(uid, {
            status: 'error',
          });
          return;
        }
        this.updateFile(uid, {
          status: 'done',
          url,
        });
      } catch(err) {
        this.updateFile(uid, {
          status: 'error',
        });
      }
    },

    updateFile(uid: string, file: Partial<File>) {
      const fileList = this.getValue();
      const tempFileList = fileList.map(item => {
        if (item.uid === uid) {
          return {
            ...item,
            ...file,
          };
        }
        return item;
      });
      if (!this.isControlled()) {
        this.update(tempFileList);
      }
      if (this.props.onChange) {
        this.props.onChange(tempFileList);
      }
    },

    async onRemove(e) {
      const fileList = this.getValue();
      const { onRemove, onChange } = this.props;
      const { uid } = e.target.dataset;
      const file = fileList.find(item => item.uid === uid);

      if (onRemove) {
        const result = await onRemove(file);
        if (result === false) {
          return;
        }
      }
      const tempFileList = fileList.filter(item => item.uid !== uid);
      if (!this.isControlled()) {
        this.update(tempFileList);
      }
      if (onChange) {
        onChange(tempFileList);
      }
    },

    onPreview(e) {
      const { uid } = e.target.dataset;
      const fileList = this.getValue();
      const file = fileList.find(item => item.uid === uid);
      if (this.props.onPreview) {
        this.props.onPreview(file);
      }
    },
  }
});
