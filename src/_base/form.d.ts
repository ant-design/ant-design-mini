/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBaseFormItemPropsWithOutFocus<V = any> {
    /**
     * @description 表单元素 id
     */
    id?: string;
    /**
     * @description 表单元素 name
     */
    name?: string;
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 表单触发变更回调
     */
    onChange?: (v: V) => void;
}
export interface IBaseFormItemProps<V = any> extends IBaseFormItemPropsWithOutFocus<V> {
    /**
     * @description 自动聚焦，ios 可能会失效
     * @default false
     */
    autoFocus?: boolean;
    /**
     * @description 聚焦时触发回调
     */
    onFocus?: (v: V) => void;
    /**
     * @description 失去焦点时触发回调
     */
    onBlur?: (v: V) => void;
}
