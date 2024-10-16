import { Component, triggerEvent, triggerEventOnly, getValueFromProps, } from '../_util/simply';
import { NumberKeyboardDefaultProps } from './props';
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Component(NumberKeyboardDefaultProps, {
    catchAppearModal: function () {
        this.setRandom();
    },
    setRandom: function () {
        if (getValueFromProps(this, 'random')) {
            var newArr = arr.sort(function () {
                return Math.random() - 0.5;
            });
            this.setData({
                randomArr: [
                    newArr.slice(0, 3),
                    newArr.slice(3, 6),
                    newArr.slice(6, 9),
                ],
            });
        }
    },
    tapButton: function (e) {
        var _a = getValueFromProps(this, [
            'value',
            'confirmDisabled',
        ]), value = _a[0], confirmDisabled = _a[1];
        this.vibrate();
        var _key = e.currentTarget.dataset.key;
        var _val = "".concat(value);
        // 回退
        if (_key === 'del') {
            triggerEvent(this, 'change', "".concat(_val.substr(0, _val.length - 1)), e);
            return;
        }
        if (_key !== 'del' && _key !== 'enter') {
            triggerEvent(this, 'change', "".concat(_val).concat(_key), e);
        }
        if (_key === 'enter' && !confirmDisabled) {
            this.onClickEnter();
            triggerEventOnly(this, 'close');
        }
    },
    // 隐藏键盘，失去焦点
    handleHide: function () {
        triggerEventOnly(this, 'close');
    },
    onClickEnter: function () {
        var confirmDisabled = getValueFromProps(this, 'confirmDisabled');
        if (confirmDisabled)
            return;
        this.handleHide();
        triggerEventOnly(this, 'confirm');
    },
    // 振动反馈
    vibrate: function () {
        if (getValueFromProps(this, 'vibrate') && typeof my !== 'undefined') {
            my.canIUse('vibrateShort') && my.vibrateShort();
        }
    },
}, {
    numArr: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    randomArr: [],
}, undefined, {
    attached: function () {
        this.setRandom();
    },
});
