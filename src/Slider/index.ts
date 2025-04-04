import equal from 'fast-deep-equal';
import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { sliderDefaultProps, SliderValue } from './props';

Component({
  props: sliderDefaultProps,
  data: {
    sliderLeft: 0,
    sliderWidth: 0,
    tickList: [],
    changingStart: false,
    changingEnd: false,
  },
  onChangeValue: undefined,
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    formatValue(val) {
      const [min, max, step, range] = getValueFromProps(this, [
        'min',
        'max',
        'step',
        'range',
      ]);
      let value = this.fitSliderValue(val, min, max, step, range);
      value = this.getRoundedValue(value, step);
      return value;
    },
    getRoundedValue(value: SliderValue, step = 1) {
      if (value === undefined) {
        return 0;
      }

      if (typeof value === 'number') {
        return Math.round(value / step) * step;
      }

      return [
        Math.round(value[0] / step) * step,
        Math.round(value[1] / step) * step,
      ] as SliderValue;
    },

    setSliderStyleByValue(roundedValue: SliderValue) {
      let leftValue = 0;
      let rightValue = 0;
      const [minFromProps, maxFromProps] = getValueFromProps(this, [
        'min',
        'max',
      ]);
      const max = maxFromProps ?? sliderDefaultProps.max;
      const min = minFromProps ?? sliderDefaultProps.min;

      if (roundedValue !== undefined) {
        if (typeof roundedValue === 'number') {
          leftValue = min;
          rightValue = roundedValue;
        } else {
          leftValue = roundedValue[0];
          rightValue = roundedValue[1];
        }
      }

      // FIX_ME when min and max is equal
      const width = ((rightValue - leftValue) / (max - min)) * 100;
      const left = ((leftValue - min) / (max - min)) * 100;

      this.setData({
        sliderLeft: left,
        sliderWidth: width,
      });
    },

    setTickList() {
      const [step, min, max, showTicks] = getValueFromProps(this, [
        'step',
        'min',
        'max',
        'showTicks',
      ]);
      if (!showTicks) {
        return;
      }
      const tickList = [];
      const stepCount = (max - min) / step;

      for (let i = 0; i <= stepCount; i += 1) {
        tickList.push({
          left: i * (100 / stepCount),
          value: i * step + min,
        });
      }

      this.setData({
        tickList,
      });
    },

    async onTouchChanged(e, type) {
      if (getValueFromProps(this, 'disabled')) {
        return;
      }
      const changeMoving = (params) => {
        const newParams = {};
        for (const key in params) {
          if (params[key] !== this.data[key]) {
            newParams[key] = params[key];
          }
        }
        if (Object.keys(newParams).length > 0) {
          this.setData(newParams);
        }
      };

      const rect = await this.getRect(e);
      if (!rect) return;
      const [min, max, range] = getValueFromProps(this, [
        'min',
        'max',
        'range',
      ]);
      const touchPosition =
        (rect.touch.pageX - rect.element.left) / rect.element.width;
      const value = min + touchPosition * (max - min);
      if (!range) {
        this.update(value, {}, !this.isControlled(), true);
        changeMoving({ changingEnd: true });
      } else {
        const currentValue = this.getValue();

        const leftValue = currentValue[0];
        const rightValue = currentValue[1];
        const leftDistance = Math.abs(leftValue - value);
        const rightDistance = Math.abs(rightValue - value);
        const isFarFromLeft = leftDistance > rightDistance;
        const farValue = isFarFromLeft ? leftValue : rightValue;

        this.update([value, farValue], {}, !this.isControlled(), 'onChange');
        if (isFarFromLeft) {
          changeMoving({ changingEnd: true });
        } else {
          changeMoving({ changingStart: true });
        }
      }

      if (type === 'end') {
        changeMoving({ changingEnd: false, changingStart: false });
        triggerEvent(this, 'afterChange', this.getValue(), e);
      }
    },

    async getRect(e: any): Promise<any> {
      const element = await getInstanceBoundingClientRect(
        this.getInstance(),
        `#ant-slider-id-${this.$id || ''}`
      );
      const touch = e.changedTouches[0];
      if (element) {
        return {
          touch: {
            pageX: touch.pageX,
          },
          element: {
            left: element.left,
            width: element.width,
          },
        };
      }
    },

    cloneSliderValue(value?: SliderValue) {
      if (typeof value === 'object') {
        return [value[0], value[1]];
      }

      return value;
    },

    isSliderValueEqual(value1?: SliderValue, value2?: SliderValue) {
      if (value1 === value2) {
        return true;
      }

      if (value1 === undefined || value2 === undefined) {
        return false;
      }

      if (typeof value1 === 'number' || typeof value2 == 'number') {
        return value1 === value2;
      }

      if (value1[0] === value2[0] && value1[1] === value2[1]) {
        return true;
      }

      return false;
    },

    fitSliderValue(
      value: SliderValue | undefined,
      min: number,
      max: number,
      step: number,
      isRange: boolean
    ) {
      if (value === undefined || value === null) {
        if (isRange) {
          return [min, min] as SliderValue;
        } else {
          return min ?? 0;
        }
      }

      if (typeof value === 'number') {
        if (value > max) {
          return max;
        }

        if (value < min) {
          return min;
        }

        return value;
      }

      const leftValue = Math.min(value[0], value[1]);
      const rightValue = Math.max(value[0], value[1]);

      return [
        Math.max(min, leftValue),
        Math.min(max, rightValue),
      ] as SliderValue;
    },

    handleTrackTouchStart(e) {
      this.onTouchChanged(e, 'start');
    },

    handleTrackTouchMove(e) {
      this.onTouchChanged(e, 'move');
    },

    handleTrackTouchEnd(e) {
      this.onTouchChanged(e, 'end');
    },
  },
  mixins: [
    createValue({
      transformValue(val, extra, needUpdate = true, emit) {
        const value = this.formatValue(val);
        if (needUpdate) {
          this.setSliderStyleByValue(value);
          this.setTickList();
        }
        this.onChangeValue =
          typeof this.onChangeValue === 'undefined'
            ? this.getValue()
            : this.onChangeValue;
        if (emit && !this.isSliderValueEqual(this.onChangeValue, value)) {
          this.onChangeValue = value;
          triggerEvent(this, 'change', value);
        }
        return {
          value,
          needUpdate,
        };
      },
    }),
  ],
  /// #if ALIPAY || BUNDLE2H
  didUpdate(prevProps) {
    const [min, max, step, range, showTicks, value] = getValueFromProps(this, [
      'min',
      'max',
      'step',
      'range',
      'showTicks',
      'value',
    ]);
    if (
      !equal(min, prevProps.min) ||
      !equal(max, prevProps.max) ||
      !equal(step, prevProps.step) ||
      !equal(range, prevProps.range) ||
      !equal(showTicks, prevProps.showTicks)
    ) {
      this.update(value);
    }
  },
  /// #endif
  /// #if WECHAT
  observers: {
    'min, max, step, range, showTicks': function () {
      const value = getValueFromProps(this, 'value');

      this.update(value);
    },
  },
  /// #endif
});
