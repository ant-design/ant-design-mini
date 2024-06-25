import { TypographyDefaultProps } from './props';

Component({
  props: TypographyDefaultProps,
  methods: {
    onTap(e) {
      const { onTap } = this.props;
      onTap && onTap(e, this.props);
    },
    catchTap(e) {
      const { catchTap } = this.props;
      catchTap && catchTap(e, this.props);
    },
  },
});
