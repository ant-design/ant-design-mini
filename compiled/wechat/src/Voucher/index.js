import isFunction from 'lodash.isfunction';
import { componentsProps } from './props';
Component({
    data: {},
    props: componentsProps,
    methods: {
        getCurTapVoucher: function (event) {
            var index = event.target.dataset.index;
            var dataSource = this.props.dataSource;
            return dataSource[index];
        },
        handleVoucherTap: function (event) {
            var onVoucherTap = this.props.onVoucherTap;
            onVoucherTap === null || onVoucherTap === void 0 ? void 0 : onVoucherTap(this.getCurTapVoucher(event), event);
        },
        handleBtnTap: function (event) {
            var _a = this.props, onBtnTap = _a.onBtnTap, onTap = _a.onTap;
            var voucher = this.getCurTapVoucher(event);
            if (isFunction(onBtnTap)) {
                onBtnTap(voucher, event);
            }
            else if (isFunction(onTap)) {
                onTap(voucher, event);
            }
        },
    },
});
