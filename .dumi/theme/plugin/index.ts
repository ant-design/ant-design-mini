import type { IApi } from 'dumi';

export default (api: IApi) => {
  api.describe({
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    key: `dumi-theme:${require('../../../package.json').name}`
  });
  api.modifyDefaultConfig(
    (memo) =>
      Object.assign(memo, {
        cjs: {
          output: 'dist/defineThemeConfig',
          input: 'src/defineThemeConfig'
        }
      })
    // eslint-disable-next-line function-paren-newline
  );
};
