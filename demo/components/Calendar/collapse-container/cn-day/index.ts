/*
 * @Author: rayhomie 1572801584@qq.com
 * @Date: 2025-05-22 19:18:44
 * @LastEditors: rayhomie 1572801584@qq.com
 * @LastEditTime: 2025-05-22 23:12:34
 * @FilePath: /ant-design-mini/demo/components/collapse-container/cn-day/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

  /// #if ALIPAY || ALIPAYNATIVE
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
