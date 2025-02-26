import { createComponent } from '@alipay/merchant-base-mini';
createComponent({
  props: {
    info: {},
  },
  computed: {
    message() {
      return this.info?.message || '';
    }
  },
});
