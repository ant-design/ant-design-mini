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
    context.removeGroup(this.props.uid);
  },
  methods: {
    updateItemData() {
      const { index, direction, uid } = this.props;
      context.updateItemIndex(uid, index);
      context.updateItemDirection(uid, direction);
    },
  },
});
