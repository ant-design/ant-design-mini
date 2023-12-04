import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { ISliderProps, SliderValue } from './props';

interface Rect {
  touch: {
    pageX: number;
  };
  element: {
    left: number;
    width: number;
  };
}

export interface MoveStatus {
  changingStart?: boolean;
  changingEnd?: boolean;
}

export type MoveType = 'start' | 'end' | 'move';

export class SliderController {
  private id = 0;
  private valueId = 0;

  private _callback: any | null = null;
  private _moveStatus: MoveStatus | null = null;

  get value() {
    return this._value;
  }
  get props() {
    return this._props;
  }

  constructor(private _value: SliderValue, private _props: ISliderProps) {}

  handleMove(component: any, e, type: MoveType) {
    if (this.props.disabled) {
      return;
    }
    const currentId = this.getId();
    this.getRect(component, e).then((res) => {
      const { value, moveStatus } = this.getValue(res, type);
      const formatValue = this.formatValue(value);
      this.fireChange(currentId, formatValue, moveStatus, type, e);
    });
  }

  private fireChange(
    id: number,
    value: SliderValue,
    moveStatus: MoveStatus,
    type: MoveType,
    event: unknown
  ) {
    if (id < this.valueId) {
      return;
    }
    if (this._callback) {
      const changed = !this.isSliderValueEqual(this._value, value);
      const moveStatusChanged = this.isMoveStatusChanged(
        this._moveStatus,
        moveStatus
      );
      this._value = value;
      this.valueId = id;
      if (changed || moveStatusChanged) {
        this._callback(value, moveStatus, {
          valueChange: changed,
          moveStatusChange: moveStatusChanged,
          type,
          event,
        });
      }
    }
  }

  isMoveStatusChanged(value1, value2) {
    if (value1 === value2) {
      return false;
    }
    if (!value1 || !value2) {
      return true;
    }
    if (value1.changingStart !== value2.changingStart) {
      return true;
    }
    if (value1.changingEnd !== value2.changingEnd) {
      return true;
    }
    return false;
  }

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
  }

  private getId() {
    const id = this.id;
    this.id = this.id + 1;
    return id;
  }

  private async getRect(component: any, e: any): Promise<any> {
    const elementId = e.currentTarget.id;

    let instance = component;
    instance = my;
    const element = await getInstanceBoundingClientRect(
      instance,
      `#${elementId}`
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
  }

  fitSliderValue(
    value: SliderValue | undefined,
    min: number,
    max: number,
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

    return [Math.max(min, leftValue), Math.min(max, rightValue)] as SliderValue;
  }

  private getValue(
    rect: Rect,
    type: MoveType
  ): { value: SliderValue; moveStatus: MoveStatus } {
    const touchPosition =
      (rect.touch.pageX - rect.element.left) / rect.element.width;

    const props = this.props;
    const currentValue = this.value;

    const value = props.min + touchPosition * (props.max - props.min);

    if (!props.range) {
      return {
        value,
        moveStatus:
          type === 'end'
            ? {
                changingEnd: false,
                changingStart: false,
              }
            : {
                changingEnd: true,
              },
      };
    } else {
      const leftValue = currentValue[0];
      const rightValue = currentValue[1];
      const leftDistance = Math.abs(leftValue - value);
      const rightDistance = Math.abs(rightValue - value);
      const isFarFromLeft = leftDistance > rightDistance;
      const farValue = isFarFromLeft ? leftValue : rightValue;
      return {
        value: [value, farValue],
        moveStatus:
          type === 'end'
            ? {
                changingEnd: false,
                changingStart: false,
              }
            : isFarFromLeft
            ? {
                changingEnd: true,
              }
            : {
                changingStart: true,
              },
      };
    }
  }

  formatValue(val) {
    const props = this.props;
    let value = this.fitSliderValue(val, props.min, props.max, props.range);
    value = this.getRoundedValue(value, props.step);
    return value;
  }

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
  }

  updateProps(props: ISliderProps) {
    this._props = props;
  }
  updateValue(value: SliderValue) {
    this._value = value;
  }

  updateMoveStatus(moveStatus: any) {
    this._moveStatus = moveStatus;
  }

  onChange(callback: any) {
    this._callback = callback;
  }
}
