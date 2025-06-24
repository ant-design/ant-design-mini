import { FormGroupDefaultProps } from './props';
import { getStore } from '../../store/index';
import { createComponent } from 'miniapp-store';

createComponent({
  props: FormGroupDefaultProps,

  computed() {
    return {
      ...getStore().mapState(['formData', 'formRenderPropsConfig']),
      groupTitle() {
        return this.title;
      },
    };
  },

  onInit() {
    this.store = getStore();
  },

  didUnmount() {
    const { groupField } = this.props;
    this.store.commit('removeGroupField', groupField);
  },
});
