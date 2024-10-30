import { Component } from '../_util/simply';
import { EmptyFunctionalProps } from './props';
Component(EmptyFunctionalProps, {
    onClickButton: function (e) {
        var item = e.target.dataset.item;
        this.props.onClickButton(item);
    },
});
