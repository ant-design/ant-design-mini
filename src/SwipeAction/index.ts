import '../_util/assert-component2';
import { compareVersion } from '../_util/compareVersion';
import fmtEvent from '../_util/fmtEvent';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { platform } from '../_util/platform';
import { assertAilpayNativeNotSupport } from '../_util/support';
import { SwipeActionDefaultProps } from './props';
import { transformOptions } from './wechat';

assertAilpayNativeNotSupport('SwipeAction');

const setStyleObj1 = (buttons: any[], inertiaWidth?: number) => {
  const widthPos = buttons.length === 2 ? 0.5 : 0.3333;
  return [
    { marginLeft: 0 },
    {
      marginLeft: `${
        -(buttons[0]?.width + 1 + (inertiaWidth || 0) * widthPos) / 2
      }px`,
    },
    {
      marginLeft: `${
        -(
          buttons[0]?.width +
          buttons[1]?.width +
          1 +
          (inertiaWidth || 0) * 0.6666
        ) / 2
      }px`,
    },
  ];
};
const setStyleObj2 = (buttons: any[], inertiaWidth?: number) => {
  const length = buttons.length;
  if (length === 2) {
    return [
      { marginRight: 0 },
      {
        marginRight: `-${
          (buttons[0]?.width + (inertiaWidth || 0) * 0.5) / 2
        }px`,
      },
    ];
  }
  if (length === 3) {
    return [
      { marginRight: 0 },
      {
        marginRight: `-${
          (buttons[0]?.width + (inertiaWidth || 0) * 0.3333) / 2
        }px`,
      },
      {
        marginRight: `-${
          (buttons[0]?.width +
            buttons[1]?.width +
            (inertiaWidth || 0) * 0.6666) /
          2
        }px`,
      },
    ];
  }
  return [{ marginRight: 0 }];
};

let myTimeOut = null;

const getDirectionLeft = (arr: number[]): boolean => {
  if (arr.length < 2) {
    arr = [0, arr[0]];
  }
  return arr[0] + arr[1] <= 0;
};

const isOldVersion = getIsOldVersion();
function getIsOldVersion() {
  if (typeof my === 'undefined') {
    return false;
  }
  const SDKVersion = my.SDKVersion;
  return compareVersion(SDKVersion, '2.0.0') < 0;
}

function getInitReady() {
  if (platform() === 'wechat') {
    return false;
  }
  if (isOldVersion) {
    return false;
  }
  return true;
}

