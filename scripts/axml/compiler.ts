import * as types from '@ali/oxyde-compiler-generator';
import { deepmerge } from 'deepmerge-ts';
import { basicComponetMapping } from './basicComponet';
import {
  trimTextPlugin,
  templateDataPlugin,
  elementDatasetPlugin,
  keyAttributePlugin,
  conditionCommentPlugin,
} from './plugins';
import { TransformCompilerOption } from './plugins/condition-comment-plugin';

export interface Visitor {
  enter: Array<Function>;
  exit: Array<Function>;
}

export interface PluginVisitors {
  Program: Visitor;
  Element: Visitor;
  Text: Visitor;
  Attribute: Visitor;
  Interpolation: Visitor;
}

export class TransformCompiler {
  private code: string;
  private options: {
    mapping: Record<string, any>;
    conditionComment: TransformCompilerOption;
    platform?: 'WECHAT' | 'ALIPAY' | string;
    plugins?: any;
  };
  private platform: 'WECHAT' | 'ALIPAY' | string;
  private pluginVisitors: PluginVisitors = {
    Program: {
      enter: [],
      exit: [],
    },
    Element: {
      enter: [],
      exit: [],
    },
    Text: {
      enter: [],
      exit: [],
    },
    Attribute: {
      enter: [],
      exit: [],
    },
    Interpolation: {
      enter: [],
      exit: [],
    },
  };

  constructor(options = { platform: 'ALIPAY' }) {
    this.platform = options.platform;

    this.options = deepmerge(
      {
        mapping:
          this.platform === 'WECHAT'
            ? {
                '*': {
                  'a:elif': 'wx:elif',
                  'a:else': 'wx:else',
                  'a:for': 'wx:for',
                  'a:for-index': 'wx:for-index',
                  'a:for-item': 'wx:for-item',
                  'a:if': 'wx:if',
                  'a:key': 'wx:key',
                  role: 'aria-role',
                },
                'import-sjs': {
                  '*': 'wxs',
                  from: 'src',
                  name: 'module',
                },
                ...basicComponetMapping,
              }
            : {},
        conditionComment: {
          // include: string | RegExp | Function => 仅处理匹配文件
          // exclude: string | RegExp | Function => 不处理匹配文件
          removeStart(v) {
            // 注释内容为入参，返回 true 时表示开始剪枝
            return /#if\s+(?!WECHAT)/.test(v);
          },
          removeEnd(v) {
            // 注释内容为入参，返回 true 时表示停止剪枝
            return /#endif/.test(v);
          },
        },
        plugins:
          this.platform === 'WECHAT'
            ? [
                trimTextPlugin,
                templateDataPlugin,
                elementDatasetPlugin,
                keyAttributePlugin,
                conditionCommentPlugin,
              ]
            : [],
      },
      options
    );
    this.injectPlugin();
  }

  injectPlugin() {
    const { plugins } = this.options;
    plugins.forEach((plugin) => {
      const realPlugin =
        typeof plugin === 'function' ? plugin(this.options) : plugin;
      Object.keys(realPlugin).forEach((visitor) => {
        if (
          ![
            'Program',
            'Element',
            'Text',
            'Attribute',
            'Interpolation',
          ].includes(visitor)
        ) {
          console.warn(
            `插件中只能传入visitor: Program、Element、Text、Attribute、Interpolation`
          );
          return;
        }
        const receptor = this.pluginVisitors[visitor];
        if (typeof realPlugin[visitor] === 'function') {
          receptor.enter.push(realPlugin[visitor]);
        }
        if (
          realPlugin[visitor].enter &&
          typeof realPlugin[visitor].enter === 'function'
        ) {
          receptor.enter.push(realPlugin[visitor].enter);
        }
        if (
          realPlugin[visitor].exit &&
          typeof realPlugin[visitor].exit === 'function'
        ) {
          receptor.exit.push(realPlugin[visitor].exit);
        }
      });
    });
  }

  compile(code) {
    // 将模板内容解析成 AST
    const {
      /**
       * AST 节点。
       * 使用 types.traverse() 遍历转换，
       * 或者 types.stringify() 输出
       */
      ast,
      /**
       * 编译过程中发生的告警。
       * 建议修复
       */
      warnings,
    } = types.parse(code);
    if (warnings.length > 0) console.warn(JSON.stringify(warnings));

    const visitorsName = [
      'Program',
      'Element',
      'Text',
      'Attribute',
      'Interpolation',
    ];

    const visitor = visitorsName.reduce((acc, name) => {
      const _this = this;
      acc[name] = {
        enter(...args) {
          _this.pluginVisitors[name].enter.forEach((caller) => {
            typeof caller === 'function' && caller(...args);
          });
        },
        exit(...args) {
          _this.pluginVisitors[name].exit.forEach((caller) => {
            typeof caller === 'function' && caller(...args);
          });
        },
      };
      return acc;
    }, {});

    types.traverse(ast, visitor);
    // 然后将内容字符串化
    const transCode = types.stringify(ast);

    return transCode;
  }
}

export default TransformCompiler;
