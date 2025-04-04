import AsyncValidator, {
  InternalRuleItem,
  Rule as RawRule,
  RuleItem,
  Rules as RawRules,
  ValidateError,
  ValidateMessages,
  Value,
  Values,
} from 'async-validator';

import { IMixin4Legacy } from '@mini-types/alipay';
import flattenObject from '../_util/flattenObject';
import get from '../_util/get';
import set from '../_util/set';
import { getValueFromProps } from '../_util/simply';

export { Value, Values };
export type Validator = (
  rule: Omit<InternalRuleItem, 'validator' | 'asyncValidator'>,
  value: Value
) => void | Promise<void>;
export type ValidatorRender = (form: Form) => {
  validator: Validator;
};
export type FormRuleItem = Omit<RuleItem, 'asyncValidator'> | ValidatorRender;
export type Rule = FormRuleItem | FormRuleItem[];
export type Rules = Record<string, Rule>;
export type FormConfig = {
  rules?: Rules;
  initialValues?: Values;
  validateMessages?: ValidateMessages;
};
export type ValidateStatus = 'default' | 'success' | 'error' | 'validating';
export interface ValidatorStatus {
  status: ValidateStatus;
  errors: string[];
}
export interface FromItemRef {
  setFormData: (values: Values) => void;
  getFormData: () => Values;
  getProps: () => Record<string, Value>;
  on: (callback: (trigger: EventTrigger, value?: Value) => void) => void;
}
export type ValidateTrigger = 'onChange' | 'onBlur' | 'onFocus';
export type EventTrigger =
  | ValidateTrigger
  | 'didUnmount'
  | 'deriveDataFromProps';

class EventEmitter {
  public listenders: Record<string, ((...args: any) => void)[]> = {};

  on(event: string, listener: (...args: any) => void) {
    this.listenders[event] = this.listenders[event] || [];
    this.listenders[event].push(listener);
    return this;
  }

  emit(event: string, ...args: any) {
    const arr = this.listenders[event];
    if (arr) {
      arr.forEach((listener) => listener(...args));
    }
  }
}

class Field extends EventEmitter {
  /**
   * Field ref对象
   */
  private ref: FromItemRef;

  /**
   * Field 名称
   */
  public name: string;

  /**
   * 校验器
   */
  private validator: AsyncValidator;

  /**
   * 是否被用户操作过
   */
  private touched: boolean;

  /**
   * required
   */
  private required: boolean;

  /**
   * 触发验证的时机，submit不需要设置也会触发校验器
   */
  private validateTrigger: ValidateTrigger[];

  private formRules: RawRule;

  /**
   * Field构建
   * @param ref field ref对象
   * @param initialValue 初始值
   */
  constructor(
    ref: FromItemRef,
    name: string,
    initialValues: Values,
    rules: RawRules,
    validateMessages: ValidateMessages,
    required: boolean,
    label: string,
    message: string,
    validateTrigger: ValidateTrigger
  ) {
    super();
    this.ref = ref;
    this.formRules = rules;
    this.create(
      name,
      get(initialValues, name),
      rules[name],
      validateMessages,
      required,
      label,
      message,
      validateTrigger
    );
    this.ref.on(async (trigger, value, extraInfo?: any) => {
      if (trigger === 'onChange') {
        this.setValue(value);
        this.touched = true;
        // 触发校验，需要在 onValueChange 之前执行
        await Promise.all(
          this.validateTrigger.map((item) => {
            if (item === trigger) {
              return this.validate();
            }
          })
        );
        this.emit('valueChange', value);
        return;
      } else if (trigger === 'didUnmount') {
        this.emit('didUnmount');
      } else if (trigger === 'deriveDataFromProps') {
        const props = extraInfo ? extraInfo : this.ref.getProps();
        if (
          (value.name && value.name !== props.name) ||
          value.required !== props.required ||
          value.label !== props.label ||
          value.message !== props.message ||
          value.validateTrigger !== props.validateTrigger
        ) {
          this.create(
            value.name,
            get(initialValues, value.name),
            this.formRules[value.name],
            validateMessages,
            value.required,
            value.message,
            value.label,
            value.validateTrigger,
            true
          );
        }
        if (value.name !== props.name) {
          this.emit('replaceName', value.name);
        }
      }
      this.validateTrigger.forEach((item) => {
        if (item === trigger) {
          this.validate();
        }
      });
    });
  }

