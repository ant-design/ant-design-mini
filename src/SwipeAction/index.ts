import { SwipeActionDefaultProps } from './props';

const setStyleObj1 = (itemWidth: number) => [
  { marginLeft: 0 },
  { marginLeft: -(itemWidth + 1) + 'rpx' },
  { marginLeft: -(2 * itemWidth + 1) + 'rpx' }
];
const setStyleObj2 = (itemWidth: number, length) => {
  if (length === 2) {
    return [ { marginRight: 0 }, { marginRight: -(itemWidth) + 'rpx' } ]
  }
  if (length === 3) {
    return [ { marginRight: 0 }, { marginRight: -itemWidth + 'rpx' }, { marginRight: -(2 * itemWidth) + 'rpx' } ]
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
    _disabled: false, // 禁止滑动
    myStyle: {},
    inertiaWidth: 20,
  },
  didMount() {
    const { itemWidth, right, left, rightSwiped, leftSwiped, inertia } = this.props;
    const _rightArr = right || [];
    const _leftArr = left || [];
    this.setData({
      rightWidth: itemWidth * _rightArr.length,
      leftWidth: itemWidth * _leftArr.length,
      inertiaWidth: inertia ? 20 : 0,
    });
    if (rightSwiped || leftSwiped) {
      this.initWidth((maxSwipe: any) => {
        maxSwipe && this.setData({
          swipeX: (maxSwipe + 0.01) * (!!rightSwiped ? -1 : 1),
          swipedR: rightSwiped && !leftSwiped,
          swipedL: leftSwiped && !rightSwiped,
        });
      });
    }
  },
  didUpdate(prevProp) {
    const { rightSwiped, leftSwiped, inertia, damping } = this.props;
    // 设置不同的滑动位置时需要重置
    const rs = prevProp.rightSwiped !== rightSwiped && !rightSwiped;
    const ls = prevProp.leftSwiped !== leftSwiped && !leftSwiped;
    const is = prevProp.inertia !== inertia;
    const ds = prevProp.damping !== damping;
    if (rs || ls || is || ds) {
      this.setData({ swipeX: 0, swipedR: false, swipedL: false, tapTypeL: '', tapTypeR: '' });
    }
    if (is) {
      this.setData({ inertiaWidth: inertia ? 20 : 0 });
    }
  },
  methods: {
    initWidth(func?: Function) {
      const { itemWidth, right, left } = this.props;
      this.setData({ rightWidth: itemWidth * right.length, leftWidth: itemWidth * left.length });
      // 获取宽度信息，设置滑轨的宽度、初始化滑动位置
      // 如果没有获取到该信息则把左滑禁用掉
      right.length > 0 && my.createSelectorQuery()
        .select(`.paytm-swipe-movable-right-${this.$id}`)
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret && ret[0] && ret[0].width) {
            this.setData({ maxSwipeR: ret[0].width });
            func && func(ret[0].width);
          }
        });
        left.length > 0 && my.createSelectorQuery()
          .select(`.paytm-swipe-movable-left-${this.$id}`)
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
      const { onSwipeStart, key, callbackData } = this.props;
      this.initWidth();
      this.setData({ tapTypeL: '', tapTypeR: '', inTouch: true }); // 清空eventType = auto 的表现
      onSwipeStart(key, callbackData);
    },
    onTouchEnd() {
      const { onTouchEnd, key, callbackData } = this.props;
      this.setData({ inTouch: false });
      onTouchEnd(key, callbackData);
    },
    // 滑动过程中的事件，是内部事件不向外透出，用于控制右侧按钮的位置信息
    onChange(e: any) {
      const { changeArr, maxSwipeR, maxSwipeL, inTouch, swipedR, swipedL, inertiaWidth } = this.data;
      const { x } = e.detail;
      let L = x;
      // changeArr用于精准的控制滑动的方向
      const newArr = changeArr[1] === L ? [changeArr] : [changeArr[1], L];
      this.setData({ moveX: L, changeArr: newArr });

      const ridx = this.props.right.findIndex((u) => u.eventType === 'move');
      const lidx = this.props.left.findIndex((u) => u.eventType === 'move');
      if (ridx === -1 && lidx === -1)  return;
      let isRight = getDirectionLeft(changeArr);
      // 左滑时的滑动确认、收起处理
      if (isRight) {
        if (L < 0 && Math.abs(L) >= maxSwipeR && inTouch && !swipedR) {
          clearTimeout(myTimeOut);
          myTimeOut = setTimeout(() => {
            const { changeArr, maxSwipeR, inTouch, swipedR, moveX } = this.data;
            let _left = getDirectionLeft(changeArr) && changeArr[0] >= changeArr[1];
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
            let _right = !getDirectionLeft(changeArr) && changeArr[1] >= changeArr[0];
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
      const { right, itemWidth, left } = this.props;
      const arr = isRight ? right : left;
      const idx = arr.findIndex((u) => u.eventType === 'move');
      if (idx === -1)  return;
      my.vibrateShort({ success() {} });
      const styArr = isRight ? setStyleObj1(itemWidth) : setStyleObj2(itemWidth, left.length);
      const sty = styArr[idx];
      this.setData({ myStyle: sty });
      isRight ? this.setData({ tapTypeR: arr[idx].type }) : this.setData({ tapTypeL: arr[idx].type });
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
      const { onRightItemEvent, key, callbackData } = this.props;
      let isRight = Math.abs(changeArr[1]) > Math.abs(changeArr[0]);
      if (!swipedR && Math.abs(x) < 10) {
        isRight = false;
      }
      needBack && (isRight = false);
      !isRight && this.setData({ tapTypeR: '', myStyle: {} });
      if (inTouch && !!tapTypeR) {
        this.setData({ tapTypeR: '', myStyle: {} });
        onRightItemEvent(tapTypeR, key, callbackData);
        this.onSwipeRight(false);
        return;
      }
      this.setData({ changeArr: [0, 0] });
      this.onSwipeRight(isRight);
    },
    onSetSwipeLeft(x: number, needBack?: boolean) {
      const { swipedL, inTouch, tapTypeL, changeArr } = this.data;
      const { onRightItemEvent, key, callbackData } = this.props;
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
        onRightItemEvent(tapTypeL, key, callbackData);
        this.onSwipeLeft(false);
        return;
      }
      // 清空滑动方向
      this.setData({ changeArr: [0, 0] });
      this.onSwipeLeft(isRight);
    },
    // 结算
    onSwipeLeft(isRight: boolean) {
      const { onSwipeEnd, key, callbackData } = this.props;
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
                onSwipeEnd(key, { direction: isRight ? 'right' : 'left', left: true }, callbackData);
              },
            );
          }, inertiaWidth > 0 ? 200 : 0)
        },
      );
    },
    onSwipeRight(isRight: boolean) {
      const { maxSwipeR, moveX, swipedR, inertiaWidth } = this.data;
      let mySwipe = swipedR;
      const { onSwipeEnd, key, callbackData } = this.props;
      // 处理x的位置，两次setData X是因为x如果相同位置不会变，刚好也把弹性在这里处理了
      const _this = this;
      if (Math.abs(moveX) > maxSwipeR) {
        mySwipe = true;
      }
      // 为了处理到重置状态的效果
      const maxX = -(maxSwipeR + 0.01 + inertiaWidth);
      this.setData(
        {
          swipeX: isRight ? maxX : -0.01,
        },
        () => {
          const flag = _this.data.swipeX === -0.01;
          inertiaWidth > 0 ? setTimeout(() => {
            this.setData(
              {
                swipeX: flag ? 0 : -(maxSwipeR + 0.01),
                swipedR: !flag,
              },
              () => {
                onSwipeEnd(key, { direction: isRight ? 'left' : 'right', right: true }, callbackData);
              },
            );
          }, 200) : this.setData(
            {
              swipeX: flag ? 0 : -(maxSwipeR + 0.01),
              swipedR: !flag,
              _disabled: false,
            },
            () => {
              onSwipeEnd(key, { direction: isRight ? 'left' : 'right', right: true }, callbackData);
            },
          );
        },
      );
    },
    // 处理右侧点击事件
    onItemTap(e: any) {
      const { swipeLeft, tapTypeL, tapTypeR } = this.data;
      const { onRightItemEvent, callbackData, itemWidth, key, onLeftItemEvent, left } = this.props;
      if (!onRightItemEvent && !onLeftItemEvent) return;
      const { itemL, idx, item } = e.target.dataset.item;
      const { eventType, type } = swipeLeft ? item : itemL;
      const styArr = swipeLeft ? setStyleObj1(itemWidth) : setStyleObj2(itemWidth, left.length);
      const sty = styArr[idx];
      if (tapTypeL === type) {
        this.onSetSwipeLeft(0, true);
        this.setData({ tapTypeL: '', myStyle: {} });
        onLeftItemEvent(type, key, callbackData);
        return;
      }
      if (tapTypeR === type) {
        this.onSetSwipeRight(0, true);
        this.setData({ tapTypeR: '', myStyle: {} });
        onRightItemEvent(type, key, callbackData);
        return;
      }
      // auto 是展开按钮二次确认的效果
      if (eventType === 'auto' || eventType === 'move') {
        this.setData({ myStyle: sty });
        !swipeLeft ? this.setData({ tapTypeL: type }) :  this.setData({ tapTypeR: type });
      } else {
        !swipeLeft ? this.onSetSwipeLeft(0, true) : this.onSetSwipeRight(0, true);
        const event = swipeLeft ? onRightItemEvent : onLeftItemEvent;
        event(type, key, callbackData);
      }
    },
  },
});
