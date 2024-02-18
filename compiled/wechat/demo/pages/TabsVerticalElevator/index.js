var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Page({
    data: {
        current: 0,
        items: new Array(20).fill(0).map(function (_, i) {
            return {
                title: "\u7B2C".concat(i + 1, "\u9879"),
                content: 'Est voluptate sunt consequat laboris proident eu ut qui incididunt sint sint pariatur qui. Ut labore in duis labore cupidatat in ad quis duis aliquip irure occaecat officia reprehenderit consectetur. Enim consequat veniam nulla. Enim do nisi cillum aute pariatur ex dolor mollit ut nisi. Irure non pariatur anim Lorem ad do in elit irure minim exercitation. Dolor aliquip nisi adipisicing sunt adipisicing sunt nisi ad in non laboris in magna dolore. Fugiat aliqua labore elit occaecat consequat. Ipsum officia excepteur anim sint ipsum exercitation laborum. Excepteur exercitation ea occaecat cupidatat et consectetur exercitation non. Incididunt aliqua esse velit nisi ullamco. Do dolore ad ut. Esse ad tempor aliqua cillum consequat occaecat enim dolore enim aliquip aliquip irure. Id aliquip qui nulla dolor dolore et est. Non adipisicing mollit consequat magna sit laborum mollit nulla est consequat. Veniam in eu nisi ex sint deserunt ad sit consequat excepteur qui. Ea est sint adipisicing ea aliqua eiusmod amet pariatur officia ex voluptate. Consectetur in ipsum cillum nulla minim quis aute consequat. Et adipisicing officia nostrud id reprehenderit tempor. Laborum anim aliqua ut enim et pariatur elit tempor tempor incididunt deserunt nulla deserunt enim. Esse deserunt pariatur veniam sunt fugiat irure ullamco excepteur et Lorem. Sit adipisicing nisi consectetur nulla qui sint culpa. In aute cupidatat ad consequat proident est non sint ullamco dolor nisi irure fugiat amet deserunt. Laboris nostrud tempor aute non cillum magna labore ipsum duis ut dolor velit. Qui proident dolor occaecat consequat qui laboris sit est culpa excepteur aliqua pariatur veniam irure voluptate. Cillum adipisicing deserunt nisi quis anim fugiat ipsum incididunt veniam laboris et eiusmod minim. Tempor esse ex reprehenderit occaecat velit non do magna consequat consequat exercitation tempor elit. Ea pariatur irure laborum ipsum reprehenderit sunt sit minim excepteur pariatur magna deserunt aliqua velit non. Culpa irure dolore commodo quis do. Nulla ea consectetur ullamco deserunt laborum consectetur. Amet sunt in esse cupidatat excepteur veniam do. Est quis commodo consequat reprehenderit reprehenderit. Magna laboris dolor dolor laborum. Culpa officia dolor labore aute commodo ex nisi incididunt officia in aute incididunt voluptate. Do nisi dolore ea veniam adipisicing voluptate reprehenderit ea proident aliquip. Labore enim in minim. Aliquip cillum do consequat labore Lorem exercitation. Laborum anim aute in nisi aliqua nulla commodo nostrud laborum. Lorem cillum ut cillum laborum occaecat consequat elit duis. Dolore dolor deserunt nisi dolore laborum sit ea deserunt ipsum dolor ut sit minim. Reprehenderit esse consectetur dolore esse nostrud. Commodo laborum tempor magna cillum Lorem ad qui nisi consequat sit in amet veniam. Ex pariatur eiusmod labore aute id dolor et sunt cupidatat id et non proident enim sint. Duis duis id in et in incididunt Lorem veniam aliquip. Culpa duis deserunt eiusmod laborum labore ea non sit eu ipsum eu.',
            };
        }),
        scrollTop: 0,
    },
    updateRect: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Promise.all(this.data.items.map(function (item, index) {
                                return _this.getBoundingClientRect("#tab-item-".concat(index));
                            }))];
                    case 1:
                        _a.itemRectList = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getBoundingClientRect('#scroll-view')];
                    case 2:
                        _b.scrollViewRect = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    onReady: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateRect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    onChange: function (current) {
        current = current.detail;
        this.tap = true;
        this.setData({
            scrollTop: this.itemRectList[current].top -
                this.scrollViewRect.top +
                Math.random(),
            current: current,
        });
    },
    onTouchStart: function () {
        this.tap = false;
    },
    onScroll: function (e) {
        if (this.tap) {
            return;
        }
        this.scrollTop = e.detail.scrollTop;
        var scrollTop = this.scrollTop + this.itemRectList[0].top;
        for (var i = 0; i < this.itemRectList.length; i++) {
            var item = this.itemRectList[i];
            if (scrollTop > item.top &&
                (!this.itemRectList[i + 1] ||
                    scrollTop < this.itemRectList[i + 1].top) &&
                i !== this.data.current) {
                this.setData({
                    current: i,
                });
                return;
            }
        }
    },
    getBoundingClientRect: function (id) {
        if (typeof my === 'undefined') {
            return this.getInstanceBoundingClientRect(this, id);
        }
        return this.getInstanceBoundingClientRect(my, id);
    },
    getInstanceBoundingClientRect: function (instance, selector) {
        return new Promise(function (resolve) {
            instance
                .createSelectorQuery()
                .select(selector)
                .boundingClientRect()
                .exec(function (ret) {
                if (ret && ret[0]) {
                    resolve(ret[0]);
                }
            });
        });
    },
});
