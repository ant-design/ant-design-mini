/*
 * @Author: rayhomie 1572801584@qq.com
 * @Date: 2025-05-22 19:18:44
 * @LastEditors: rayhomie 1572801584@qq.com
 * @LastEditTime: 2025-05-22 23:13:29
 * @FilePath: /ant-design-mini/demo/components/collapse-container/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, getValueFromProps } from '../../../src/_util/simply';

export interface Props {
  hide?: boolean;
  defaultCollapse?: boolean;
  title?: string;
  handleClick?(id: string): void;
}

Component({
  props: {
    hide: false,
    defaultCollapse: null,
    title: '',
  } as Props,
  data: {
    collapse: true,
    internalHide: false,
    containerTitle: '',
  },
  methods: {
    handleToggle() {
      const { collapse } = this.data;
      this.setData({
        collapse: !collapse,
      });
    },
  },

  /// #if ALIPAY || ALIPAYNATIVE
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
  attached() {
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
});
