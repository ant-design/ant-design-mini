import equal from "fast-deep-equal";
import { VideoUploadDefaultProps, IVideoUploadData, File } from './props';
import { chooseVideo, uploadFile } from '../_util/promisify';

Component({
  props: VideoUploadDefaultProps,
  data: {
    id: '',
    fileList: [],
    playVideoUrl: '',
  } as IVideoUploadData,

  didMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.videoContext = my.createVideoContext(`video_${this.$page.$id}_${this.$id}`);
    this.setData({
      id: `video_${this.$page.$id}_${this.$id}`
    })
    this.handleValue();
  },

  didUpdate(prevProps) {
    if (!equal(prevProps.value, this.props.value)) {
      this.handleValue();
    }
  },

  methods: {
    handleValue() {
      let curValue;
      const { value } = this.props;

      if (typeof value === 'string') {
        curValue = [].concat({
          url: value,
          status: 'done'
        });
      } else if (
        Array.isArray(value) &&
        value.length &&
        value.some(v => typeof v === 'string')
      ) {
        curValue = value.map(v => (typeof v === 'string' ? {
          url: v,
          status: 'done'
        } : v));
      } else {
        curValue = value;
      }
      this.setData({
        fileList: curValue
      });
    },

    async onChooseVideo() {
      const { camera, maxDuration, sourceType } = this.props;

      const chooseVideoRes = await chooseVideo({
        camera,
        sourceType,
        maxDuration,
      });

      if (chooseVideoRes) {
        const { size, tempFilePath, duration } = chooseVideoRes;
        this.uploadFile({
          duration,
          size,
          tempFilePath
        })
      }
    },

    async uploadFile(file) {
      const { action, fileName, formData, onBeforeUpload, onUpload, onAfterUpload } = this.props;
      const { fileList } = this.data;
      const { tempFilePath } = file;

      try {
        if (onBeforeUpload) {
          const beforeUploadRes = await onBeforeUpload.call(this.props, file, fileList);
          if (beforeUploadRes === false) return;
        }

        const tempFileList = fileList.concat([{
          key: tempFilePath,
          url: '',
          localPath: tempFilePath,
          status: 'pending'
        }]);

        this.setData({
          fileList: tempFileList
        });

        if (action && !onUpload) {
          const res = await uploadFile({
            url: action,
            fileType: 'video',
            fileName: fileName,
            filePath: tempFilePath,
            formData,
            hideLoading: true
          });

          /** 这里uploadFile api接口类型定义有问题，ide返回的是string，真机返回的是number，作下兼容 */
          if (res.statusCode === 200 || res.statusCode === '200') {
            const response = JSON.parse(res.data);

            if (onAfterUpload) {
              const resUrl = await onAfterUpload.call(this.props, response);
              if (resUrl) {
                this.updateFileList(tempFilePath, 'done', resUrl);
              } else {
                this.updateFileList(tempFilePath, 'error');
              }
            } else if (response.success && response.data && response.data.url) {
              this.updateFileList(tempFilePath, 'done', response.data.url);
            } else {
              this.updateFileList(tempFilePath, 'error');
              my.showToast({
                content: '接口返回格式非默认格式，请使用onAfterUpload进行处理'
              });
            }
          } else {
            this.updateFileList(tempFilePath, 'error');
            my.showToast({
              content: '上传失败，请重试'
            });
          }
          return;
        }

        if (onUpload) {
          const onUploadRes = await onUpload.call(this.props, {
            key: tempFilePath,
            url: '',
            localPath: tempFilePath,
            status: 'pending'
          });
          this.updateFileList(tempFilePath, onUploadRes.status, onUploadRes.url);
        }
      } catch (e) {
        this.updateFileList(tempFilePath, 'error');
        my.showToast({
          content: e.errorMessage || e.errorMsg || e.message || '上传失败，请重试',
          type: 'fail',
        });
      }
    },

    updateFileList(path, status, url?) {
      const { fileList } = this.data;
      const { onChange } = this.props;

      const tempFileList = fileList.map((file) => {
        if (file.key === path) {
          return {
            ...file,
            url: url ? url : '',
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

    async onDeleteVideo(e) {
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

    onPreviewVideo(e) {
      const { previewVideoUrl } = e.target.dataset;

      this.setData({
        playVideoUrl: previewVideoUrl
      }, () => {
        this.videoContext.play();
      });

    },

    onPlay() {
      this.videoContext.requestFullScreen({
        direction: 0
      });
    },

    onFullScreenChange(e) {
      if (!e.detail.fullScreen) {
        this.videoContext.pause();
      }
    }
  }
})