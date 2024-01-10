import { FormImageUploadDefaultProps } from './props';
import createComponent from '../createComponent';
createComponent({
    props: FormImageUploadDefaultProps,
    methods: {
        onChange: function (value) {
            this.emit('onChange', value);
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        },
        onUpload: function (localFile) {
            if (!this.props.onUpload) {
                throw new Error('need props onUpload');
            }
            return this.props.onUpload(localFile);
        },
        onRemove: function (file) {
            if (this.props.onRemove) {
                return this.props.onRemove(file);
            }
        },
        onPreview: function (file) {
            if (this.props.onPreview) {
                this.props.onPreview(file);
            }
        },
        onBeforeUpload: function (localFileList) {
            if (this.props.onBeforeUpload) {
                return this.props.onBeforeUpload(localFileList);
            }
        },
        onChooseImageError: function (err) {
            if (this.props.onChooseImageError) {
                this.props.onChooseImageError(err);
            }
        },
    },
});