  create(
    name: string,
    initialValue: Value,
    rule: RawRule,
    validateMessages: ValidateMessages,
    required: boolean,
    label: string,
    message: string,
    validateTrigger: ValidateTrigger,
    update?: boolean
  ) {
    this.name = name;
    this.required = this.transformValidatorRules(
      name,
      rule,
      required,
      label,
      message,
      validateMessages
    );
    if (!update) {
      this.reset(initialValue);
    } else {
      this.ref.setFormData({
        required: this.required,
      });
    }
    let validateTriggerList: ValidateTrigger[] | ValidateTrigger =
      validateTrigger || 'onChange';
    if (!Array.isArray(validateTriggerList)) {
      validateTriggerList = [validateTriggerList];
    }
    this.validateTrigger = validateTriggerList;
  }

  updateFieldRules(rules: RawRule, validateMessages: ValidateMessages) {
    const props = this.ref.getProps();
    this.formRules = rules;
    this.create(
      props.name,
      null,
      rules[props.name],
      validateMessages,
      props.required,
      props.label,
      props.message,
      props.validateTrigger,
      true
    );
  }

  /**
   *
   * @param rule 修改 Validator
   * @param name
   * @param required
   * @param message
   * @param validateMessages
   * @returns
   */
  private transformValidatorRules(
    name: string,
    rule: RawRule,
    required: boolean,
    label: string,
    message: string,
    validateMessages: ValidateMessages
  ) {
    let requiredRule = false;
    let validator: AsyncValidator;
    if (rule) {
      const ruleList = Array.isArray(rule) ? rule : [rule];
      const result = ruleList.find((item) => item.required);
      if (result) {
        if (message) {
          result.message = message;
        }
        requiredRule = true;
      } else if (required) {
        ruleList.push({
          required,
          // message 不允许为 null
          message: message ?? undefined,
        });
        requiredRule = true;
      }
      validator = new AsyncValidator({
        [name]: ruleList,
      });
    } else if (required) {
      validator = new AsyncValidator({
        [name]: {
          required,
          // message 不允许为 null
          message: message ?? undefined,
        },
      });
      requiredRule = true;
    }
    if (validator) {
      const obj = {
        label,
      };
      Object.keys(validator.rules).forEach((name) => {
        validator.rules[name].forEach((item) => {
          if (typeof item.len !== 'undefined') {
            obj['len'] = item.len;
          }
          if (typeof item.min !== 'undefined') {
            obj['min'] = item.min;
          }
          if (typeof item.max !== 'undefined') {
            obj['max'] = item.max;
          }
          if (typeof item.pattern !== 'undefined') {
            obj['pattern'] = item.pattern;
          }
        });
      });
      validator.messages(this.transformValidateMessages(validateMessages, obj));
    }
    this.validator = validator;
    return requiredRule;
  }

  private transformValidateMessages(
    validateMessages: ValidateMessages,
    obj: Partial<{
      label: string;
      len: number;
      min: number;
      max: number;
      pattern: RegExp | string;
    }>
  ) {
    if (!validateMessages) {
      return;
    }
    function replaceLabel(
      validateMessages: ValidateMessages,
      target: ValidateMessages
    ) {
      Object.keys(validateMessages).forEach((item) => {
        if (typeof validateMessages[item] === 'string') {
          target[item] = validateMessages[item].replace(
            '${label}',
            obj.label || ''
          );
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
          const val = (target[item] = {});
          replaceLabel(validateMessages[item], val);
          return;
        }
        target[item] = validateMessages[item];
      });
    }
    const messages: ValidateMessages = {};
    replaceLabel(validateMessages, messages);
    return messages;
  }

  /**
   * 设置 Field 值
   * @param value Field 值
   */
  setValue(value: Value) {
    this.ref.setFormData({
      value,
    });
  }

  /**
   * 得到 Field 值
   */
  getValue() {
    const value = this.ref.getFormData().value;
    return value;
  }

