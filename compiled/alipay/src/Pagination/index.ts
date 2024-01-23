import { useMemo, useState } from 'functional-mini/compat';
import { useComponent, useEvent } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { PaginationDefaultProps } from './props';

const Pagination = () => {
  const componentInstance = useComponent();
  const [pageDeg, setPageDeg] = useState(0);
  function getInstance() {
    if (componentInstance.$id) {
      return my;
    }
    return componentInstance;
  }
  const clacWidth = useStableCallback(async () => {
    const instance = getInstance();
    const rect = await getInstanceBoundingClientRect(
      getInstance(),
      `#ant-pageInfinite-${instance.$id ? `-${instance.$id}` : ''}`
    );
    if (rect) {
      return rect.width;
    }
    return 0;
  });
  useEvent('onScroll', async (e) => {
    const { scrollLeft, scrollWidth } = e.detail;
    const viewWidth = await clacWidth();
    if (viewWidth) {
      setPageDeg(Math.ceil((scrollLeft / (scrollWidth - viewWidth)) * 100));
    }
  });

  const supportSjs = useMemo(() => {
    if (typeof my === 'undefined') {
      return true;
    }
    return my.canIUse('sjs.event');
  }, []);
  return {
    pageDeg,
    supportSjs,
  };
};

mountComponent(Pagination, PaginationDefaultProps);
