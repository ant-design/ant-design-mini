import { TagDefaultProps } from './props';
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
