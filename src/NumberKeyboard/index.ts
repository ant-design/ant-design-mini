// import { VirtualKeyboardDefaultProps } from './props';

Component({
  props: {
    value: '', // 值
    defaultValue: '', // 默认值
    visible: false, // 是否展示
    safeArea: true, // 安全区域
    arrow: false, // 隐藏箭头
    random: false, // 乱序
    vibrate: false, // 震动反馈
    point: true, // 展示小数点
    disable: false, // 禁用确认按钮
    confirmText: '确定', // 确认按钮文字
    controlled: true, // 是否受控
    onInput: (val)=> {}, // 输入
    onConfirm: ()=> {}, // 确认
    onClose: () => {}, // 关闭
  },
  data: {
    _val: '',
    _visible: false,
    _disable: false,
  },
  didMount() {
    const { value, visible } = this.props;
    this.setData({
      _val: value,
      _visible: visible,
    });
  },
  didUpdate(prevProps) {
    const { value, visible } = this.props;
    if (visible !== prevProps.visible) {
      this.setData({ _visible: visible });
      !visible && this.onHide();
    }
    // if (value !== prevProps.value) {
    //   console.log('213213')
    //   this.setData({ _val: value });
      
    // }
  },
  methods: {
    tapButton(e) {
      const { controlled, value } = this.props;
      this.vibrate();
      const _key = e.target.dataset.key;
      const _val = controlled ? value : this.data._val.toString();
      console.log('?', this.props.value);
      console.log('*', `${_val}${_key}`);
      
      const { onInput } = this.props;
      // 回退
      if (_key === 'del') {
        onInput(`${this.props.value.substr(0, _val.length - 1)}` );
        // onInput(this.data._val);
        return;
      }
      _key !== 'del' && _key !== 'enter' && onInput(`${_val}${_key}` );
      // _key === 'enter' && this.onClickEnter()
    },
    // 隐藏键盘，失去焦点
    onHide() {
      const { onClose } = this.props;
      this.setData({ _focus: false });
      onClose();
    },
    onClickEnter() {
      const { disable, onConfirm } = this.props;
      if (disable) return;
      this.onHide();
      onConfirm();
    },
    // 振动反馈
    vibrate() {
      this.props.vibrate && my.canIUse('vibrateShort') && my.vibrateShort();
    },
  },
});
