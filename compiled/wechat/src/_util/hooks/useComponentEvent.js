import { useComponent } from 'functional-mini/component';
export function useComponentEvent(props) {
    var component = useComponent();
    return {
        triggerEvent: function (eventName, value, e) {
            // 首字母大写，然后加上 on
            component.triggerEvent(eventName, value);
        },
    };
}
