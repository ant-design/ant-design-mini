import dayjs from 'dayjs';
import { useEvent, useState } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import fmtEvent from '../_util/fmtEvent';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { IDatePickerProps } from './props';
import {
  getDateByValue,
  getRangeData,
  getValidValue,
  getValueByDate,
} from './util';

function getMin(min) {
  return min ? dayjs(min as any) : dayjs().subtract(10, 'year');
}

function getMax(max) {
  return max ? dayjs(max as any) : dayjs().add(10, 'year');
}

const DatePicker = (props: IDatePickerProps) => {
  const [realValue, { isControlled, update }] = useMixState(
    props.defaultValue,
    {
      value: props.value,
    }
  );

  function defaultFormat(value, valueStr) {
    if (props.format && valueStr) {
      return valueStr;
    }
    return '';
  }
  const { triggerEvent } = useComponentEvent(props);

  function onFormatLabel(type, value) {
    const { onFormatLabel } = props;
    const formatValueByProps = onFormatLabel && onFormatLabel(type, value);
    if (typeof formatValueByProps !== 'undefined') {
      return String(formatValueByProps);
    }
    return defaultFormatLabel(type, value);
  }
  function defaultFormatLabel(type, value) {
    const suffixMap = {
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      minute: '分',
      second: '秒',
    };
    return `${value}${suffixMap[type]}`;
  }

  const [{ visible, value, columns }, setState] = useState({
    visible: false,
    value: [],
    columns: [],
  });

  function generateData(currentValue, currentProps) {
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
    return newColumns;
  }

  function getCurrentValueWithCValue(currentProps) {
    const { min, max, precision } = currentProps;
    if (realValue) {
      return getValueByDate(realValue, precision);
    } else {
      const now = new Date();
      if (
        !(min && dayjs(now).isBefore(dayjs(min as any), precision)) &&
        !(max && dayjs(now).isAfter(dayjs(max as any), precision))
      ) {
        return getValueByDate(now, precision);
      } else {
        return getValueByDate(this.getMin(min).toDate(), precision);
      }
    }
  }

  useEvent('onVisibleChange', (visible) => {
    if (visible) {
      const currentValue = getCurrentValueWithCValue(props);
      const newColumns = generateData(currentValue, props);
      setState({
        value: currentValue,
        columns: newColumns,
        visible: true,
      });
    } else {
      setState({
        value: [],
        columns: [],
        visible: false,
      });
    }
    triggerEvent('visibleChange', visible, {});
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
    const newColumns = generateData(selectedIndex, props);

    setState({
      visible: true,
      columns: newColumns,
      value: selectedIndex,
    });

    if (onPickerChange) {
      const date = getDateByValue(selectedIndex);
      onPickerChange(date, dayjs(date).format(format), fmtEvent(props));
    }
  });

  useEvent('onCancel', (e) => {
    const { onCancel } = props;
    if (onCancel) {
      onCancel(fmtEvent(props, e));
    }
  });

  useEvent('onOk', () => {
    const { format } = props;
    const date = getDateByValue(value);
    if (!isControlled) {
      update(date);
    }
    if (props.onOk) {
      props.onOk(date, dayjs(date).format(format), fmtEvent(props));
    }
  });

  useEvent('onFormat', () => {
    const { onFormat, format } = props;
    const formatValueByProps =
      onFormat &&
      onFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
    if (typeof formatValueByProps !== 'undefined') {
      return formatValueByProps;
    }
    return defaultFormat(
      realValue,
      realValue ? dayjs(realValue).format(format) : null
    );
  });

  return {
    currentValue: visible ? value : realValue,
    columns,
  };
};

mountComponent(DatePicker, {
  okText: '确定',
  cancelText: '取消',
  maskClosable: false,
  placeholder: '请选择',
  format: 'YYYY/MM/DD',
  precision: 'day',
});
