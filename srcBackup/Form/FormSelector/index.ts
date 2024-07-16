import { Component, triggerEventValues } from '../../_util/simply';
import { resolveEventValues } from '../../_util/platform';
import { FormSelectorDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormSelectorDefaultProps,
  {
    onChange(value, item, e) {
      const v = resolveEventValues(value, item);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'change', v, e);
    },
    onSelectMax(value, item, e) {
      triggerEventValues(this, 'selectMax', resolveEventValues(value, item), e);
    },
    onSelectMin(value, item, e) {
      triggerEventValues(this, 'selectMin', resolveEventValues(value, item), e);
    },
  },
  null,
  [createForm()]
);
