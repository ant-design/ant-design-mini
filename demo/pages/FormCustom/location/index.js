import { createForm } from '../../../../src/Form/form';


Component({
  mixins: [createForm()],
  data: {
    visible: false,
  },
  methods: {
    showPopup() {
      my.chooseLocation({
        success:(res) => {
          this.emit('onChange', res);
        },
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
  }
});
