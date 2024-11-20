import { effect } from '@preact/signals-core';
import equal from 'fast-deep-equal';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import i18nController from '../_util/store';
import { BuiltinStatus, PageDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  PageDefaultProps,
  {
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
  {},
  undefined,
  {
    didMount() {
      const props = getValueFromProps(this);
      this.updatePageStatus({}, props);
    },
    deriveDataFromProps(nextProps) {
      const props = getValueFromProps(this);
      this.updatePageStatus(props, nextProps);
    },

  }
);
