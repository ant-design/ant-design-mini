import dayjs from 'dayjs';
import Converter from './js-calendar-converter';
import { mountComponent } from '../../../../../src/_util/component';

interface Props {
  cell: any;
}

const CollapseContainer = (props: Props) => {
  const time = dayjs(props.cell?.time);
  const vs = Converter.solar2lunar(
    time.get('year'),
    time.get('month') + 1,
    time.get('date')
  );
  if (vs === -1) {
    return {
      cnday: '',
    };
  }

  return {
    cnday: vs.lunarFestival || vs.festival || vs.IDayCn,
    festival: !!vs.festival || !!vs.lunarFestival,
    unset: props.cell?.isSelectedBegin || props.cell?.isSelectedEnd,
  };
};

mountComponent(CollapseContainer, {
  cell: null,
});
