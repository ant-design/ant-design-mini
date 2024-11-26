import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import Converter from './js-calendar-converter';
import { Component, getValueFromProps } from '../../../../../src/_util/simply';
Component({
    cell: null,
}, {
    updateData() {
        const cell = getValueFromProps(this, 'cell');
        const time = dayjs(cell === null || cell === void 0 ? void 0 : cell.time);
        const vs = Converter.solar2lunar(time.get('year'), time.get('month') + 1, time.get('date'));
        if (vs === -1) {
            this.setData({
                cnday: '',
            });
            return;
        }
        this.setData({
            cnday: vs.lunarFestival || vs.festival || vs.IDayCn,
            festival: !!vs.festival || !!vs.lunarFestival,
            unset: (cell === null || cell === void 0 ? void 0 : cell.isSelectedBegin) || (cell === null || cell === void 0 ? void 0 : cell.isSelectedEnd),
        });
    },
}, {
    cnday: '',
    festival: '',
    unset: '',
}, null, {
    attached() {
        this.updateData();
    },
    observers: {
        '**': function (data) {
            const prevData = this._prevData || this.data;
            this._prevData = { ...data };
            if (!equal(prevData.cell, data.cell)) {
                this.updateData();
            }
        },
    },
});
