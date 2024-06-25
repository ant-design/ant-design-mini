import { LinkDefaultProps } from './props';

Component({
  props: LinkDefaultProps,
  data: {},
  onInit() {},
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
