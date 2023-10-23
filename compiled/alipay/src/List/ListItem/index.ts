import { useEvent } from 'functional-mini/component';
import { ISwitchProps } from '../../Switch/props';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { IListItemProps } from './props';

const ListItem = (props: ISwitchProps) => {
  const { forwardCatchEvent, forwardEvent } = useComponentEvent(props);

  useEvent(
    'onTap',
    (e) => {
      if (props.disabled) {
        return;
      }
      forwardEvent('tap', e);
    },
    [props]
  );
  useEvent(
    'catchTap',
    (e) => {
      if (props.disabled) {
        return;
      }
      forwardCatchEvent('tap', e);
    },
    [props]
  );
  return {};
};

mountComponent<IListItemProps>(ListItem, {
  image: '',
  title: '',
  brief: '',
  arrow: null,
  extra: '',
  extraBrief: '',
  disabled: false,
  showDivider: true,
});