  /**
   * 设置 Field 校验器状态
   * @param validatorStatue
   */
  setValidatorStatus(validatorStatue: ValidatorStatus) {
    this.ref.setFormData(validatorStatue);
  }

  /**
   * 得到 Field 校验器状态
   * @returns
   */
  getValidatorStatus(): ValidatorStatus {
    const { status, errors } = this.ref.getFormData();
    return {
      status,
      errors,
    };
  }

  /**
   * 校验 Field
   */
  async validate() {
    const validatorStatusSuccess: ValidatorStatus = {
      status: 'success',
      errors: [] as string[],
    };
    const value = this.getValue();
    if (!this.validator) {
      this.setValidatorStatus(validatorStatusSuccess);
      return {
        validatorStatus: validatorStatusSuccess,
        value,
      };
    }
    const validator = this.validator;
    try {
      let needUpdateStatus = true;
      Promise.resolve().then(() => {
        Promise.resolve().then(() => {
          if (needUpdateStatus) {
            this.setValidatorStatus({
              status: 'validating',
              errors: [],
            });
          }
        });
      });
      await this.validator.validate(
        {
          [this.name]: value,
        },
        () => {
          needUpdateStatus = false;
        }
      );
      if (validator !== this.validator) {
        return;
      }
      this.setValidatorStatus(validatorStatusSuccess);
      return {
        validatorStatus: validatorStatusSuccess,
        value,
      };
    } catch (err) {
      if (validator !== this.validator) {
        return;
      }
      const errors: ValidateError[] = err.errors;
      const validatorStatus: ValidatorStatus = {
        status: 'error',
        errors: errors.map(({ message = '' }) => message),
      };
      this.setValidatorStatus(validatorStatus);
      return {
        validatorStatus,
        value,
      };
    }
  }

  /**
   * 重置 Field
   * @param initialValue
   */
  reset(initialValue: Value) {
    this.touched = false;
    this.ref.setFormData({
      value: initialValue,
      required: this.required,
      status: 'default',
      errors: [],
    });
  }

  /**
   * Field 是否被操作
   */
  isTouched() {
    return this.touched;
  }
}

export class Form {
  /**
   * 表单初始值
   */
  private initialValues: Values;

  /**
   * 原始规则，用户传入的跟之前的规则区别在于validator
   */
  private rules: RawRules;

  /**
   * 表单ref组件对象
   */
  private fields: Record<string, Field> = {};

  /**
   * 验证提示模板
   */
  private validateMessages: ValidateMessages;

  /**
   * 表单字段 change侦听
   */
  private changeListeners: ((
    changedValues: Values,
    allValues: Values
  ) => void)[] = [];

  /**
   * 依赖表
   */
  private dependenciesMap: Record<string, string[]> = {};
  /**
   * Form构建
   * @param formConfig 表单配置项
   */
  constructor(formConfig: FormConfig = {}) {
    this.setInitialValues(formConfig.initialValues || {});
    this.setRules(formConfig.rules || {});
    this.validateMessages = formConfig.validateMessages;
  }

  /**
   * 用户传入的rules转换成async-validator rules
   * @param rules 校验规则
   */
  private transformRules(rules: Rules) {
    const result: RawRules = {};
    Object.keys(rules).forEach((name) => {
      const rule = rules[name];
      const list = (result[name] = []);
      const arr = Array.isArray(rule) ? rule : [rule];
      arr.forEach((item) => {
        if (typeof item === 'function') {
          list.push(item(this).validator);
        } else {
          list.push({
            ...item,
          });
        }
      });
    });
    return result;
  }

  /**
   * 遍历表单field对象
   * @param callback
   */
  private eachField(callback: (field: Field, name: string) => void) {
    const fields = this.fields;
    Object.keys(fields).forEach((name) => {
      const field = fields[name];
      callback(field, name);
    });
  }

  /**
   * 更新 rules
   * @param rules
   */
  updateRules(rules: Rules) {
    const rawRules = this.transformRules(rules);
    this.rules = rawRules;
    Object.keys(this.fields).forEach((name) => {
      this.fields[name].updateFieldRules(rawRules, this.validateMessages);
    });
  }

  /**
   * 设置 rules
   * @param rules
   */
  private setRules(rules: Rules) {
    this.rules = this.transformRules(rules);
  }

