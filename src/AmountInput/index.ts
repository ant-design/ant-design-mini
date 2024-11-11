import { Component } from '../_util/simply';
import { AmountInputProps } from './props';

Component(
  AmountInputProps,
  {
    // 副标题点击
    onClickExtraTitle() {
      this.props?.onClickExtraTitle?.();
    },
  },
  {
    unit: '千',
  },
);
