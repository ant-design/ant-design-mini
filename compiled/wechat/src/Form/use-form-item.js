var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useState, useEvent, useRef, useEffect, } from 'functional-mini/component';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
export var useFormItem = function (props) {
    var _a = useState({
        value: undefined,
        status: 'default',
        required: false,
        errors: [],
    }), formData = _a[0], setFormDate = _a[1];
    var formRef = useRef(formData);
    var emitRef = useRef(null);
    useEvent('setFormData', function (values) {
        setFormDate(function (old) {
            var newValue = __assign(__assign({}, old), values);
            formRef.current = newValue;
            return newValue;
        });
    });
    useEvent('getFormData', function () {
        return formRef.current;
    });
    useEvent('on', function (callback) {
        emitRef.current = callback;
    });
    var originalProps = useRef();
    useEvent('getProps', function () {
        return props;
    });
    useEffect(function () {
        return function () {
            emit('didUnmount');
        };
    }, []);
    function emit(event, value, extraInfo) {
        if (emitRef.current) {
            emitRef.current(event, value, extraInfo);
        }
    }
    // 这个必须要放在后面。
    triggerRefEvent();
    useEffect(function () {
        emit('deriveDataFromProps', props, originalProps.current);
        originalProps.current = props;
    }, [props]);
    return {
        formData: formData,
        emit: emit,
    };
};
