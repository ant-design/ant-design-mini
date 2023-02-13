import { getInstance } from '../../../tests/utils';

describe('listItem onTap', () => {
  it('listItem onTap', () => {
    const onTap = jest.fn();
    const instance = getInstance('List/ListItem', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
  it('listItem disabled', () => {
    const onTap = jest.fn();
    const instance = getInstance('List/ListItem', {
      onTap,
      disabled: true,
    });
    instance.callMethod('onTap');
    expect(onTap).not.toBeCalled();
  });
});

describe('listItem catchTap', () => {
  it('listItem catchTap', () => {
    const catchTap = jest.fn();
    const instance = getInstance('List/ListItem', {
      catchTap,
    });
    instance.callMethod('catchTap');
    expect(catchTap).toBeCalled();
  });
  it('listItem disabled', () => {
    const catchTap = jest.fn();
    const instance = getInstance('List/ListItem', {
      catchTap,
      disabled: true,
    });
    instance.callMethod('catchTap');
    expect(catchTap).not.toBeCalled();
  });
});
