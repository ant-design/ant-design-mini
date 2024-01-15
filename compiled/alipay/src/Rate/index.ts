import {
  useComponent,
  useEvent,
  useRef,
  useState,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { IRateProps, RateFunctionalProps } from './props';

const Rate = (props: IRateProps) => {
  const [rateValue, { isControlled, update }] = useMixState(
    props.defaultValue,
    {
      value: props.value,
      postState(value) {
        if (props.allowHalf) {
          return {
            valid: true,
            value: value % 0.5 !== 0 ? Math.round(value) : value,
          };
        }
        return {
          valid: true,
          value: Math.ceil(value),
        };
      },
    }
  );

  const { triggerEvent } = useComponentEvent(props);
  const [displayValue, setDisplayValue] = useState(null);
  const ref = useRef<{ originalRate: number; currentRate?: number } | null>(
    null
  );
  const instance = useComponent();

  function getInstance() {
    if (instance.$id) {
      return my;
    }
    return instance;
  }
  async function getRate(clientX: number) {
    const { gutter, count } = props;
    const { left, width } = await getInstanceBoundingClientRect(
      getInstance(),
      `#ant-rate-container${instance.$id ? `-${instance.$id}` : ''}`
    );
    const halfRateWidth = (width - (count - 1) * gutter) / count / 2;
    const num = clientX - left;
    let halfRateCount = 0;
    /* eslint-disable no-constant-condition */
    while (true) {
      const val =
        halfRateWidth * halfRateCount + gutter * Math.floor(halfRateCount / 2);
      if (halfRateCount >= count * 2 || num <= val) {
        break;
      }
      halfRateCount++;
    }
    const rate = props.allowHalf
      ? halfRateCount * 0.5
      : Math.ceil(halfRateCount * 0.5);
    return rate;
  }

  useEvent('handleStarTap', async (e) => {
    if (props.readonly) {
      return;
    }
    const { clientX, x } = e.detail;

    const clickX = typeof x === 'number' ? x : clientX;
    let rate = await getRate(clickX);
    if (rateValue === rate && props.allowClear) {
      rate = 0;
    }
    if (!isControlled) {
      update(rate);
    }
    if (rateValue !== rate) {
      triggerEvent('change', rate);
    }
  });

  useEvent('handleStarMove', async (e) => {
    if (props.readonly) {
      return;
    }
    const { touches } = e;
    const { clientX } = touches[0];
    if (!ref.current) {
      ref.current = {
        originalRate: rateValue,
      };
    }
    const rate = await getRate(clientX);
    if (ref.current) {
      ref.current = {
        ...ref.current,
        currentRate: rate,
      };

      if (isControlled) {
        setDisplayValue(rate);
      } else {
        update(rate);
      }
    }
  });

  useEvent('handleStarMoveEnd', async () => {
    if (props.readonly) {
      return;
    }
    if (!ref.current) {
      return;
    }
    const { currentRate, originalRate } = ref.current;
    ref.current = null;
    if (isControlled) {
      setDisplayValue(null);
    }
    if (currentRate !== originalRate) {
      triggerEvent('change', currentRate);
    }
  });

  return {
    mixin: {
      value: displayValue !== null ? displayValue : rateValue,
    },
  };
};

mountComponent(Rate, RateFunctionalProps);
