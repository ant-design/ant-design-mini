import { getInstance } from '../../../tests/utils';

describe('icon onTap', () => {
  it('icon onTap', () => {
    const onTap = jest.fn();
    const instance = getInstance('Icon', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
});

describe('icon catchTap', () => {
  it('icon catchTap', () => {
    const catchTap = jest.fn();
    const instance = getInstance('Icon', {
      catchTap,
    });
    instance.callMethod('catchTap');
    expect(catchTap).toBeCalled();
  });
});
