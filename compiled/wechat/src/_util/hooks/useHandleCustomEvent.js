import { useEvent } from 'functional-mini/component';
export var useHandleCustomEvent = function (eventName, handler) {
    useEvent(eventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (eventOrValue, alipayEvent) {
        return handler(eventOrValue.detail, eventOrValue);
    });
};
export var useMultipleValueHandleCustomEvent = function (eventName, handler) {
    useEvent(eventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var firstArgs = args[0];
        if (Array.isArray(firstArgs.detail)) {
            var wechatArgs = firstArgs.detail.concat(firstArgs);
            return handler.apply(void 0, wechatArgs);
        }
        else {
            return handler([firstArgs.detail, firstArgs]);
        }
    });
};
export var useHandleCustomEventOnly = function (eventName, handler) {
    useEvent(eventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (event) {
        return handler(event);
    });
};
