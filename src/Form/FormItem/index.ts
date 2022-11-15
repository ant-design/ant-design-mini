import { FormItemDefaultProps } from './props';

Component({
  props: FormItemDefaultProps,
  data: {
    helpVisible: false,
  },
  methods: {
    onHelpVisibleChange(visible: boolean) {
      this.setData({
        helpVisible: visible,
      });
    }
  }
});

