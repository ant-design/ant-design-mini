import { FooterTagDefaultProps } from './props';

Component({
  props: FooterTagDefaultProps,
  methods: {
    onTap(e) {
      const { onTap } = this.props;
      if (onTap) {
        const index = e?.currentTarget?.dataset?.index;
        return onTap(index);
      }
    },
  },
});
