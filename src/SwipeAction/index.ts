import { SwipeActionDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { compareVersion } from '../_util/compareVersion';

const setStyleObj1 = (buttons: any[], inertiaWidth?: number) => [
  { marginLeft: 0 },
  { marginLeft: `${-(buttons[0]?.width + 1 + (inertiaWidth || 0)) / 2}px` },
  { marginLeft: `${-(buttons[0]?.width + buttons[1]?.width + 1 + (inertiaWidth || 0)) / 2}px` }
];
const setStyleObj2 = (buttons: any[], inertiaWidth?: number) => {
  const length = buttons.length;
  if (length === 2) {
    return [ { marginRight: 0 }, { marginRight: `-${(buttons[0]?.width + (inertiaWidth || 0)) / 2}px` } ]
  }
  if (length === 3) {
    return [ { marginRight: 0 }, { marginRight: `-${(buttons[0]?.width + (inertiaWidth || 0))/ 2}px` }, { marginRight: `-${((buttons[0]?.width + buttons[1]?.width + (inertiaWidth || 0))) / 2}px` } ]
  }
  return [{ marginRight: 0 }]
}

let myTimeOut = null;

const getDirectionLeft = (arr: number[]): boolean => {
  if (arr.length < 2) {
    arr = [0, arr[0]]
  }
  return arr[0] + arr[1] <= 0;
}

const SDKVersion = my.SDKVersion;
const isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;

Component({
  props: SwipeActionDefaultProps,
  data: {
    swipeLeft: true, // 是否是进行左滑
    swipeX: 0, // 主体部分左滑的位置
    moveX: 0, // 按钮滑动的位置
    tapTypeL: '', // 左侧点击中的type
    tapTypeR: '', // 右侧的点击中的type
    leftWidth: 0, // 计算的右侧的宽度
    rightWidth: 0, // 计算的右侧的宽度
    maxSwipeL: 0, // 左侧事件滑动最大距离
    maxSwipeR: 0, // 右侧事件滑动最大距离
    inTouch: false, // 在触摸中的状态
    swipedR: false, // 右侧已经滑开了
    swipedL: false, // 左侧已经滑开了
    changeArr: [0, 0], // 用来判断最后一次滑动的方向
    myStyle: {},
    inertiaWidth: 20,
    animation: !isOldVersion,
  },
  didMount() {
    const { defaultSwiped, elasticity } = this.props;
    this.setButtonItemWidth();
    this.setData({ inertiaWidth: !isOldVersion && elasticity ? 20 : 0 });
    if (defaultSwiped) {
      this.initWidth((maxSwipe: any) => {
        maxSwipe && this.setData({
          swipeX: (maxSwipe + 0.01) * (defaultSwiped === 'right' ? -1 : 1),
          swipedR: defaultSwiped === 'right',
          swipedL: defaultSwiped === 'left',
        });
      });
    }
  },
  didUpdate(prevProp) {
    const { swiped, damping, elasticity } = this.props;
    // 设置不同的滑动位置时需要重置
    const rs = prevProp.swiped !== swiped && !swiped;
    const is = prevProp.elasticity !== elasticity;
    const ds = prevProp.damping !== damping;
    if (rs || is || ds) {
      this.setData({ swipeX: 0, swipedR: false, swipedL: false, tapTypeL: '', tapTypeR: '' });
    }
    if (is) {
      this.setData({ inertiaWidth: elasticity ? 20 : 0 });
    }
  },
  methods: {
    setWidth() {
      const { leftButtons, rightButtons } = this.props;
      const _rightArr = rightButtons || [];
      const _leftArr = leftButtons || [];
      this.setData({
        rightWidth: _rightArr.reduce((tolal, cur) => { return tolal + cur.width }, 0),
        leftWidth: _leftArr.length ? _leftArr.reduce((tolal, cur) => { return tolal + cur.width }, 0) : 0,
      });
    },
    setButtonItemWidth() {
      const { leftButtons, rightButtons } = this.props;
      leftButtons.forEach(i => {
        i.width = i.width || 150
      });
      rightButtons.forEach(i => {
        i.width = i.width || 150
      });
      this.setWidth();
    },
    initWidth(func?: Function) {
      const { leftButtons, rightButtons } = this.props;
      // 获取宽度信息，设置滑轨的宽度、初始化滑动位置
      // 如果没有获取到该信息则把左滑禁用掉
      rightButtons.length > 0 && my.createSelectorQuery()
        .select(`.ant-swipe-action-movable-right-${this.$id}`)
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret && ret[0] && ret[0].width) {
            this.setData({ maxSwipeR: ret[0].width });
            func && func(ret[0].width);
          }
        });
        leftButtons.length > 0 && my.createSelectorQuery()
          .select(`.ant-swipe-action-movable-left-${this.$id}`)
          .boundingClientRect()
          .exec((ret: any) => {
            if (ret && ret[0] && ret[0].width) {
              this.setData({ maxSwipeL: ret[0].width });
              func && func(ret[0].width);
            }
          });
    },
    // 向外透出事件
    onTouchStart() {
      const { onSwipeStart } = this.props;
      const { swipedR, swipedL } = this.data;
      this.initWidth();
      this.setData({ tapTypeL: '', tapTypeR: '', inTouch: true }); // 清空confirmType = auto 的表现
      onSwipeStart({ swiped: !!(swipedR || swipedL), direction: swipedL ? 'left' : (swipedR ? 'right' : '') }, fmtEvent(this.props));
    },
    onTouchEnd() {
      this.setData({ inTouch: false });
    },
    // 滑动过程中的事件，是内部事件不向外透出，用于控制右侧按钮的位置信息
    onChange(e: any) {
      const { changeArr, maxSwipeR, maxSwipeL, inTouch, swipedR, swipedL, inertiaWidth } = this.data;
      const { x } = e.detail;
      const L = x;
      // changeArr用于精准的控制滑动的方向
      const newArr = changeArr[1] === L ? [changeArr] : [changeArr[1], L];
      this.setData({ moveX: L, changeArr: newArr });

      const ridx = this.props.rightButtons.findIndex((u) => u.confirmType === 'move');
      const lidx = this.props.leftButtons.findIndex((u) => u.confirmType === 'move');
      if (ridx === -1 && lidx === -1)  return;
      const isRight = getDirectionLeft(changeArr);
      // 左滑时的滑动确认、收起处理
      if (isRight) {
        if (L < 0 && Math.abs(L) >= maxSwipeR && inTouch && !swipedR) {
          clearTimeout(myTimeOut);
          myTimeOut = setTimeout(() => {
            const { changeArr, maxSwipeR, inTouch, swipedR, moveX } = this.data;
            const _left = getDirectionLeft(changeArr) && changeArr[0] >= changeArr[1];
            if (inTouch && maxSwipeR + inertiaWidth + 2 >= Math.abs(moveX) && _left && !swipedR) {
              this.onSetCheck(true);
            }
          }, 100);
        }
        if (changeArr[0] < changeArr[1] && maxSwipeR > L + 4 && inTouch) {
          this.setData({ tapTypeR: '', myStyle: {} });
        }
      } else {
        if (L > 0 && L + 1 >= maxSwipeL && inTouch && !swipedL) {
          clearTimeout(myTimeOut);
          myTimeOut = setTimeout(() => {
            const { changeArr, maxSwipeL, inTouch, swipedL, moveX } = this.data;
            const _right = !getDirectionLeft(changeArr) && changeArr[1] >= changeArr[0];
            if (inTouch && maxSwipeL <= moveX + 1 && _right && !swipedL) {
              this.onSetCheck(false);
            }
          }, 100);
        }
        if (changeArr[0] > changeArr[1] && maxSwipeL > L + 2 && inTouch) {
          this.setData({ tapTypeL: '', myStyle: {} });
        }
      }
    },
    onSetCheck(isRight: boolean) {
      const { rightButtons, leftButtons } = this.props;
      const { inertiaWidth } = this.data;
      const arr = isRight ? rightButtons : leftButtons;
      const idx = arr.findIndex((u) => u.confirmType === 'move');
      if (idx === -1)  return;
      my.vibrateShort({ success() {} });
      const styArr = isRight ? setStyleObj1(rightButtons, inertiaWidth) : setStyleObj2(leftButtons);
      const sty = styArr[idx];
      this.setData({ myStyle: sty });
      isRight ? this.setData({ tapTypeR: 'R-' + idx }) : this.setData({ tapTypeL: 'L-' + idx });
    },
    // 意外中断了滑动，则立即开始结算滑动动作
    onTouchCancel(e: any) {
      this.onChangeEnd(e);
    },
    onChangeEnd(e: any) {
      const { x } = e.detail;
      const { changeArr } = this.data;
      // 如果是停留在初始态返回
      if (x === 0) return;
      // 判断是否是左滑
      const isRight = getDirectionLeft(changeArr);
      this.setData({ swipeLeft: isRight });
      isRight ? this.onSetSwipeRight(x) : this.onSetSwipeLeft(x);
    },
    onSetSwipeRight(x: number, needBack?: boolean) {
      const { swipedR, inTouch, tapTypeR, changeArr } = this.data;
      const { onButtonTap } = this.props;
      let isRight = Math.abs(changeArr[1]) > Math.abs(changeArr[0]);
      if (!swipedR && Math.abs(x) < 10) {
        isRight = false;
      }
      
      needBack && (isRight = false);
      !isRight && this.setData({ tapTypeR: '', myStyle: {} });
      if (inTouch && !!tapTypeR) {
        this.setData({ tapTypeR: '', myStyle: {} });
        onButtonTap({ direction: 'right', btnIdx: parseInt(tapTypeR.replace('R-', ''))}, fmtEvent(this.props));
        this.onSwipeRight(false);
        return;
      }
      this.setData({ changeArr: [0, 0] });
      this.onSwipeRight(isRight);
    },
    onSetSwipeLeft(x: number, needBack?: boolean) {
      const { swipedL, inTouch, tapTypeL, changeArr } = this.data;
      const { onButtonTap } = this.props;
      // true：初始是往右滑，false: 右滑收起
      let isRight = changeArr[1] >= changeArr[0];
      if (!swipedL && Math.abs(x) < 10) {
        isRight = false;
      }
      needBack && (isRight = false);
      // 清空二次确认的状态
      !isRight && this.setData({ tapTypeL: '', myStyle: {} });
      // 处理滑动-触发事件
      if (inTouch && !!tapTypeL) {
        this.setData({ tapTypeL: '', myStyle: {} });
        onButtonTap({ direction: 'left', btnIdx: parseInt(tapTypeL.replace('L-', '')) }, fmtEvent(this.props));
        this.onSwipeLeft(false);
        return;
      }
      // 清空滑动方向
      this.setData({ changeArr: [0, 0] });
      this.onSwipeLeft(isRight);
    },
    // 结算
    onSwipeLeft(isRight: boolean) {
      const { onSwipeEnd } = this.props;
      const { maxSwipeL, inertiaWidth } = this.data;
      // 为了处理到重置状态的效果
      const maxX = (maxSwipeL + 0.01 + inertiaWidth);
      this.setData(
        {
          swipeX: isRight ? maxX : -0.01,
        },
        () => {
          const flag = this.data.swipeX === -0.01;
          setTimeout(() => {
            this.setData(
              {
                swipeX: flag ? 0 : (maxSwipeL + 0.01),
                swipedL: !flag,
              },
              () => {
                onSwipeEnd({ direction: 'left', swiped: !!isRight }, fmtEvent(this.props));
              },
            );
          }, inertiaWidth > 0 ? 180 : 0)
        },
      );
    },
    onSwipeRight(isRight: boolean) {
      const { maxSwipeR, inertiaWidth } = this.data;
      const { onSwipeEnd } = this.props;
      // 处理x的位置，两次setData X是因为x如果相同位置不会变，刚好也把弹性在这里处理了
      const _this = this;
      // 为了处理到重置状态的效果
      const maxX = -(maxSwipeR + 0.01 + inertiaWidth);
      this.setData(
        {
          swipeX: isRight ? maxX : -0.01,
        },
        () => {
          const flag = _this.data.swipeX === -0.01;
          setTimeout(() => {
            this.setData(
              {
                swipeX: flag ? 0 : -(maxSwipeR + 0.01),
                swipedR: !flag,
              },
              () => {
                onSwipeEnd({ direction: 'right', swiped: !!isRight }, fmtEvent(this.props));
              },
            );
          },  inertiaWidth > 0 ? 180 : 0);
        },
      );
    },
    // 处理右侧点击事件
    onItemTap(e: any) {
      const { swipeLeft, tapTypeL, tapTypeR } = this.data;
      const { onButtonTap, leftButtons, rightButtons } = this.props;
      if (!onButtonTap) return;
      const { itemL, idx, item } = e.target.dataset.item;
      const { confirmType } = swipeLeft ? item : itemL;
      if (tapTypeL === ('L-' + idx)) {
        this.onSetSwipeLeft(0, true);
        this.setData({ tapTypeL: '', myStyle: {} });
        onButtonTap(fmtEvent(this.props), { direction: 'left', btnIdx: idx });
        return;
      }
      if (tapTypeR === ('R-' + idx)) {
        this.onSetSwipeRight(0, true);
        this.setData({ tapTypeR: '', myStyle: {} });
        onButtonTap(fmtEvent(this.props), { direction: 'right', btnIdx: idx });
        return;
      }
      // auto 是展开按钮二次确认的效果
      if (confirmType === 'tap' || confirmType === 'move') {
        const styArr = swipeLeft ? setStyleObj1(rightButtons) : setStyleObj2(leftButtons);
        const sty = styArr[idx];
        this.setData({ myStyle: sty });
        !swipeLeft ? this.setData({ tapTypeL: 'L-' + idx }) :  this.setData({ tapTypeR: 'R-' + idx });
      } else {
        !swipeLeft ? this.onSetSwipeLeft(0, true) : this.onSetSwipeRight(0, true);
        onButtonTap(fmtEvent(this.props), { direction: !swipeLeft ? 'left' : 'right', btnIdx: idx  });
      }
    },
  },
});