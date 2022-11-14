import { GridItemDefaultProps } from './props';

Component({
  props: GridItemDefaultProps,
  methods: {
    onTap() {
      const { item, onTap } = this.props;
      onTap(item);
    },
    onFirstAppear() {
      const { item, onFirstAppear } = this.props;
      onFirstAppear(item);
    },
  },
});
