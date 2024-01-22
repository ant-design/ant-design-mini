import { useMemo } from 'functional-mini/compat';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { BadgeFunctionalProps } from './props';
var Badge = function (props) {
    var overCount = useMemo(function () {
        var text = props.text;
        var overCount = false;
        if (typeof text === 'number') {
            if (text >= 100) {
                overCount = true;
            }
        }
        return overCount;
    }, [props.text]);
    return { overCount: overCount };
};
mountComponent(Badge, BadgeFunctionalProps);
