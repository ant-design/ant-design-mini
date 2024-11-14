import isFunction from 'lodash/isFunction';
import { componentsProps } from './props';

Component({
  data: {},
  props: componentsProps,
  methods: {
    getCurTapVoucher(event) {
      const { index } = event.target.dataset;
      const { dataSource } = this.props;

      return dataSource[index];
    },

    handleVoucherTap(event) {
      const { onVoucherTap } = this.props;

      onVoucherTap?.(this.getCurTapVoucher(event), event);
    },

    handleBtnTap(event) {
      const { onBtnTap, onTap } = this.props;
      const voucher = this.getCurTapVoucher(event);

      if (isFunction(onBtnTap)) {
        onBtnTap(voucher, event);
      } else if (isFunction(onTap)) {
        onTap(voucher, event);
      }
    },
  },
});
