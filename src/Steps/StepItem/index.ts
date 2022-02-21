import { StepItemDefaultProps } from './props';
import { context } from '../context';

Component({
  props: StepItemDefaultProps,
  data: {
    _index: 0,
    _direction: 'horizontal',
  },
  didMount() {
    const { uid } = this.props;
    const setItemIndex = (index: number) => this.setData({
      _index: index,
    });
    const setItemDirection = (direction: string) => this.setData({
      _direction: direction,
    });

    context.addItem(uid, `${this.$id}`, {
      setItemIndex,
      setItemDirection,
    });
  },
  didUnmount() {
    context.removeItem(this.props.uid, `${this.$id}`);
  },
  methods: {},
});
