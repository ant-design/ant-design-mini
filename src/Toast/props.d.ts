import { IBaseProps, IconType } from '../_base';
/**
 * @description 标签，突出利益点、以及属性说明。
 */

export interface IToastProps extends IBaseProps {
    /**
     * @description Toast 完全关闭后的回调
     */
    afterClose?: () => void;
    /**
     * @description Toast 文本内容
     */
    content?: string;
    /**
     * @description Toast 图标
     */
    icon?: IconType;
    /**
     * @description Toast 持续时间
     * @default 2000
     */
    duration: number;
    /**
     * @description 类名
     */
    className: string;
    /**
     * @description 是否展示 Toast
     */
    visible: boolean;
}
export declare const ToastDefaultProps: Partial<IToastProps>;
