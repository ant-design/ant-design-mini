import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useComponentUpdateEffect } from '../../_util/hooks/useLayoutEffect';
import { defaultFormat, getterColumns, getValidValue } from './utils';
import { ICascaderProps } from './props';
import { useMixState } from '../../_util/hooks/useMixState';

const CascaderPicker = (props: ICascaderProps) => {
  const [
    realValue,
    { isControlled: isRealValueControlled, update: updateRealValue },
  ] = useMixState(props.defaultValue, {
    value: props.value,
  });
  const [{ value, columns }, setState] = useState(() => {
    const value = props.value || props.defaultValue || [];
    const columns = getterColumns(
      props.value || props.defaultValue,
      props.options
    );
    return { columns, value: value };
  });

  const { triggerEventOnly, triggerEventValues, triggerEvent } =
    useComponentEvent(props);

  useComponentUpdateEffect(() => {
    const newColumns = getterColumns(props.value, props.options);
    const value = getValidValue(props.value, newColumns);
    setState({ value, columns: newColumns });
  }, [
    props.value,
    props.options,
    /**
     * 这里不要删
     *
     * 1. picker 触发 onOk
     * 2. 更新 realValue
     * 3. picker 触发 onFormat (此时 realValue 未更新)
     * 4. 依赖里的 realValue 更新
     * 5. 触发组件再次渲染
     * 6. 此时 onFormat 读取到最新的realValue
     */
    realValue,
  ]);

  function getOptionByValue(value, options) {
    if (!(value?.length > 0)) return null;
    const result = [];
    let item = options.find((v) => v.value === value[0]);
    for (let i = 0; i < value.length; i++) {
      if (!item) {
        return null;
      }
      result.push({
        value: item.value,
        label: item.label,
      });
      item = item.children?.find((v) => v.value === value[i + 1]);
    }
    return result;
  }

  useEvent('onCancel', (e) => {
    triggerEventOnly('cancel', e);
  });

  useEvent('onFormat', () => {
    const { onFormat } = props;
    const formatValueByProps =
      onFormat &&
      onFormat(realValue, getOptionByValue(realValue, props.options));
    if (typeof formatValueByProps !== 'undefined') {
      return formatValueByProps;
    }
    return defaultFormat(realValue, getOptionByValue(realValue, props.options));
  });

  useEvent('onVisibleChange', (visible) => {
    if (visible) {
      const newColumns = getterColumns(realValue, props.options);
      const currentValue = getValidValue(realValue, newColumns);
      setState({ value: currentValue, columns: newColumns });
    }
    triggerEvent('visibleChange', visible);
  });

  useEvent('onOk', () => {
    // 完成时再次校验value，避免visible状态下props无效
    const validValue = getValidValue(value, columns);

    if (!isRealValueControlled) {
      updateRealValue(validValue);
    }

    triggerEventValues('ok', [
      validValue,
      getOptionByValue(validValue, props.options),
    ]);
  });

  useEvent('onChange', (selectedValue) => {
    const newColumns = getterColumns(selectedValue, props.options);
    const value = getValidValue(selectedValue, newColumns);
    setState({ value, columns: newColumns });
    triggerEventValues('change', [
      selectedValue,
      getOptionByValue(selectedValue, props.options),
    ]);
  });

  return {
    currentValue: value,
    columns,
  };
};

mountComponent(CascaderPicker, {
  animationType: null,
  value: null,
  defaultValue: null,
  options: null,
  placeholder: '请选择',
  cancelText: '取消',
  disabled: false,
  title: '',
  okText: '确定',
  maskClosable: true,
  popClassName: '',
  popStyle: '',
});
