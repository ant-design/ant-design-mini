var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const values = yield this.form.submit();
            my.alert({
                title: '提交',
                content: JSON.stringify(values),
            });
        });
    }
});
