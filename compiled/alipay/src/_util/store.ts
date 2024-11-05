import { signal } from '@preact/signals-core';
import { Locale } from '../_locale/index';
import zhCN from '../_locale/zh-CN';

class SharedStore {
  currentLocale = signal<Locale>(zhCN);
  // 切换语言
  switchLocale(locale: Locale) {
    this.currentLocale.value = locale;
  }
}

export default new SharedStore();
