import { signal } from '@preact/signals-core';
import zhCN from '../_locale/zh-CN';
var SharedStore = /** @class */ (function () {
    function SharedStore() {
        // 当前语种
        this.currentLocale = signal(zhCN);
        // 当前主题
        this.currentTheme = signal('light');
        // 语种全局切换标记
        this.localeChangeFlag = signal(false);
        // 主题全局切换标记
        this.themeChangeFlag = signal(false);
    }
    // 切换语言, 确保每个page只能切换一次
    SharedStore.prototype.switchLocale = function (locale) {
        if (!this.localeChangeFlag.value && locale !== this.currentLocale.value) {
            this.currentLocale.value = locale;
            this.localeChangeFlag.value = true;
        }
    };
    // 切换主题, 确保每个page只能切换一次
    SharedStore.prototype.switchTheme = function (theme) {
        if (!this.themeChangeFlag.value && theme !== this.currentTheme.value) {
            this.currentTheme.value = theme;
            this.themeChangeFlag.value = true;
        }
    };
    return SharedStore;
}());
export default new SharedStore();
