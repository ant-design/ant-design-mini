import { getInstance, sleep } from 'tests/utils';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, it, expect, vi } from 'vitest';

describe('checklist onChange', () => {
  it('checklistItem onChange', () => {
    const onChange = vi.fn();
    const instance = getInstance('Checklist/ChecklistItem', {
      onChange,
    });
    instance.callMethod('onChecklistItemClick');
    expect(onChange).toBeCalled();
  });
  it('check with multiple false', async () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const options = [{ value: 0 }, { value: 1 }, { value: 2 }];
    const instance = getInstance(
      'Checklist',
      {
        onChange,
        options,
      },
      my
    );
    instance.callMethod('onChange', { value: 1 });
    expect(onChange).toBeCalledWith(1, { value: 1 }, fmtEvent({}));
    await sleep(20);
    expect(instance.getData().mixin.value).toBe(1);
  });
  it('check with multiple true', async () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const options = [{ value: 0 }, { value: 1 }, { value: 2 }];
    const instance = getInstance(
      'Checklist',
      {
        onChange,
        options,
        multiple: true,
      },
      my
    );
    instance.callMethod('onChange', { value: 1 });
    await sleep(20);
    expect(onChange).toBeCalledWith([1], [{ value: 1 }], fmtEvent({}));
    expect(instance.getData().mixin.value).toEqual([1]);
  });
  it('uncheck with multiple true', async () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const options = [{ value: 0 }, { value: 1 }, { value: 2 }];
    const instance = getInstance(
      'Checklist',
      {
        onChange,
        options,
        multiple: true,
      },
      my
    );
    instance.callMethod('onChange', { value: 1 });
    await sleep(20);
    instance.callMethod('onChange', { value: 1 });
    await sleep(20);
    expect(onChange).toBeCalledWith([], [], fmtEvent({}));
    expect(instance.getData().mixin.value).toEqual([]);
  });
});
