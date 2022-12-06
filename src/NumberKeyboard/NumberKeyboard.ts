// import { VirtualKeyboardDefaultProps } from './props';

Component({
  props: {
    value: '', // 值
    defaultValue: '', // 默认值
    visible: false, // 是否展示
    safeArea: true, // 安全区域
    arrow: false, // 隐藏箭头
    random: false, // 乱序
    point: true, // 展示小数点
    disable: false, // 禁用确认按钮
    confirmText: '确定', // 确认按钮文字
    onInput: ()=> {}, // 输入
    onConfirm: ()=> {}, // 确认
    onDelete: ()=> {}, // 删除
    onClose: () => {}, // 关闭
  },
  data: {
    _val: '',
    _focus: false,
    _disable: false,
  },
  didMount() {
    const { value, focus } = this.props;
    this.setData({
      _val: value,
      _focus: focus,
    });
  },
  didUpdate(prevProps) {
    const { value, focus } = this.props;
    if (focus !== prevProps.focus) {
      this.setData({ _focus: focus });
      !focus && this.onHide();
    }
    if (value !== this.data._val && value !== prevProps.value) {
      this.setData({ _val: value });
    }
  },
  methods: {
    // 金额输入框，获取焦点
    onAmountFocus() {
      if (!this.props.disable && this.props.type === 'amount') {
        this.setData({ _focus: true });
        this.props.onFocus(this.data._val);
      }
    },
    tapButton(e) {
      this.vibrate();
      const _key = e.target.dataset.key;
      const { _val } = this.data;
      const { max, onMax, onChange, type, codeLength } = this.props;
      // 没小数点
      const noPoint = _val.indexOf('.') === -1;
      // 回退
      if (_key === 'del') {
        this.setData({ _val: _val === '0' ? '' : _val.substr(0, _val.length - 1) });
        this.props.onDelete(this.data._val );
        onChange(this.data._val)
        return;
      }
      if (type === 'keyboard') {// 只要键盘
        _key !== 'del' && _key !== 'enter' && this.setData({ _val: `${_val}${_key}` });
      } else if (type === 'amount') {
        // 小数点
        if (_key === '.' && noPoint) {
          const myVal = _val === '.' ? '0.' : `${_val}${_key}`;
          this.setData({ _val: _val === '' ? '0.' : myVal });
        }
        // 0-9数字
        if (/[0-9]/.test(_key)) {
          // 是否有最大值，是否超出最大值
          if (max && parseFloat(`${_val}${_key}`) > parseFloat(`${max}`)) {
            onMax && onMax();
            return;
          }
          // 有小数点 且 小数点后输入长度大于2
          if (!noPoint && _val.split('.')[1].length >= 2) {
            return;
          }
          this.setData({ _val: `${_val}${_key}` }, () => {
            _val === '0' && this.setData({ _val: '0.' });
          });
        }
      } else if (type === 'code') {
        if (codeLength <= this.data._val.length) {
          this.onClickEnter();
          return
        };
        _key !== 'del' && _key !== 'enter' && this.setData({ _val: `${_val}${_key}` }, () => {
          this.data._val.length === codeLength && this.onClickEnter();
        });
      }

      _key === 'enter' ? this.onClickEnter() : onChange(this.data._val);
    },
    // 隐藏键盘，失去焦点
    onHide() {
      const { onChange, type, onBlur, min, onMin } = this.props;
      let val = this.data._val;
      if (type === 'amount') {
        if (val[val.length - 1] === '.') {
          val = val.substr(0, val.length - 1);
          this.setData({ _val: val });
          onChange(val);
        }
        if (min && parseFloat(this.data._val) < parseFloat(`${min}`)) {
          onMin();
          return;
        }
      }
      this.setData({ _focus: false });
      onBlur(val);
    },
    onClickEnter() {
      const { type, min, disableSureBtn, onEnter, onMin } = this.props;
      if (disableSureBtn) return;
      if (type === 'amount' && min && parseFloat(this.data._val) < parseFloat(`${min}`)) {
        onMin();
        return;
      }
      this.onHide();
      onEnter();
    },
    // 振动反馈
    vibrate() {
      this.props.vibrate && my.canIUse('vibrateShort') && my.vibrateShort();
    },
    // code
    onCodeTap() {
      this.setData({ _focus: true });
      this.props.onFocus(this.data._val);
    }
  },
});
