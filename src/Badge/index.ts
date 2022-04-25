import { BadgeDefaultProps } from './props';
import computed from '../mixins/computed';

Component({
  mixins: [computed],
  props: BadgeDefaultProps,
  methods: {
    computed() {
      const { text } = this.props;
      let overCount = false;
      if (typeof text === 'number') {
        if (text >= 100) {
          overCount = true;
        }
      }
      return { overCount };
    },
  },
});
