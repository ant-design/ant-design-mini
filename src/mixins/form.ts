/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * @description 表单组件绑定处理
 */

import { store } from '../Form/store';
import { isMoreThan106 } from '../_util/compareVersion';


export default () => {
  return {
    props: {
      onChange(e) {
        const getCurrentField = this._getCurrentField || this.props._getCurrentField;
        if (!getCurrentField) return;
        const { form: formFn, field: fieldFn } = getCurrentField();
        const form = formFn();
        const field = fieldFn();
        if (form && field) {
          store.trigger(form, field, e);
        }
      },
      _getCurrentField() {
        return { form: () => '', field: () => '' };
      },
      value: '',
      checked: false,
      valuePropName: 'cValue',
      mode: 'normal',
    },
    onInit() {
      if (isMoreThan106 && isNotFormMode(this.props.mode)) return;

      const getCurrentField = this.$page.data._getCurrentField;
      if (!getCurrentField) return;
      this.props._getCurrentField = getCurrentField;
      const { form: formFn, field: fieldFn } = getCurrentField();
      const form = formFn();
      const field = fieldFn();
      store.addFieldSet(form, field);

      // 初始值设定
      const initVal = store.getInitValByField(form, field);
      this.props.value = initVal;
      // terms组件
      if (typeof initVal === 'boolean') {
        this.props.checked = initVal;
      }

      // 兼容一下 checkbox-group
      const commonUpdateFieldValue = (v) => {
        this.props.value = v;
        this.setData({
          [this.props.valuePropName]: v,
        });
      };

      const updateFieldValue = this._updateFieldValue || commonUpdateFieldValue;

      store.addUpdateFiledValue(form, field, updateFieldValue.bind(this));
    },
    didMount() {
      if (isMoreThan106 && isNotFormMode(this.props.mode)) {
        this.$page._currentSetData = null;
      } else {
        this.$page._currentSetData = this.setData;
      }
    },
  };
};

/**
 * 判断组件是否为表单模式
 * @param props 组件 props
 * @returns
 */
export function isNotFormMode(mode: string): boolean {
  return mode !== 'form';
}
