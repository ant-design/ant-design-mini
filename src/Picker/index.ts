import { effect } from '@preact/signals-core';
import equal from 'fast-deep-equal';
import mixinValue from '../mixins/value';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../_util/simply';
import i18nController from '../_util/store';
import { PickerDefaultProps } from './props';
import {
  getMatchedItemByIndex,
  getMatchedItemByValue,
  getStrictMatchedItemByValue,
} from './utils';

ComponentWithSignalStoreImpl({
  storeOptions: {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  props: PickerDefaultProps,
  data: {
    formatValue: '',
    columns: [],
    visible: false,
    selectedIndex: [],
    locale: {
      locale: '23123',
      global: {},
    },
  },
  tempSelectedIndex: null,
  single: false,
  isChangingPickerView: false,
  methods: {
    // visible受控判断
    isVisibleControlled() {
      /// #if ALIPAY || BUNDLE2H
      return 'visible' in getValueFromProps(this);
      /// #endif
      /// #if WECHAT
      return getValueFromProps(this, 'visible') !== null;
      /// #endif
    },
    initData() {
      const [options, visible, defaultVisible] = getValueFromProps(this, [
        'options',
        'visible',
        'defaultVisible',
      ]);
      const columns = this.getterColumns(options);
      this.setData(
        {
          columns,
        },
        () => {
          const formatValue = this.getterFormatText();
          const selectedIndex = this.getterSelectedIndex();
          this.setData({
            formatValue,
            selectedIndex,
            visible: this.isVisibleControlled() ? visible : defaultVisible,
          });
        }
      );
    },
    getterColumns(options) {
      let columns = [];
      if (options.length > 0) {
        if (options.every((item) => Array.isArray(item))) {
          this.single = false;
          columns = options.slice();
        } else {
          this.single = true;
          columns = [options];
        }
      }
      return columns;
    },
    defaultFormat(value, column) {
      if (Array.isArray(column)) {
        return column
          .filter((c) => c !== undefined)
          .map(function (c) {
            if (typeof c === 'object') {
              return c.label;
            }
            return c;
          })
          .join('-');
      }
      return (column && column.label) || column || '';
    },
    getterFormatText() {
      const [onFormat, formattedValueText] = getValueFromProps(this, [
        'onFormat',
        'formattedValueText',
      ]);
      if (typeof formattedValueText === 'string') {
        return formattedValueText;
      }
      const { columns } = this.data;
      const realValue = this.getValue();
      const { matchedColumn } = getStrictMatchedItemByValue(
        columns,
        realValue,
        this.single
      );
      const formatValueByProps = onFormat && onFormat(realValue, matchedColumn);
      if (formatValueByProps !== undefined && formatValueByProps !== null) {
        return formatValueByProps;
      }
      return this.defaultFormat(realValue, matchedColumn);
    },
    getterSelectedIndex() {
      const selectedIndex = [];
      const columns = this.data.columns;
      const realValue = this.getValue();
      let value = realValue || [];
      if (this.single) {
        value = [realValue];
      }
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const compareValue = value[i];
        if (compareValue === undefined || compareValue === null) {
          selectedIndex[i] = 0;
        }
        let index = column.findIndex((c) => {
          return c === compareValue || c.value === compareValue;
        });
        if (index === -1) {
          index = 0;
        }
        selectedIndex[i] = index;
      }
      return selectedIndex;
    },

    onOpen() {
      const [disabled, readonly] = getValueFromProps(this, [
        'disabled',
        'readonly',
      ]);
      if (!disabled && !readonly) {
        this.tempSelectedIndex = null;
        const selectedIndex = this.getterSelectedIndex();
        this.setData({
          selectedIndex,
        });
        this.triggerPicker(true);
      }
    },

    triggerPicker(visible) {
      this.setData({
        visible,
      });
      triggerEvent(this, 'visibleChange', visible);
    },

    onMaskDismiss() {
      const maskClosable = getValueFromProps(this, 'maskClosable');
      if (!maskClosable) {
        return;
      }
      this.triggerPicker(false);
      triggerEventOnly(this, 'cancel', { detail: { type: 'mask' } });
    },

    onCancel() {
      this.triggerPicker(false);
      triggerEventOnly(this, 'cancel', { detail: { type: 'cancel' } });
    },

    onChange(e) {
      const { value: selectedIndex } = e.detail;
      this.tempSelectedIndex = selectedIndex;
      this.isChangingPickerView = true;
      const { matchedColumn, matchedValues } = getMatchedItemByIndex(
        this.data.columns,
        this.tempSelectedIndex,
        this.single
      );
      this.setData({
        selectedIndex,
      });
      triggerEventValues(this, 'change', [matchedValues, matchedColumn], e);
    },

    async onOk() {
      let result;
      if (this.tempSelectedIndex) {
        result = getMatchedItemByIndex(
          this.data.columns,
          this.tempSelectedIndex,
          this.single
        );
      } else {
        result = getMatchedItemByValue(
          this.data.columns,
          this.getValue(),
          this.single
        );
      }
      const { matchedColumn, matchedValues } = result;
      this.triggerPicker(false);
      if (!this.isControlled()) {
        this.update(matchedValues);
      }
      triggerEventValues(this, 'ok', [matchedValues, matchedColumn]);
    },
  },

  mixins: [
    mixinValue({
      transformValue(value) {
        return {
          needUpdate: true,
          value: value === undefined ? [] : value,
        };
      },
    }),
  ],

  /// #if ALIPAY || BUNDLE2H
  onInit() {
    this.initData();
  },
  didUpdate(prevProps) {
    const options = getValueFromProps(this, 'options');
    if (!equal(options, prevProps.options)) {
      const newColums = this.getterColumns(options);
      this.setData(
        {
          columns: newColums,
        },
        () => {
          // 如果是在滚动过程中columns发生变化，以onChange里抛出的selectedIndex为准
          if (!this.isChangingPickerView) {
            this.tempSelectedIndex = null;
            const selectedIndex = this.getterSelectedIndex();
            this.setData({
              selectedIndex,
            });
          }
        }
      );
    }
    const value = getValueFromProps(this, 'value');
    if (!equal(prevProps.value, value)) {
      const selectedIndex = this.getterSelectedIndex();
      this.tempSelectedIndex = null;
      this.setData({
        selectedIndex,
      });
    }
    const visible = getValueFromProps(this, 'visible');
    if (!equal(prevProps.visible, visible)) {
      this.setData({ visible });
    }
    const formatValue = this.getterFormatText();
    const formattedValueText = getValueFromProps(this, 'formattedValueText');
    if (
      formatValue !== this.data.formatValue ||
      prevProps.formattedValueText !== formattedValueText
    ) {
      this.setData({
        formatValue,
      });
    }
    this.isChangingPickerView = false;
  },
  /// #endif
  /// #if WECHAT
  created() {
    this.initData();
  },
  observers: {
    'options': function () {
      const options = getValueFromProps(this, 'options');
      const newColums = this.getterColumns(options);
      this.setData(
        {
          columns: newColums,
        },
        () => {
          // 如果是在滚动过程中columns发生变化，以onChange里抛出的selectedIndex为准
          if (!this.isChangingPickerView) {
            this.tempSelectedIndex = null;
            const selectedIndex = this.getterSelectedIndex();
            this.setData({
              selectedIndex,
            });
          }
          this.isChangingPickerView = false;
        }
      );
    },
    'value': function () {
      const selectedIndex = this.getterSelectedIndex();
      this.tempSelectedIndex = null;
      this.setData({
        selectedIndex,
      });
    },
    'visible': function () {
      const visible = getValueFromProps(this, 'visible');
      if (this.data.visible !== visible) {
        this.setData({
          visible,
        });
      }
    },
    'formattedValueText': function () {
      const formattedValueText = getValueFromProps(this, 'formattedValueText');
      this.setData({
        formatValue: formattedValueText,
      });
    },
    '**': function () {
      const formatValue = this.getterFormatText();
      if (formatValue !== this.data.formatValue) {
        this.setData({
          formatValue,
        });
      }
    },
  },
  /// #endif
});
