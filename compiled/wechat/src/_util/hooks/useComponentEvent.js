import { useComponent } from 'functional-mini/component';
import { useEvent } from './useEvent';
export function useComponentEvent(props) {
    var component = useComponent();
    var triggerEvent = useEvent(function (eventName, value, e) {
        // 首字母大写，然后加上 on
        component.triggerEvent(eventName.toLocaleLowerCase(), value);
    });
    var triggerEventValues = useEvent(function (eventName, values, e) {
        // 首字母大写，然后加上 on
        component.triggerEvent(eventName.toLocaleLowerCase(), values);
    });
    var triggerEventOnly = useEvent(function (eventName, e) {
        // 首字母大写，然后加上 on
        component.triggerEvent(eventName.toLocaleLowerCase());
    });
    var alipayForwardCatchEvent = useEvent(function (eventName, e) {
        // 首字母大写，然后加上 catch
    });
    var alipayForwardEvent = useEvent(function (eventName, e) {
        // 首字母大写，然后加上 on
    });
    return {
        triggerEvent: triggerEvent,
        triggerEventValues: triggerEventValues,
        triggerEventOnly: triggerEventOnly,
        // 转发 catch 事件
        alipayForwardCatchEvent: alipayForwardCatchEvent,
        // 转发事件
        alipayForwardEvent: alipayForwardEvent,
    };
}
