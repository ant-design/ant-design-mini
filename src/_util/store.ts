import { signal } from '@preact/signals-core';
import enUS from '../_locale/en-US';
import { Locale } from '../_locale/index';

class SharedStore {
  currentLocale = signal<Locale>(enUS);
  // 切换语言
  switchLocale(locale: Locale) {
    this.currentLocale.value = locale;
  }
}

export default new SharedStore();
