import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { GridFunctionalProps } from './props';
var Grid = function (props) {
    var events = useComponentEvent(props);
    useEvent('onTap', function (e) {
        var item = e.target.dataset.item;
        events.triggerEvent('tap', item);
    });
    useEvent('onFirstAppear', function (e) {
        var item = e.target.dataset.item;
        events.triggerEvent('firstAppear', item);
    });
    return {};
};
mountComponent(Grid, GridFunctionalProps);