  /**
   * 添加表单对象
   * @param ref 表单ref对象
   */
  addItem(ref: FromItemRef, customName?: string) {
    const props = ref.getProps();
    let name = customName || props.name;
    if (!name) {
      ref.on((trigger, value) => {
        if (trigger === 'deriveDataFromProps') {
          if (value.name) {
            this.addItem(ref, value.name);
          }
        }
      });
      return;
    }
    if (this.fields[name]) {
      throw new Error(`Form "addItem" same name: "${name}"`);
    }
    const field = new Field(
      ref,
      name,
      this.initialValues,
      this.rules,
      this.validateMessages,
      props.required,
      props.label,
      props.message,
      props.validateTrigger
    );
    if (props.dependencies) {
      props.dependencies.forEach((item) => {
        this.dependenciesMap[item] = this.dependenciesMap[item] || [];
        if (this.dependenciesMap[item].indexOf(name) < 0) {
          this.dependenciesMap[item].push(name);
        }
      });
    }
    field
      .on('valueChange', (value) => {
        if (name) {
          const arr = this.dependenciesMap[name];
          if (arr) {
            arr.forEach((item) => {
              if (this.fields[item]) {
                this.fields[item].validate();
              }
            });
          }
          this.changeListeners.forEach((item) =>
            item(set({}, name, value), this.getFieldsValue())
          );
        }
      })
      .on('didUnmount', () => {
        delete this.fields[name];
      })
      .on('replaceName', (newName) => {
        if (!newName) {
          delete this.fields[name];
          return;
        }
        if (this.fields[newName]) {
          throw new Error(`Form "addItem" same name: "${newName}"`);
        }
        this.fields[newName] = field;
        delete this.fields[name];
        name = newName;
      });
    if (name) {
      this.fields[name] = field;
    }
  }

  /**
   * 设置表单值
   * @param name 表单名称
   * @param value 表单初始值
   */
  setFieldValue(name: string, value: Value) {
    const field = this.fields[name];
    if (field) {
      field.setValue(value);
      field.setValidatorStatus({
        status: 'success',
        errors: [],
      });
    }
  }

  /**
   * 设置表单值
   * @param name 表单名称
   * @param value 表单初始值
   */
  setFieldsValue(values: Values) {
    Object.keys(flattenObject(values)).forEach((name) => {
      this.setFieldValue(name, get(values, name));
    });
  }

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
  setInitialValues(initialValues: Values) {
    this.initialValues = initialValues;
  }

  /**
   * 获取对应字段名的值
   * @param name
   * @returns
   */
  getFieldValue(name: string) {
    const field = this.fields[name];
    if (!field) {
      return;
    }
    return field.getValue();
  }

  /**
   * 获取一组字段名对应的值
   * @param nameList
   * @returns
   */
  getFieldsValue(nameList?: string[]) {
    const fieldsValue: Values = {};
    nameList = nameList || Object.keys(this.fields);
    nameList.forEach((name) => {
      set(fieldsValue, name, this.getFieldValue(name));
    });
    return fieldsValue;
  }

  /**
   * 获取对应字段名的校验器状态
   * @param name
   * @returns
   */
  getFieldValidatorStatus(name: string) {
    const field = this.fields[name];
    if (!field) {
      return;
    }
    return field.getValidatorStatus();
  }

  /**
   * 获取一组字段名的校验器状态
   * @param nameList
   * @returns
   */
  getFieldsValidatorStatus(nameList?: string[]) {
    const fieldsValidatorStatus: Record<string, ValidatorStatus> = {};
    nameList = nameList || Object.keys(this.fields);
    nameList.forEach((name) => {
      fieldsValidatorStatus[name] = this.getFieldValidatorStatus(name);
    });
    return fieldsValidatorStatus;
  }

  /**
   * 设置对应字段名的校验器状态
   * @param name 表单名称
   * @param validatorStatus 校验状态
   * @returns
   */
  setFieldValidatorStatus(name: string, validatorStatus: ValidatorStatus) {
    const field = this.fields[name];
    if (!field) {
      return;
    }
    return field.setValidatorStatus(validatorStatus);
  }

