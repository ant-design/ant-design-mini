import { useState, useEvent, useMemo } from 'functional-mini/component';
import { DateRangePickerFunctionalProps, IDateRangePickerProps } from './props';
import dayjs from 'dayjs';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
} from '../util';
import { useMixState } from '../../_util/hooks/useMixState';
import { useFormatValue, useMinAndMax, useFormatLabel } from './hooks';
import { useDateState } from './useDateState';
import { mountComponent } from '../../_util/component';
import { PickerValue } from '../props';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { resolveEventValues, resolveEventValue } from '../../_util/platform';

const RangePicker = (props: IDateRangePickerProps) => {
  const [realValue, { isControlled, update }] = useMixState<PickerValue[]>(
    props.defaultValue,
    {
      value: props.value,
      postState(value) {
        return {
          valid: true,
          value:
            value && value[0] && value[1]
              ? ([
                  dayjs(value[0]).toDate(),
                  dayjs(value[1]).toDate(),
                ] as PickerValue[])
              : undefined,
        };
      },
    }
  );
  const { dateState, init, changeType, updateValue } = useDateState(props);
  const { triggerEvent, triggerEventValues, triggerEventOnly } =
    useComponentEvent(props);
  const [{ columns, currentValue }, doUpdateColumns] = useState({
    currentValue: [],
    columns: [],
  });
  const onFormat = useFormatValue(props);
  const { currentStartValueStr, currentEndValueStr } = useMemo(() => {
    return {
      currentStartValueStr: dateState.start
        ? dayjs(dateState.start).format(props.format)
        : '',
      currentEndValueStr: dateState.end
        ? dayjs(dateState.end).format(props.format)
        : '',
    };
  }, [props.format, dateState.start, dateState.end]);

  const onFormatLabel = useFormatLabel(props.onFormatLabel);

  function updateColumns(currentValue, currentProps) {
    const { precision, min: propsMin, max: propsMax } = currentProps;
    const min = getMin(propsMin);
    const max = getMax(propsMax);
    if (max < min) {
      return [];
    }
    let currentPickerDay = dayjs();
    if (currentValue.length > 0) {
      currentPickerDay = dayjs(getDateByValue(currentValue));
    }
    if (currentPickerDay < min || currentPickerDay > max) {
      currentPickerDay = min;
    }

    const newColumns = getRangeData(
      precision,
      min,
      max,
      currentPickerDay,
      onFormatLabel
    );
    doUpdateColumns({ columns: newColumns, currentValue });
  }

  const formattedValueText = onFormat(realValue);

  useEvent('onVisibleChange', (event) => {
    const visible = resolveEventValue(event)
    if (visible) {
      const state = init(realValue);
      const currentValue = getValueByDate(
        state.pickerType === 'start' ? state.start : state.end,
        props.precision
      );
      updateColumns(currentValue, props);
    }
    triggerEvent('visibleChange', visible);
  });

  useEvent('onChangeCurrentPickerType', (e) => {
    const { type } = e.currentTarget.dataset;
    const state = changeType(type) as any;
    const currentValue = getValueByDate(
      state.pickerType === 'start' ? state.start : state.end,
      props.precision
    );
    updateColumns(currentValue, props);
  });
  const { getMin, getMax } = useMinAndMax();

  useEvent('onCancel', (e) => {
    triggerEventOnly('cancel', e);
  });

  useEvent('onChange', (event) => {
    let [selectedIndex] = resolveEventValues(event);
    selectedIndex = getValidValue(selectedIndex);
    const { format, precision } = props;
    let date = getDateByValue(selectedIndex);
    const min = getMin(props.min);
    const max = getMax(props.max);
    if (dayjs(date).isBefore(min)) {
      date = min.toDate();
      selectedIndex = getValueByDate(date, precision);
    }
    if (dayjs(date).isAfter(max)) {
      date = max.toDate();
      selectedIndex = getValueByDate(date, precision);
    }
    updateColumns(selectedIndex, props);
    updateValue(date);
    triggerEventValues('pickerChange', [
      dateState.pickerType,
      date,
      dayjs(date).format(format),
    ]);
  });

  useEvent('onOk', () => {
    const { format } = props;
    const { start, end } = dateState;
    const realValue = [start, end] as any;
    if (!isControlled) {
      update(realValue);
    }
    triggerEventValues('ok', [
      realValue,
      realValue.map((v) => dayjs(v).format(format)),
    ]);
  });

  return {
    formattedValueText,
    realValue,
    columns,
    currentValue,
    currentStartDate: dateState.start,
    currentEndDate: dateState.end,
    currentEndValueStr,
    currentStartValueStr,
    pickerType: dateState.pickerType,
  };
};

mountComponent(RangePicker, DateRangePickerFunctionalProps);
