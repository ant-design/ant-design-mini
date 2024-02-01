import {
  useEffect,
  useEvent,
  usePageShow,
  useState,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { IBoundingClientRect } from '../_util/base';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { INoticeBarProps, NoticeBarFunctionalProps } from './props';

const NoticeBar = (props: INoticeBarProps) => {
  const [marqueeStyle, setMarqueeStyle] = useState('');
  const [show, setShow] = useState(true);

  const { triggerEventOnly } = useComponentEvent(props);

  const startMarquee = useStableCallback((state) => {
    const { loop } = props;
    const leading = 500;
    const { duration, overflowWidth, viewWidth } = state;
    let marqueeScrollWidth = overflowWidth;
    if (loop) {
      marqueeScrollWidth = overflowWidth + viewWidth;
    }
    const newMarqueeStyle = `transform: translate3d(${-marqueeScrollWidth}px, 0, 0); transition: ${duration}s all linear ${
      typeof leading === 'number' ? `${leading / 1000}s` : '0s'
    };`;

    setMarqueeStyle(newMarqueeStyle);
  });

  const { getBoundingClientRectWithId } = useInstanceBoundingClientRect();
  function measureText(callback) {
    const fps = 40;
    const { loop } = props;
    // 计算文本所占据的宽度，计算需要滚动的宽度
    setTimeout(async () => {
      const marqueeSize: IBoundingClientRect | null =
        await getBoundingClientRectWithId('.ant-notice-bar-marquee');
      const contentSize: IBoundingClientRect | null =
        await getBoundingClientRectWithId('.ant-notice-bar-content');
      const overflowWidth =
        (marqueeSize && contentSize && marqueeSize.width - contentSize.width) ||
        0;

      const viewWidth = contentSize?.width || 0;
      let marqueeScrollWidth = overflowWidth;
      if (loop) {
        marqueeScrollWidth = overflowWidth + viewWidth;
      }
      if (overflowWidth > 0) {
        callback({
          overflowWidth,
          viewWidth,
          duration: marqueeScrollWidth / fps,
        });
      }
    }, 0);
  }

  useEffect(() => {
    const { enableMarquee } = props;
    if (enableMarquee) {
      measureText(startMarquee);
    }
  });

  function resetMarquee(state) {
    const { loop } = props;
    const { viewWidth } = state;
    let showMarqueeWidth = '0px';
    if (loop) {
      showMarqueeWidth = `${viewWidth}px`;
    }
    const marqueeStyle = `transform: translate3d(${showMarqueeWidth}, 0, 0); transition: 0s all linear;`;
    setMarqueeStyle(marqueeStyle);
  }

  useEvent('onTransitionEnd', () => {
    const { loop } = props;
    const trailing = 200;
    if (loop) {
      setTimeout(() => {
        measureText((state) => {
          resetMarquee(state);
        });
      }, trailing);
    }
  });

  useEvent('onTap', () => {
    const { mode } = props;
    if (mode === 'link') {
      triggerEventOnly('tap');
    }
    if (mode === 'closeable') {
      if (typeof props.onTap !== 'function') {
        return;
      }
      setShow(false);
      triggerEventOnly('tap');
    }
  });

  usePageShow(() => {
    if (props.enableMarquee) {
      setMarqueeStyle('');
      resetMarquee({
        overflowWidth: 0,
        duration: 0,
        viewWidth: 0,
      });
      measureText(startMarquee);
    }
  });

  return {
    marqueeStyle,
    show,
  };
};

mountComponent(NoticeBar, NoticeBarFunctionalProps);
