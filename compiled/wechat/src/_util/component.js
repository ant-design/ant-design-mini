import { wechatComponent } from 'functional-mini/component';
function removeNullProps(props) {
    var newProps = {};
    for (var key in props) {
        if (props[key] !== null) {
            newProps[key] = props[key];
        }
    }
    return newProps;
}
export function mountComponent(Hooks, defaultProps) {
    Component(wechatComponent(Hooks, defaultProps, {
        options: { styleIsolation: 'shared', multipleSlots: true },
    }));
}
