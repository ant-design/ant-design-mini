import { ResultDefaultProps } from './props';

Component({
  props: ResultDefaultProps,
  methods: {
    onButtonTap(e) {
      const { onButtonTap } = this.props;
      if (onButtonTap) {
        const { index } = e.currentTarget.dataset;
        return onButtonTap(index);
      }
    },
  },
});
