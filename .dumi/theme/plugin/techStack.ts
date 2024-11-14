import type { IApi } from 'dumi';
import { winPath } from 'dumi/plugin-utils';
import type { IDumiTechStack } from 'dumi/tech-stack-utils';
import fs from 'fs';
import path from 'path';
import getSourceCode from '../../../scripts/getSourceCode';

class AntdTechStack implements IDumiTechStack {
  name = 'antd';

  constructor(opts: {}) {}

  /**
   * 仅将指向 demo/pages 目录的 code 标签当做 Antd demo
   */
  isSupported(...[node]: Parameters<IDumiTechStack['isSupported']>) {
    return (
      typeof node.properties?.src === 'string' &&
      node.properties.src.includes('demo/pages')
    );
  }

  /**
   * 将 code 的渲染结果替换为空的占位组件，因为实际的渲染会交给 openbox
   */
  transformCode() {
    return `import React from 'react';

export default () => React.createElement(React.Fragment, null, 'Antd demo 暂不支持独立预览');
`;
  }

  /**
   * 生成传递给 Previewer 组件的 props
   */
  generatePreviewerProps(
    // @ts-ignore
    ...[props, opts]: Parameters<IDumiTechStack['generatePreviewerProps']>
  ) {
    // console.log('generatePreviewerProps', props, opts);

    const env = process.env.NODE_ENV;
    // 实例文件的绝对路径
    props.fileAbsPath = opts.fileAbsPath;
    // 环境变量信息
    props.env = env;
    if (props.filename.includes('demo/pages')) {
      // demo/pages/Button/index.ts
      const pageElem = props.filename.split('/');
      pageElem.shift();

      const folder = pageElem.slice(0, -1).join('/') + '/';
      const page = pageElem.join('/').replace(/\.(ts|js)$/, '');
      props.herboxUrl = `/preview.html?page=${page}&folder=${folder}&theme=light&compilerServer=${
        process.env.SERVER || ''
      }`;
    }
    return props;
  }

  /**
   * 生成 Antd demo 的元数据
   * @note  由于源码展示也一并交给 openbox 而不是 dumi，所以这份元数据主要作用是生成 assets.json
   */
  generateMetadata(
    // @ts-ignore
    ...[asset, opts]: Parameters<IDumiTechStack['generateMetadata']>
  ) {
    const deps: typeof asset.dependencies = {};

    // 生成源码元数据
    // Object.entries(
    //   // @ts-ignore
    //   getBlockDepsFiles(this.pkgName, path.dirname(opts.fileAbsPath))
    // ).forEach(([file, args]) => {
    //   deps[file] = {
    //     type: 'FILE',
    //     value: args.content,
    //   };
    // });

    return {
      ...asset,
      dependencies: deps,
    };
  }
}

/**
 * 注册 Antd 技术栈到 Kit，用于将文档中的 code 渲染成 Antd 的 demo
 */
export default async (api: IApi) => {
  api.describe({ key: 'antd-lib:tech-stack' });

  // 注册技术栈
  api.registerTechStack(() => new AntdTechStack({}));

  // 替换默认的 Previewer 组件
  // @ts-ignore
  api.modifyTheme((memo) => {
    memo.builtins.Previewer.source = winPath(
      require.resolve('../builtins/Previewer/index.tsx')
    );

    return memo;
  });

  api.addBeforeMiddlewares(() => [
    (req, res, next) => {
      if (req.path === '/preview.html') {
        fs.createReadStream(
          path.join(__dirname, '../builtins/iframe.html')
        ).pipe(res);
        return;
      }
      if (req.path === '/code.html') {
        fs.createReadStream(path.join(__dirname, '../builtins/code.html')).pipe(
          res
        );
        return;
      }
      if (req.path.startsWith('/sourceCode/')) {
        const page = req.path.replace('/sourceCode/', '');
        getSourceCode({
          page,
          theme: req.query.theme,
          platform: req.query.platform,
        }).then((json) => res.json(json));
        return;
      }
      if (req.url === '/mini/packageInfo.json') {
        res.json({});
        return;
      }
      next();
    },
  ]);
};
