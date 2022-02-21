import { IBaseProps } from '../_base';
/**
 * @description 对话框
 */
export interface IDialogProps extends IBaseProps {
    /**
    * @description 对话框操作按钮文本
    */
    buttonText: string[];
    /**
    * @description 对话框按钮排列方向
    */
    direction: 'vertical' | 'horizontal';
    /**
    * @description 点击蒙层关闭对话框
    * @default true
    */
    maskClosable: boolean
}
export declare const DialogDefaultProps: Partial<IDialogProps>;
