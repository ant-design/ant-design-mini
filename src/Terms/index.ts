import {
  Component,
  triggerEventOnly,
  getValueFromProps,
} from "../_util/simply";
import { DefaultProps } from "./props";
import { isOldSDKVersion } from "../_util/platform";

const isOldVersion = isOldSDKVersion();

Component(
  DefaultProps,
  {
    onTapMask() {},
  },
  {
    closing: false,
    isOldVersion,
  },
  undefined,
  {
    /// #if ALIPAY
    async deriveDataFromProps(nextProps) {
      const [visible] = getValueFromProps(this, ["visible"]);

      if (nextProps.visible !== visible) {
        this.setData({ closing: true });
      }
    },
    /// #endif
    /// #if WECHAT
    observers: {
      visible: function (nextProps) {
        const { visible } = nextProps;
        if (!visible && !this.data.closing) {
          this.setData({ closing: true });
        }
        triggerEventOnly(this, visible ? "afterShow" : "afterClose");
      },
    },
    /// #endif
  }
);
