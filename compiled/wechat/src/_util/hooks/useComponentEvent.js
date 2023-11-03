import { useComponent } from 'functional-mini/component';
export function useComponentEvent(props) {
    var component = useComponent();
    return {
        triggerEvent: function (eventName, value, e) {
            // 首字母大写，然后加上 on
            component.triggerEvent(eventName.toLocaleLowerCase(), value);
        },
        triggerEventOnly: function (eventName, e) {
            // 首字母大写，然后加上 on
            component.triggerEvent(eventName.toLocaleLowerCase());
        },
        // 转发 catch 事件
        alipayForwardCatchEvent: function (eventName, e) {
            // 首字母大写，然后加上 catch
        },
        // 转发事件
        alipayForwardEvent: function (eventName, e) {
            // 首字母大写，然后加上 on
        },
    };
}
