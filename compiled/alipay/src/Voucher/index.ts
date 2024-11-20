import isFunction from 'lodash.isfunction';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { componentsProps } from './props';

Component(
  componentsProps,
  {
    getCurTapVoucher(event) {
      const { index } = event.currentTarget.dataset;
      const dataSource = getValueFromProps(this, 'dataSource');

      return dataSource[index];
    },

    handleVoucherTap(e) {
      triggerEvent(this, 'voucherTap', this.getCurTapVoucher(e), e);
    },
    handleBtnTap(e) {
      const voucher = this.getCurTapVoucher(e);
      const [onBtnTap, onTap] = getValueFromProps(this, ['onBtnTap', 'onTap']);
      if (isFunction(onBtnTap)) {
        triggerEvent(this, 'btnTap', voucher, e);
      } else if (isFunction(onTap)) {
        triggerEvent(this, 'tap', voucher, e);
      }
    },
  },
  undefined,
  undefined,
  undefined
);
