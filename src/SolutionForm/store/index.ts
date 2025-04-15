import { createStore } from '@alipay/merchant-base-mini';
import {
  findFieldInfoByField,
  getFormItemArr,
  getGroupRelationInfo,
  getPathArr,
  getValidator,
} from './helper';
import {
  unset,
  get,
  set,
  cloneDeep,
  startsWith,
} from 'lodash';
import { State } from '../Interface/store';

const STORE_MAP = {};

const originalState: State = {
  // 提取的表单schema里面的全局配置信息
  formRenderPropsConfig: {},
  // 表单数据
  formData: {},
  // 表单的schema信息 存在store方便后续的表单联动更改
  schemaData: {},
  // 当前改变的表单数据
  changeFormData: {},
  // schema转化后的表单渲染数据
  subSchemaArr: [],
  // 表单错误信息
  errorInfo: {},
  // 表单项的校验规则
  rules: {},
  // 表单项key列表
  fields: [],
  // 是否存在分组
  hasGroup: false,
};

const getStoreInstance = () => {
  const store = createStore({
    state: {
      ...originalState,
    },
    mutations: {
      // 通用的改变store-state的方法
      setState(state, payload) {
        Object.assign(state, payload);
      },
      setFields(state, payload) {
        const _fields = [...state.fields];
        const index = _fields.indexOf(payload);
        if (index < 0) {
          _fields.push(payload);
        } else {
          _fields.splice(index, 1);
        }
        Object.assign(state, {
          fields: _fields,
        });
      },
      setFieldRules(state, payload) {
        const _rules = { ...state.rules };
        set(_rules, payload.fieldName, payload.rule);
        Object.assign(state, {
          rules: _rules,
        });
      },
      setFieldsError(state, payload) {
        const errorInfo = cloneDeep(state.errorInfo || {});

        if (payload.option?.resetAll) {
          Object.assign(state, {
            errorInfo: { ...payload.errorInfo },
          });
          return;
        }
        const paths = getPathArr(payload.errorInfo || {}, state.hasGroup);

        paths.forEach((path) => {
          const preError = get(errorInfo, path, []);
          const _error = get(payload.errorInfo, path);

          // 过滤message不存在的数据
          const infoList = (Array.isArray(_error) ? _error : [_error]).filter(
            (item) => !!item.message,
          );
          if (payload.option?.resetField) {
            set(errorInfo, path, infoList);
            return;
          }
          const messageList = preError.map((item) => item.message);
          // 如果message不存在则不更新错误信息
          const list = infoList.filter(
            (item) => messageList.indexOf(item.message) < 0,
          );
          // 如果当前表单项已经有相同message的错误信息 则不设置进
          set(errorInfo, path, [...list, ...preError]);
        });

        Object.assign(state, {
          errorInfo,
        });
      },
      // 设置表单的内容
      setFieldsValue(state, payload) {
        const _formData = { ...state.formData };
        const paths = getPathArr(payload || {}, state.hasGroup);
        paths.forEach((path) => {
          set(_formData, path, get(payload, path));
        });
        Object.assign(state, {
          formData: _formData,
          changeFormData: payload,
        });
      },
      // 重置表单内容
      resetFieldsValue(state, payload) {
        Object.assign(state, {
          formData: payload,
          changeFormData: payload,
        });
      },
      // 移除表单错误信息 接收表单的key列表
      removeFieldsError(state, payload = []) {
        const errorInfo = { ...state.errorInfo };
        payload.forEach((item) => unset(errorInfo, item));
        Object.assign(state, {
          errorInfo,
        });
      },
      // 当前表单分组不展示的时候移除分组下field在store的数据 包含errorInfo formData rules fields
      removeGroupField(state, groupFieldName) {
        const { formData, errorInfo, rules, fields } = cloneDeep(state);
        unset(formData, groupFieldName);
        unset(errorInfo, groupFieldName);
        unset(rules, groupFieldName);

        Object.assign(state, {
          formData,
          errorInfo,
          rules,
          fields: fields.filter(
            (item) => !startsWith(item, `${groupFieldName}.`),
          ),
        });
      },
      removeField(state, fieldName) {
        const { formData, rules, errorInfo, fields } = cloneDeep(state);

        unset(formData, fieldName);
        unset(rules, fieldName);
        unset(errorInfo, fieldName);

        fields.splice(fields.indexOf(fieldName), 1);

        Object.assign(state, {
          formData,
          rules,
          fields,
          errorInfo,
        });
      },
      // 更新表单的schema信息
      updateSchema(state, { schema }) {
        const { properties, ...otherProps } = schema;

        const subSchemaArr = Object.keys(properties || {})
          .map((key) => ({
            title: properties[key]?.title || '',
            className: properties[key]?.className || '',
            // 优先级去schema的path 如果没有配置则去对象的key
            path: `${key}`,
            // 分组类型
            widget: properties[key]?.widget || '',
            config: properties[key]?.props || {},
            // 分组的布局可以自己设置
            displayType: properties[key]?.displayType || '',
            // 分组的额外信息
            extra: properties[key]?.extra || {},
            // 是否展示
            visible: properties[key]?.visible,
            // 有group的场景才展示
            ...(properties[key].properties
              ? getGroupRelationInfo(properties[key], state.formData)
              : {}),
            ...(properties[key].properties
              ? {
                  formItemArr: getFormItemArr(
                    properties[key].properties,
                    key,
                    state.formData,
                  ).map((item) => ({
                    ...item,
                    groupTitle: properties[key]?.title || '',
                  })),
                }
              : {
                  ...properties[key],
                  visible: properties[key].visible !== false,
                  // 表单项的key优先取schema的path 默认group.key的形式
                  path: `${key}`,
                  ...(properties[key]?.relation
                    ? properties[key].relation(state.formData)
                    : {}),
                }),
          }))
          .sort((a, b) => a.order - b.order);

        Object.assign(state, {
          subSchemaArr,
          hasGroup: !!subSchemaArr[0]?.formItemArr,
          schemaData: schema,
          formRenderPropsConfig: {
            ...otherProps,
          },
        });
      },
    },

    actions: {
      /**
       * 表单项更新识别配置进行校验
       * 表项项存在非空校验 && 有错误提示 && 当前输入有值 =》触发当前项的校验
       * 项项存在非空校验 && 当前输入内容为空  =》触发当前项的校验
       * 当前表单项存在实时校验 validateOption.immediate =》触发当前项的校验
       */
      async handleFieldValueChange({ dispatch, state }) {
        const {
          changeFormData = {},
          subSchemaArr,
          rules = {},
          hasGroup,
        } = state;

        const paths = getPathArr(changeFormData, hasGroup);
        paths.forEach((path) => {
          const value = get(state.formData, path);
          // @ts-ignore
          const requiredRule = get(rules, path, []).find(
            (item) => item.required,
          );

          let isValidate = false;
          if (requiredRule) {
            if (requiredRule.fields) {
              isValidate = true;
            }
            if (!value) {
              // 存在必填校验 并且当前表单项为空触发校验
              isValidate = true;
            }
            const hasRequiredError = get(state.errorInfo, path, []).find(
              (item) => item.message === requiredRule.message,
            );

            // 存在必填校验 并且有校验为空的错误 同时当前输入了内容 重新触发校验
            if (hasRequiredError && value) {
              isValidate = true;
            }
          }

          const fieldInfo = findFieldInfoByField(path, subSchemaArr);

          // schema 配置了立即校验的场景表单项更改的时候触发校验
          if (fieldInfo?.validateOption?.immediate) {
            isValidate = true;
          }

          if (isValidate) {
            dispatch('validate', {
              useSingleKey: true,
              validateFields: [path],
            });
          }
        });
      },
      validate({ state, commit }, payload) {
        const {
          formData = {},
          hasGroup,
          errorInfo: originErrorInfo,
        } = cloneDeep(state);
        const validateFields = payload?.validateFields || Object.keys(formData);
        return new Promise((resolve) => {
          const allValues = {};
          const paths = getPathArr(formData, hasGroup);
          // eslint-disable-next-line no-return-assign
          paths.forEach((path) => (allValues[path] = get(formData, path)));

          const [currentKey] = validateFields;
          const validateActions = getValidator(
            { rules: state.rules, hasGroup: state.hasGroup },
            payload?.useSingleKey ? currentKey : '',
          );

          validateActions
            .validate(allValues, {
              suppressWarning: true,
              first: false,
              firstFields: [],
            })
            .then(() => {
              // 不展示错误信息的场景不需要更新全局的错误信息，用于表单改变判断当前表单校验是否通过的场景
              if (!payload?.notSetError) {
                // 校验通过 清空错误信息
                let errorInfo = originErrorInfo;
                if (payload?.useSingleKey) {
                  unset(errorInfo, currentKey);
                } else {
                  errorInfo = {};
                }
                commit('setState', { errorInfo: { ...errorInfo } });
              }
              resolve({
                valid: true,
              });
            })
            .catch(async ({ fields: errorInfo = {} }) => {
              const _errorInfo = {};
              // eslint-disable-next-line guard-for-in
              for (const errorItem in errorInfo) {
                const field = errorItem.split('.').slice(0, 2).join('.');
                const errorItemInfo = errorInfo[errorItem];
                // 错误信息存在message才进行后续更新操作
                set(
                  _errorInfo,
                  field,
                  errorItemInfo.filter((item) => item.message),
                );
              }
              if (!payload?.notSetError) {
                commit('setFieldsError', {
                  errorInfo: { ..._errorInfo },
                  option: {
                    resetField: true,
                    resetAll:
                      !payload?.validateFields && !payload?.useSingleKey,
                  },
                });
              }
              resolve({
                valid: false,
                errors: { ...errorInfo },
              });
            });
        });
      },
    },
  });
  return store;
};

export const destroyStore = () => {
  const pages = getCurrentPages?.() || [];
  const currentPage = pages[pages.length - 1];
  // @ts-ignore
  const { $viewId } = currentPage;

  STORE_MAP[$viewId] = null;
};

export const getStore = () => {
  const pages = getCurrentPages?.() || [];
  const currentPage = pages[pages.length - 1];
  // @ts-ignore
  const { $viewId } = currentPage;

  if (!STORE_MAP[$viewId]) {
    STORE_MAP[$viewId] = getStoreInstance();
  }

  return STORE_MAP[$viewId];
};
