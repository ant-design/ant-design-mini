import dayjs from 'dayjs';
import { useState } from 'functional-mini/component';
import { useMinAndMax } from './hooks';

export function useDateState(props) {
  const { getMin } = useMinAndMax();

  const [dateState, setDateState] = useState({
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
    let currentStartDate = dateState.start;
    let currentEndDate = dateState.end;

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
        let newEnd = old.end;
        if (old.end && dayjs(newValue).isAfter(old.end)) {
          newEnd = null;
        }

        return {
          ...old,
          start: newValue,
          end: newEnd,
        };
      }
      let newStart = old.start;
      if (old.start && dayjs(newValue).isBefore(old.start)) {
        newStart = null;
      }
      return {
        ...old,
        end: newValue,
        start: newStart,
      };
    });
  }

  return {
    updateValue,
    dateState,
    init,
    changeType,
  };
}
