import { IconDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';
Component({
    properties: {
        type: {
            value: '',
            type: String,
        },
        color: {
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
        //@ts-ignore
        styleIsolation: 'apply-shared',
    },
    props: IconDefaultProps,
    methods: {
        onTap: function (e) {
            if (this.props.onTap) {
                this.props.onTap(fmtEvent(this.props, e));
            }
        },
        catchTap: function (e) {
            if (this.props.catchTap) {
                this.props.catchTap(fmtEvent(this.props, e));
            }
        },
    },
});
