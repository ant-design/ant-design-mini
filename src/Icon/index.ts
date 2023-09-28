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

  // 支付宝没有 dataset , 需要需要手动添加
  return fmtEvent(instance.props, e);

}

Component({

  props: IconDefaultProps,
  methods: {
    onTap(e) {
      triggerComponentEvent(this, 'onTap', formatComponentEvent(this, e));
    },
    catchTap(e) {
      triggerComponentEvent(this, 'catchTap', formatComponentEvent(this, e));
    },
  },
});
