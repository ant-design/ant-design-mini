import { useMemo } from 'functional-mini/compat';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { BadgeFunctionalProps, IBadgeProps } from './props';

const Badge = (props: IBadgeProps) => {
  const overCount = useMemo(() => {
    const { text } = props;
    let overCount = false;
    if (typeof text === 'number') {
      if (text >= 100) {
        overCount = true;
      }
    }
    return overCount;
  }, [props.text]);

  return { overCount };
};

mountComponent(Badge, BadgeFunctionalProps);
