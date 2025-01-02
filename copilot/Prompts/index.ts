import { PromptsProps } from './props';
import { Component } from '../../src/_util/simply';

Component(
  PromptsProps,
  // methods
  {
    onTapPromptsItem(e) {
      if (this.props.onTapPromptsItem) {
        const { item } = e.target.dataset || {};
        this.props.onTapPromptsItem(item);
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
