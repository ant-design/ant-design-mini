// @ts-nocheck
import { Component, triggerEvent } from '../_util/simply';
import { ActionsProps } from './props';

Component(ActionsProps, {
  handleTapAction(e) {
    const { action } = e.currentTarget.dataset;
    triggerEvent(this, 'itemTap', action);
  },
});
