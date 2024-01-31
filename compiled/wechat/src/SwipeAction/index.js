var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { SwipeActionDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { compareVersion } from '../_util/compareVersion';
import '../_util/assert-component2';
import { platform } from '../_util/platform';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { transformOptions } from './wechat';
var setStyleObj1 = function (buttons, inertiaWidth) {
    var _a, _b, _c;
    var widthPos = buttons.length === 2 ? 0.5 : 0.3333;
    return [
        { marginLeft: 0 },
        {
            marginLeft: "".concat(-(((_a = buttons[0]) === null || _a === void 0 ? void 0 : _a.width) + 1 + (inertiaWidth || 0) * widthPos) / 2, "px"),
        },
        {
            marginLeft: "".concat(-(((_b = buttons[0]) === null || _b === void 0 ? void 0 : _b.width) +
                ((_c = buttons[1]) === null || _c === void 0 ? void 0 : _c.width) +
                1 +
                (inertiaWidth || 0) * 0.6666) / 2, "px"),
        },
    ];
};
var setStyleObj2 = function (buttons, inertiaWidth) {
    var _a, _b, _c, _d;
    var length = buttons.length;
    if (length === 2) {
        return [
            { marginRight: 0 },
            {
                marginRight: "-".concat((((_a = buttons[0]) === null || _a === void 0 ? void 0 : _a.width) + (inertiaWidth || 0) * 0.5) / 2, "px"),
            },
        ];
    }
    if (length === 3) {
        return [
            { marginRight: 0 },
            {
                marginRight: "-".concat((((_b = buttons[0]) === null || _b === void 0 ? void 0 : _b.width) + (inertiaWidth || 0) * 0.3333) / 2, "px"),
            },
            {
                marginRight: "-".concat((((_c = buttons[0]) === null || _c === void 0 ? void 0 : _c.width) +
                    ((_d = buttons[1]) === null || _d === void 0 ? void 0 : _d.width) +
                    (inertiaWidth || 0) * 0.6666) /
                    2, "px"),
            },
        ];
    }
    return [{ marginRight: 0 }];
};
var myTimeOut = null;
var getDirectionLeft = function (arr) {
    if (arr.length < 2) {
        arr = [0, arr[0]];
    }
    return arr[0] + arr[1] <= 0;
};
var isOldVersion = getIsOldVersion();
function getIsOldVersion() {
    if (typeof my === 'undefined') {
        return false;
    }
    var SDKVersion = my.SDKVersion;
    return compareVersion(SDKVersion, '2.0.0') < 0;
}
function getInitReady() {
    if (platform() === 'wechat') {
        return false;
    }
    if (isOldVersion) {
        return false;
    }
    return true;
}
Component(transformOptions({
    props: SwipeActionDefaultProps,
    didMount: function () {
        var _this = this;
        var _a = this.getProps(), defaultSwiped = _a.defaultSwiped, elasticity = _a.elasticity;
        this.setButtonItemWidth();
        this.setData({ inertiaWidth: !isOldVersion && elasticity ? 20 : 0 });
        if (defaultSwiped) {
            this.initWidth(function (maxSwipe) {
                maxSwipe &&
                    _this.setData({
                        swipeX: (maxSwipe + 0.01) * (defaultSwiped === 'right' ? -1 : 1),
                        swipedR: defaultSwiped === 'right',
                        swipedL: defaultSwiped === 'left',
                    });
            });
        }
    },
    didUpdate: function (prevProp) {
        var _a = this.getProps(), swiped = _a.swiped, damping = _a.damping, elasticity = _a.elasticity;
        // 设置不同的滑动位置时需要重置
        var rs = prevProp.swiped !== swiped && !swiped;
        var is = prevProp.elasticity !== elasticity;
        var ds = prevProp.damping !== damping;
        if (rs || is || ds) {
            this.setData({
                swipeX: 0,
                swipedR: false,
                swipedL: false,
                tapTypeL: '',
                tapTypeR: '',
            });
        }
        if (is) {
            this.setData({ inertiaWidth: elasticity ? 20 : 0 });
        }
    },
    data: {
        // 在微信小程序与支付宝小程序基础库 1.0
        // 组件初始化时的 margin-left 决定了后续可移动的距离，所以需要等组件初始化以后再加载
        ready: getInitReady(),
        swipeLeft: true,
        swipeX: 0,
        moveX: 0,
        tapTypeL: '',
        tapTypeR: '',
        leftWidth: 20,
        rightWidth: 20,
        maxSwipeL: 0,
        maxSwipeR: 0,
        inTouch: false,
        swipedR: false,
        swipedL: false,
        changeArr: [0, 0],
        myStyle: {},
        inertiaWidth: 20,
        animation: !isOldVersion,
        _leftButtons: [],
        _rightButtons: [],
    },
    methods: {
        setWidth: function () {
            var _a = this.data, _leftButtons = _a._leftButtons, _rightButtons = _a._rightButtons;
            var _rightArr = _rightButtons || [];
            var _leftArr = _leftButtons || [];
            this.setData({
                ready: true,
                rightWidth: _rightArr.reduce(function (tolal, cur) {
                    return tolal + cur.width;
                }, 0),
                leftWidth: _leftArr.length
                    ? _leftArr.reduce(function (tolal, cur) {
                        return tolal + cur.width;
                    }, 0)
                    : 0,
            });
        },
        setButtonItemWidth: function () {
            var _this = this;
            var _a = this.getProps(), leftButtons = _a.leftButtons, rightButtons = _a.rightButtons;
            leftButtons.forEach(function (i) {
                i.width = i.width || 150;
            });
            rightButtons.forEach(function (i) {
                i.width = i.width || 150;
            });
            this.setData({ _leftButtons: leftButtons, _rightButtons: rightButtons }, function () {
                _this.setWidth();
            });
        },
        getProps: function () {
            var _this = this;
            if (platform() === 'wechat') {
                return __assign(__assign({}, this.data), { onSwipeStart: function (v) {
                        _this.triggerEvent('swipestart', v);
                    }, onSwipeEnd: function (v) {
                        _this.triggerEvent('swipeend', v);
                    }, onButtonTap: function (v) {
                        _this.triggerEvent('buttontap', v);
                    } });
            }
            return this.props;
        },
        initWidth: function (func) {
            var _this = this;
            var _a = this.getProps(), leftButtons = _a.leftButtons, rightButtons = _a.rightButtons;
            // 获取宽度信息，设置滑轨的宽度、初始化滑动位置
            // 如果没有获取到该信息则把左滑禁用掉
            rightButtons.length > 0 &&
                this.boundingClientRect(".ant-swipe-action-movable-right".concat(this.$id ? '-' + this.$id : '')).then(function (ret) {
                    if (ret && ret.width) {
                        _this.setData({ maxSwipeR: ret.width });
                        func && func(ret.width);
                    }
                });
            leftButtons.length > 0 &&
                this.boundingClientRect(".ant-swipe-action-movable-left".concat(this.$id ? '-' + this.$id : '')).then(function (ret) {
                    if (ret && ret.width) {
                        _this.setData({ maxSwipeL: ret.width });
                        func && func(ret.width);
                    }
                });
        },
        boundingClientRect: function (id) {
            if (typeof my === 'undefined') {
                return getInstanceBoundingClientRect(this, id);
            }
            return getInstanceBoundingClientRect(my, id);
        },
        // 向外透出事件
        onTouchStart: function () {
            var onSwipeStart = this.getProps().onSwipeStart;
            var _a = this.data, swipedR = _a.swipedR, swipedL = _a.swipedL;
            this.initWidth();
            this.setData({ tapTypeL: '', tapTypeR: '', inTouch: true }); // 清空confirmType = auto 的表现
            onSwipeStart({
                swiped: !!(swipedR || swipedL),
                direction: swipedL ? 'left' : swipedR ? 'right' : '',
            }, fmtEvent(this.getProps()));
        },
        onTouchEnd: function (e) {
            // 因为微信小程序没有 onChangeEnd 事件
            // 所以用 onTouchEnd 模拟 onChangeEnd
            if (platform() === 'wechat') {
                this.onChangeEnd(e);
            }
            this.setData({ inTouch: false });
        },
        // 滑动过程中的事件，是内部事件不向外透出，用于控制右侧按钮的位置信息
        onChange: function (e) {
            var _this = this;
            var _a = this.data, changeArr = _a.changeArr, maxSwipeR = _a.maxSwipeR, maxSwipeL = _a.maxSwipeL, inTouch = _a.inTouch, swipedR = _a.swipedR, swipedL = _a.swipedL, inertiaWidth = _a.inertiaWidth;
            var x = e.detail.x;
            var L = x;
            // changeArr用于精准的控制滑动的方向
            var newArr = changeArr[1] === L ? [changeArr] : [changeArr[1], L];
            this.setData({ moveX: L, changeArr: newArr });
            var ridx = this.getProps().rightButtons.findIndex(function (u) { return u.confirmType === 'move'; });
            var lidx = this.getProps().leftButtons.findIndex(function (u) { return u.confirmType === 'move'; });
            if (ridx === -1 && lidx === -1)
                return;
            var isRight = getDirectionLeft(changeArr);
            // 左滑时的滑动确认、收起处理
            if (isRight) {
                if (L < 0 && Math.abs(L) >= maxSwipeR && inTouch && !swipedR) {
                    clearTimeout(myTimeOut);
                    myTimeOut = setTimeout(function () {
                        var _a = _this.data, changeArr = _a.changeArr, maxSwipeR = _a.maxSwipeR, inTouch = _a.inTouch, swipedR = _a.swipedR, moveX = _a.moveX;
                        var _left = getDirectionLeft(changeArr) && changeArr[0] >= changeArr[1];
                        if (inTouch &&
                            maxSwipeR + inertiaWidth + 2 >= Math.abs(moveX) &&
                            _left &&
                            !swipedR) {
                            _this.onSetCheck(true);
                        }
                    }, 100);
                }
                if (changeArr[0] < changeArr[1] && maxSwipeR > L + 4 && inTouch) {
                    this.setData({ tapTypeR: '', myStyle: {} });
                }
            }
            else {
                if (L > 0 && L + 1 >= maxSwipeL && inTouch && !swipedL) {
                    clearTimeout(myTimeOut);
                    myTimeOut = setTimeout(function () {
                        var _a = _this.data, changeArr = _a.changeArr, maxSwipeL = _a.maxSwipeL, inTouch = _a.inTouch, swipedL = _a.swipedL, moveX = _a.moveX;
                        var _right = !getDirectionLeft(changeArr) && changeArr[1] >= changeArr[0];
                        if (inTouch && maxSwipeL <= moveX + 1 && _right && !swipedL) {
                            _this.onSetCheck(false);
                        }
                    }, 100);
                }
                if (changeArr[0] > changeArr[1] && maxSwipeL > L + 2 && inTouch) {
                    this.setData({ tapTypeL: '', myStyle: {} });
                }
            }
        },
        onSetCheck: function (isRight) {
            var _a = this.getProps(), rightButtons = _a.rightButtons, leftButtons = _a.leftButtons;
            var _b = this.data, inertiaWidth = _b.inertiaWidth, _leftButtons = _b._leftButtons, _rightButtons = _b._rightButtons;
            var arr = isRight ? rightButtons : leftButtons;
            var idx = arr.findIndex(function (u) { return u.confirmType === 'move'; });
            if (idx === -1)
                return;
            typeof my !== 'undefined' && my.vibrateShort({ success: function () { } });
            var styArr = isRight
                ? setStyleObj1(_rightButtons, inertiaWidth)
                : setStyleObj2(_leftButtons, inertiaWidth);
            var sty = styArr[idx];
            this.setData({ myStyle: sty });
            isRight
                ? this.setData({ tapTypeR: 'R-' + idx })
                : this.setData({ tapTypeL: 'L-' + idx });
        },
        // 意外中断了滑动，则立即开始结算滑动动作
        onTouchCancel: function (e) {
            this.onChangeEnd(e);
        },
        onChangeEnd: function (e) {
            var x = e.detail.x;
            var changeArr = this.data.changeArr;
            // 如果是停留在初始态返回
            if (x === 0)
                return;
            // 判断是否是左滑
            var isRight = getDirectionLeft(changeArr);
            this.setData({ swipeLeft: isRight });
            isRight ? this.onSetSwipeRight(x) : this.onSetSwipeLeft(x);
        },
        onSetSwipeRight: function (x, needBack) {
            var _a = this.data, swipedR = _a.swipedR, inTouch = _a.inTouch, tapTypeR = _a.tapTypeR, changeArr = _a.changeArr;
            var onButtonTap = this.getProps().onButtonTap;
            var isRight = Math.abs(changeArr[1]) > Math.abs(changeArr[0]);
            if (!swipedR && Math.abs(x) < 10) {
                isRight = false;
            }
            needBack && (isRight = false);
            !isRight && this.setData({ tapTypeR: '', myStyle: {} });
            if (inTouch && !!tapTypeR) {
                this.setData({ tapTypeR: '', myStyle: {} });
                onButtonTap({
                    direction: 'right',
                    btnIdx: parseInt(tapTypeR.replace('R-', '')),
                }, fmtEvent(this.getProps()));
                this.onSwipeRight(false);
                return;
            }
            this.setData({ changeArr: [0, 0] });
            this.onSwipeRight(isRight);
        },
        onSetSwipeLeft: function (x, needBack) {
            var _a = this.data, swipedL = _a.swipedL, inTouch = _a.inTouch, tapTypeL = _a.tapTypeL, changeArr = _a.changeArr;
            var onButtonTap = this.getProps().onButtonTap;
            // true：初始是往右滑，false: 右滑收起
            var isRight = changeArr[1] >= changeArr[0];
            if (!swipedL && Math.abs(x) < 10) {
                isRight = false;
            }
            needBack && (isRight = false);
            // 清空二次确认的状态
            !isRight && this.setData({ tapTypeL: '', myStyle: {} });
            // 处理滑动-触发事件
            if (inTouch && !!tapTypeL) {
                this.setData({ tapTypeL: '', myStyle: {} });
                onButtonTap({ direction: 'left', btnIdx: parseInt(tapTypeL.replace('L-', '')) }, fmtEvent(this.getProps()));
                this.onSwipeLeft(false);
                return;
            }
            // 清空滑动方向
            this.setData({ changeArr: [0, 0] });
            this.onSwipeLeft(isRight);
        },
        // 结算
        onSwipeLeft: function (isRight) {
            var _this = this;
            var onSwipeEnd = this.getProps().onSwipeEnd;
            var _a = this.data, maxSwipeL = _a.maxSwipeL, inertiaWidth = _a.inertiaWidth;
            // 为了处理到重置状态的效果
            var maxX = maxSwipeL + 0.01 + inertiaWidth;
            this.setData({
                swipeX: isRight ? maxX : -0.01,
            }, function () {
                var flag = _this.data.swipeX === -0.01;
                setTimeout(function () {
                    _this.setData({
                        swipeX: flag ? 0 : maxSwipeL + 0.01,
                        swipedL: !flag,
                    }, function () {
                        onSwipeEnd({ direction: 'left', swiped: !!isRight }, fmtEvent(_this.getProps()));
                    });
                }, inertiaWidth > 0 ? 180 : 0);
            });
        },
        onSwipeRight: function (isRight) {
            var _this = this;
            var _a = this.data, maxSwipeR = _a.maxSwipeR, inertiaWidth = _a.inertiaWidth;
            var onSwipeEnd = this.getProps().onSwipeEnd;
            // 处理x的位置，两次setData X是因为x如果相同位置不会变，刚好也把弹性在这里处理了
            // 为了处理到重置状态的效果
            var maxX = -(maxSwipeR + 0.01 + inertiaWidth);
            this.setData({
                swipeX: isRight ? maxX : -0.01,
            }, function () {
                var flag = _this.data.swipeX === -0.01;
                setTimeout(function () {
                    _this.setData({
                        swipeX: flag ? 0 : -(maxSwipeR + 0.01),
                        swipedR: !flag,
                    }, function () {
                        onSwipeEnd({ direction: 'right', swiped: !!isRight }, fmtEvent(_this.getProps()));
                    });
                }, inertiaWidth > 0 ? 180 : 0);
            });
        },
        // 处理右侧点击事件
        onItemTap: function (e) {
            var _a = this.data, swipeLeft = _a.swipeLeft, tapTypeL = _a.tapTypeL, tapTypeR = _a.tapTypeR, _leftButtons = _a._leftButtons, _rightButtons = _a._rightButtons;
            var onButtonTap = this.getProps().onButtonTap;
            if (!onButtonTap)
                return;
            var _b = e.currentTarget.dataset.item, itemL = _b.itemL, idx = _b.idx, item = _b.item;
            var confirmType = (swipeLeft ? item : itemL).confirmType;
            if (tapTypeL === 'L-' + idx) {
                this.onSetSwipeLeft(0, true);
                this.setData({ tapTypeL: '', myStyle: {} });
                onButtonTap({ direction: 'left', btnIdx: idx }, fmtEvent(this.getProps()));
                return;
            }
            if (tapTypeR === 'R-' + idx) {
                this.onSetSwipeRight(0, true);
                this.setData({ tapTypeR: '', myStyle: {} });
                onButtonTap({ direction: 'right', btnIdx: idx }, fmtEvent(this.getProps()));
                return;
            }
            // auto 是展开按钮二次确认的效果
            if (confirmType === 'tap' || confirmType === 'move') {
                var styArr = swipeLeft
                    ? setStyleObj1(_rightButtons)
                    : setStyleObj2(_leftButtons);
                var sty = styArr[idx];
                this.setData({ myStyle: sty });
                !swipeLeft
                    ? this.setData({ tapTypeL: 'L-' + idx })
                    : this.setData({ tapTypeR: 'R-' + idx });
            }
            else {
                !swipeLeft
                    ? this.onSetSwipeLeft(0, true)
                    : this.onSetSwipeRight(0, true);
                onButtonTap({ direction: !swipeLeft ? 'left' : 'right', btnIdx: idx }, fmtEvent(this.getProps()));
            }
        },
    },
}));
