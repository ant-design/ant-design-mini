import { StepItemDefaultProps } from './props';
import { STEPS_TYPE, storeMixin } from '../../_util/store';
import { IState } from '../index';
interface IData {
  _index: number;
  _direction: 'horizontal' | 'vertical';
}
Component({
  data: {} as IData,
  props: StepItemDefaultProps,
  mixins: [
    storeMixin<IState, IData>({
      type: STEPS_TYPE,
      mapStateToData: ({ state }) => ({
        _index: state.index,
        _direction: state.direction,
      }),
    }),
  ],
});
