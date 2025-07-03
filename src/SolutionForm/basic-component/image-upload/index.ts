import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';

createComponent({
  onInit() {
    this.store = getStore();
  },
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
    onBeforeUpload(localFileList) {
      if (this.props.config?.onBeforeUpload) {
        return this.props.config.onBeforeUpload();
      }
      return localFileList;
    },
    onUpload(file) {
      return new Promise(async (resolve, reject) => {
        if (this.props.config?.onUpload) {
          const res = await this.props.config.onUpload(file);
          resolve(res);
        } else {
          reject('图片上传的 onUpload 方法是必传参数');
        }
      });
    },
    onRemove(file) {
      if (this.props.config?.onRemove) {
        return this.props.config.onRemove(file);
      }
      return true;
    },
    onChooseImageError(error) {
      if (this.props.config?.onChooseImageError) {
        return this.props.config.onChooseImageError(error);
      }
    },
    onPreview(file) {
      if (this.props.config?.onPreview) {
        return this.props.config.onPreview(file);
      }
    },
  },
});
