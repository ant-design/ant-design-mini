import { FormGroupDefaultProps } from './props';
import { getStore } from '../../store/index';
import { Component } from 'miniapp-store';

Component({
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
