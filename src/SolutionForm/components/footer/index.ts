import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';
import { isFunction } from 'lodash';

createComponent({
  computed() {
    return {
      ...getStore().mapState(['formRenderPropsConfig']),
    };
  },
  methods: {
    onSubmit() {
      const { onSubmit } = this.props;
      if (isFunction(onSubmit)) onSubmit();
    },
  },
});
