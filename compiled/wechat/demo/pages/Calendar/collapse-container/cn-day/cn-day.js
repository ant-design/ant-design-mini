import dayjs from 'dayjs';
import Converter from './js-calendar-converter';
import { mountComponent } from '../../../../../src/_util/component';
var CollapseContainer = function (props) {
    var _a, _b, _c, _d, _e;
    var time = dayjs((_a = props.cell) === null || _a === void 0 ? void 0 : _a.time);
    var vs = Converter.solar2lunar(time.get('year'), time.get('month') + 1, time.get('date'));
    if (vs === -1) {
        return {
            cnday: '',
        };
    }
    return {
        cnday: (_c = (_b = vs.lunarFestival) !== null && _b !== void 0 ? _b : vs.festival) !== null && _c !== void 0 ? _c : vs.IDayCn,
        festival: !!vs.festival || !!vs.lunarFestival,
        unset: ((_d = props.cell) === null || _d === void 0 ? void 0 : _d.isSelectedBegin) || ((_e = props.cell) === null || _e === void 0 ? void 0 : _e.isSelectedEnd),
    };
};
mountComponent(CollapseContainer, {
    cell: null,
});
