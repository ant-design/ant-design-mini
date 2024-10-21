import { signal } from '@preact/signals-core';
var SharedStore = /** @class */ (function () {
    function SharedStore() {
        this.currentLang = signal('zh_CN');
    }
    Object.defineProperty(SharedStore.prototype, "exclamation", {
        get: function () {
            return this.currentLang.value === 'zh_CN' ? '！' : '!';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SharedStore.prototype, "toastContent", {
        get: function () {
            return ((this.currentLang.value === 'zh_CN'
                ? '已切换到中文'
                : 'Switched to English') + this.exclamation);
        },
        enumerable: false,
        configurable: true
    });
    SharedStore.prototype.switchLang = function () {
        if (this.currentLang.value === 'zh_CN') {
            this.currentLang.value = 'en_US';
        }
        else {
            this.currentLang.value = 'zh_CN';
        }
    };
    return SharedStore;
}());
export default new SharedStore();
