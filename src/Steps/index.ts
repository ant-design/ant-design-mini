import { StepsDefaultProps } from './props';
import { context } from './context';

Component({
  props: StepsDefaultProps,
  didMount() {
    this.updateItemData();
  },
  didUpdate() {
    this.updateItemData();
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    context.removeGroup(key);
  },
  methods: {
    updateItemData() {
      const { index, direction, uid } = this.props;
      const key = `${this.$page.$id}-${uid}`;
      context.updateItemIndex(key, index);
      context.updateItemDirection(key, direction);
    },
  },
});
