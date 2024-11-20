export var PageDefaultProps = {
    loading: false,
    safeArea: 'both',
    loadingColor: '#ccc',
    loadingSize: 'medium',
    loadingType: 'spin',
    status: null,
    title: '',
    image: '',
    message: '',
    actionText: '',
    secondaryActionText: '',
    onActionTap: null,
    onSecondaryActionTap: null,
};
// 内置异常配置
export var BuiltinStatus = {
    failed: {
        image: 'https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ',
        title: '',
        message: '',
    },
    disconnected: {
        image: 'https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*uqB5TY4urA4AAAAAAAAAAAAADj16AQ/original',
        title: '',
        message: '',
    },
    empty: {
        title: '',
        message: '',
        image: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*0AaRRrYlVDkAAAAAAAAAAAAAARQnAQ',
    },
    busy: {
        image: 'https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*avTGQIyeHk0AAAAAAAAAAAAADj16AQ/original',
        title: '',
        message: '',
    },
};
