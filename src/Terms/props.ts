import { IButtonProps } from '../Button/props';
import { IBaseProps } from '../_util/base';

export interface Button extends IButtonProps {
  key?: string; // 唯一标识
  text: string; // 按钮文案
  countdownTime?: number; // 计时秒数，单位为秒
}

interface Term {
  key?: string; // 唯一标识
  name?: string; //协议名称
  [propName: string]: unknown; // 允许其他任意属性
}

type Type = '' | 'check' | 'read';

export interface IProps extends IBaseProps {
  /**
   * @description 协议展示类型
   * @default ""
   */
  type?: Type;
  /**
   * @description 协议列表
   * @default -
   */
  terms?: Term[];
  /**
   * @description 按钮列表
   * @default -
   */
  buttons?: Button[];
  /**
   * @description 按钮区是否吸底
   * @default false
   */
  buttonsFixed?: boolean;
  /**
   * @description 分割线方向，默认纵向
   * @default "vertical"
   */
  buttonsDirection?: 'horizontal' | 'vertical';
  /**
   * @description 协议前缀
   * @default ""
   */
  termPrefix?: string;
  /**
   * @description 协议后缀
   * @default ""
   */
  termSuffix?: string;
  /**
   * @description 勾选框引导文案
   * @default ""
   */
  checkboxTipsText?: string;
  /**
   * @description 勾选框引导显示状态
   * @default false
   */
  checkboxTipsVisible?: boolean;
  /**
   * @description 行动点按钮点击回调
   */
  onButtonTap?: (b?: Button, index?: number, checked?: boolean, event?) => void;
  /**
   * @description 协议点击回调
   */
  onTermTap?: (t?: Term, index?: number, event?) => void;
  /**
   * @description 勾选回调
   */
  onCheckChange?: (c?: boolean) => void;
  /**
   * @description 协议前缀点击回调
   */
  onTermPrefixTap?: (c?: boolean) => void;
  /**
   * @description 倒计时结束回调
   */
  onCountdownFinish?: (b?: Button, index?: number, event?) => void;
  /**
   * @description 协议阅读切换
   */
  onReadChange?: (index?: number) => void;
}

export const DefaultProps: IProps = {
  className: '',
  type: '',
  terms: null,
  buttons: null,
  buttonsFixed: false,
  buttonsDirection: 'vertical',
  termPrefix: '',
  termSuffix: '',
  checkboxTipsText: '',
  checkboxTipsVisible: false,
  onButtonTap: () => {},
  onTermTap: () => {},
  onCheckChange: () => {},
  onTermPrefixTap: () => {},
  onCountdownFinish: () => {},
  onReadChange: () => {},
};
