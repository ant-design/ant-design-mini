import { IBaseProps } from '../_util/base';

export interface IFooterConfig {
  text: string; // 按钮文案
  actionUrl?: string; // 跳转地址

  /**
   * Ant Design Mini 按钮配置
   * https://mini.ant.design/components/button
   */
  type?: string;
  size?: string;
  disabled?: boolean;
  fill?: boolean;
  icon?: string;
}

interface IProtocol {
  name: string;
  url: string;
}

export interface IProps extends IBaseProps {
  protocols?: IProtocol[]; // 要展示的协议，包括
  confirmation?: string; // 确认按钮前的告知项
  protocolPrefix?: string; // 阅读并统一协议的文案前缀
  showProtocolCheck?: boolean; // 是否展示勾选框，有的协议只需要看就行不需要用户授权就不用勾选框
  footer: IFooterConfig[];
  flex?: boolean; // 是否flex布局
  fixedFooter?: boolean; // 是否吸底
  spmExtParams?: object;
  onActionTap?: (item, index, event) => void;
  onDisabledTap?: (item, index, event) => void;
  onProtocolTap?: (item, index, event) => void;
  onProtocolChange?: (checked) => void;
  onFooterFirstAppear?: () => void;
  onButtonGroupFirstAppear?: () => void;
  onButtonFirstAppear?: (item, index) => void;
  onCountdownEnd?: (item, index) => void; // 按钮的倒计时结束
}

export const DefaultProps: IProps = {
  className: '',
  protocolPrefix: '我已阅读并同意',
  confirmation: '',
  protocols: [],
  showProtocolCheck: true,
  footer: [],
  spmExtParams: {},
  onActionTap: () => {},
  onDisabledTap: () => {},
  onProtocolChange: () => {},
  onCountdownEnd: () => {},
};
