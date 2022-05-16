import equal from 'fast-deep-equal';
import { sliderDefaultProps, SliderValue, ISliderProps } from './props';

let globalId = 0;

Component({
  props: sliderDefaultProps,
  data: {
    rawValue: undefined,
    sliderLeft: 0,
    sliderWidth: 0,
    tickList: []
  },
  defaultValue: undefined,
  sliderId: '',

  didMount() {
    const { value } = this.props;
    // 生成一个当前组件的唯一ID
    globalId += 1;
    const sliderId = `amd-slider-id-${globalId}`;
    this.sliderId = sliderId;
    this.setData({
      sliderId
    });
    this.updateByProps(value);
    (this.defaultValue as SliderValue) = value;
  },

  didUpdate(prevProps) {
    if (!equal(this.props, prevProps)) {
      /** 暂时不支持受控模式，默认都采用初始值，后面表单统一处理 */
      this.updateByProps(this.defaultValue);
    }
  },

  methods: {
    updateByProps(newValue) {
      const { min, max, step, range, ticks } = this.props;
      const rawValue = this.fitSliderValue(newValue, min, max, step, range);

      this.updateRawValue(rawValue, step);

      if (ticks) {
        this.setTickList(step, min, max);
      }
    },

    updateRawValue(rawValue: SliderValue, step = 1) {
      const prevValue = this.getRoundedValue(this.data.rawValue, step);
      const currentValue = this.getRoundedValue(rawValue, step);

      this.setData({
        rawValue,
      });

      this.setSliderStyleByRawValue(currentValue);

      if (!this.isSliderValueEqual(currentValue, prevValue)) {
        this.props.onChange?.(currentValue);
      }
    },

    getRoundedValue(rawValue: SliderValue, step = 1) {
      if (rawValue === undefined) {
        return 0;
      }

      if (typeof rawValue === 'number') {
        return Math.round(rawValue / step) * step;
      }

      return [
        Math.round(rawValue[0] / step) * step,
        Math.round(rawValue[1] / step) * step,
      ] as SliderValue;
    },

    setSliderStyleByRawValue(roundedValue: SliderValue) {
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

    onTouchChanged(e) {
      if (this.props.disabled) {
        return;
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
                this.updateRawValue(
                  this.fitSliderValue(
                    value,
                    this.props.min,
                    this.props.max,
                    this.props.step,
                    this.props.range,
                  ),
                  this.props.step
                );
              } else {
                const currentValue = this.fitSliderValue(
                  this.data.rawValue,
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

                this.updateRawValue(
                  this.fitSliderValue(
                    [value, farValue],
                    this.props.min,
                    this.props.max,
                    this.props.step,
                    this.props.range,
                  ),
                  this.props.step
                );
              }
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
      this.onTouchChanged(e);
    },

    handleTrackTouchMove(e) {
      this.onTouchChanged(e);
    },

    handleTrackTouchEnd(e) {
      this.onTouchChanged(e);
    },
  },
});
