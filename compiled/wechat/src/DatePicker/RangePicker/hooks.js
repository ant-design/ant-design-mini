import { useEvent as useStableCallback } from '../../_util/hooks/useEvent';
import dayjs from 'dayjs';
import { useCallback } from 'functional-mini/component';
export var useFormatValue = function (props) {
    function defaultFormat(date, valueStrs) {
        var format = props.format, splitCharacter = props.splitCharacter;
        if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
            return valueStrs.join("".concat(splitCharacter));
        }
        return '';
    }
    var onFormat = useStableCallback(function (realValue) {
        var onFormat = props.onFormat, format = props.format;
        var formatValueByProps = onFormat &&
            onFormat(realValue, realValue
                ? realValue.map(function (v) { return (v ? dayjs(v).format(format) : null); })
                : null);
        if (typeof formatValueByProps !== 'undefined') {
            return formatValueByProps;
        }
        return defaultFormat(realValue, realValue
            ? realValue.map(function (v) { return (v ? dayjs(v).format(format) : null); })
            : null);
    });
    return onFormat;
};
export function useMinAndMax() {
    var getMin = useStableCallback(function (min) {
        return min ? dayjs(min) : dayjs().subtract(10, 'year');
    });
    var getMax = useStableCallback(function (max) {
        return max ? dayjs(max) : dayjs().add(10, 'year');
    });
    return {
        getMin: getMin,
        getMax: getMax,
    };
}
function defaultFormatLabel(type, value) {
    var suffixMap = {
        year: '年',
        month: '月',
        day: '日',
        hour: '时',
        minute: '分',
        second: '秒',
    };
    return "".concat(value).concat(suffixMap[type]);
}
export var useFormatLabel = function (onFormatLabel) {
    return useCallback(function (type, value) {
        if (typeof onFormatLabel === 'function') {
            var formatValueByProps = onFormatLabel(type, value);
            if (typeof formatValueByProps !== 'undefined') {
                return String(formatValueByProps);
            }
        }
        return defaultFormatLabel(type, value);
    }, [onFormatLabel]);
};
