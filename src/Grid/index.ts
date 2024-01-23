import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { GridFunctionalProps, IGridProps } from './props';

const Grid = (props: IGridProps) => {
  const events = useComponentEvent(props);
  useEvent('onTap', (e) => {
    const { item } = e.target.dataset;
    events.triggerEvent('tap', item);
  });
  useEvent('onFirstAppear', (e) => {
    const { item } = e.target.dataset;
    events.triggerEvent('firstAppear', item);
  });
  return {};
};

mountComponent(Grid, GridFunctionalProps);
