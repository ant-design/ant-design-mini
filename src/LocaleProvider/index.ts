import { effect, signal } from '@preact/signals-core';
import { Component } from '../_util/simply';
import i18nController from '../_util/store';
import { LocaleProviderProps } from './props';

// 需要实现写入初始化zh_CN能力，并支持切换能力；

Component(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) =>
        store.currentLang.value === 'en_US' ? 'English' : '中文',
    },
  },
  {
    onInit() {
      const currentLang = signal<'zh_CN' | 'en_US'>('en_US');
      return currentLang;
    },
  },
  LocaleProviderProps,
  {
    handleClick() {
      i18nController.switchLang();
      my.showToast({
        content: i18nController.toastContent,
      });
    },
  }
);
