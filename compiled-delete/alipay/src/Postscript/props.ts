import { IBaseProps } from '../_util/base';

interface PostscriptProps extends IBaseProps {
  /**
   * @description 标题
   */
  title: string,
  /**
   * @description 最大输入长度
   */
  maxLength: number,
  /**
   * @description 快捷输入选项
   */
  quickInputs: string[],
  /**
   * @description 占位符文本
   */
  placeholder: string,
  /**
   * @description 占位符类名
   */
  placeholderClassName: string,
  /**
   * @description 组合符号，存在时快捷输入会通过组合符号拼接
   */
  combineSymbol: string,
  /**
   * @description 内容变化时的回调
   */
  onChange: (value: string) => void,
}

export const PostscriptProps: PostscriptProps = {
  title: '',
  maxLength: Infinity,
  quickInputs: [],
  placeholder: '给TA带句话吧~',
  placeholderClassName: '',
  combineSymbol: '',
  onChange: () => {},
}
