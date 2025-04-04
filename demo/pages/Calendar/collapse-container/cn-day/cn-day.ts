import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import { Component, getValueFromProps } from '../../../../../src/_util/simply';
import Converter from './js-calendar-converter';

interface Props {
  cell: any;
}

Component({
  props: {
    cell: null,
  } as Props,
  data: {
    cnday: '',
    festival: '',
    unset: '',
  },
  methods: {
    updateData() {
      const cell = getValueFromProps(this, 'cell');
      const time = dayjs(cell?.time);
      const vs = Converter.solar2lunar(
        time.get('year'),
        time.get('month') + 1,
        time.get('date')
      );
      if (vs === -1) {
        this.setData({
          cnday: '',
        });
        return;
      }
      this.setData({
        cnday: vs.lunarFestival || vs.festival || vs.IDayCn,
        festival: !!vs.festival || !!vs.lunarFestival,
        unset: cell?.isSelectedBegin || cell?.isSelectedEnd,
      });
    },
  },

  /// #if ALIPAY || BUNDLE2H
  onInit() {
    this.updateData();
  },
  didUpdate(prevProps) {
    const cell = getValueFromProps(this, 'cell');
    if (!equal(prevProps.cell, cell)) {
      this.updateData();
    }
  },
  /// #endif
  /// #if WECHAT
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
  /// #endif
});
