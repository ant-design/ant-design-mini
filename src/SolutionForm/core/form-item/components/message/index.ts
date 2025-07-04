import { createComponent } from 'miniapp-store';
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
