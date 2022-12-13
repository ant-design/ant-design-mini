import { FormImageUploadDefaultProps } from './props';
import createComponent from '../createComponent';

createComponent({
  props: FormImageUploadDefaultProps,
  methods: {
    onChange(value) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    },
    onUpload(localFile) {
      if (!this.props.onUpload) {
        throw new Error('need props onUpload');
      }
      return this.props.onUpload(localFile);
    },
    onRemove(file) {
      if (this.props.onRemove) {
        this.props.onRemove(file);
      }
    },
    onPreview(file) {
      if (this.props.onPreview) {
        this.props.onPreview(file);
      }
    },
    onBeforeUpload(localFileList) {
      if (this.props.onBeforeUpload) {
        return this.props.onBeforeUpload(localFileList);
      }
    },
    onChooseImageError(err) {
      if (this.props.onChooseImageError) {
        this.props.onChooseImageError(err);
      }
    },
  }
});

