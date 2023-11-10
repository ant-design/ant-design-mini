import { useComponent, useEffect } from 'functional-mini/component';

export const triggerRefEvent = () => {
  /// #if WECHAT
  const component = useComponent();
  useEffect(() => {
    component.triggerEvent('ref', component);
  }, []);
  /// #endif
};
