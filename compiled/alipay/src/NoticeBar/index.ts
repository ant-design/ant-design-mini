import {
  useState,
  useEffect,
  useEvent,
  usePageShow,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { IBoundingClientRect } from '../_util/base';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { INoticeBarProps, NoticeBarFunctionalProps } from './props';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';

const NoticeBar = (props: INoticeBarProps) => {
  const [marqueeStyle, setMarqueeStyle] = useState('');
  const [show, setShow] = useState(true);
  const [state, setState] = useState({
    overflowWidth: 0,
    duration: 0,
    viewWidth: 0,
  });

  const { triggerEventOnly } = useComponentEvent(props);
  const startMarquee = useStableCallback(() => {
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
    if (newMarqueeStyle !== marqueeStyle) {
      setMarqueeStyle(newMarqueeStyle);
    }
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
        setState({
          overflowWidth,
          viewWidth,
          duration: marqueeScrollWidth / fps,
        });
        callback();
      }
    }, 0);
  }

  useEffect(() => {
    const { enableMarquee } = props;
    if (enableMarquee) {
      measureText(startMarquee);
    }
  });

  function resetMarquee() {
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
        resetMarquee();
        measureText(startMarquee);
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
      setState({
        overflowWidth: 0,
        duration: 0,
        viewWidth: 0,
      });
      resetMarquee();
      measureText(startMarquee);
    }
  });

  return {
    marqueeStyle,
    show,
    overflowWidth: state.overflowWidth,
    duration: state.duration,
    viewWidth: state.viewWidth,
  };
};

mountComponent(NoticeBar, NoticeBarFunctionalProps);
