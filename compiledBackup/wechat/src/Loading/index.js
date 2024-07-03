import { LoadingDefaultProps } from './props';
import '../_util/assert-component2';
Component({
    properties: {
        type: {
            value: 'spin',
            type: String,
        },
        color: {
            type: String,
        },
        size: {
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
    props: LoadingDefaultProps,
});
