/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { store } from '../Form/store';

export default () => ({
  onInit() {
    if (this.props.mode === 'form'
      && this.props.htmlType === 'submit') {
      this.props._submit = () => {
        store.onFinish(() => this.props.form);
      };
      this.$page._getCurrentField = null;
    }
  },
});
