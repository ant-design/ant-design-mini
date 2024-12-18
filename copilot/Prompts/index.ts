import { PromptsProps } from './props';
import { Component } from '../../src/_util/simply';

Component(
  PromptsProps,
  // methods
  {
    onClickPromptsItem(e) {
      if (this.props.onClickPromptsItem) {
        const { item } = e.target.dataset || {};
        this.props.onClickPromptsItem(item);
      }
    },
  },
  // data
  {
  },
  // mixins
  undefined,
  // 生命周期方法
  {
  }
);
