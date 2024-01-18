import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { IModalProps, ModalFunctionalProps } from './props';

const Modal = (props: IModalProps) => {
  const { triggerEventOnly } = useComponentEvent(props);
  useEvent('onClose', () => {
    triggerEventOnly('close');
  });
  useEvent('onMaskClose', () => {
    if (props.maskClosable) {
      triggerEventOnly('close');
    }
  });
  useEvent('onPrimaryButtonTap', () => {
    triggerEventOnly('primaryButtonTap');
  });
  useEvent('onSecondaryButtonTap', () => {
    triggerEventOnly('secondaryButtonTap');
  });
  useEvent('onCancelButtonTap', () => {
    triggerEventOnly('cancelButtonTap');
  });
  return {};
};

mountComponent(Modal, ModalFunctionalProps);
