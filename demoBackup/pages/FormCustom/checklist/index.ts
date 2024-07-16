import { createForm } from '../../../../src/Form/form';

Component({
  mixins: [createForm()],
  data: {
    visible: false,
  },
  methods: {
    showPopup() {
      this.setData({
        visible: true,
      });
    },
    handlePopupClose() {
      this.setData({
        visible: false,
      });
    },
    onChange(value, e) {
      this.emit('onChange', value);
    },
  },
});
