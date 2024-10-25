import { signal } from '@preact/signals-core';
import zhCN from '../_locale/zh_CN';
var SharedStore = /** @class */ (function () {
    function SharedStore() {
        this.currentLocale = signal(zhCN);
    }
    // 切换语言
    SharedStore.prototype.switchLocale = function (locale) {
        this.currentLocale.value = locale;
    };
    return SharedStore;
}());
export default new SharedStore();
