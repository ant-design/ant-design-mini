import { Component } from '../../_util/simply';
import { FormItemDefaultProps } from './props';
Component(FormItemDefaultProps, null, null, null, {
    attached: function () {
        this.triggerEvent('ref', this);
    },
});
