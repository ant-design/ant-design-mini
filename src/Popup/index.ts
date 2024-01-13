import { useState, useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { isOldSDKVersion } from '../_util/platform';
import { IPopupProps } from './props';

const isOldVersion = isOldSDKVersion();

const Popup = (props: IPopupProps) => {
  const enableAnimation = props.animation && props.duration > 0;
  const [closing, setClosing] = useState(false);

  const { triggerEventOnly } = useComponentEvent(props);

  useComponentUpdateEffect(() => {
    if (!props.visible && enableAnimation) {
      setClosing(true);
    }

    if (!enableAnimation) {
      triggerEventOnly(props.visible ? 'afterShow' : 'afterClose');
    }
  }, [props.visible]);

  useEvent('onAnimationEnd', () => {
    if (closing) {
      setClosing(false);
    }

    if (enableAnimation) {
      triggerEventOnly(props.visible ? 'afterShow' : 'afterClose');
    }
  });

  useEvent('onTapMask', () => {
    if (closing) {
      return;
    }
    triggerEventOnly('close');
  });

  return {
    closing,
    isOldVersion,
  };
};

mountComponent(Popup, {
  visible: false,
  destroyOnClose: false,
  showMask: true,
  position: 'bottom',
  // 是否开启动画
  animation: true,
  animationType: 'transform',
  // 动画持续时间
  duration: 300,
  height: null,
  width: null,
  maskClassName: '',
  maskStyle: '',
  // 弹窗层级
  zIndex: 998,
});
