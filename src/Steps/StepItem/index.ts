import { StepItemDefaultProps } from './props';
import { STEPS_TYPE, connect } from '../../_util/store';
import { IState } from '../store';
interface IData {
  _index: number;
  _direction: 'horizontal' | 'vertical';
}
Component({
  data: {} as IData,
  props: StepItemDefaultProps,
  mixins: [
    connect<IState, IData>({
      type: STEPS_TYPE,
      mapStateToData: ({ state }) => ({
        _index: state.index,
        _direction: state.direction,
      }),
    }),
  ],
});
