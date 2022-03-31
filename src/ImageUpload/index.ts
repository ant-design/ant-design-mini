import { UploaderDefaultProps, IUploaderData, File } from './props';
import { chooseImage, imageViewer, uploadFile } from '../_util/promisify';

Component({
  props: UploaderDefaultProps,
  data: {
    fileList: [],
  } as IUploaderData,
  didMount() {
    const { defaultValue } = this.props;
    this.setData({
      fileList: defaultValue
    });
  },
  methods: {
    async onChooseImage() {
      const { fileList } = this.data;
      const { maxCount } = this.props;

      const chooseImageRes = await chooseImage({
        count: maxCount - fileList.length,
        sourceType: ['camera', 'ablum']
      });

      if (chooseImageRes && chooseImageRes.success) {
        const tasks = chooseImageRes.tempFiles.map((file) => this.uploadFile(file));
        await Promise.all(tasks);
      }
    },

    async uploadFile(file) {
      const { action, fileName, formData, onBeforeUpload, onUpload } = this.props;
      const { fileList } = this.data;
      const { path } = file;

      try {
        if (onBeforeUpload) {
          const beforeUploadRes = await onBeforeUpload.call(this.props, file, fileList);
          if (beforeUploadRes === false) return;
        }

        const tempFileList = fileList.concat([{
          key: path,
          url: path,
          thumbUrl: '',
          status: 'pending'
        }]);

        this.setData({
          fileList: tempFileList
        });

        if (action) {
          const res = await uploadFile({
            url: action,
            fileType: 'image',
            fileName: `${fileName}_${Date.now()}`,
            filePath: path,
            formData: formData || {},
            hideLoading: true,
          });

          /** 这里uploadFile api接口类型定义有问题，ide返回的是string，真机返回的是number，作下兼容 */
          if (res.statusCode === 200 || res.statusCode === '200') {
            this.updateFileList(path, 'done');
          } else {
            this.updateFileList(path, 'error');
          }
          return;
        }

        if (onUpload) {
          const onUploadRes = await onUpload.call(this.props, {
            key: path,
            url: path,
            thumbUrl: '',
            status: 'pending'
          });
          this.updateFileList(path, onUploadRes.status);
        }
      } catch (e) {
        this.updateFileList(path, 'error');
        my.showToast({
          content: e.errorMessage || e.errorMsg || e.message || '上传失败，请重试',
          type: 'fail',
        });
      }
    },

    updateFileList(path, status) {
      const { fileList } = this.data;
      const { onChange } = this.props;

      const tempFileList = fileList.map((file) => {
        if (file.url === path) {
          return {
            ...file,
            status
          } as File;
        }
        return file;
      });

      this.setData({
        fileList: tempFileList
      });

      onChange && onChange.call(this.props, tempFileList);
    },

    async onDeleteImage(e) {
      const { fileList } = this.data;
      const { onDelete, onChange } = this.props;
      const { deleteImageIndex } = e.target.dataset;
      const deleteFile = fileList.find((item, index) => index === deleteImageIndex);
      const tempFileList = fileList.filter((item, index) => index !== deleteImageIndex);

      if (onDelete) {
        const onDeleteRes = await onDelete.call(this.props, deleteFile);
        if (onDeleteRes === false) return;
      }
      this.setData({
        fileList: tempFileList
      });
      onChange && onChange.call(this.props, tempFileList);
    },

    onPreviewImage(e) {
      const { fileList } = this.data;
      const { preview, enableShowPhotoDownload, onPreview } = this.props;
      const { previewImageIndex } = e.target.dataset;

      if (!preview) return;

      if (onPreview) {
        onPreview.call(this.props, fileList);
        return;
      }

      imageViewer({
        images: fileList.map((file) => ({
          u: file.url
        })),
        init: previewImageIndex,
        enableShowPhotoDownload
      });
    },

    onPreviewDemoImage() {
      const { demoImage } = this.props;
      imageViewer({
        images: [{
          u: demoImage
        }],
        init: 0
      })
    }
  }
})