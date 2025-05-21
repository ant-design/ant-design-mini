import { effect } from '@preact/signals-core';
import equal from 'fast-deep-equal';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import i18nController from '../_util/store';
import { BuiltinStatus, PageDefaultProps } from './props';

ComponentWithSignalStoreImpl({
  storeOptions: {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  props: PageDefaultProps,
  methods: {
    handleActionTap(e) {
      triggerEventOnly(this, 'actionTap', e);
    },
    handleSecondaryActionTap(e) {
      triggerEventOnly(this, 'secondaryActionTap', e);
    },
    updatePageStatus(prevProps: any, nextProps: any) {
      if (!equal(prevProps, nextProps)) {
        const [status, image, title, message] = getValueFromProps(this, [
          'status',
          'image',
          'title',
          'message',
        ]);
        const updateData = {
          ...nextProps,
          // 自定义内容优先 status
          image: image || BuiltinStatus[status]?.image || '',
          title:
            title ||
            BuiltinStatus[status]?.title ||
            this.data.locale.pageContainer[status]?.title ||
            '',
          message:
            message ||
            BuiltinStatus[status]?.message ||
            this.data.locale.pageContainer[status]?.message ||
            '',
        };

        this.setData(updateData);
      }
    },
  },

  /// #if ALIPAY || ALIPAYNATIVE
  didMount() {
    const props = getValueFromProps(this);
    this.updatePageStatus({}, props);
  },
  didUpdate(prevProps) {
    const props = getValueFromProps(this);
    this.updatePageStatus(prevProps, props);
  },
  /// #endif

  /// #if WECHAT
  attached() {
    const props = getValueFromProps(this);
    this.updatePageStatus({}, props);
  },
  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      this.updatePageStatus(prevData, data);
    },
  },
  /// #endif
});
