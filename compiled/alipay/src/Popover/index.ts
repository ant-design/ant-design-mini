import {
  useComponent,
  useEvent,
  useEffect,
  useState,
} from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { IPopoverProps } from './props';
import { getPopoverStyle } from './utils';

const Popover = (props: IPopoverProps) => {
  const [value, updateValue] = useMergedState(props.defaultVisible, {
    value: props.visible,
  });
  const [popoverStyle, setPopoverStyle] = useState({
    popoverContentStyle: '',
    adjustedPlacement: '',
  });

  const isControl = hasValue(props.visible);

  const instance = useComponent();

  function getInstance() {
    if (instance.$id) {
      return my;
    }
    return instance;
  }

  const { triggerEvent } = useComponentEvent(props);

  useEffect(() => {
    if (!value) {
      setPopoverStyle((old) => ({
        ...old,
        adjustedPlacement: '',
      }));
      return;
    }
    const { placement, autoAdjustOverflow } = props;
    Promise.all([
      getInstanceBoundingClientRect(
        getInstance(),
        `#ant-popover-children${instance.$id ? `-${instance.$id}` : ''}`
      ),
      getInstanceBoundingClientRect(
        getInstance(),
        instance.$id
          ? `#ant-popover-children-${instance.$id} > *`
          : `#ant-popover-children-container`
      ),
      getInstanceBoundingClientRect(
        getInstance(),
        instance.$id
          ? `#ant-popover-content-${instance.$id}`
          : '#ant-popover-content'
      ),
      getSystemInfo(),
    ]).then((res) => {
      const [containerRect, childrenRect, contentRect, systemInfo] = res;
      const { popoverContentStyle, adjustedPlacement } = getPopoverStyle(
        placement,
        autoAdjustOverflow,
        {
          containerRect,
          childrenRect,
          contentRect,
          systemInfo,
        }
      );
      setPopoverStyle({
        popoverContentStyle,
        adjustedPlacement,
      });
    });
  }, [value, props.autoAdjustOverflow, props.placement]);

  useEvent('onVisibleChange', (e) => {
    if (!value && e.target.id && e.target.id.indexOf('ant-popover-') === 0) {
      return;
    }
    const newValue = !value;
    if (!isControl) {
      updateValue(newValue);
    }
    triggerEvent('visibleChange', newValue, e);
  });

  return {
    adjustedPlacement: popoverStyle.adjustedPlacement,
    popoverContentStyle: popoverStyle.popoverContentStyle,
    mixin: {
      value,
    },
  };
};

mountComponent<IPopoverProps>(Popover, {
  visible: null,
  defaultVisible: false,
  destroyOnClose: false,
  showMask: true,
  placement: 'top',
  autoAdjustOverflow: true,
  maskClassName: '',
  maskStyle: '',
  content: '',
  contentClassName: '',
  contentStyle: '',
  color: '',
});
