import { useEvent, useState } from 'functional-mini/component';
import { mountComponent } from '../../../../src/_util/component';

export interface Props {
  hide?: boolean;
  defaultCollapse?: boolean;
  title?: string;
  handleClick?(id: string): void;
}

const CollapseContainer = (props: Props) => {
  const [collapse, setCollapse] = useState(props.defaultCollapse ?? true);

  useEvent('handleToggle', () => {
    setCollapse((v) => !v);
  });

  return {
    collapse,
    internalHide: props.hide,
    containerTitle: props.title,
  };
};

mountComponent<Props>(CollapseContainer, {
  hide: false,
  defaultCollapse: null,
  title: '',
});
