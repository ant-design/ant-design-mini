/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { IBaseProps } from '../../src/_util/base';

export interface IWelcomeProps extends IBaseProps {
  className?: string;

  /**
   * @description 样式
   */
  styles?: string;
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 描述
   */
  description: string;
  onTap?: (e) => void;
}

export const WelcomeProps: Partial<IWelcomeProps> = {
  className: '',
  styles: '',
  title: '',
  description: '',
  onTap: () => {},
};
