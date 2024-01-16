import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../../../../src/_util/component';
var CollapseContainer = function (props) {
    var _a;
    var _b = useState((_a = props.defaultCollapse) !== null && _a !== void 0 ? _a : true), collapse = _b[0], setCollapse = _b[1];
    useEvent('handleToggle', function () {
        setCollapse(function (v) { return !v; });
    });
    return {
        collapse: collapse,
        internalHide: props.hide,
        containerTitle: props.title,
    };
};
mountComponent(CollapseContainer, {
    hide: false,
    defaultCollapse: null,
    title: '',
});
