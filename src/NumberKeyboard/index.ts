import { NumberKeyboardDefaultProps } from './props';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Component({
  props: NumberKeyboardDefaultProps,
  data: {
    numArr: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
    randomArr: [],
  },
  didMount() {
    this.setRandom();
  },
  methods: {
    catchAppearModal() {
      this.setRandom();
    },
    setRandom() {
      if (this.props.random) {
        const newArr = arr.sort(function () {
          return Math.random() - 0.5;
         });
        this.setData({
          randomArr: [ newArr.slice(0, 3), newArr.slice(3, 6), newArr.slice(6, 9) ]
        });
      }
    },
    tapButton(e) {
      const { value, onChange, confirmDisabled, onClose } = this.props;
      this.vibrate();
      const _key = e.target.dataset.key;
      const _val = `${value}`;

      // 回退
      if (_key === 'del') {
        onChange(`${_val.substr(0, _val.length - 1)}` );
        return;
      }
      if (_key !== 'del' && _key !== 'enter') {
        onChange(`${_val}${_key}` )
      }
      if (_key === 'enter' && !confirmDisabled) {
        this.onClickEnter();
        onClose();
      }
    },
    // 隐藏键盘，失去焦点
    onHide() {
      const { onClose } = this.props;
      onClose();
    },
    onClickEnter() {
      const { confirmDisabled, onConfirm } = this.props;
      if (confirmDisabled) return;
      this.onHide();
      onConfirm();
    },
    // 振动反馈
    vibrate() {
      my.canIUse('vibrateShort') && this.props.vibrate && my.vibrateShort();
    },
  },
});
