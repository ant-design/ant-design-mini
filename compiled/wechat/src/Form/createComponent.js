var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createComponent(_a) {
    var _b = _a.props, props = _b === void 0 ? {} : _b, _c = _a.data, data = _c === void 0 ? {} : _c, _d = _a.methods, methods = _d === void 0 ? {} : _d;
    Component({
        props: props,
        data: __assign(__assign({}, data), { formData: {
                value: undefined,
                status: 'default',
                required: false,
                errors: [],
            } }),
        ref: function () {
            var _this = this;
            var formItemRef = {
                setFormData: function (values) {
                    _this.setData(__assign(__assign({}, _this.data), { formData: __assign(__assign({}, _this.data.formData), values) }));
                },
                getFormData: function () {
                    return _this.data.formData;
                },
                on: function (callback) {
                    _this.emit = callback;
                },
                getProps: function () {
                    return _this.props;
                },
            };
            return formItemRef;
        },
        didUnmount: function () {
            this.emit('didUnmount');
        },
        deriveDataFromProps: function (nextProps) {
            this.emit('deriveDataFromProps', nextProps);
        },
        methods: __assign(__assign({}, methods), { emit: function (trigger, value) { } }),
    });
}
export default createComponent;
