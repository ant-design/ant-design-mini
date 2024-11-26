import { IBaseProps } from '../_util/base';

interface NumberInputProps extends IBaseProps {
  /**
   * @description 输入框的值
   */
  value: string,
  /**
   * @description 标题
   */
  title: string,
  /**
   * @description 快捷金额选项
   */
  quickAmounts: string[],
  /**
   * @description 占位符文本
   */
  placeholder: string,
  /**
   * @description 最大值
   */
  maxValue: number,
  /**
   * @description 前缀
   */
  prefix: string,
  /**
   * @description 链接文本
   */
  linkText: string,
  /**
   * @description 内容变化时的回调
   */
  onChange: (value: string) => void,
  /**
   * @description 链接点击时的回调
   */
  onLinkTap: () => void,
}

export const NumberInputProps: NumberInputProps = {
  value: '',
  title: '输入金额',
  quickAmounts: [],
  placeholder: '',
  maxValue: Infinity,
  prefix: '¥',
  linkText: '',
  onChange: () => {},
  onLinkTap: () => {},
}
