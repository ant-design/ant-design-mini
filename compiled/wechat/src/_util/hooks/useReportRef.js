import { useComponent, useEffect } from 'functional-mini/component';
export var triggerRefEvent = function () {
    var component = useComponent();
    useEffect(function () {
        component.triggerEvent('ref', component);
    }, []);
};
