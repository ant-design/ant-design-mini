import { getInstance } from '../../../tests/utils';
import fmtEvent from '../../_util/fmtEvent';

describe('tabBar onChange', () => {
  const my = {
    canIUse() {
      return false;
    },
  };
  const items = [
    {
      text: 'item1',
    },
    {
      text: 'item2',
    },
    {
      text: 'item3',
    },
  ];
  it('tabBar onChange', () => {
    const onChange = jest.fn();
    const instance = getInstance(
      'TabBar',
      {
        onChange,
        items,
      },
      my
    );
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    expect(instance.getData().mixin.value).toBe(2);
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledTimes(1);
  });
  it('tabBar controlled', () => {
    const onChange = jest.fn();
    const instance = getInstance(
      'TabBar',
      {
        onChange,
        items,
        current: 0,
      },
      my
    );
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    expect(instance.getData().mixin.value).toBe(0);
  });
});
