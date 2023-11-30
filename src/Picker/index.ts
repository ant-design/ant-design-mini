import {
  useEvent,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { IPickerProps } from './props';
import {
  getMatchedItemByIndex,
  getMatchedItemByValue,
  getterColumns,
  getterFormatText,
  getterSelectedIndex,
} from './utils';

const Picker = (props: IPickerProps) => {
  const [value, { isControlled: isValueControlled, update: updateValue }] =
    useMixState(props.defaultValue, {
      value: props.value,
    });

  const { triggerEvent, triggerEventOnly, triggerEventValues } =
    useComponentEvent(props);

  const [visible, { update: updateVisible }] = useMixState(
    props.defaultVisible,
    {
      value: props.visible,
    }
  );
  console.log(visible);
  const singleRef = useRef(false);
  const selectIndexRef = useRef(null);

  function triggerPicker(newVisibleValue: boolean) {
    updateVisible(newVisibleValue);
    triggerEvent('visibleChange', newVisibleValue);
  }

  const [selectedIndex, setSelectedIndex] = useState([]);

  const columns = useMemo(() => {
    return getterColumns(props.options, singleRef);
  }, [props.options]);

  useEffect(() => {
    selectIndexRef.current = null;
    setSelectedIndex(getterSelectedIndex(columns, value, singleRef));
  }, [columns, value]);

  const { formatValue } = useMemo(() => {
    const formatValue = getterFormatText(
      columns,
      value,
      props.onFormat,
      singleRef
    );
    return {
      formatValue,
    };
  }, [visible, columns, value, props.onFormat]);

  useEvent(
    'onOpen',
    () => {
      if (props.disabled) {
        return;
      }
      selectIndexRef.current = null;
      const selectedIndex = getterSelectedIndex(columns, value, singleRef);
      setSelectedIndex(selectedIndex);
      triggerPicker(true);
    },
    [columns, value, props]
  );

  useEvent(
    'onCancel',
    () => {
      triggerPicker(false);
      triggerEventOnly('cancel', { detail: { type: 'cancel' } });
    },
    [columns, value]
  );

  useEvent(
    'onMaskDismiss',
    () => {
      triggerPicker(false);
      triggerEventOnly('cancel', { detail: { type: 'mask' } });
    },
    [columns]
  );

  useEvent(
    'onChange',
    (e) => {
      const { value: selectedIndex } = e.detail;
      const { matchedColumn, matchedValues } = getMatchedItemByIndex(
        columns,
        selectedIndex,
        singleRef
      );
      selectIndexRef.current = selectedIndex;
      setSelectedIndex(selectedIndex);
      triggerEventValues('change', [matchedValues, matchedColumn], e);
    },
    [columns]
  );

  useEvent(
    'onOk',
    () => {
      let result;
      if (selectIndexRef.current) {
        result = getMatchedItemByIndex(
          columns,
          selectIndexRef.current,
          singleRef
        );
      } else {
        result = getMatchedItemByValue(columns, value, singleRef);
      }

      const { matchedColumn, matchedValues } = result;

      triggerPicker(false);
      if (!isValueControlled) {
        updateValue(matchedValues);
      }
      triggerEventValues('ok', [matchedValues, matchedColumn]);
    },
    [value, columns]
  );

  return {
    formatValue,
    selectedIndex,
    columns,
    state: {
      visible,
    },
    mixin: {
      value,
    },
  };
};

mountComponent(Picker, {
  visible: null,
  defaultVisible: null,
  animationType: null,
  value: null,
  defaultValue: [],
  disabled: false,
  title: '',
  okText: '确定',
  cancelText: '取消',
  placeholder: '请选择',
  options: [],
  popClassName: '',
  popStyle: '',
  maskClosable: false,
});
