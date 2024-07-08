import * as types from '@ali/oxyde-compiler-generator';

export interface IRegExp {
  test(str: string): boolean;
}

export type IFunction = (filename: string) => boolean;

export interface TransformCompilerOption {
  removeStart: string | IRegExp | IFunction;
  removeEnd: string | IRegExp | IFunction;
  include?: string | IRegExp | IFunction;
  exclude?: string | IRegExp | IFunction;
}

function conditionMatches(
  condition: string | IRegExp | IFunction,
  input: string
) {
  switch (typeof condition) {
    case 'string':
      return input.includes(condition);
    case 'function':
      return condition(input);
    case 'object':
      return condition.test && condition.test(input);
  }
  return false;
}
function commentMatches(
  path: types.ElementPath | types.TextPath,
  condition: string | IRegExp | IFunction
) {
  const { leadingComments } = path.node;
  if (leadingComments) {
    const index = leadingComments.findIndex((actual) =>
      conditionMatches(condition, actual)
    );
    path.node.leadingComments = []; // 注释全部删掉
    if (index >= 0) {
      // const clone = leadingComments.slice();
      // clone.splice(index, 1);
      // path.node.leadingComments = clone;
      return true;
    }
  }
}

const RemoveElementText = (
  current: types.ElementPath | types.TextPath,
  conditionComment
) => {
  if (commentMatches(current, conditionComment.removeStart)) {
    while (current) {
      const sibling = current.nextSibling;
      current.remove();
      if (sibling && commentMatches(sibling, conditionComment.removeEnd)) {
        break;
      }
      current = sibling;
    }
  }
};

export default function ({ conditionComment }) {
  return {
    Element: {
      enter(element, state) {
        RemoveElementText(element, conditionComment);
      },
    },
    Text: {
      enter(text, state) {
        RemoveElementText(text, conditionComment);
      },
    },
  };
}
