import { wechatComponent } from 'functional-mini/component';
function removeNullProps(props) {
    const newProps = {};
    for (const key in props) {
        if (props[key] !== null) {
            newProps[key] = props[key];
        }
    }
    return newProps;
}
export function mountComponent(Hooks, defaultProps) {
    Component(wechatComponent(Hooks, defaultProps, { styleIsolation: 'shared' }));
}
