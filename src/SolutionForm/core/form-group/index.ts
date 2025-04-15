import { FormGroupDefaultProps } from './props';
import { getStore } from '../../store/index';
import { createComponent } from '@alipay/merchant-base-mini';
import { get } from 'lodash';

createComponent({
  props: FormGroupDefaultProps,
  data: {
    isCardExpand: true,
  },

  computed() {
    return {
      ...getStore().mapState(['formData', 'formRenderPropsConfig']),
      gourpTitle() {
        return this.title;
      },
    };
  },

  watch: {
    'groupConfig.cardExpand.expand': {
      handler(newValue) {
        if (newValue !== undefined) {
          this.isCardExpand = newValue;
        }
      },
    },
  },

  onInit() {
    this.store = getStore();
    this.isCardExpand = this.props.groupConfig?.cardExpand?.expand;
  },

  didUnmount() {
    const { groupField } = this.props;
    this.store.commit('removeGroupField', groupField);
  },

  methods: {
    handleExpand() {
      const onExpand = get(this.props, 'groupConfig.cardExpand.onExpand');
      const newValue = !this.isCardExpand;

      if (onExpand) {
        onExpand(newValue);
      }

      this.isCardExpand = newValue;
    },
  },
});
