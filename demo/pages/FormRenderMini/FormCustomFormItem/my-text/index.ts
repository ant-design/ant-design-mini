import dayjs from 'dayjs';
import { setFieldsValue } from '../../../../../src/SolutionForm/index';
import { Component } from 'miniapp-store';
import { get } from 'lodash';

Component({
  props: {
    config: {},
    value: '',
    field: '',
  },
  computed() {
    return {
      basicDatePicker: () => {
        return  get(this.config || {}, 'formData.group1.basicDatePicker') ? dayjs(this.config.formData.group1.basicDatePicker).format('YYYY-MM-DD') : '';
      },
    };
  },
  methods: {
    onChange(checked) {
      if (checked) {
        setFieldsValue({
          group1: {
            basicSwitch: false,
            basicInput: '',
            basicPicker: undefined,
            basicDatePicker: undefined,
          },
          group2: {
            customItem: {},
          },
        });
      }
    }
  },
});
