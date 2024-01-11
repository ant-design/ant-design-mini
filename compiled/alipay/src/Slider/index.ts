import {
  useEvent,
  useMemo,
  useRef,
  useState,
  useComponent,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { SliderController } from './controller';
import {
  ISliderProps,
  sliderDefaultProps,
  SliderFunctionalProps,
} from './props';

const useSliderController = (props: ISliderProps) => {
  const controllerRef = useRef<SliderController>();
  if (!controllerRef.current) {
    controllerRef.current = new SliderController(0, props);
  }
  return controllerRef.current;
};

const Slider = (props) => {
  const component = useComponent();
  const sliderController: SliderController = useSliderController(props);
  const [value, { update, isControlled }] = useMixState(props.defaultValue, {
    value: props.value,
    postState(value) {
      return {
        valid: true,
        value: sliderController.formatValue(value),
      };
    },
  });
  const [moveStatus, setMoveStatus] = useState({
    changingStart: false,
    changingEnd: false,
  });
  const { triggerEvent } = useComponentEvent(props);
  sliderController.updateProps(props);
  sliderController.updateValue(value);
  sliderController.updateMoveStatus(moveStatus);
  sliderController.onChange(
    (v, moveStatus, { valueChange, moveStatusChange, type, event }) => {
      if (!isControlled) {
        update(v);
      }
      if (valueChange) {
        triggerEvent('change', v);
      }
      if (moveStatusChange) {
        setMoveStatus((v2) => ({
          ...v2,
          ...moveStatus,
        }));
      }
      if (value && type === 'end') {
        triggerEvent('afterChange', v, event);
      }
    }
  );

  useEvent('handleTrackTouchStart', (e) =>
    sliderController.handleMove(component, e, 'start')
  );
  useEvent('handleTrackTouchMove', (e) =>
    sliderController.handleMove(component, e, 'move')
  );
  useEvent('handleTrackTouchEnd', (e) =>
    sliderController.handleMove(component, e, 'end')
  );

  const tickList = useMemo(() => {
    const { step, min, max, showTicks } = props;
    if (!showTicks) {
      return [];
    }
    const tickList = [];
    const stepCount = (max - min) / step;

    for (let i = 0; i <= stepCount; i += 1) {
      tickList.push({
        left: i * (100 / stepCount),
        value: i * step + min,
      });
    }

    return tickList;
  }, [props]);

  const { sliderLeft, sliderWidth } = useMemo(() => {
    const roundedValue = value;
    let leftValue = 0;
    let rightValue = 0;
    const max = props.max ?? sliderDefaultProps.max;
    const min = props.min ?? sliderDefaultProps.min;

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

    return {
      sliderLeft: left,
      sliderWidth: width,
    };
  }, [value]);

  return {
    mixin: {
      value,
    },
    tickList,
    sliderLeft,
    sliderWidth,
    ...moveStatus,
  };
};

mountComponent(Slider, SliderFunctionalProps);
