import { useRef, useState } from 'functional-mini/compat';
import { useEffect, useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { useMixState } from '../_util/hooks/useMixState';
import { CollapseFunctionalProps, ICollapseProps } from './props';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';

const Collapse = (props: ICollapseProps) => {
  const [contentHeight, setContentHeight] = useState<string[]>([]);
  const [hasChange, setHasChange] = useState<boolean>(false);
  const taskQueueRef = useRef<() => void>();
  const previousValueRef = useRef<number[]>([]);
  const [value, { isControlled, update }] = useMixState<number[]>(
    props.defaultCurrent,
    {
      value: props.current,
      postState(val) {
        let current = [...(val || [])];
        const items = props.items;
        current = current.filter((item) => {
          if (!items[item] || items[item].disabled) {
            return false;
          }
          return true;
        });
        if (props.accordion) {
          current = current.length > 0 ? [current[0]] : [];
        }
        return {
          valid: true,
          value: [...current],
        };
      },
    }
  );

  const { triggerEvent } = useComponentEvent(props);

  useEvent('onChange', (e) => {
    const itemIndex = parseInt(e.currentTarget.dataset.index, 10);
    if (props.items[itemIndex] && props.items[itemIndex].disabled) {
      return;
    }
    const arr = value;
    let current = [...arr];
    const index = current.indexOf(itemIndex);
    if (index >= 0) {
      current.splice(index, 1);
    } else {
      if (props.accordion) {
        current = [itemIndex];
      } else {
        current.push(itemIndex);
        current.sort();
      }
    }
    if (!isControlled) {
      update(current);
    }
    triggerEvent('change', current);
  });

  const { getBoundingClientRectWithBuilder } = useInstanceBoundingClientRect();

  const updateContentHeight = useStableCallback(
    async (prevCurrent: number[], nextCurrent: number[]) => {
      const prevCurrentArray = prevCurrent;
      const nextCurrentArray = nextCurrent;
      const expandArray = [];
      const closeArray = [];
      nextCurrentArray.forEach((item) => {
        if (prevCurrentArray.indexOf(item) < 0) {
          expandArray.push(item);
        }
      });
      prevCurrentArray.forEach((item) => {
        if (nextCurrentArray.indexOf(item) < 0) {
          closeArray.push(item);
        }
      });
      const newContentHeight = await Promise.all(
        props.items.map(async (item, index) => {
          if (
            expandArray.indexOf(index) >= 0 ||
            closeArray.indexOf(index) >= 0
          ) {
            const { height } = await getBoundingClientRectWithBuilder(
              (id) => `.ant-collapse-item-content${id}-${index}`
            );
            return `${height}px`;
          }
          return contentHeight[index];
        })
      );
      if (closeArray.length === 0) {
        setContentHeight(newContentHeight);
      } else {
        setContentHeight(newContentHeight);
        taskQueueRef.current = () => {
          setTimeout(() => {
            setContentHeight((contentHeight) => {
              return contentHeight.map((item, index) => {
                if (closeArray.indexOf(index) >= 0) {
                  return '0px';
                }
                return item;
              });
            });
          }, 10);
        };
      }
    }
  );

  useEffect(() => {
    if (taskQueueRef.current) {
      const task = taskQueueRef.current;
      taskQueueRef.current = null;
      if (typeof task === 'function') {
        task();
      }
    }
  });

  useEffect(() => {
    const current = value;
    const contentHeight = props.items.map((item, index) => {
      if (current.indexOf(index) >= 0) {
        return '';
      }
      return '0px';
    });
    setContentHeight(contentHeight);
    setHasChange(true);
    previousValueRef.current = value;
  }, []);

  useComponentUpdateEffect(() => {
    const previous = previousValueRef.current;
    previousValueRef.current = value;
    updateContentHeight(previous, value);
  }, [props.items, JSON.stringify(value)]);

  useEvent('resetContentHeight', (e) => {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    if (value.indexOf(index) < 0) {
      return;
    }
    setContentHeight((oldContentHeight) => {
      const newContentHeight = [...oldContentHeight];
      newContentHeight[index] = '';
      return newContentHeight;
    });
  });

  return {
    contentHeight,
    hasChange,
    mixin: {
      value,
    },
  };
};

mountComponent(Collapse, CollapseFunctionalProps);
