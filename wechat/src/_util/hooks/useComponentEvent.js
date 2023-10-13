import { useComponent } from 'functional-mini/component';
export function useComponentEvent(props) {
    const component = useComponent();
    return {
        triggerEvent: (eventName, value, e) => {
            // 首字母大写，然后加上 on
            component.triggerEvent('change', value);
        },
    };
}
