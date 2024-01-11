import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormSliderDefaultProps, FormSliderProps } from './props';

const FormSlider = (props: FormSliderProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);

  useHandleCustomEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  useHandleCustomEvent('onAfterChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('afterChange', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormSlider, FormSliderDefaultProps);