Component(
  transformOptions({
    props: SwipeActionDefaultProps,
    didMount() {
      const { defaultSwiped, elasticity } = this.getProps();
      this.setButtonItemWidth();
      this.setData({ inertiaWidth: !isOldVersion && elasticity ? 20 : 0 });
      if (defaultSwiped) {
        this.initWidth((maxSwipe: any) => {
          maxSwipe &&
            this.setData({
              swipeX: (maxSwipe + 0.01) * (defaultSwiped === 'right' ? -1 : 1),
              swipedR: defaultSwiped === 'right',
              swipedL: defaultSwiped === 'left',
            });
        });
      }
    },
    didUpdate(prevProp) {
      const { swiped, damping, elasticity } = this.getProps();
      // 设置不同的滑动位置时需要重置
      const rs = prevProp.swiped !== swiped && !swiped;
      const is = prevProp.elasticity !== elasticity;
      const ds = prevProp.damping !== damping;
      if (rs || is || ds) {
        this.setData({
          swipeX: 0,
          swipedR: false,
          swipedL: false,
          tapTypeL: '',
          tapTypeR: '',
        });
      }
      if (is) {
        this.setData({ inertiaWidth: elasticity ? 20 : 0 });
      }
    },
    data: {
      // 在微信小程序与支付宝小程序基础库 1.0
      // 组件初始化时的 margin-left 决定了后续可移动的距离，所以需要等组件初始化以后再加载
      ready: getInitReady(),
      swipeLeft: true, // 是否是进行左滑
      swipeX: 0, // 主体部分左滑的位置
      moveX: 0, // 按钮滑动的位置
      tapTypeL: '', // 左侧点击中的type
      tapTypeR: '', // 右侧的点击中的type
      leftWidth: 20, // 计算的右侧的宽度
      rightWidth: 20, // 计算的右侧的宽度
      maxSwipeL: 0, // 左侧事件滑动最大距离
      maxSwipeR: 0, // 右侧事件滑动最大距离
      inTouch: false, // 在触摸中的状态
      swipedR: false, // 右侧已经滑开了
      swipedL: false, // 左侧已经滑开了
      changeArr: [0, 0], // 用来判断最后一次滑动的方向
      myStyle: {},
      inertiaWidth: 20,
      animation: !isOldVersion,
      _leftButtons: [],
      _rightButtons: [],
    },
    methods: {
      setWidth() {
        const { _leftButtons, _rightButtons } = this.data;
        const _rightArr = _rightButtons || [];
        const _leftArr = _leftButtons || [];
        this.setData({
          ready: true,
          rightWidth: _rightArr.reduce((tolal, cur) => {
            return tolal + cur.width;
          }, 0),
          leftWidth: _leftArr.length
            ? _leftArr.reduce((tolal, cur) => {
                return tolal + cur.width;
              }, 0)
            : 0,
        });
      },
      setButtonItemWidth() {
        const { leftButtons, rightButtons } = this.getProps();
        leftButtons.forEach((i) => {
          i.width = i.width || 150;
        });
        rightButtons.forEach((i) => {
          i.width = i.width || 150;
        });
        this.setData(
          { _leftButtons: leftButtons, _rightButtons: rightButtons },
          () => {
            this.setWidth();
          }
        );
      },
      getProps() {
        if (platform() === 'wechat') {
          return {
            ...this.data,
            onSwipeStart: (v) => {
              this.triggerEvent('swipestart', v);
            },
            onSwipeEnd: (v) => {
              this.triggerEvent('swipeend', v);
            },
            onButtonTap: (v) => {
              this.triggerEvent('buttontap', v);
            },
          };
        }
        return this.props;
      },
      initWidth(func?) {
        const { leftButtons, rightButtons } = this.getProps();
        // 获取宽度信息，设置滑轨的宽度、初始化滑动位置
        // 如果没有获取到该信息则把左滑禁用掉
        rightButtons.length > 0 &&
          this.boundingClientRect(
            `.ant-swipe-action-movable-right${this.$id ? '-' + this.$id : ''}`
          ).then((ret: any) => {
            if (ret && ret.width) {
              this.setData({ maxSwipeR: ret.width });
              func && func(ret.width);
            }
          });
        leftButtons.length > 0 &&
          this.boundingClientRect(
            `.ant-swipe-action-movable-left${this.$id ? '-' + this.$id : ''}`
          ).then((ret: any) => {
            if (ret && ret.width) {
              this.setData({ maxSwipeL: ret.width });
              func && func(ret.width);
            }
          });
      },
      boundingClientRect(id) {
        if (typeof my === 'undefined') {
          return getInstanceBoundingClientRect(this, id);
        }
        return getInstanceBoundingClientRect(my, id);
      },
      // 向外透出事件
      onTouchStart() {
        const { onSwipeStart } = this.getProps();
        const { swipedR, swipedL } = this.data;
        this.initWidth();
        this.setData({ tapTypeL: '', tapTypeR: '', inTouch: true }); // 清空confirmType = auto 的表现
        onSwipeStart(
          {
            swiped: !!(swipedR || swipedL),
            direction: swipedL ? 'left' : swipedR ? 'right' : '',
          },
          fmtEvent(this.getProps())
        );
      },
      onTouchEnd(e) {
        // 因为微信小程序没有 onChangeEnd 事件
        // 所以用 onTouchEnd 模拟 onChangeEnd
        if (platform() === 'wechat') {
          this.onChangeEnd(e);
        }
        this.setData({ inTouch: false, swipedL: false, swipedR: false });
      },
      // 滑动过程中的事件，是内部事件不向外透出，用于控制右侧按钮的位置信息
      onChange(e: any) {
        const {
          changeArr,
          maxSwipeR,
          maxSwipeL,
          inTouch,
          swipedR,
          swipedL,
          inertiaWidth,
        } = this.data;
        const { x } = e.detail;
        const L = x;
        // changeArr用于精准的控制滑动的方向
        const newArr = changeArr[1] === L ? [changeArr] : [changeArr[1], L];
        this.setData({ moveX: L, changeArr: newArr });

        const ridx = this.getProps().rightButtons.findIndex(
          (u) => u.confirmType === 'move'
        );
        const lidx = this.getProps().leftButtons.findIndex(
          (u) => u.confirmType === 'move'
        );
        if (ridx === -1 && lidx === -1) return;
        const isRight = getDirectionLeft(changeArr);
        // 左滑时的滑动确认、收起处理
        if (isRight) {
          if (L < 0 && Math.abs(L) >= maxSwipeR && inTouch && !swipedR) {
            clearTimeout(myTimeOut);
            myTimeOut = setTimeout(() => {
              const { changeArr, maxSwipeR, inTouch, swipedR, moveX } =
                this.data;
              const _left =
                getDirectionLeft(changeArr) && changeArr[0] >= changeArr[1];
              if (
                inTouch &&
                maxSwipeR + inertiaWidth + 2 >= Math.abs(moveX) &&
                _left &&
                !swipedR
              ) {
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
              const { changeArr, maxSwipeL, inTouch, swipedL, moveX } =
                this.data;
              const _right =
                !getDirectionLeft(changeArr) && changeArr[1] >= changeArr[0];
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
        const { rightButtons, leftButtons } = this.getProps();
        const { inertiaWidth, _leftButtons, _rightButtons } = this.data;
        const arr = isRight ? rightButtons : leftButtons;
        const idx = arr.findIndex((u) => u.confirmType === 'move');
        if (idx === -1) return;

        typeof my !== 'undefined' && my.vibrateShort({ success() {} });
        const styArr = isRight
          ? setStyleObj1(_rightButtons, inertiaWidth)
          : setStyleObj2(_leftButtons, inertiaWidth);
        const sty = styArr[idx];
        this.setData({ myStyle: sty });
        isRight
          ? this.setData({ tapTypeR: 'R-' + idx })
          : this.setData({ tapTypeL: 'L-' + idx });
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
        const { onButtonTap } = this.getProps();
        let isRight = Math.abs(changeArr[1]) > Math.abs(changeArr[0]);
        if (!swipedR && Math.abs(x) < 10) {
          isRight = false;
        }

        needBack && (isRight = false);
        !isRight && this.setData({ tapTypeR: '', myStyle: {} });
        if (inTouch && !!tapTypeR) {
          this.setData({ tapTypeR: '', myStyle: {} });
          onButtonTap(
            {
              direction: 'right',
              btnIdx: parseInt(tapTypeR.replace('R-', '')),
            },
            fmtEvent(this.getProps())
          );
          this.onSwipeRight(false);
          return;
        }
        this.setData({ changeArr: [0, 0] });
        this.onSwipeRight(isRight);
      },
      onSetSwipeLeft(x: number, needBack?: boolean) {
        const { swipedL, inTouch, tapTypeL, changeArr } = this.data;
        const { onButtonTap } = this.getProps();
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
          onButtonTap(
            { direction: 'left', btnIdx: parseInt(tapTypeL.replace('L-', '')) },
            fmtEvent(this.getProps())
          );
          this.onSwipeLeft(false);
          return;
        }
        // 清空滑动方向
        this.setData({ changeArr: [0, 0] });
        this.onSwipeLeft(isRight);
      },
      // 结算
      onSwipeLeft(isRight: boolean) {
        const { onSwipeEnd } = this.getProps();
        const { maxSwipeL, inertiaWidth } = this.data;
        // 为了处理到重置状态的效果
        const maxX = maxSwipeL + 0.01 + inertiaWidth;
        this.setData(
          {
            swipeX: isRight ? maxX : -0.01,
          },
          () => {
            const flag = this.data.swipeX === -0.01;
            setTimeout(
              () => {
                this.setData(
                  {
                    swipeX: flag ? 0 : maxSwipeL + 0.01,
                    swipedL: !flag,
                  },
                  () => {
                    onSwipeEnd(
                      { direction: 'left', swiped: !!isRight },
                      fmtEvent(this.getProps())
                    );
                  }
                );
              },
              inertiaWidth > 0 ? 180 : 0
            );
          }
        );
      },
      onSwipeRight(isRight: boolean) {
        const { maxSwipeR, inertiaWidth } = this.data;
        const { onSwipeEnd } = this.getProps();
        // 处理x的位置，两次setData X是因为x如果相同位置不会变，刚好也把弹性在这里处理了
        // 为了处理到重置状态的效果
        const maxX = -(maxSwipeR + 0.01 + inertiaWidth);
        this.setData(
          {
            swipeX: isRight ? maxX : -0.01,
          },
          () => {
            const flag = this.data.swipeX === -0.01;
            setTimeout(
              () => {
                this.setData(
                  {
                    swipeX: flag ? 0 : -(maxSwipeR + 0.01),
                    swipedR: !flag,
                  },
                  () => {
                    onSwipeEnd(
                      { direction: 'right', swiped: !!isRight },
                      fmtEvent(this.getProps())
                    );
                  }
                );
              },
              inertiaWidth > 0 ? 180 : 0
            );
          }
        );
      },
      // 处理右侧点击事件
      onItemTap(e: any) {
        const { swipeLeft, tapTypeL, tapTypeR, _leftButtons, _rightButtons } =
          this.data;
        const { onButtonTap } = this.getProps();
        if (!onButtonTap) return;
        const { itemL, idx, item } = e.currentTarget.dataset.item;
        const { confirmType } = swipeLeft ? item : itemL;
        if (tapTypeL === 'L-' + idx) {
          this.onSetSwipeLeft(0, true);
          this.setData({ tapTypeL: '', myStyle: {} });
          onButtonTap(
            { direction: 'left', btnIdx: idx },
            fmtEvent(this.getProps())
          );
          return;
        }
        if (tapTypeR === 'R-' + idx) {
          this.onSetSwipeRight(0, true);
          this.setData({ tapTypeR: '', myStyle: {} });
          onButtonTap(
            { direction: 'right', btnIdx: idx },
            fmtEvent(this.getProps())
          );
          return;
        }
        // auto 是展开按钮二次确认的效果
        if (confirmType === 'tap' || confirmType === 'move') {
          const styArr = swipeLeft
            ? setStyleObj1(_rightButtons)
            : setStyleObj2(_leftButtons);
          const sty = styArr[idx];
          this.setData({ myStyle: sty });
          !swipeLeft
            ? this.setData({ tapTypeL: 'L-' + idx })
            : this.setData({ tapTypeR: 'R-' + idx });
        } else {
          !swipeLeft
            ? this.onSetSwipeLeft(0, true)
            : this.onSetSwipeRight(0, true);
          onButtonTap(
            { direction: !swipeLeft ? 'left' : 'right', btnIdx: idx },
            fmtEvent(this.getProps())
          );
        }
      },
    },
  })
);
