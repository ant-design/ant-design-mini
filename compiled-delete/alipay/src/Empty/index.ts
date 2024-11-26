import { Component, IPlatformEvent } from '../_util/simply';
import { EmptyFunctionalProps } from './props';

Component(EmptyFunctionalProps, {
  onClickButton(e: IPlatformEvent) {
    const { item } = e.target.dataset;
    this.props.onClickButton(item);
  },
});
