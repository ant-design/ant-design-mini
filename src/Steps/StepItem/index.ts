import { StepItemDefaultProps } from './props';
import { connect } from '../../_util/store';
import { IState, StepsStore } from '../store';
interface IData {
  _index: number;
  _direction: 'horizontal' | 'vertical';
}
Component({
  data: {} as IData,
  props: StepItemDefaultProps,
  mixins: [
    connect<IState, IData>({
      storeFactory: StepsStore,
      mapStateToData: ({ state }) => ({
        _index: state.index,
        _direction: state.direction,
      }),
    }),
  ],
});
