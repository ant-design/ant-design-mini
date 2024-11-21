/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';
import { createHash } from 'crypto';
import type { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

function extractEmotionStyle(html: string) {
  if (html === undefined) {
    throw new Error('Did you forget to return html from renderToString?');
  }

  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  if (!css) return [];

  return [
    {
      key: cache.key,
      ids,
      css,
      tag: `<style data-emotion="${cache.key} ${ids.join(' ')}">${css}</style>`,
    },
  ];
}

export const getHash = (str: string, length = 8) =>
  createHash('md5').update(str).digest('hex').slice(0, length);

const dumiThemeUmiPlugin = (api: IApi) => {
  const writeCSSFile = (key: string, hashKey: string, cssString: string) => {
    const fileName = `style-${key}.${getHash(hashKey)}.css`;

    const filePath = path.join(api.paths.absOutputPath, fileName);

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, cssString, 'utf8');
    }

    return fileName;
  };

  const addLinkStyle = (html: string, cssFile: string, prepend = false) => {
    const prefix = api.userConfig.publicPath || api.config.publicPath;

    if (prepend) {
      return html.replace(
        '<head>',
        `<head><link rel="stylesheet" href="${prefix + cssFile}">`
      );
    }

    return html.replace(
      '</head>',
      `<link rel="stylesheet" href="${prefix + cssFile}"></head>`
    );
  };

  // add ssr css file to html
  api.modifyConfig((memo) => {
    // 将 .dumrc 中 ssr 配置注入 themeConfig 中，便于页面获取
    memo.themeConfig.ssr = memo.ssr;

    return memo;
  });

  api.modifyExportHTMLFiles((files) => {
    if (api.config?.ssr) {
      const nextFiles = files
        // exclude dynamic route path, to avoid deploy failed by `:id` directory
        .filter((f) => !f.path.includes(':'))
        .map((file) => {
          let globalStyles = '';

          // Debug for file content: uncomment this if need check raw out
          // const tmpFileName = `_${file.path.replace(/\//g, '-')}`;
          // const tmpFilePath = path.join(api.paths.absOutputPath, tmpFileName);
          // fs.writeFileSync(tmpFilePath, file.content, 'utf8');

          // extract all emotion style tags from body
          file.content = file.content.replace(
            /<style (data-emotion|data-sandpack)[\S\s]+?<\/style>/g,
            (s) => {
              globalStyles += s;

              return '';
            }
          );

          // insert emotion style tags to head
          file.content = file.content.replace(
            '</head>',
            `${globalStyles}</head>`
          );

          // 1. 提取 emotion 样式
          const styles = extractEmotionStyle(file.content);

          // 2. 提取每个样式到独立 css 文件
          styles.forEach((result) => {
            const cssFile = writeCSSFile(
              result.key,
              result.ids.join(''),
              result.css
            );
            file.content = addLinkStyle(file.content, cssFile);
          });

          // Insert antd style to head
          const matchRegex = /<style data-type="antd-cssinjs">(.*?)<\/style>/;
          const matchList = file.content.match(matchRegex) || [];

          let antdStyle = '';

          matchList.forEach((text) => {
            file.content = file.content.replace(text, '');
            antdStyle += text.replace(matchRegex, '$1');
          });

          const cssFile = writeCSSFile('antd', antdStyle, antdStyle);
          file.content = addLinkStyle(file.content, cssFile, true);

          // Insert antd cssVar to head
          const cssVarMatchRegex =
            /<style data-type="antd-css-var"[\S\s]+?<\/style>/;
          const cssVarMatchList = file.content.match(cssVarMatchRegex) || [];

          cssVarMatchList.forEach((text) => {
            file.content = file.content.replace(text, '');
            file.content = file.content.replace('<head>', `<head>${text}`);
          });

          return file;
        });

      return nextFiles;
    }
    return files;
  });

  api.registerPlugins([require.resolve('./plugin/techStack.ts')]);
};

export default dumiThemeUmiPlugin;
