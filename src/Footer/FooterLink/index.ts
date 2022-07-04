import { FooterLinkDefaultProps } from './props';

Component({
  props: FooterLinkDefaultProps,
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
