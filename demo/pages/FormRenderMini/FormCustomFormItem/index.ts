
import schema from './schema';
import { setFieldsValue } from '../../../../src/SolutionForm/index';
import { set } from 'lodash';

Page({
  data: {
    schema: schema,
  },
  onSetFieldsValue(val) {
    setFieldsValue(val);
  },
  onTriggerChange(val, field) {
    // 更改表单内容
    const value = {};
    set(value, field, val);
    this.onSetFieldsValue(value);
  },
});
