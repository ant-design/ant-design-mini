import { VerifyCodeDefaultProps } from './props';
import controlled from '../mixins/controlled';

Component({
  mixins: [controlled()],
  props: VerifyCodeDefaultProps,
  data: {
    _focus: false,
    _actionActive: true,
    _countDown: 60,
    resent: false,
    actedBefore: false,
    resend: false,
  },
  didMount() {
    const { isInitialActive, initActive, countDown } = this.props;
    this.setData({
      _actionActive: isInitialActive,
      _countDown: countDown,
      actedBefore: false,
    });
    // 在组件加载的时候是否主动触发点击发送验证码事件
    // initActive 为 true 时，需要 isInitialActive 为 false 才可实现进入页面就倒计时
    if (initActive && isInitialActive === false) {
      this.noSendCountDown();
    } else {
      this.setData({
        _actionActive: !initActive,
      });
    }
  },
  didUnmount() {
    clearInterval(this._timeout);
  },
  methods: {
    onBlur(e) {
      const { onBlur } = this.props;
      this.setData({
        _focus: false,
      });
      if (onBlur) {
        const { value } = e.detail;
        onBlur(value);
      }
    },
    onConfirm(e) {
      const { onConfirm } = this.props;
      this.setData({
        _focus: false,
      });
      if (onConfirm) {
        const { value } = e.detail;
        onConfirm(value);
      }
    },
    onFocus(e) {
      const { onFocus } = this.props;
      this.setData({
        _focus: true,
      });
      if (onFocus) {
        const { value } = e.detail;
        onFocus(value);
      }
    },
    onChange(e) {
      const { onChange } = this.props;
      if (onChange) {
        const { value } = e.detail;
        this.cOnChange(value);
      }
    },
    onClear() {
      const { onClear, controlled: propsControlled } = this.props;
      this.setData({
        _focus: false,
      });
      if (onClear) {
        onClear('');
      }
      if (!propsControlled) {
        this.setData({
          cValue: '',
        });
      }
    },
    onTapSend() {
      const { countDown, onSend } = this.props;
      if (this.data._actionActive) {
        this.setData({
          _actionActive: false,
        });
        this._timeout = setInterval(() => {
          const subOne = this.data._countDown - 1;
          if (subOne <= 0) {
            clearInterval(this._timeout);
            this.setData({
              _actionActive: true,
              resend: true,
              _countDown: countDown,
              actedBefore: true,
            });
          } else {
            this.setData({
              _countDown: subOne,
            });
          }
        }, 1000);
        onSend(this.data.cValue);
      }
    },
    noSendCountDown() {
      const { countDown } = this.props;
      if (this.data._actionActive) {
        this.setData({
          _actionActive: false,
        });
        this._timeout = setInterval(() => {
          const subOne = this.data._countDown - 1;
          if (subOne <= 0) {
            clearInterval(this._timeout);
            this.setData({
              _actionActive: true,
              resend: true,
              _countDown: countDown,
              actedBefore: true,
            });
          } else {
            this.setData({
              _countDown: subOne,
            });
          }
        }, 1000);
      }
    },
  },
});
