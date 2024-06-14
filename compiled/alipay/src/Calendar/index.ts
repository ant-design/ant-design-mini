import dayjs from 'dayjs';
import {
  useComponent,
  useEvent,
  useReady,
  useState,
  useEffect,
} from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import {
  CalendarValue,
  CellState,
  defaultLocaleText,
  ICalendarProps,
} from './props';
import {
  defaultMonthRange,
  getMonthListFromRange,
  getSelectionModeFromValue,
  renderCells,
  getScrollIntoViewId,
} from './utils';

function getBoundingClientRect(instance: any, selector: string) {
  return new Promise<any>((resolve, reject) => {
    instance
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          reject();
        }
      });
  });
}

const Calendar = (props: ICalendarProps) => {
  const localeText = Object.assign({}, defaultLocaleText, props.localeText);

  const markItems = [...localeText.weekdayNames];
  const weekStartsOn = props.weekStartsOn;
  if (weekStartsOn === 'Sunday') {
    const item = markItems.pop();
    if (item) markItems.unshift(item);
  }

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });

  const [scrollIntoViewId, setScrollIntoViewId] = useState<string>('');

  useEvent('scrollIntoView', (value) => {
    updateScrollIntoViewId(getScrollIntoViewId(value));
  });

  triggerRefEvent();

  // scroll 触发滚动之后需要重置 scrollIntoViewId
  function updateScrollIntoViewId(id) {
    setScrollIntoViewId(id);

    const timer = setTimeout(() => {
      setScrollIntoViewId('');
      clearTimeout(timer);
    });
  }

  const selectionModeFromValue = getSelectionModeFromValue(value);
  const selectionMode =
    props.selectionMode ?? selectionModeFromValue ?? 'range';

  const { triggerEvent } = useComponentEvent(props);
  function updateValue(newValue: CalendarValue) {
    const isControl = hasValue(props.value);
    triggerEvent('change', newValue);
    if (!isControl) {
      setValue(newValue);
    }
  }

  useEvent('clickCell', (e) => {
    const time = e.currentTarget.dataset.time;
    const clickDate = dayjs(time.time);
    if (time.disabled) {
      return;
    }
    if (selectionMode === 'range') {
      if (Array.isArray(value)) {
        if (value.length === 1) {
          const current = value[0];
          if (dayjs(clickDate.toDate().getTime()).isBefore(dayjs(current))) {
            updateValue([clickDate.toDate().getTime()]);
          } else {
            updateValue([value[0], clickDate.toDate().getTime()]);
          }
        } else {
          updateValue([clickDate.toDate().getTime()]);
        }
      } else {
        updateValue([clickDate.toDate().getTime()]);
      }
    } else if (selectionMode === 'single') {
      updateValue(clickDate.toDate().getTime());
    }
  });

  const monthList = getMonthListFromRange(
    dayjs(props.monthRange[0]),
    dayjs(props.monthRange[1])
  ).map((p) => {
    let cells = renderCells(p, weekStartsOn, value, localeText);
    if (props.onFormatter && typeof props.onFormatter === 'function') {
      cells = cells.map((o): CellState => {
        const {
          time,
          top,
          bottom,
          disabled,
          isSelectedBegin,
          isSelectedEnd,
          isSelected,
        } = o;
        const newState =
          props.onFormatter(
            {
              time,
              top: top ? { ...top } : undefined,
              bottom: bottom ? { ...bottom } : undefined,
              disabled,
              isSelectedBegin,
              isSelectedEnd,
              isSelected,
            },
            value
          ) ?? {};
        const result = { ...o };
        if (typeof newState === 'object') {
          // 只允许修改三个字段
          ['top', 'bottom', 'disabled'].forEach((key) => {
            if (key in newState) {
              result[key] = newState[key];
            }
          });
        }
        return result;
      });
    }
    return {
      title: p.format(localeText.title),
      cells,
    };
  });

  const [headerState, setHeaderState] = useState(0);

  useEvent('setCurrentMonth', (e) => {
    setHeaderState(e.month);
  });

  const [elementSize, setElementSize] = useState<{
    monthTitleHeight: number;
    cellHight: number;
    paddingHeight: number;
  }>(null);

  const componentInstance = useComponent();

  function measurement() {
    Promise.all([
      getBoundingClientRect(componentInstance, '.ant-calendar-body-container'),
      getBoundingClientRect(componentInstance, '.ant-calendar-cells'),
      getBoundingClientRect(componentInstance, '.ant-calendar-title-container'),
    ])
      .then(([bodyContainer, cellContainer, Title]) => {
        // 滚动的时候 top 和 bottom 等尺寸会变
        // 所以只能依赖 height 来计算
        const paddingHeight =
          bodyContainer.height - cellContainer.height - Title.height;
        const monthTitleHeight = Title.height + paddingHeight;
        const cellHight =
          cellContainer.height / (monthList[0].cells.length / 7);
        setElementSize({
          monthTitleHeight,
          cellHight,
          paddingHeight,
        });
      })
      .catch(() => {
        setElementSize(null);
      });
  }

  useEffect(() => {
    // 滚动到已选的位置
    props.changedScrollIntoView &&
      updateScrollIntoViewId(getScrollIntoViewId(value));
  }, [value]);

  useReady(() => {
    measurement();
    // 初始化默认值时，滚动到选中位置
    const isControl = hasValue(props.value);
    if (isControl) {
      updateScrollIntoViewId(getScrollIntoViewId(props.value));
    } else {
      props.defaultValue &&
        updateScrollIntoViewId(getScrollIntoViewId(props.defaultValue));
    }
  }, []);

  useEvent('measurement', () => {
    // 组件如果内嵌在 slot 里, 一定会被渲染出来, 但是此时 cellHight 为 0
    // 此时需要重新计算
    if (!elementSize || elementSize.cellHight === 0) {
      measurement();
    }
  });

  return {
    elementSize,
    markItems,
    monthList,
    headerState,
    scrollIntoViewId,
  };
};

mountComponent<ICalendarProps>(Calendar, {
  defaultValue: null,
  value: null,
  selectionMode: 'range',
  monthRange: defaultMonthRange(),
  weekStartsOn: 'Sunday',
  localeText: defaultLocaleText,
  onFormatter: null,
  changedScrollIntoView: null,
});
