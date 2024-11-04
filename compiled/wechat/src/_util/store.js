import { signal } from '@preact/signals-core';
import enUS from '../_locale/en-US';
var SharedStore = /** @class */ (function () {
    function SharedStore() {
        this.currentLocale = signal(enUS);
    }
    // 切换语言
    SharedStore.prototype.switchLocale = function (locale) {
        this.currentLocale.value = locale;
    };
    return SharedStore;
}());
export default new SharedStore();
