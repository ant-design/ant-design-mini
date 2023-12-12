import * as babel from '@babel/core';
import { exportDefaultToModuleExports } from './babel-plugin-export-default-to-module-exports';

export async function transformTsxJS(
  code,
  option?: {
    forceCommonjs?: boolean;
  }
) {
  const babelConfig: any = {
    filename: 'code.ts',
    presets: [
      [
        '@babel/preset-env',
        {
          // 仍然需要保留 export default
          modules: false,
          exclude: ['@babel/plugin-transform-typeof-symbol'],
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [],
  };
  if (option?.forceCommonjs) {
    babelConfig.plugins.push(exportDefaultToModuleExports);
  }
  const result = await babel.transformAsync(code, babelConfig);
  return result.code;
}
