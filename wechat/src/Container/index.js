import { ContainerDefaultProps } from './props';
Component({
    properties: {
        title: {
            type: String,
        },
        className: {
            type: String,
        },
        style: {
            type: String,
        },
        headerInBox: {
            value: true,
            type: Boolean,
        },
    },
    options: {
        //@ts-ignore
        multipleSlots: true,
    },
    props: ContainerDefaultProps,
});
