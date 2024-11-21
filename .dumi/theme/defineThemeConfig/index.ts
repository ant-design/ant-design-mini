import type { IAllThemeConfig } from '../types';

/**
 * @description provider declaration of config files
 * @param {ThemeConfig} config theme config
 * @returns {ThemeConfig}
 */
export function defineThemeConfig(config: Partial<IAllThemeConfig>): Partial<IAllThemeConfig> {
  return config;
}
