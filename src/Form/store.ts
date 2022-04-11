
import Schema from 'async-validator';
import EventEmitter from '../_util/eventEmitter'
export class FormStore extends EventEmitter {
  private formData: Record<string, any>;
  private errorInfo: Record<string, any>;
  private rules:  Record<string, any>;
  private validator: any

  constructor() {
    super();
    this.formData = {
    };
    this.errorInfo = {
    };
    this.rules = {};
    this.validator = null;
  }

  onValuesChange(cb) {
    this.addListener('valuesChange', cb);
  }

  offValuesChange(cb) {
    this.removeListener('valuesChange', cb);
  }

  emitValuesChange(changedValue, allValue, options) {
    this.emit('valuesChange', changedValue, allValue, options);
  }

  setFieldsValue(values = {}, options = {}) {
    Object.keys(values).forEach(key => {
      this.formData[key] = values[key];
    });
    this.emitValuesChange(values, this.formData, options);
  }

  getFieldsValue() {
    return this.formData;
  }

  getFieldValue(fieldName) {
    return this.formData[fieldName]
  }

  setFieldRules(fieldName, rule) {
    this.rules[fieldName] = rule;
  }

  initValidator() {
    const { rules } = this;
    this.validator = new Schema(rules);
  }

  onErrorInfoChange(cb) {
    this.addListener('errorInfoChange', cb);
  }

  offErrorInfoChange(cb) {
    this.removeListener('errorInfoChange', cb);
  }

  emitErrorInfoChange(errorInfo, fieldName) {
    this.emit('errorInfoChange', errorInfo, fieldName);
  }

  setErrorInfo(errorInfo,  options) {
    const fieldName  = options?.fieldName
    // 如果指定了fieldName，只更新该field下的errorInfo
    if (fieldName) {
      this.errorInfo[fieldName] = errorInfo[fieldName]
    } else {
      this.errorInfo = errorInfo;
    }
    this.emitErrorInfoChange(errorInfo, options);
  }

  validate(options?: Record<string, any>): Promise<{ valid: boolean, errors?: Record<string, any>}> {
    return new Promise(resovle => {
      const allValues = this.getFieldsValue();
      this.validator.validate(allValues).then(() => {
        this.setErrorInfo({}, options);
        resovle({
          valid: true,
        });
      }).catch(({ fields: errorInfo }) => {
        this.setErrorInfo(errorInfo, options);
        resovle({
          valid: false,
          errors: errorInfo,
        });
      });
    });
  }

  onSubmit(cb) {
    this.addListener('submit', cb);
  }

  offSubmit(cb) {
    this.removeListener('submit', cb);
  }

  emitSubmit() {
    this.emit('submit');
  }

}

type params  =  {
  uid?: string,
  pageId?: string
}

const formStoreFactory = (() => {
  const instances = {};
  const defaultUid = 'the-one';
  // page级别是不是uniqueForm
  const getPageFormCount = function({ pageId }: params) {
    const uids = Object.keys(instances);
    return uids.filter(key => key.indexOf(`${pageId}-`) >  -1).length

  }
  const checkDuplicate = function({ uid, pageId }:  params) {
    const uids = Object.keys(instances);
    return uids.some(key  => key  === `${pageId}-${uid}`)
  }

  return {
    createStore({ uid, pageId }: params)  {
      const count  = getPageFormCount({ pageId })
      const isUniqueForm = count  === 0
      if (isUniqueForm) {
        const key = `${pageId}-${uid || defaultUid}`
        instances[key] = new FormStore()
        return instances[key]
      }
      if (!uid) {
        throw Error('页面存在多个form, 需指定form属性，确定唯一uid')
      }
      const isDuplicated = checkDuplicate({ uid, pageId })
      if (isDuplicated) {
        throw Error(`页面存在多个form, 已存在uid为${uid}的Form`)
      }
      const key = `${pageId}-${uid}`
      instances[key] = new FormStore()
      return instances[key]
    },
  
    getStore({ uid, pageId }: params)  {
      const count  = getPageFormCount({ pageId })
      const isUniqueForm = count === 1
      if (!isUniqueForm && !uid) {
        throw Error('页面存在多个form, 需指定form属性，确定唯一uid')
      }
      const key = `${pageId}-${uid || defaultUid}`
      const instance = instances[key]
      if (!instance) {
        throw Error(`页面没有uid${uid}的Form`)
      }
      return instance
    },
  
    destroyStore({ uid, pageId }: params) {
      const key = `${pageId}-${uid || defaultUid}`
      delete instances[key]
    }
  }
})();

export default formStoreFactory;
