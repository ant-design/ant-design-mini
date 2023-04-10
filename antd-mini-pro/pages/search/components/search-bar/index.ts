Component({
  methods: {
    handleCancel() {
      my.navigateBack();
    },
    handleConfirm(value) {
      my.alert({ content: `搜索${value}` });
    },
  },
});
