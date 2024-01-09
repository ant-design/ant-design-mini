var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import AsyncValidator from 'async-validator';
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listenders = {};
    }
    EventEmitter.prototype.on = function (event, listener) {
        this.listenders[event] = this.listenders[event] || [];
        this.listenders[event].push(listener);
        return this;
    };
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var arr = this.listenders[event];
        if (arr) {
            arr.forEach(function (listener) { return listener.apply(void 0, args); });
        }
    };
    return EventEmitter;
}());
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    /**
     * Field构建
     * @param ref field ref对象
     * @param initialValue 初始值
     */
    function Field(ref, name, initialValues, rules, validateMessages, required, label, message, validateTrigger) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.formRules = rules;
        _this.create(name, initialValues[name], rules[name], validateMessages, required, label, message, validateTrigger);
        _this.ref.on(function (trigger, value, extraInfo) {
            if (trigger === 'onChange') {
                _this.setValue(value);
                _this.touched = true;
                _this.emit('valueChange', value);
            }
            else if (trigger === 'didUnmount') {
                _this.emit('didUnmount');
            }
            else if (trigger === 'deriveDataFromProps') {
                var props = extraInfo ? extraInfo : _this.ref.getProps();
                if ((value.name && value.name !== props.name) ||
                    value.required !== props.required ||
                    value.label !== props.label ||
                    value.message !== props.message ||
                    value.validateTrigger !== props.validateTrigger) {
                    _this.create(value.name, initialValues[value.name], _this.formRules[value.name], validateMessages, value.required, value.message, value.label, value.validateTrigger, true);
                }
                if (value.name !== props.name) {
                    _this.emit('replaceName', value.name);
                }
            }
            _this.validateTrigger.forEach(function (item) {
                if (item === trigger) {
                    _this.validate();
                }
            });
        });
        return _this;
    }
    Field.prototype.create = function (name, initialValue, rule, validateMessages, required, label, message, validateTrigger, update) {
        this.name = name;
        this.required = this.transformValidatorRules(name, rule, required, label, message, validateMessages);
        if (!update) {
            this.reset(initialValue);
        }
        else {
            this.ref.setFormData({
                required: this.required,
            });
        }
        var validateTriggerList = validateTrigger || 'onChange';
        if (!Array.isArray(validateTriggerList)) {
            validateTriggerList = [validateTriggerList];
        }
        this.validateTrigger = validateTriggerList;
    };
    Field.prototype.updateFieldRules = function (rules, validateMessages) {
        var props = this.ref.getProps();
        this.formRules = rules;
        this.create(props.name, null, rules[props.name], validateMessages, props.required, props.label, props.message, props.validateTrigger, true);
    };
    /**
     *
     * @param rule 修改 Validator
     * @param name
     * @param required
     * @param message
     * @param validateMessages
     * @returns
     */
    Field.prototype.transformValidatorRules = function (name, rule, required, label, message, validateMessages) {
        var _a, _b;
        var requiredRule = false;
        var validator;
        if (rule) {
            var ruleList = Array.isArray(rule) ? rule : [rule];
            var result = ruleList.find(function (item) { return item.required; });
            if (result) {
                if (message) {
                    result.message = message;
                }
                requiredRule = true;
            }
            else if (required) {
                ruleList.push({
                    required: required,
                    // message 不允许为 null
                    message: message !== null && message !== void 0 ? message : undefined,
                });
                requiredRule = true;
            }
            validator = new AsyncValidator((_a = {},
                _a[name] = ruleList,
                _a));
        }
        else if (required) {
            validator = new AsyncValidator((_b = {},
                _b[name] = {
                    required: required,
                    // message 不允许为 null
                    message: message !== null && message !== void 0 ? message : undefined,
                },
                _b));
            requiredRule = true;
        }
        if (validator) {
            var obj_1 = {
                label: label,
            };
            Object.keys(validator.rules).forEach(function (name) {
                validator.rules[name].forEach(function (item) {
                    if (typeof item.len !== 'undefined') {
                        obj_1['len'] = item.len;
                    }
                    if (typeof item.min !== 'undefined') {
                        obj_1['min'] = item.min;
                    }
                    if (typeof item.max !== 'undefined') {
                        obj_1['max'] = item.max;
                    }
                    if (typeof item.pattern !== 'undefined') {
                        obj_1['pattern'] = item.pattern;
                    }
                });
            });
            validator.messages(this.transformValidateMessages(validateMessages, obj_1));
        }
        this.validator = validator;
        return requiredRule;
    };
    Field.prototype.transformValidateMessages = function (validateMessages, obj) {
        if (!validateMessages) {
            return;
        }
        function replaceLabel(validateMessages, target) {
            Object.keys(validateMessages).forEach(function (item) {
                if (typeof validateMessages[item] === 'string') {
                    target[item] = validateMessages[item].replace('${label}', obj.label || '');
                    if (typeof obj.len !== 'undefined') {
                        target[item] = target[item].replace('${len}', obj.len);
                    }
                    if (typeof obj.min !== 'undefined') {
                        target[item] = target[item].replace('${min}', obj.min);
                    }
                    if (typeof obj.max !== 'undefined') {
                        target[item] = target[item].replace('${max}', obj.max);
                    }
                    if (typeof obj.pattern !== 'undefined') {
                        target[item] = target[item].replace('${pattern}', obj.pattern);
                    }
                    return;
                }
                if (typeof validateMessages[item] === 'object') {
                    var val = (target[item] = {});
                    replaceLabel(validateMessages[item], val);
                    return;
                }
                target[item] = validateMessages[item];
            });
        }
        var messages = {};
        replaceLabel(validateMessages, messages);
        return messages;
    };
    /**
     * 设置 Field 值
     * @param value Field 值
     */
    Field.prototype.setValue = function (value) {
        this.ref.setFormData({
            value: value,
        });
    };
    /**
     * 得到 Field 值
     */
    Field.prototype.getValue = function () {
        var value = this.ref.getFormData().value;
        return value;
    };
    /**
     * 设置 Field 校验器状态
     * @param validatorStatue
     */
    Field.prototype.setValidatorStatus = function (validatorStatue) {
        this.ref.setFormData(validatorStatue);
    };
    /**
     * 得到 Field 校验器状态
     * @returns
     */
    Field.prototype.getValidatorStatus = function () {
        var _a = this.ref.getFormData(), status = _a.status, errors = _a.errors;
        return {
            status: status,
            errors: errors,
        };
    };
    /**
     * 校验 Field
     */
    Field.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var validatorStatusSuccess, value, validator, needUpdateStatus_1, err_1, errors, validatorStatus;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        validatorStatusSuccess = {
                            status: 'success',
                            errors: [],
                        };
                        value = this.getValue();
                        if (!this.validator) {
                            this.setValidatorStatus(validatorStatusSuccess);
                            return [2 /*return*/, {
                                    validatorStatus: validatorStatusSuccess,
                                    value: value,
                                }];
                        }
                        validator = this.validator;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        needUpdateStatus_1 = true;
                        Promise.resolve().then(function () {
                            Promise.resolve().then(function () {
                                if (needUpdateStatus_1) {
                                    _this.setValidatorStatus({
                                        status: 'validating',
                                        errors: [],
                                    });
                                }
                            });
                        });
                        return [4 /*yield*/, this.validator.validate((_a = {},
                                _a[this.name] = value,
                                _a), function () {
                                needUpdateStatus_1 = false;
                            })];
                    case 2:
                        _b.sent();
                        if (validator !== this.validator) {
                            return [2 /*return*/];
                        }
                        this.setValidatorStatus(validatorStatusSuccess);
                        return [2 /*return*/, {
                                validatorStatus: validatorStatusSuccess,
                                value: value,
                            }];
                    case 3:
                        err_1 = _b.sent();
                        if (validator !== this.validator) {
                            return [2 /*return*/];
                        }
                        errors = err_1.errors;
                        validatorStatus = {
                            status: 'error',
                            errors: errors.map(function (_a) {
                                var _b = _a.message, message = _b === void 0 ? '' : _b;
                                return message;
                            }),
                        };
                        this.setValidatorStatus(validatorStatus);
                        return [2 /*return*/, {
                                validatorStatus: validatorStatus,
                                value: value,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 重置 Field
     * @param initialValue
     */
    Field.prototype.reset = function (initialValue) {
        this.touched = false;
        this.ref.setFormData({
            value: initialValue,
            required: this.required,
            status: 'default',
            errors: [],
        });
    };
    /**
     * Field 是否被操作
     */
    Field.prototype.isTouched = function () {
        return this.touched;
    };
    return Field;
}(EventEmitter));
var Form = /** @class */ (function () {
    /**
     * Form构建
     * @param formConfig 表单配置项
     */
    function Form(formConfig) {
        if (formConfig === void 0) { formConfig = {}; }
        /**
         * 表单ref组件对象
         */
        this.fields = {};
        /**
         * 表单字段 change侦听
         */
        this.changeListeners = [];
        /**
         * 依赖表
         */
        this.dependenciesMap = {};
        this.setInitialValues(formConfig.initialValues || {});
        this.setRules(formConfig.rules || {});
        this.validateMessages = formConfig.validateMessages;
    }
    /**
     * 用户传入的rules转换成async-validator rules
     * @param rules 校验规则
     */
    Form.prototype.transformRules = function (rules) {
        var _this = this;
        var result = {};
        Object.keys(rules).forEach(function (name) {
            var rule = rules[name];
            var list = (result[name] = []);
            var arr = Array.isArray(rule) ? rule : [rule];
            arr.forEach(function (item) {
                if (typeof item === 'function') {
                    list.push(item(_this).validator);
                }
                else {
                    list.push(__assign({}, item));
                }
            });
        });
        return result;
    };
    /**
     * 遍历表单field对象
     * @param callback
     */
    Form.prototype.eachField = function (callback) {
        var fields = this.fields;
        Object.keys(fields).forEach(function (name) {
            var field = fields[name];
            callback(field, name);
        });
    };
    /**
     * 更新 rules
     * @param rules
     */
    Form.prototype.updateRules = function (rules) {
        var _this = this;
        var rawRules = this.transformRules(rules);
        this.rules = rawRules;
        Object.keys(this.fields).forEach(function (name) {
            _this.fields[name].updateFieldRules(rawRules, _this.validateMessages);
        });
    };
    /**
     * 设置 rules
     * @param rules
     */
    Form.prototype.setRules = function (rules) {
        this.rules = this.transformRules(rules);
    };
    /**
     * 添加表单对象
     * @param ref 表单ref对象
     */
    Form.prototype.addItem = function (ref, customName) {
        var _this = this;
        var props = ref.getProps();
        var name = customName || props.name;
        if (!name) {
            ref.on(function (trigger, value) {
                if (trigger === 'deriveDataFromProps') {
                    if (value.name) {
                        _this.addItem(ref, value.name);
                    }
                }
            });
            return;
        }
        if (this.fields[name]) {
            throw new Error("Form \"addItem\" same name: \"".concat(name, "\""));
        }
        var field = new Field(ref, name, this.initialValues, this.rules, this.validateMessages, props.required, props.label, props.message, props.validateTrigger);
        if (props.dependencies) {
            props.dependencies.forEach(function (item) {
                _this.dependenciesMap[item] = _this.dependenciesMap[item] || [];
                if (_this.dependenciesMap[item].indexOf(name) < 0) {
                    _this.dependenciesMap[item].push(name);
                }
            });
        }
        field
            .on('valueChange', function (value) {
            if (name) {
                var arr = _this.dependenciesMap[name];
                if (arr) {
                    arr.forEach(function (item) {
                        if (_this.fields[item]) {
                            _this.fields[item].validate();
                        }
                    });
                }
                _this.changeListeners.forEach(function (item) {
                    var _a;
                    return item((_a = {},
                        _a[name] = value,
                        _a), _this.getFieldsValue());
                });
            }
        })
            .on('didUnmount', function () {
            delete _this.fields[name];
        })
            .on('replaceName', function (newName) {
            if (!newName) {
                delete _this.fields[name];
                return;
            }
            if (_this.fields[newName]) {
                throw new Error("Form \"addItem\" same name: \"".concat(newName, "\""));
            }
            _this.fields[newName] = field;
            delete _this.fields[name];
            name = newName;
        });
        if (name) {
            this.fields[name] = field;
        }
    };
    /**
     * 设置表单值
     * @param name 表单名称
     * @param value 表单初始值
     */
    Form.prototype.setFieldValue = function (name, value) {
        var field = this.fields[name];
        if (field) {
            field.setValue(value);
            field.setValidatorStatus({
                status: 'success',
                errors: [],
            });
        }
    };
    /**
     * 设置表单值
     * @param name 表单名称
     * @param value 表单初始值
     */
    Form.prototype.setFieldsValue = function (values) {
        var _this = this;
        Object.keys(values).forEach(function (name) {
            _this.setFieldValue(name, values[name]);
        });
    };
    /**
     * 设置 initialValues，这个操作不会对页面进行修改，要是需要重置表单可跟上 reset 方法；
     * 这样是对于表单已经在编辑，但是需要重新initialValues的场景
     *
     * eg:
     *    this.setInitialValues(initialValues);
     *    this.reset();
     *
     * @param initialValues
     */
    Form.prototype.setInitialValues = function (initialValues) {
        this.initialValues = initialValues;
    };
    /**
     * 获取对应字段名的值
     * @param name
     * @returns
     */
    Form.prototype.getFieldValue = function (name) {
        var field = this.fields[name];
        if (!field) {
            return;
        }
        return field.getValue();
    };
    /**
     * 获取一组字段名对应的值
     * @param nameList
     * @returns
     */
    Form.prototype.getFieldsValue = function (nameList) {
        var _this = this;
        var fieldsValue = {};
        nameList = nameList || Object.keys(this.fields);
        nameList.forEach(function (name) {
            fieldsValue[name] = _this.getFieldValue(name);
        });
        return fieldsValue;
    };
    /**
     * 获取对应字段名的校验器状态
     * @param name
     * @returns
     */
    Form.prototype.getFieldValidatorStatus = function (name) {
        var field = this.fields[name];
        if (!field) {
            return;
        }
        return field.getValidatorStatus();
    };
    /**
     * 获取一组字段名的校验器状态
     * @param nameList
     * @returns
     */
    Form.prototype.getFieldsValidatorStatus = function (nameList) {
        var _this = this;
        var fieldsValidatorStatus = {};
        nameList = nameList || Object.keys(this.fields);
        nameList.forEach(function (name) {
            fieldsValidatorStatus[name] = _this.getFieldValidatorStatus(name);
        });
        return fieldsValidatorStatus;
    };
    /**
     * 设置对应字段名的校验器状态
     * @param name 表单名称
     * @param validatorStatus 校验状态
     * @returns
     */
    Form.prototype.setFieldValidatorStatus = function (name, validatorStatus) {
        var field = this.fields[name];
        if (!field) {
            return;
        }
        return field.setValidatorStatus(validatorStatus);
    };
    /**
     * 设置一组字段名的校验器状态
     * @param fieldsValidatorStatus 表单校验状态
     * @returns
     */
    Form.prototype.setFieldsValidatorStatus = function (fieldsValidatorStatus) {
        var _this = this;
        Object.keys(fieldsValidatorStatus).forEach(function (name) {
            _this.setFieldValidatorStatus(name, fieldsValidatorStatus[name]);
        });
    };
    /**
     * 检查对应字段是否被用户操作过
     * @param name 字段名称
     * @returns
     */
    Form.prototype.isFieldTouched = function (name) {
        var field = this.fields[name];
        if (!field) {
            return false;
        }
        return field.isTouched();
    };
    /**
     * 指定表单字段值更新时触发回调方法
     * @param name 表单字段名称
     * @param callback 回调方法
     */
    Form.prototype.onValueChange = function (name, callback) {
        this.changeListeners.push(function (changedValues, allValues) {
            if (name in changedValues) {
                callback(changedValues[name], allValues);
            }
        });
    };
    /**
     * 表单字段值更新时触发回调方法
     * @param name 表单字段名称
     * @param callback 回调方法
     */
    Form.prototype.onValuesChange = function (callback) {
        this.changeListeners.push(function (changedValues, allValues) {
            callback(changedValues, allValues);
        });
    };
    /**
     * 表单提交
     */
    Form.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var values, arr, result, errorFields;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = {};
                        arr = [];
                        this.eachField(function (field, name) {
                            arr.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = [{}];
                                            return [4 /*yield*/, field.validate()];
                                        case 1: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_b.sent())])), { name: name }])];
                                    }
                                });
                            }); })());
                        });
                        return [4 /*yield*/, Promise.all(arr)];
                    case 1:
                        result = _a.sent();
                        errorFields = [];
                        result.forEach(function (obj) {
                            if (!obj) {
                                return;
                            }
                            var name = obj.name, value = obj.value, validatorStatus = obj.validatorStatus;
                            if (validatorStatus.status === 'error') {
                                errorFields.push({
                                    name: name,
                                    errors: validatorStatus.errors,
                                });
                            }
                            values[name] = value;
                        });
                        if (errorFields.length > 0) {
                            throw {
                                values: values,
                                errorFields: errorFields,
                            };
                        }
                        return [2 /*return*/, values];
                }
            });
        });
    };
    /**
     * 表单重置
     */
    Form.prototype.reset = function () {
        var _this = this;
        this.eachField(function (field, name) {
            var initialValue = _this.initialValues[name];
            field.reset(initialValue);
        });
    };
    return Form;
}());
export { Form };
export function createForm(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.methods, methods = _c === void 0 ? {} : _c;
    return {
        data: {
            formData: {
                value: undefined,
                status: 'default',
                errors: [],
            },
        },
        didUnmount: function () {
            this.emit('didUnmount');
        },
        deriveDataFromProps: function (nextProps) {
            this.emit('deriveDataFromProps', nextProps);
        },
        methods: __assign({ emit: function (trigger, value) { }, setFormData: function (values) {
                this.setData(__assign(__assign({}, this.data), { formData: __assign(__assign({}, this.data.formData), values) }));
            }, getFormData: function () {
                return this.data.formData;
            }, on: function (callback) {
                this.emit = callback;
            }, getProps: function () {
                return this.props;
            } }, methods),
    };
}
