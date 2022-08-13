import { IBaseProps } from '../_base';
import { IPopupProps } from '../Popup/props.d';

export interface ICascaderProps extends IBaseProps {
  /**
   * @description 弹出层，参见 <Popup/> 组件
   * @default undefined
   */
  popup?: Omit<IPopupProps, 'onClose'>;
  onClose?: IPopupProps['onClose'];
}

export declare const CascaderDefaultProps: Partial<ICascaderProps>;
