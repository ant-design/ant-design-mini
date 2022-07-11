import { context } from '../context';
import { TourItemDefaultProps } from './props';

Component({
  props: TourItemDefaultProps,
  data: {
    _index: 0,
  },
  didMount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    const setItemIndex = (index: number) =>
      this.setData({
        _index: index,
      });
    context.setSteps(key, { ...this.props, setItemIndex });
  },
  didUnmount() {
    const { uid, index } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    context.removeItem(key, index);
  },
});
