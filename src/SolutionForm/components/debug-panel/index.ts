import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';

createComponent({
  data: {
    visible: false,
    showType: '',
  },
  computed() {
    return {
      ...getStore().mapState(['formData', 'errorInfo']),
    }
  },
  onInit() {
    this.store = getStore();
  },
  methods: {
    async onClickButton() {
      this.setData({
        visible: !this.data.visible,
      });
    },
    onClose() {
      this.setData({
        visible: false,
        showType: '',
      });
    },
    onConsoleFormData () {
      this.setData({
        showType: 'value',
      });
      console.log('debugInfo 表单数据: ', this.formData);
    },
    onConsoleErrorInfo () {
      this.setData({
        showType: 'error',
      });
      console.log('debugInfo 校验错误项: ', this.errorInfo);
    }
  },
});
