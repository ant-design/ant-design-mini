/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonDefaultProps } from './props';
import '../_util/assert-component2';
Component({
    properties: {
        type: String,
        disabled: Boolean,
        activeClassName: String,
        subText: String,
        inline: Boolean,
        size: String,
        icon: String,
        loading: Boolean,
        danger: Boolean,
        formType: String,
        publicId: String,
        openType: String,
        scope: String,
    },
    options: {
        styleIsolation: 'shared',
    },
    props: ButtonDefaultProps,
    methods: {
        ...{
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
        },
    },
});
