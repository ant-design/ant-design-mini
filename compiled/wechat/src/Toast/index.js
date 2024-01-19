import { useEffect, useEvent, useRef, useState, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { ToastFunctionalProps } from './props';
var Toast = function (props) {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var timerRef = useRef(null);
    var triggerEventOnly = useComponentEvent(props).triggerEventOnly;
    var closeMask = useStableCallback(function () {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        var isShow = show;
        setShow(false);
        timerRef.current = null;
        if (isShow) {
            triggerEventOnly('close');
        }
    });
    var handleShowToast = useStableCallback(function () {
        setShow(true);
        if (props.duration > 0) {
            var timer = setTimeout(function () {
                closeMask();
            }, props.duration);
            timerRef.current = timer;
        }
    });
    useEffect(function () {
        if (props.visible) {
            handleShowToast();
        }
        else {
            closeMask();
        }
    }, [props.visible]);
    useEvent('handleClickMask', function () {
        if (props.showMask && props.maskCloseable) {
            closeMask();
        }
    });
    var displayContent = typeof props.content === 'string'
        ? props.content.substring(0, 24)
        : props.content;
    return {
        displayContent: displayContent,
        show: show,
    };
};
mountComponent(Toast, ToastFunctionalProps);
