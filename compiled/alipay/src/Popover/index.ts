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
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { IPopoverProps } from './props';
import { getPopoverStyle } from './utils';

function getBoundingClientRect(instance: any, selector: string) {
  return new Promise<any>((resolve, reject) => {
    instance
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        console.log(selector, ret);
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          reject();
        }
      });
  });
}

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

  const { forwardEvent } = useComponentEvent(props);

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
      getBoundingClientRect(
        getInstance(),
        `#ant-popover-children${instance.$id ? `-${instance.$id}` : ''}`
      ),
      getBoundingClientRect(
        getInstance(),
        instance.$id
          ? `#ant-popover-children-${instance.$id} > *`
          : `#ant-popover-children`
      ),
      getBoundingClientRect(
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
      console.log({
        popoverContentStyle,
        adjustedPlacement,
      });
      setPopoverStyle({
        popoverContentStyle,
        adjustedPlacement,
      });
    });
  }, [value, props.autoAdjustOverflow, props.placement]);

  useEvent(
    'onVisibleChange',
    (e) => {
      if (!value && e.target.id && e.target.id.indexOf('ant-popover-') === 0) {
        return;
      }
      const newValue = !value;
      if (!isControl) {
        updateValue(newValue);
      }
      forwardEvent('visibleChange', e);
    },
    [value, isControl]
  );

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
  childrenContainerStyle: '',
});
