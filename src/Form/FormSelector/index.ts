import { resolveEventValues } from '../../_util/platform';
import { Component, triggerEventValues } from '../../_util/simply';
import { createForm } from '../form';
import { FormSelectorDefaultProps } from './props';

Component({
  props: FormSelectorDefaultProps,
  methods: {
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
  mixins: [createForm()],
});
