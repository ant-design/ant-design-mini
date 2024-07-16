import equal from 'fast-deep-equal';
import { Component, getValueFromProps, triggerEventOnly } from '../_util/simply';
import { PageDefaultProps, BuiltinStatus } from './props';

Component(
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
        const { status, image, title, message } = nextProps;
        const updateData = {
          ...nextProps,
          // 自定义内容优先 status
          image: image || BuiltinStatus[status]?.image || '',
          title: title || BuiltinStatus[status]?.title || '',
          message: message || BuiltinStatus[status]?.message || ''
        };

        this.setData(updateData);
      }
    }
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
    }
  }
);
