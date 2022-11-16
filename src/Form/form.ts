import AsyncValidator, { InternalRuleItem, Value, Values, Rules as RawRules, RuleItem, ValidateError, ValidateMessages } from 'async-validator';


export { Value, Values };
export type Validator = (
  rule: Omit<InternalRuleItem, 'validator' | 'asyncValidator'>,
  value: Value
) => void | Promise<void>;
export type ValidatorRender = (form: Form) => {
  validator: Validator,
};
export type FormRuleItem = Omit<RuleItem, 'asyncValidator'> | ValidatorRender;
export type Rule = FormRuleItem | FormRuleItem[];
export type Rules = Record<string, Rule>;
export type FormConfig = {
  rules?: Rules;
  initialValues?: Values;
  validateMessages?: ValidateMessages;
};
export enum ValidatorStatusEnum {
  Default = 'default',
  Success = 'success',
  Validating = 'validating',
  Error = 'error'
}
export interface ValidatorStatus {
  status: ValidatorStatusEnum;
  errors: string[];
}
export interface FromItemRef {
  setFormData: (values: Values) => void;
  getInitialValue: () => Value;
  getFormData: () => Values;
  getProps: () => Record<string, Value>;
  on: (callback: (trigger: EventTrigger, value?: Value) => void) => void;
}
export type ValidateTrigger = 'onChange' | 'onBlur' | 'onFocus';
export type EventTrigger = ValidateTrigger | 'didUnmount' | 'deriveDataFromProps';
class Field {
  /**
   * Field ref对象
   */
  private ref: FromItemRef;

  /**
   * 校验器
   */
   private validator: AsyncValidator;

  /**
   * 是否被用户操作过
   */
  private touched: boolean;


  /**
   * 触发验证的时机，submit不需要设置也会触发校验器
   */
  private validateTrigger: ValidateTrigger[];

  /**
   * Field change侦听
   */
  private changeListener = (value: Value) => {};

  /**
   * 组件unmount侦听
   */
  private  didUnmountListener = (replaceName?: string) => {};

  /**
   * Field构建
   * @param ref field ref对象
   * @param initialValue 初始值
   */
  constructor(ref: FromItemRef, initialValue: Value, validator: AsyncValidator, validateTrigger: ValidateTrigger | ValidateTrigger[]) {
    this.ref = ref;
    const props = ref.getProps(); 
    // validator
    const required = this.transformValidatorRules(validator, props.required, props.message);
    if (required) {
      ref.setFormData({
        required: true,
      });
    }
    // validateTrigger
    this.transformValidateTrigger(validateTrigger, props.validateTrigger);
    this.setValue(initialValue);
    ref.on((trigger, value) => {
      if (trigger === 'onChange') {
        this.setValue(value);
        this.touched = true;
        this.changeListener(value);
      } else if (trigger === 'didUnmount') {
        this.didUnmountListener();
      } else if (trigger === 'deriveDataFromProps') {
        const props = ref.getProps();
        if (value.name !== props.name) {
          this.didUnmountListener(value.name);
        } else if (value.required !== props.required || value.message !== props.message) {
          const required = this.transformValidatorRules(this.validator, value.required, value.message);
          if (required) {
            ref.setFormData({
              required: true,
            });
          }
        } else if (value.validateTrigger !== props.validateTrigger) {
          this.transformValidateTrigger(validateTrigger, value.validateTrigger);
        }
      }
      this.validateTrigger.forEach(item => {
        if (item === trigger) {
          this.validate();
        }
      });
    })
  }

  /**
   * 修改 validateTrigger
   * @param validateTrigger 
   */
  private transformValidateTrigger(validateTrigger: ValidateTrigger | ValidateTrigger[], propsValidateTrigger: ValidateTrigger | ValidateTrigger[]) {
    const arr: ValidateTrigger[] = [];
    let validateTriggerArr: ValidateTrigger[];
    let propsValidateTriggerArr: ValidateTrigger[];
    if (Array.isArray(validateTrigger)) {
      validateTriggerArr = validateTrigger;
    } else {
      validateTriggerArr = validateTrigger ? [validateTrigger] : [];
    }
    if (Array.isArray(propsValidateTrigger)) {
      propsValidateTriggerArr = propsValidateTrigger;
    } else {
      propsValidateTriggerArr = propsValidateTrigger ? [propsValidateTrigger] : [];
    }
    validateTriggerArr.forEach(item => {
      if (arr.indexOf(item) < 0) {
        arr.push(item);
      }
    });
    propsValidateTriggerArr.forEach(item => {
      if (arr.indexOf(item) < 0) {
        arr.push(item);
      }
    });
    if (arr.length === 0) {
      arr.push('onChange');
    }
    this.validateTrigger = arr;
  }

  /**
   * 修改 Validator
   * @param required 传入required
   * @param message 传入错误信息
   */
  private transformValidatorRules(validator: AsyncValidator, required: boolean, message: string) {
    const name = this.ref.getProps().name;
    let requiredRule = false;
    if (validator) {
      const rules = validator.rules[name];
      const result = rules.find(item => item.required);
      if (result) {
        if (message) {
          result.message = message;
        }
        requiredRule = true;
      } else if (required) {
        rules.push({
          required,
          message: message,
        });
        requiredRule = true;
      }
      this.validator = validator;
    } else if (required) {
      this.validator = new AsyncValidator({
        [name]: {
          required,
          message: message,
        },
      });
      requiredRule = true;
    }
    return requiredRule;
  }


