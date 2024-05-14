import { Component, triggerEvent } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormRateDefaultProps } from './props';
import { createForm } from '../form';
Component(FormRateDefaultProps, {
    onChange: function (value, e) {
        this.emit('onChange', resolveEventValue(value));
        triggerEvent(this, 'change', resolveEventValue(value), e);
    },
}, null, [createForm()]);
