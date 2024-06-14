import { useState } from 'functional-mini/compat';
import {
  useDidMount,
  useEvent,
  useReady,
  useRef,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { useMixState } from '../_util/hooks/useMixState';
import { ITabsProps, TabsFunctionalProps } from './props';

const Tabs = (props: ITabsProps) => {
  const [currentValue, { isControlled, update }] = useMixState(
    props.defaultCurrent,
    {
      value: props.current,
    }
  );

  const [state, updateState] = useState({
    scrollLeft: 0,
    scrollTop: 0,
    leftFade: false,
    rightFade: false,
  });
  const scrollRef = useRef({ scrollLeft: 0, scrollTop: 0 });

  const { triggerEvent } = useComponentEvent(props);

  const updatePartState = (part) => {
    updateState((old) => {
      return {
        ...old,
        ...part,
      };
    });
  };

  const { getBoundingClientRectWithBuilder, getBoundingClientRect } =
    useInstanceBoundingClientRect();

  const updateFade = useStableCallback(async () => {
    updatePartState({
      leftFade: !!scrollRef.current.scrollLeft,
    });
    const [view, item] = await Promise.all([
      getBoundingClientRectWithBuilder(
        (id) => `#ant-tabs-bar-scroll-view${id}`
      ),
      getBoundingClientRectWithBuilder(
        (id) => `#ant-tabs-bar-item${id}-${props.items.length - 1}`
      ),
    ]);
    if (!item || !view) {
      return;
    }
    updatePartState({
      rightFade: item.left + item.width / 2 > view.width,
    });
  });

  const updateScroll = useStableCallback(async () => {
    const current = currentValue;
    const [view, item] = await Promise.all([
      getBoundingClientRectWithBuilder(
        (id) => `#ant-tabs-bar-scroll-view${id}`
      ),
      getBoundingClientRectWithBuilder(
        (id) => `#ant-tabs-bar-item${id}-${current}`
      ),
    ]);
    if (!view || !item) {
      return;
    }

    if (props.direction === 'vertical') {
      let scrollTop = scrollRef.current.scrollTop || 0;
      let needScroll = false;
      if (props.scrollMode === 'center') {
        needScroll = true;
        scrollTop +=
          item.top - view.top - Math.max((view.height - item.height) / 2, 0);
      } else {
        const distance = item.top - view.top;
        if (distance < 0) {
          scrollTop += distance;
          needScroll = true;
        } else if (distance + item.height > view.height) {
          scrollTop += Math.min(distance + item.height - view.height, distance);
          needScroll = true;
        }
      }
      if (needScroll) {
        if (scrollTop === state.scrollTop) {
          scrollTop += Math.random();
        }
        updatePartState({
          scrollTop,
        });
      }
      return;
    }
    let scrollLeft = scrollRef.current.scrollLeft || 0;
    let needScroll = false;
    if (props.scrollMode === 'center') {
      needScroll = true;
      scrollLeft +=
        item.left - view.left - Math.max((view.width - item.width) / 2, 0);
    } else {
      const distance = item.left - view.left;
      if (distance < 0) {
        scrollLeft += distance;
        needScroll = true;
      } else if (distance + item.width > view.width) {
        scrollLeft += Math.min(distance + item.width - view.width, distance);
        needScroll = true;
      }
    }
    if (needScroll) {
      if (scrollLeft === state.scrollLeft) {
        scrollLeft += Math.random();
      }
      updatePartState({
        scrollLeft,
      });
      updateFade();
    }
  });

  useEvent('onScroll', async (e) => {
    if (props.direction === 'vertical') {
      scrollRef.current.scrollTop = e.detail.scrollTop;
      return;
    }
    scrollRef.current.scrollLeft = e.detail.scrollLeft;
    updateFade();
  });

  useEvent('onChange', async (e) => {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    if (props.items[index].disabled) {
      return;
    }
    if (currentValue === index) {
      return;
    }
    if (!isControlled) {
      update(index);
    }
    triggerEvent('change', index, e);
  });

  /// #if ALIPAY
  useDidMount(() => {
    updateScroll();
  }, []);
  /// #endif

  useComponentUpdateEffect(() => {
    updateScroll();
  }, [props.items, currentValue]);

  /// #if WECHAT
  const [scrollHeight, setScrollHeight] = useState(
    // vertical 模式下，不需要设置高度
    props.direction === 'vertical' ? 0 : 40
  );
  useReady(() => {
    updateScroll();
    getBoundingClientRect('.ant-tabs-bar-item').then((res) => {
      if (res && res.height > 0 && props.direction !== 'vertical') {
        setScrollHeight(res.height);
      }
    });
  }, []);
  /// #endif

  return {
    /// #if WECHAT
    scrollHeight,
    /// #endif
    mixin: {
      value: currentValue,
    },
    ...state,
  };
};

mountComponent(Tabs, TabsFunctionalProps);
