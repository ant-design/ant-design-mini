import { signal } from '@preact/signals-core';

class SharedStore {
  currentLang = signal<'zh_CN' | 'en_US'>('zh_CN');

  get exclamation() {
    return this.currentLang.value === 'zh_CN' ? '！' : '!';
  }

  get toastContent() {
    return (
      (this.currentLang.value === 'zh_CN'
        ? '已切换到中文'
        : 'Switched to English') + this.exclamation
    );
  }
  switchLang() {
    if (this.currentLang.value === 'zh_CN') {
      this.currentLang.value = 'en_US';
    } else {
      this.currentLang.value = 'zh_CN';
    }
  }
}

export default new SharedStore();
