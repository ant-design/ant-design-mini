import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';
Component({
    properties: {
        type: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        activeClassName: {
            type: String,
        },
        subText: {
            type: String,
        },
        inline: {
            type: Boolean,
        },
        size: {
            type: String,
        },
        icon: {
            type: String,
        },
        loading: {
            type: Boolean,
        },
        danger: {
            type: String,
        },
        formType: {
            type: String,
        },
        publicId: {
            type: String,
        },
        openType: {
            type: String,
        },
        scope: {
            type: String,
        },
    },
    props: ButtonDefaultProps,
    methods: {
        onTap: function (e) {
            var _a = this.props, onTap = _a.onTap, disabled = _a.disabled, loading = _a.loading;
            if (onTap && !disabled && !loading) {
                var event_1 = fmtEvent(this.props, e);
                return onTap(event_1);
            }
        },
        catchTap: function (e) {
            var _a = this.props, catchTap = _a.catchTap, disabled = _a.disabled, loading = _a.loading;
            if (catchTap && !disabled && !loading) {
                var event_2 = fmtEvent(this.props, e);
                return catchTap(event_2);
            }
        },
        onGetAuthorize: function (e) {
            if (this.props.onGetAuthorize) {
                this.props.onGetAuthorize(fmtEvent(this.props, e));
            }
        },
        onFollowLifestyle: function (e) {
            if (this.props.onFollowLifestyle) {
                this.props.onFollowLifestyle(fmtEvent(this.props, e));
            }
        },
        onError: function (e) {
            if (this.props.onError) {
                this.props.onError(fmtEvent(this.props, e));
            }
        },
        onGetUserInfo: function (e) {
            if (this.props.onGetUserInfo) {
                this.props.onGetUserInfo(fmtEvent(this.props, e));
            }
        },
        onGetPhoneNumber: function (e) {
            if (this.props.onGetPhoneNumber) {
                this.props.onGetPhoneNumber(fmtEvent(this.props, e));
            }
        },
    },
});
