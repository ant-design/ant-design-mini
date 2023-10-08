import { __assign } from "tslib";
import { ButtonDefaultProps } from './props';
import '../_util/assert-component2';
Component({
    properties: {
        type: {
            type: String,
        },
        disabled: Boolean,
        activeClassName: String,
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
    methods: __assign({
        onGetUserInfo: function (event) {
            this.triggerEvent('getuserinfo', event.detail);
        },
        onContact: function (event) {
            this.triggerEvent('contact', event.detail);
        },
        onGetPhoneNumber: function (event) {
            this.triggerEvent('getphonenumber', event.detail);
        },
        onGetRealTimePhoneNumber: function (event) {
            this.triggerEvent('getrealtimephonenumber', event.detail);
        },
        onError: function (event) {
            this.triggerEvent('error', event.detail);
        },
        onLaunchApp: function (event) {
            this.triggerEvent('launchapp', event.detail);
        },
        onOpenSetting: function (event) {
            this.triggerEvent('opensetting', event.detail);
        },
        onAgreePrivacyAuthorization: function (event) {
            this.triggerEvent('agreeprivacyauthorization', event.detail);
        },
        onChooseAvatar: function (event) {
            this.triggerEvent('chooseavatar', event.detail);
        },
    }),
});
