import { useEffect } from 'functional-mini/compat';
import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { INumberKeyboardProps, NumberKeyboardFunctionalProps } from './props';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberKeyboard = (props: INumberKeyboardProps) => {
  const numArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const [randomArr, setRandomArr] = useState([]);
  const { triggerEventOnly, triggerEvent } = useComponentEvent(props);
  const setRandom = useStableCallback(() => {
    if (props.random) {
      const newArr = arr.sort(function () {
        return Math.random() - 0.5;
      });
      setRandomArr([
        newArr.slice(0, 3),
        newArr.slice(3, 6),
        newArr.slice(6, 9),
      ]);
    }
  });
  const vibrate = useStableCallback(() => {
    if (props.vibrate && typeof my !== 'undefined') {
      my.canIUse('vibrateShort') && my.vibrateShort();
    }
  });

  useEvent('handleHide', () => {
    triggerEventOnly('close');
  });

  useEvent('tapButton', (e) => {
    const { value, confirmDisabled } = props;
    vibrate();
    const _key = e.currentTarget.dataset.key;
    const _val = `${value}`;
    // 回退
    if (_key === 'del') {
      triggerEvent('change', `${_val.substr(0, _val.length - 1)}`);
      return;
    }
    if (_key !== 'del' && _key !== 'enter') {
      triggerEvent('change', `${_val}${_key}`);
    }
    if (_key === 'enter' && !confirmDisabled) {
      triggerEventOnly('close');
      triggerEventOnly('confirm');
      triggerEventOnly('close'); // 保持和之前一样的逻辑
    }
  });

  useEvent('catchAppearModal', () => {
    setRandom();
  });

  useEffect(() => {
    setRandom();
  }, []);

  return {
    randomArr,
    numArr,
  };
};

mountComponent(NumberKeyboard, NumberKeyboardFunctionalProps);
