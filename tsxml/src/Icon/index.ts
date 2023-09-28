import { IconDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';
import { triggerComponentEvent } from '../_util/triggerComonentEvent';

/**
 *
 * @param instance 组件实例
 * @param e 事件
 * @returns 格式化后的事件
 */
function formatComponentEvent(instance, e) {
  /// #if ALIPAY

  // 支付宝没有 dataset , 需要需要手动添加
  return fmtEvent(instance.props, e);
  /// #endif

  /// #if WECHAT

  // 微信自带 dataset
  return e;
  /// #endif
}

Component({
  /// #if WECHAT
  properties: {
    type: {
      value: '',
      type: String,
    },
    color: {
      type: String,
    },
    style: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  options: {
    //@ts-ignore
    styleIsolation: 'apply-shared',
  },
  /// #endif

  /// #if ALIPAY
  props: IconDefaultProps,
  /// #endif
  methods: {
    onTap(e) {
      triggerComponentEvent(this, 'onTap', formatComponentEvent(this, e));
    },
    catchTap(e) {
      triggerComponentEvent(this, 'catchTap', formatComponentEvent(this, e));
    },
  },
});
