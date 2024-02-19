import { useEvent, useRef, useEffect } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormImageUploadDefaultProps } from './props';
var FormImageUpload = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    var imageUploadRef = useRef();
    useHandleCustomEvent('handleRef', function (imageUpload) {
        imageUploadRef.current = imageUpload;
    });
    useEffect(function () {
        if (imageUploadRef.current) {
            imageUploadRef.current.update(formData.value);
        }
    }, [formData.value]);
    useHandleCustomEvent('onChange', function (value) {
        emit('onChange', value);
        triggerEvent('change', value);
    });
    useEvent('handleUpload', function (localFile) {
        if (!props.onUpload) {
            throw new Error('need props onUpload');
        }
        return props.onUpload(localFile);
    }, {
        handleResult: true,
    });
    useEvent('handleRemove', function (file) {
        if (props.onRemove) {
            return props.onRemove(file);
        }
    }, {
        handleResult: true,
    });
    useHandleCustomEvent('onPreview', function (file, e) {
        triggerEvent('preview', file, e);
    });
    useEvent('handleBeforeUpload', function (localFileList) {
        if (props.onBeforeUpload) {
            return props.onBeforeUpload(localFileList);
        }
    }, {
        handleResult: true,
    });
    useHandleCustomEvent('onChooseImageError', function (err, e) {
        triggerEvent('chooseImageError', err, e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormImageUpload, FormImageUploadDefaultProps);
