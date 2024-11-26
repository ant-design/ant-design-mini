interface ActionAreaInfo {
  disabled?: boolean;
  text?: string;
  imageUrl?: string;
}

interface Item {
  title?: string;
  desc?: string;
  money?: string;
  moneyUnit?: string;
  threshold?: string;
  actionAreaInfo?: ActionAreaInfo;
  disabled?: boolean;
}

export interface IVoucherProps {
  className?: string;
  direction?: 'horizontal' | 'vertical' | 'multipleColumn';
  size?: 'large' | 'small';
  dataSource: Item[];
  onVoucherTap?: (item, event) => void;
  onBtnTap?: (item, event) => void;
  /**
   * @deprecated
   */
  onTap?: (item, event) => void;
}

export const componentsProps: IVoucherProps = {
  className: '',
  size: 'large',
  direction: 'horizontal',
  dataSource: [],
};
