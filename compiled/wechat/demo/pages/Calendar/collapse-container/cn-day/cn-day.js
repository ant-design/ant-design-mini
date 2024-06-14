import dayjs from 'dayjs';
import Converter from './js-calendar-converter';
import { mountComponent } from '../../../../../src/_util/component';
const CollapseContainer = (props) => {
    var _a, _b, _c;
    const time = dayjs((_a = props.cell) === null || _a === void 0 ? void 0 : _a.time);
    const vs = Converter.solar2lunar(time.get('year'), time.get('month') + 1, time.get('date'));
    if (vs === -1) {
        return {
            cnday: '',
        };
    }
    return {
        cnday: vs.lunarFestival || vs.festival || vs.IDayCn,
        festival: !!vs.festival || !!vs.lunarFestival,
        unset: ((_b = props.cell) === null || _b === void 0 ? void 0 : _b.isSelectedBegin) || ((_c = props.cell) === null || _c === void 0 ? void 0 : _c.isSelectedEnd),
    };
};
mountComponent(CollapseContainer, {
    cell: null,
});
