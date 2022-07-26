import { GridDefaultProps } from './props';

Component({
  props: GridDefaultProps,
  methods: {
    onTap(item) {
      const { onTap } = this.props;
      if (onTap) {
        onTap(item);
      }
    },
  },
});
