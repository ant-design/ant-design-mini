import { useEvent as useStableCallback } from '../../_util/hooks/useEvent';
import dayjs from 'dayjs';
import { useCallback } from 'functional-mini/component';

export const useFormatValue = (props) => {
  function defaultFormat(date, valueStrs) {
    const { format, splitCharacter } = props;
    if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
      return valueStrs.join(`${splitCharacter}`);
    }
    return '';
  }

  const onFormat = useStableCallback((realValue) => {
    const { onFormat, format } = props;
    const formatValueByProps =
      onFormat &&
      onFormat(
        realValue,
        realValue
          ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
          : null
      );
    if (typeof formatValueByProps !== 'undefined') {
      return formatValueByProps;
    }
    return defaultFormat(
      realValue,
      realValue
        ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
        : null
    );
  });
  return onFormat;
};

export function useMinAndMax() {
  const getMin = useStableCallback((min) => {
    return min ? dayjs(min as any) : dayjs().subtract(10, 'year');
  });

  const getMax = useStableCallback((max) => {
    return max ? dayjs(max as any) : dayjs().add(10, 'year');
  });

  return {
    getMin,
    getMax,
  };
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
export const useFormatLabel = (onFormatLabel) => {
  return useCallback(
    (type, value) => {
      if (typeof onFormatLabel === 'function') {
        const formatValueByProps = onFormatLabel(type, value);
        if (typeof formatValueByProps !== 'undefined') {
          return String(formatValueByProps);
        }
      }
      return defaultFormatLabel(type, value);
    },
    [onFormatLabel]
  );
};
