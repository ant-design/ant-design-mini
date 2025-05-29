import Validator from 'async-validator';
import { get } from 'lodash';
import { FormItem, Group } from '../Interface/schema';

export const getValidator = ({ rules, hasGroup }, key = '') => {
  const rule = get(rules, key);
  if (key && !rule) {
    return new Validator({});
  }
  let finalRules = {};

  if (key) {
    finalRules = {
      [key]: rule,
    };
  } else {
    const paths = getPathArr(rules, hasGroup);
    // eslint-disable-next-line no-return-assign
    paths.forEach((path) => (finalRules[path] = get(rules, path)));
  }

  return new Validator(finalRules);
};

export const getFormItemArr = (
  properties: Record<string, FormItem>,
  groupPath: string,
  formData: Record<string, any>,
  groupOption: Record<string, any>,
) => {
  const formItemArr = Object.keys(properties)
    .map((formItem) => {
      const { relation, path } = properties[formItem] || {};
      const newSchema = {
        ...properties[formItem],
        ...(relation ? relation(formData) : {}),
        // 表单项的key优先取schema的path 默认group.key的形式
        path: path || `${groupPath}.${formItem}`,
        requiredMarkStyle: properties[formItem].requiredMarkStyle || groupOption.requiredMarkStyle,
      };
      newSchema.visible = newSchema.visible !== false;
      return newSchema;
    })
    .sort((a, b) => a.order - b.order);
  return formItemArr;
};

export const findFieldInfoByField = (field: string, subSchemaArr: any[]) => {
  return subSchemaArr.reduce((pre, cur) => {
    if (pre) {
      return pre;
    }
    // 有分组场景
    if (cur.formItemArr) {
      return cur.formItemArr.find((item) => item.path === field);
    }
    // 无分组场景
    return cur.path === field ? cur : null;
  }, null);
};

export const getGroupRelationInfo = (formInfo: Group, formData) => {
  if (!formInfo.relation) {
    return {};
  }
  const relationInfo = formInfo.relation({ ...formData });
  if (relationInfo.props) {
    relationInfo.config = {
      ...(formInfo.props || {}),
      ...(relationInfo.props || {}),
    };
  }
  return relationInfo;
};

export const getPathArr = (obj: Record<string, any>, hasGroup: boolean) => {
  const paths = [];
  Object.keys(obj || {}).forEach((groupKey) => {
    if (hasGroup) {
      Object.keys(get(obj, groupKey, {})).forEach((field) => {
        const path = `${groupKey}.${field}`;
        paths.push(path);
      });
    } else {
      paths.push(groupKey);
    }
  });
  return paths;
};
