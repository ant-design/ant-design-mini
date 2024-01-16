import { useState, useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { isOldSDKVersion } from '../_util/platform';
var isOldVersion = isOldSDKVersion();
var Popup = function (props) {
    var enableAnimation = props.animation && props.duration > 0;
    var _a = useState(false), closing = _a[0], setClosing = _a[1];
    var triggerEventOnly = useComponentEvent(props).triggerEventOnly;
    useComponentUpdateEffect(function () {
        if (!props.visible && enableAnimation) {
            setClosing(true);
        }
        if (!enableAnimation) {
            triggerEventOnly(props.visible ? 'afterShow' : 'afterClose');
        }
    }, [props.visible]);
    useEvent('onAnimationEnd', function () {
        if (closing) {
            setClosing(false);
        }
        if (enableAnimation) {
            triggerEventOnly(props.visible ? 'afterShow' : 'afterClose');
        }
    });
    useEvent('onTapMask', function () {
        if (closing) {
            return;
        }
        triggerEventOnly('close');
    });
    return {
        closing: closing,
        isOldVersion: isOldVersion,
    };
};
mountComponent(Popup, {
    visible: false,
    destroyOnClose: false,
    showMask: true,
    position: 'bottom',
    // 是否开启动画
    animation: true,
    animationType: 'transform',
    // 动画持续时间
    duration: 300,
    height: null,
    width: null,
    maskClassName: '',
    maskStyle: '',
    // 弹窗层级
    zIndex: 998,
});
