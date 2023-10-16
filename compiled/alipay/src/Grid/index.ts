import { GridDefaultProps } from './props';
import '../_util/assert-component2';

Component({
  props: GridDefaultProps,
  methods: {
    onTap(e) {
      const { item } = e.target.dataset;
      const { onTap } = this.props;
      if (onTap) {
        onTap(item);
      }
    },
    onFirstAppear(e) {
      const { item } = e.target.dataset;
      const { onFirstAppear } = this.props;
      if (onFirstAppear) {
        onFirstAppear(item);
      }
    },
  },
});