  /**
   * 设置一组字段名的校验器状态
   * @param fieldsValidatorStatus 表单校验状态
   * @returns
   */
  setFieldsValidatorStatus(
    fieldsValidatorStatus: Record<string, ValidatorStatus>
  ) {
    Object.keys(fieldsValidatorStatus).forEach((name) => {
      this.setFieldValidatorStatus(name, fieldsValidatorStatus[name]);
    });
  }

  /**
   * 检查对应字段是否被用户操作过
   * @param name 字段名称
   * @returns
   */
  isFieldTouched(name: string) {
    const field = this.fields[name];
    if (!field) {
      return false;
    }
    return field.isTouched();
  }

  /**
   * 指定表单字段值更新时触发回调方法
   * @param name 表单字段名称
   * @param callback 回调方法
   */
  onValueChange(
    name: string,
    callback: (value: Value, allValues: Values) => void
  ) {
    this.changeListeners.push((changedValues: Values, allValues: Values) => {
      if (get(changedValues, name)) {
        callback(get(changedValues, name), allValues);
      }
    });
  }

  /**
   * 表单字段值更新时触发回调方法
   * @param name 表单字段名称
   * @param callback 回调方法
   */
  onValuesChange(callback: (changedValues: Values, allValues: Values) => void) {
    this.changeListeners.push((changedValues: Values, allValues: Values) => {
      callback(changedValues, allValues);
    });
  }

  /**
   * 表单提交
   */
  async submit() {
    const values: Values = {};
    const arr: Promise<{
      validatorStatus: ValidatorStatus;
      value: Value;
      name: string;
    }>[] = [];
    this.eachField((field, name) => {
      arr.push(
        (async () => {
          return {
            ...(await field.validate()),
            name,
          };
        })()
      );
    });
    const result = await Promise.all(arr);
    const errorFields: {
      name: string;
      errors: string[];
    }[] = [];
    result.forEach((obj) => {
      if (!obj) {
        return;
      }
      const { name, value, validatorStatus } = obj;
      if (validatorStatus.status === 'error') {
        errorFields.push({
          name,
          errors: validatorStatus.errors,
        });
      }
      set(values, name, value);
    });
    if (errorFields.length > 0) {
      throw {
        values,
        errorFields,
      };
    }
    return values;
  }

  /**
   * 表单重置
   */
  reset() {
    this.eachField((field, name) => {
      const initialValue = get(this.initialValues, name);
      field.reset(initialValue);
    });
  }
}

export function createForm({ methods = {} } = {}) {
  let mixin = {
    data: {
      formData: {
        value: undefined,
        status: 'default',
        errors: [],
      },
    },

    /// #if ALIPAY || BUNDLE2H
    didUnmount() {
      this.emit('didUnmount');
    },
    deriveDataFromProps(nextProps) {
      this.emit('deriveDataFromProps', nextProps);
    },
    /// #endif
    /// #if WECHAT
    attached() {
      this.triggerEvent('ref', this);
    },
    detached() {
      this.emit('didUnmount');
    },
    observers: {
      '**': function (nextProps) {
        this.emit('deriveDataFromProps', nextProps);
      },
    },
    /// #endif
    methods: {
      emit(trigger: EventTrigger, value?: Value) {},
      setFormData(values: Values) {
        this.setData({
          ...this.data,
          formData: {
            ...this.data.formData,
            ...values,
          },
        });
      },
      getFormData() {
        return this.data.formData;
      },
      on(callback: (trigger: EventTrigger, value?: Value) => void) {
        this.emit = callback;
      },
      getProps() {
        return getValueFromProps(this);
      },
      ...methods,
    },
  } as IMixin4Legacy<
    {
      formData: {
        value: Value;
      } & ValidatorStatus;
    },
    Record<string, any>,
    {
      emit(trigger: EventTrigger, value?: Value): void;
      setFormData(values: Values): void;
      getFormData(): {
        value: Value;
      } & ValidatorStatus;
      on(callback: (trigger: EventTrigger, value?: Value) => void): void;
      getProps: Record<string, any>;
    }
  >;
  /// #if WECHAT
  // @ts-ignore
  mixin = Behavior(mixin);
  /// #endif

  return mixin;
}
