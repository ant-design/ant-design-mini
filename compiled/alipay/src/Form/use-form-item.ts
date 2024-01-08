import { Value, Values } from 'async-validator';
import {
  useState,
  useEvent,
  useRef,
  useEffect,
} from 'functional-mini/component';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
import { EventTrigger } from './form';

type EventCallback = (trigger: EventTrigger, value?: Value) => void;

export const useFormItem = (props) => {
  const [formData, setFormDate] = useState({
    value: undefined,
    status: 'default',
    required: false,
    errors: [],
  });

  const formRef = useRef(formData);

  const emitRef = useRef<EventCallback | null>(null);
  useEvent('setFormData', (values: Values) => {
    setFormDate((old) => {
      const newValue = {
        ...old,
        ...values,
      };
      formRef.current = newValue;
      return newValue;
    });
  });

  useEvent('getFormData', () => {
    return formRef.current;
  });

  useEvent('on', (callback: EventCallback) => {
    emitRef.current = callback;
  });

  const originalProps = useRef();

  useEvent('getProps', () => {
    return props;
  });

  triggerRefEvent();

  useEffect(() => {
    return () => {
      emit('didUnmount');
    };
  }, []);

  function emit(event: string, value?: any, extraInfo?: any) {
    if (emitRef.current) {
      emitRef.current(event, value, extraInfo);
    }
  }

  useEffect(() => {
    emit('deriveDataFromProps', props, originalProps.current);
    originalProps.current = props;
  }, [props]);

  return {
    formData,
    emit,
  };
};
