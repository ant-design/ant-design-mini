// import { VirtualKeyboardDefaultProps } from './props';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.sort(function () {
 return Math.random() - 0.5;
});

Component({
  props: {
    value: '', // 值
    visible: false, // 是否展示
    safeArea: true, // 安全区域
    arrow: false, // 隐藏箭头
    title: '', // 标题
    random: false, // 乱序
    vibrate: false, // 震动反馈
    point: true, // 展示小数点
    disable: false, // 禁用确认按钮
    confirmText: '', // 确认按钮文字
    onInput: (val)=> {}, // 输入
    onConfirm: ()=> {}, // 确认
    onClose: () => {}, // 关闭
  },
  data: {
    numArr: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
    randomArr: [ newArr.slice(0, 3), newArr.slice(3, 6), newArr.slice(6, 9) ],
  },
  methods: {
    tapButton(e) {
      const { value, onInput, disable, onClose } = this.props;
      this.vibrate();
      const _key = e.target.dataset.key;
      const _val = `${value}`;

      // 回退
      if (_key === 'del') {
        console.log('`````123', _val);
        onInput(`${_val.substr(0, _val.length - 1)}` );
        return;
      }
      if (_key !== 'del' && _key !== 'enter') {
        onInput(`${_val}${_key}` )
      }
      if (_key === 'enter' && !disable) {
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
