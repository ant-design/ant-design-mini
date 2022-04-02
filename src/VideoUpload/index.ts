import { VideoUploadDefaultProps, IVideoUploadData, File } from './props';
import { chooseVideo, uploadFile } from '../_util/promisify';

Component({
  props: VideoUploadDefaultProps,
  data: {
    fileList: [],
    playVideoUrl: '',
  } as IVideoUploadData,
  didMount() {
    const { defaultValue, id } = this.props;
    // @ts-ignore
    this.videoContext = my.createVideoContext(id || 'myVideo');
    this.setData({
      fileList: defaultValue
    });
  },
  methods: {
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
      const { action, filename, formData, onBeforeUpload, onUpload } = this.props;
      const { fileList } = this.data;
      const { tempFilePath } = file;

      try {
        if (onBeforeUpload) {
          const beforeUploadRes = await onBeforeUpload.call(this.props, file, fileList);
          if (beforeUploadRes === false) return;
        }

        const tempFileList = fileList.concat([{
          key: tempFilePath,
          url: tempFilePath,
          thumbUrl: '',
          status: 'pending'
        }]);

        this.setData({
          fileList: tempFileList
        });

        if (action) {
          const res = await uploadFile({
            url: action,
            fileType: 'video',
            fileName: `${filename}_${Date.now()}`,
            filePath: tempFilePath,
            formData,
            hideLoading: true
          });

          /** 这里uploadFile api接口类型定义有问题，ide返回的是string，真机返回的是number，作下兼容 */
          if (res.statusCode === 200 || res.statusCode === '200') {
            this.updateFileList(tempFilePath, 'done');
          } else {
            this.updateFileList(tempFilePath, 'error');
          }
          return;
        }

        if (onUpload) {
          const onUploadRes = await onUpload.call(this.props, {
            key: tempFilePath,
            url: tempFilePath,
            thumbUrl: '',
            status: 'pending'
          });
          this.updateFileList(tempFilePath, onUploadRes.status);
        }
      } catch (e) {
        this.updateFileList(tempFilePath, 'error');
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