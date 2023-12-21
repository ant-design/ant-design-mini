import { __awaiter, __generator } from "tslib";
import { Form } from '../../../src/Form/form';
Page({
    data: {
        likeOptions: [
            { value: 'basketball', title: '🏀' },
            { value: 'football', title: '⚽️' },
            { value: 'badminton', title: '🏸️' },
        ],
        chooseOptions: [
            { value: '1', label: '1111' }
        ]
    },
    form: new Form(),
    handleRef: function (ref) {
        this.form.addItem(ref);
    },
    reset: function () {
        this.form.reset();
    },
    submit: function () {
        return __awaiter(this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.form.submit()];
                    case 1:
                        values = _a.sent();
                        my.alert({
                            title: '提交',
                            content: JSON.stringify(values),
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
});
