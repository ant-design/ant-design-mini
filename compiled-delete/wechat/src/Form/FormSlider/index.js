import { Component, triggerEvent } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormSliderDefaultProps } from './props';
import { createForm } from '../form';
Component(FormSliderDefaultProps, {
    onChange: function (value, e) {
        this.emit('onChange', resolveEventValue(value));
        triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onAfterChange: function (value, e) {
        triggerEvent(this, 'afterChange', resolveEventValue(value), e);
    },
}, null, [createForm()]);
