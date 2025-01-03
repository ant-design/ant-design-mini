import { Component, triggerEventValues } from '../../src/_util/simply';
import { DefaultProps } from './props';

Component(DefaultProps, {
  handleSelcet(e) {
    const { item, index } = e.currentTarget.dataset;
    triggerEventValues(this, 'select', [item, index], e);
  },
});
