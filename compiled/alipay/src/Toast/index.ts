import {
  useEffect,
  useEvent,
  useRef,
  useState,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { IToastProps, ToastFunctionalProps } from './props';

const Toast = (props: IToastProps) => {
  const [show, setShow] = useState(false);
  const timerRef = useRef<number>(null);

  const { triggerEventOnly } = useComponentEvent(props);

  const closeMask = useStableCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const isShow = show;
    setShow(false);
    timerRef.current = null;
    if (isShow) {
      triggerEventOnly('close');
    }
  });

  const handleShowToast = useStableCallback(() => {
    setShow(true);
    if (props.duration > 0) {
      const timer = setTimeout(() => {
        closeMask();
      }, props.duration);
      timerRef.current = timer as unknown as number;
    }
  });

  useEffect(() => {
    if (props.visible) {
      handleShowToast();
    } else {
      closeMask();
    }
  }, [props.visible]);

  useEvent('handleClickMask', () => {
    if (props.showMask && props.maskCloseable) {
      closeMask();
    }
  });

  const displayContent =
    typeof props.content === 'string'
      ? props.content.substring(0, 24)
      : props.content;

  return {
    displayContent,
    show,
  };
};

mountComponent(Toast, ToastFunctionalProps);
