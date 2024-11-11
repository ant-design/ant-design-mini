import { IBaseProps } from '../_util/base';

/**
 * @description 头像，可展示头像以及用户名等简要信息。
 */
export interface IAmountInputProps extends IBaseProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 标题左侧额外的行动点
   */
  extraTitle: string;
  /**
   * 推荐金额列表
   */
  amountList: string[] | number[];
}

export const AmountInputProps: Partial<IAmountInputProps> = {
  title: '11111',
  extraTitle: '111111',
  amountList: [100, 200, 300],
};
