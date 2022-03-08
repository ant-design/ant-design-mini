import { SwipeActionDefaultProps } from './props';
import { ComponentContext } from '../_util/context';
import { IBoundingClientRect } from "../_base"

const swipeIdContext = new ComponentContext();

Component({
  props: SwipeActionDefaultProps,
  data: {
    itemPosition: 0,
    leftBtn: false,
    rightBtn: false,
    prevId: null,
  },
  didMount() {
    this.setBtnWidth();
    this.swipeActionItemId = (value) => {
      if (value !== this.$id && this.data.itemPosition !== 0) {
        this.setData({
          itemPosition: 0,
        });
      }
    };
    swipeIdContext.onUpdate(this.swipeActionItemId);
  },
  didUnmount() {
    swipeIdContext.offUpdate(this.swipeActionItemId);
  },
  methods: {
    setBtnWidth() {
      my.createSelectorQuery()
        .select(`.amd-swipe-action-right-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          this.rightBtnWidth = (ret && ret[0] && (<IBoundingClientRect>ret[0]).width) || 0;
        });
      my.createSelectorQuery()
        .select(`.amd-swipe-action-left-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          this.leftBtnWidth = (ret && ret[0] && (<IBoundingClientRect>ret[0]).width) || 0;
        });
    },
    onSwipeTap() {
      if (this.data.itemPosition !== 0) {
        this.setData({
          itemPosition: 0,
        });
      }
    },
    onSwipeStart(e) {
      swipeIdContext.update(this.$id);
      const { disabled } = this.props;
      if (this.data.itemPosition !== 0 || disabled) {
        this.setData({
          itemPosition: 0,
        });
        this.touchObject = {
          startX: 0,
          startY: 0,
        };
      } else {
        this.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY,
        };
      }
    },
    onSwipeMove(e) {
      const { touchObject } = this;
      const touchePoint = e.touches[0];
      const { itemPosition } = this.data;

      if (touchObject) {
        touchObject.endX = touchePoint.pageX;

        // 首次触发时，计算滑动角度
        if (touchObject.direction === undefined) {
          let direction = 0;

          const xDist = touchObject.startX - touchePoint.pageX || 0;
          const yDist = touchObject.startY - touchePoint.pageY || 0;

          const r = Math.atan2(yDist, xDist);
          let swipeAngle = Math.round((r * 180) / Math.PI);

          if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
          }
          if (swipeAngle <= 30 && swipeAngle >= 0) {
            direction = 1;
          }
          if (swipeAngle <= 360 && swipeAngle >= 330) {
            direction = 1;
          }
          if (swipeAngle >= 170 && swipeAngle <= 190) {
            direction = -1;
          }

          touchObject.direction = direction;
        }

        // 通过角度判断是左右方向
        if (touchObject.direction !== 0) {
          let newPoisiton = itemPosition;
          // 滑动距离
          const distance = touchObject.endX - touchObject.startX;
          // 左划
          if (distance < 0) {
            newPoisiton = Math.max(distance, -this.rightBtnWidth);
            this.setData({
              rightBtn: true,
              leftBtn: false,
            });
            // 右划
          } else {
            newPoisiton = Math.min(distance, this.leftBtnWidth);
            this.setData({
              rightBtn: false,
              leftBtn: true,
            });
          }
          if (Math.abs(distance) > 10) {
            this.setData({
              itemPosition: newPoisiton,
            });
          }
        }
      }
    },
    onSwipeEnd(e) {
      const { touchObject } = this;
      if (touchObject.direction !== 0) {
        const touchePoint = e.changedTouches[0];

        touchObject.endX = touchePoint.pageX;

        const { itemPosition } = this.data;
        const distance = touchObject.endX - touchObject.startX;
        let newPoisiton = itemPosition;
        if (distance < 0) {
          if (Math.abs(distance + itemPosition) > this.rightBtnWidth * 0.7) {
            newPoisiton = (-this.rightBtnWidth);
          } else {
            newPoisiton = 0;
          }
        } else if (Math.abs(distance + itemPosition) > this.leftBtnWidth * 0.7) {
          newPoisiton = this.leftBtnWidth;
        } else {
          newPoisiton = 0;
        }
        this.setData({
          itemPosition: newPoisiton,
        });
      }
    },
    onLeftButtonTap(e) {
      const { index, text, type } = e.currentTarget.dataset;
      const { autoClose, onLeftButtonTap, extraInfo } = this.props;
      if (autoClose) {
        this.setData({
          itemPosition: 0,
        });
      }
      if (onLeftButtonTap) {
        return onLeftButtonTap(index, text, type, extraInfo);
      }
    },
    onRightButtonTap(e) {
      const { index, text, type } = e.currentTarget.dataset;
      const { autoClose, onRightButtonTap, extraInfo } = this.props;
      if (autoClose) {
        this.setData({
          itemPosition: 0,
        });
      }
      if (onRightButtonTap) {
        return onRightButtonTap(index, text, type, extraInfo);
      }
    },
  },
});
