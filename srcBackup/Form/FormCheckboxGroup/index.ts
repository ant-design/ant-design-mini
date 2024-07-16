import { Component, triggerEvent } from '../../_util/simply';
import { FormCheckboxGroupDefaultProps } from './props';
import { resolveEventValue } from '../../_util/platform';
import { createForm } from '../form';

Component(
  FormCheckboxGroupDefaultProps,
  {
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
  },
  null,
  [createForm()]
);
