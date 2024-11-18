import { signal } from '@preact/signals-core';
import { Locale } from '../_locale/index';
import zhCN from '../_locale/zh-CN';

class SharedStore {
  // 当前语种
  currentLocale = signal<Locale>(zhCN);
  // 当前主题
  currentTheme = signal<'light' | 'dark'>('light');
  // 语种全局切换标记
  localeChangeFlag = signal<boolean>(false);
  // 主题全局切换标记
  themeChangeFlag = signal<boolean>(false);
  // 切换语言, 确保每个page只能切换一次
  switchLocale(locale: Locale) {
    if (!this.localeChangeFlag.value && locale !== this.currentLocale.value) {
      this.currentLocale.value = locale;
      this.localeChangeFlag.value = true;
    }
  }
  // 切换主题, 确保每个page只能切换一次
  switchTheme(theme: 'light' | 'dark') {
    if (!this.themeChangeFlag.value && theme !== this.currentTheme.value) {
      this.currentTheme.value = theme;
      this.themeChangeFlag.value = true;
    }
  }
}

export default new SharedStore();
