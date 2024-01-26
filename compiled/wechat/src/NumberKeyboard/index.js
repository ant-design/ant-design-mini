import { useEffect } from 'functional-mini/compat';
import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { NumberKeyboardFunctionalProps } from './props';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var NumberKeyboard = function (props) {
    var numArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    var _a = useState([]), randomArr = _a[0], setRandomArr = _a[1];
    var _b = useComponentEvent(props), triggerEventOnly = _b.triggerEventOnly, triggerEvent = _b.triggerEvent;
    var setRandom = useStableCallback(function () {
        if (props.random) {
            var newArr = arr.sort(function () {
                return Math.random() - 0.5;
            });
            setRandomArr([
                newArr.slice(0, 3),
                newArr.slice(3, 6),
                newArr.slice(6, 9),
            ]);
        }
    });
    var vibrate = useStableCallback(function () {
        if (props.vibrate && typeof my !== 'undefined') {
            my.canIUse('vibrateShort') && my.vibrateShort();
        }
    });
    useEvent('handleHide', function () {
        triggerEventOnly('close');
    });
    useEvent('tapButton', function (e) {
        var value = props.value, confirmDisabled = props.confirmDisabled;
        vibrate();
        var _key = e.currentTarget.dataset.key;
        var _val = "".concat(value);
        // 回退
        if (_key === 'del') {
            triggerEvent('change', "".concat(_val.substr(0, _val.length - 1)));
            return;
        }
        if (_key !== 'del' && _key !== 'enter') {
            triggerEvent('change', "".concat(_val).concat(_key));
        }
        if (_key === 'enter' && !confirmDisabled) {
            triggerEventOnly('close');
            triggerEventOnly('confirm');
            triggerEventOnly('close'); // 保持和之前一样的逻辑
        }
    });
    useEvent('catchAppearModal', function () {
        setRandom();
    });
    useEffect(function () {
        setRandom();
    }, []);
    return {
        randomArr: randomArr,
        numArr: numArr,
    };
};
mountComponent(NumberKeyboard, NumberKeyboardFunctionalProps);
