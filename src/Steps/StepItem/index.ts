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
    const key = `${this.$page.$id}-${uid}`;
    const setItemIndex = (index: number) => this.setData({
      _index: index,
    });
    const setItemDirection = (direction: string) => this.setData({
      _direction: direction,
    });

    context.addItem(key, `${this.$id}`, {
      setItemIndex,
      setItemDirection,
    });
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    context.removeItem(key, `${this.$id}`);
  },
  methods: {},
});
