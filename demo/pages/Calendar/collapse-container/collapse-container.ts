import { Component, getValueFromProps } from '../../../../src/_util/simply';

export interface Props {
  hide?: boolean;
  defaultCollapse?: boolean;
  title?: string;
  handleClick?(id: string): void;
}

Component(
  {
    hide: false,
    defaultCollapse: null,
    title: '',
  } as Props,
  {
    handleToggle() {
      const { collapse } = this.data;
      this.setData({
        collapse: !collapse,
      });
    },
  },
  { collapse: true },
  null,
  {
    /// #if ALIPAY
    onInit() {
      const [defaultCollapse, hide, title] = getValueFromProps(this, [
        'defaultCollapse',
        'hide',
        'title',
      ]);
      this.setData({
        collapse: defaultCollapse ?? true,
        internalHide: hide,
        containerTitle: title,
      });
    },
    /// #endif
    /// #if WECHAT
    created() {
      const [defaultCollapse, hide, title] = getValueFromProps(this, [
        'defaultCollapse',
        'hide',
        'title',
      ]);
      this.setData({
        collapse: defaultCollapse ?? true,
        internalHide: hide,
        containerTitle: title,
      });
    },

    /// #endif
  }
);