  /**
   * onChange 侦听
   * @param callback onChange 回调方法
   */
  onChange(callback: (value: Value) => void) {
    this.changeListener = callback;
  }

  /**
   * didUnmount 侦听
   * @param callback didUnmount 回调方法
   */
  didUnmount(callback: (replaceName?: string) => void) {
    this.didUnmountListener = callback;
  }

  /**
   * 设置 Field 值
   * @param value Field 值
   */
  setValue(value: Value) {
    this.ref.setFormData({
      value: typeof value === 'undefined' ? this.ref.getInitialValue() : value,
    });
  }

  /**
   * 得到 Field 值
   */
  getValue() {
    const value = this.ref.getFormData().value;
    if (typeof value === 'undefined') {
      return this.ref.getInitialValue();
    }
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
  getValidatorStatus() {
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
    const validatorStatusSuccess = {
      status: ValidatorStatusEnum.Success,
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
    try {
      this.setValidatorStatus({
        status: ValidatorStatusEnum.Validating,
        errors: []
      });
      await this.validator.validate({
        [this.ref.getProps().name]: value,
      });
      this.setValidatorStatus(validatorStatusSuccess);
      return {
        validatorStatus: validatorStatusSuccess,
        value,
      };
    } catch(err) {
      const errors: ValidateError[] = err.errors;
      const validatorStatus = {
        status: ValidatorStatusEnum.Error,
        errors: errors.map(({ message = '' }) => message),
      };
      this.setValidatorStatus(validatorStatus);
      return {
        validatorStatus,
        value,
      };
    }
  };

  /**
   * 重置 Field
   * @param initialValue 
   */
  reset(initialValue: Value) {
    let value = initialValue;
    if (typeof initialValue === 'undefined') {
      value = this.ref.getInitialValue();
    }
    this.setValue(value);
    this.setValidatorStatus({
      status: ValidatorStatusEnum.Default,
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
   private changeListeners: Record<string, ((value: Value) => void)[]> = {};

  /**
   * Form构建
   * @param formConfig 表单配置项
   */
  constructor(formConfig:FormConfig = {}) {
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
    Object.keys(rules).forEach(name => {
      const rule = rules[name];
      const list = result[name] = [];
      const arr = Array.isArray(rule) ? rule : [rule];
      arr.forEach(item => {
        if (typeof item === 'function') {
          list.push(item(this).validator);
        } else {
          list.push({
            ...item,
          });
        }
      })
    });
    return result;
  }

  /**
   * 遍历表单field对象
   * @param callback 
   */
  private eachField(callback: (field: Field, name: string) => void) {
    const fields = this.fields;
    Object.keys(fields).forEach(name => {
      const field = fields[name];
      callback(field, name);
    });
  }

  /**
   * 添加表单对象
   * @param ref 表单ref对象
   */
  addItem(ref: FromItemRef) {
    const props = ref.getProps();
    const name = props.name;
    if (!name) {
      throw new Error(`Form "addItem" need props "name"`);
    }
    if (this.fields[name]) {
      throw new Error(`Form "addItem" same name: "${name}"`);
    }
    const value = this.initialValues[name];
    let validator: AsyncValidator;
    const rule = this.rules[name];
    if (rule) {
      validator = new AsyncValidator({
        [name]: this.rules[name],
      });
      validator.messages(this.validateMessages);
    };
    const validatorTrigger = props.validatorTrigger;
    const field = this.fields[name] = new Field(ref, value, validator, validatorTrigger);
    field.onChange(value => {
      if (this.changeListeners[name]) {
        this.changeListeners[name].forEach(item => item(value));
      }
    })
    field.didUnmount((replaceName?: string) => {
      if (replaceName) {
        this.fields[replaceName] = this.fields[name];
        this.rules[replaceName] = this.rules[name];
      }
      delete this.fields[name];
      delete this.rules[name];
      delete this.changeListeners[name];
    });
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
    }
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
   * 更新 rules
   */
  setRules(rules: Rules) {
    this.rules = this.transformRules(rules);
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
   * 表单字段值更新时触发回调方法
   * @param name 表单字段名称
   * @param callback 回调方法
   */
  onValueChange(name: string, callback: (value: Value) => void) {
    this.changeListeners[name] = this.changeListeners[name] || [];
    this.changeListeners[name].push(callback);
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
      arr.push((async () => {
        return {
          ...await field.validate(),
          name,
        }
      })());
    });
    const result = await Promise.all(arr);
    const errorFields: {
      name: string;
      errors: string[];
    }[] = [];
    result.forEach(({ name, value, validatorStatus }) => {
      if (validatorStatus.status === ValidatorStatusEnum.Error) {
        errorFields.push({
          name,
          errors: validatorStatus.errors,
        })
      }
      values[name] = value;
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
      const initialValue = this.initialValues[name];
      field.reset(initialValue);
    });
  }
}
