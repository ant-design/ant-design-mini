import { TagDefaultProps } from './props';
import '../_util/assert-component2';
Component({
    properties: {
        type: {
            value: 'fill',
            type: String,
        },
        color: {
            value: 'primary',
            type: String,
        },
        icon: {
            type: String,
        },
        style: {
            type: String,
        },
        className: {
            type: String,
        },
    },
    options: {
        styleIsolation: 'shared',
    },
    props: TagDefaultProps,
});
