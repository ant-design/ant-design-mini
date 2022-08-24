import equal from 'fast-deep-equal';
import { sliderDefaultProps, SliderValue } from './props';
import fmtEvent from '../_util/fmtEvent';


Component({
  props: sliderDefaultProps,
  data: {
    value: undefined,
    sliderLeft: 0,
    sliderWidth: 0,
    tickList: [],
    changingStart: false,
    changingEnd: false,
  },

  didMount() {
    const { value } = this.props;
    const sliderId = `amd-slider-id-${this.$id}`;
    this.setData({
      sliderId
    });
    this.updateByProps(value, {
      isAfterChange: false,
      isSilentOnChange: true,
    });
  },

  didUpdate(prevProps) {
    if (!equal(this.props.value, prevProps.value)) {
      this.updateByProps(this.props.value, {
        isAfterChange: false,
        isSilentOnChange: true,

      });
    } else if (!equal(this.props.min, prevProps.min) ||
    !equal(this.props.max, prevProps.max) ||
    !equal(this.props.step, prevProps.step) ||
    !equal(this.props.range, prevProps.range) ||
    !equal(this.props.ticks, prevProps.ticks)
    ) {
      this.updateByProps(this.data.value, {
        isAfterChange: false,
        isSilentOnChange: true,

      })
    }
  },

  methods: {
    updateByProps(newValue, {
      isAfterChange = false,
      isSilentOnChange = true,
    } = {}) {
      const { min, max, step, range, ticks } = this.props;
      const value = this.fitSliderValue(newValue, min, max, step, range);

      this.updateValue(value, step, {
        isAfterChange,
        isSilentOnChange
      });

      if (ticks) {
        this.setTickList(step, min, max);
      }
    },

    updateValue(value: SliderValue, step = 1, {
      isAfterChange = false,
      isSilentOnChange = false
    }= {}) {
      const { onChange, onAfterChange } = this.props;
      const prevValue = this.getRoundedValue(this.data.value, step);
      const currentValue = this.getRoundedValue(value, step);

      this.setData({
        value: currentValue,
      });

      this.setSliderStyleByValue(currentValue);

      if (!this.isSliderValueEqual(currentValue, prevValue) && typeof onChange === 'function' && !isSilentOnChange) {
        onChange(currentValue, fmtEvent(this.props));
      }

      if (isAfterChange && typeof onAfterChange === 'function') {
        onAfterChange(currentValue, fmtEvent(this.props));
      }
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
      const max = this.props.max ?? sliderDefaultProps.max;
      const min = this.props.min ?? sliderDefaultProps.min;

      if (roundedValue !== undefined) {
        if (typeof roundedValue === 'number') {
          leftValue = min; rightValue = roundedValue;
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

    setTickList(step: number, min: number, max: number) {
      const tickList = [];
      const stepCount = (max - min) / step;

      for (let i = 0; i <= stepCount; i += 1) {
        tickList.push({
          left: i * (100 / stepCount),
          value: i * step,
        });
      }

      this.setData({
        tickList,
      });
    },

    onTouchChanged(e, type) {
      if (this.props.disabled) {
        return;
      }
      const changeMoving = (params) => {
        const newParams = {};
        for(const key in params) {
          if(params[key] !== this.data[key]) {
            newParams[key] = params[key];
          }
        }
        if(Object.keys(newParams).length>0) {
          this.setData(newParams);
        }
      }
      if (e.currentTarget && e.changedTouches[0]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        my.createSelectorQuery()
          .select(`#${e.currentTarget.id}`)
          .boundingClientRect()
          .exec((list) => {
            const element = list[0];
            if (element) {
              const touch = e.changedTouches[0];
              const touchPosition = (touch.pageX - element.left) / element.width;
              const value =
                this.props.min +
                touchPosition * (this.props.max - this.props.min);

              if (!this.props.range) {
                this.updateValue(
                  this.fitSliderValue(
                    value,
                    this.props.min,
                    this.props.max,
                    this.props.step,
                    this.props.range,
                  ),
                  this.props.step
                );
                changeMoving({ changingEnd: true });
              } else {
                const currentValue = this.fitSliderValue(
                  this.data.value,
                  this.props.min,
                  this.props.max,
                  this.props.step,
                  this.props.range,
                );

                const leftValue = currentValue[0];
                const rightValue = currentValue[1];
                const leftDistance = Math.abs(leftValue - value);
                const rightDistance = Math.abs(rightValue - value);
                const isFarFromLeft = leftDistance > rightDistance;
                const farValue = isFarFromLeft ? leftValue : rightValue;
                this.updateValue(
                  this.fitSliderValue(
                    [value, farValue],
                    this.props.min,
                    this.props.max,
                    this.props.step,
                    this.props.range,
                  ),
                  this.props.step
                );
                if(isFarFromLeft) {
                  changeMoving({ changingEnd: true });
                }else {
                  changeMoving({ changingStart: true });
                }
              }
            }
            if(type === 'end') {
              changeMoving({ changingEnd: false, changingStart: false });
            }
          });
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

    fitSliderValue(value: SliderValue | undefined, min: number, max: number, step: number, isRange: boolean,) {
      if (value === undefined) {
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

        return Math.round(value);
      }

      const leftValue = Math.min(value[0], value[1]);
      const rightValue = Math.max(value[0], value[1]);

      return [(Math.max(min, leftValue)), Math.min(max, rightValue)] as SliderValue;
    },

    handleTrackTouchStart(e) {
      this.onTouchChanged(e, 'start');
    },

    handleTrackTouchMove(e) {
      this.onTouchChanged(e, 'move');
    },

    handleTrackTouchEnd(e) {
      const { onAfterChange } = this.props;
      this.onTouchChanged(e, 'end');
      if (typeof onAfterChange === 'function') {
        this.updateByProps(this.data.value, {
          isAfterChange: true,
          isSilentOnChange: false
        });
      }
    },
  },
});
