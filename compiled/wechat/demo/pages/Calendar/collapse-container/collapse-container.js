import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../../../../src/_util/component';
const CollapseContainer = (props) => {
    var _a;
    const [collapse, setCollapse] = useState((_a = props.defaultCollapse) !== null && _a !== void 0 ? _a : true);
    useEvent('handleToggle', () => {
        setCollapse((v) => !v);
    });
    return {
        collapse,
        internalHide: props.hide,
        containerTitle: props.title,
    };
};
mountComponent(CollapseContainer, {
    hide: false,
    defaultCollapse: null,
    title: '',
});
