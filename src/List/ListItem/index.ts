import { useEvent } from 'functional-mini/component';
import { ISwitchProps } from '../../Switch/props';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { IListItemProps } from './props';

const ListItem = (props: ISwitchProps) => {
  const { alipayForwardCatchEvent, alipayForwardEvent } =
    useComponentEvent(props);

  /// #if ALIPAY
  useEvent('onTap', (e) => {
    if (props.disabled) {
      return;
    }
    alipayForwardEvent('tap', e);
  });
  useEvent('catchTap', (e) => {
    if (props.disabled) {
      return;
    }
    alipayForwardCatchEvent('tap', e);
  });
  /// #endif
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
