import dayjs from 'dayjs';
import { useState } from 'functional-mini/component';
import { useMinAndMax } from './hooks';

export function useDateState(props) {
  const { getMin } = useMinAndMax();

  const [datestate, setDateState] = useState({
    pickerType: 'start',
    start: null,
    end: null,
  });

  const init = (realValue) => {
    let currentStartDate = realValue?.[0];
    const currentEndDate = realValue?.[1];
    if (!currentStartDate) {
      const min = getMin(props.min).toDate();
      const { max } = props;
      currentStartDate = new Date();
      if (
        (min && dayjs(currentStartDate).isBefore(min, props.precision)) ||
        (max && dayjs(currentStartDate).isAfter(max, props.precision)) ||
        (currentEndDate && currentStartDate > currentEndDate)
      ) {
        currentStartDate = min;
      }
    }
    const newState = {
      pickerType: 'start',
      start: currentStartDate,
      end: currentEndDate,
    };
    setDateState(newState);
    return newState;
  };
  const changeType = (newType) => {
    let currentStartDate = datestate.start;
    let currentEndDate = datestate.end;

    if (newType === 'start') {
      if (!currentStartDate) {
        currentStartDate = currentEndDate;
      }
    } else {
      // pickerType=end start已存在
      // 结束时间默认选中开始
      if (!currentEndDate) {
        currentEndDate = currentStartDate;
      }
    }

    const newState = {
      pickerType: newType,
      start: currentStartDate,
      end: currentEndDate,
    };
    setDateState(newState);
    return newState;
  };

  function updateValue(newValue) {
    setDateState((old) => {
      if (old.pickerType === 'start') {
        return {
          ...old,
          start: newValue,
        };
      }
      return {
        ...old,
        end: newValue,
      };
    });
  }

  return {
    updateValue,
    datestate,
    init,
    changeType,
  };
}
