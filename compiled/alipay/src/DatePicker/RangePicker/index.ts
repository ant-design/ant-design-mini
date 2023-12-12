import { useState, useEvent, useMemo } from 'functional-mini/component';
import { IDateRangePickerProps } from './props';
import dayjs from 'dayjs';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
} from '../util';
import fmtEvent from '../../_util/fmtEvent';
import { useMixState } from '../../_util/hooks/useMixState';
import { useFormatValue, useMinAndMax, useFormatLabel } from './hooks';
import { useDateState } from './useDateState';
import { mountComponent } from '../../_util/component';
import { PickerValue } from '../props';

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
  const { datestate, init, changeType, updateValue } = useDateState(props);
  const [{ columns, currentValue }, doUpdateColumns] = useState({
    currentValue: [],
    columns: [],
  });
  const onFormat = useFormatValue(props);
  const { currentStartValueStr, currentEndValueStr } = useMemo(() => {
    return {
      currentStartValueStr: datestate.start
        ? dayjs(datestate.start).format(props.format)
        : '',
      currentEndValueStr: datestate.end
        ? dayjs(datestate.end).format(props.format)
        : '',
    };
  }, [props.format, datestate.start, datestate.end]);

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

  useEvent('onFormat', () => {
    return onFormat(realValue);
  });

  useEvent('onVisibleChange', (visible) => {
    const { onVisibleChange } = props;
    if (visible) {
      const state = init(realValue);
      const currentValue = getValueByDate(
        state.pickerType === 'start' ? state.start : state.end,
        props.precision
      );
      updateColumns(currentValue, props);
    }
    if (onVisibleChange) {
      onVisibleChange(visible, fmtEvent(props));
    }
  });

  useEvent('onChangeCurrentPickerType', (e) => {
    const { type } = e.target.dataset;
    const state = changeType(type) as any;
    const currentValue = getValueByDate(
      state.pickerType === 'start' ? state.start : state.end,
      props.precision
    );
    updateColumns(currentValue, props);
  });
  const { getMin, getMax } = useMinAndMax();

  useEvent('onCancel', (e) => {
    const { onCancel } = props;
    if (onCancel) {
      onCancel(fmtEvent(props, e));
    }
  });

  useEvent('onChange', (selectedIndex) => {
    selectedIndex = getValidValue(selectedIndex);
    const { onPickerChange, format, precision } = props;
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
    if (onPickerChange) {
      onPickerChange(
        datestate.pickerType,
        date,
        dayjs(date).format(format),
        fmtEvent(props)
      );
    }
  });

  useEvent('onOk', () => {
    const { format } = props;
    const { start, end } = datestate;
    const realValue = [start, end] as any;
    if (!isControlled) {
      update(realValue);
    }
    if (props.onOk) {
      props.onOk(
        realValue,
        realValue.map((v) => dayjs(v).format(format)),
        fmtEvent(props)
      );
    }
  });

  return {
    realValue,
    columns,
    currentValue,
    currentStartDate: datestate.start,
    currentEndDate: datestate.end,
    currentEndValueStr,
    currentStartValueStr,
    pickerType: datestate.pickerType,
  };
};

mountComponent(RangePicker, {
  okText: '确定',
  cancelText: '取消',
  maskClosable: false,
  placeholder: '请选择',
  format: 'YYYY/MM/DD',
  splitCharacter: '-',
  startPlaceholder: '未选择',
  endPlaceholder: '未选择',
  precision: 'day',
});
