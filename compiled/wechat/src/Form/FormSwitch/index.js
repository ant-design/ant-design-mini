import { Component, triggerEvent } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormSwitchDefaultProps } from './props';
import { createForm } from '../form';
Component(FormSwitchDefaultProps, {
    onChange: function (value, e) {
        this.emit('onChange', resolveEventValue(value));
        triggerEvent(this, 'change', resolveEventValue(value), e);
    },
}, null, [createForm()]);
