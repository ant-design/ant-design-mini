import { Component, triggerEvent } from '../_util/simply';
import { GridFunctionalProps } from './props';
Component(GridFunctionalProps, {
    onTap: function (e) {
        var item = e.target.dataset.item;
        triggerEvent(this, 'tap', item);
    },
    onFirstAppear: function (e) {
        var item = e.target.dataset.item;
        triggerEvent(this, 'firstAppear', item);
    }
});
