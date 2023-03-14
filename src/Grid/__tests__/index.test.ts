import { getInstance } from '../../../tests/utils';

describe('grid onTap', () => {
  it('grid onTap', () => {
    const onTap = jest.fn();
    const instance = getInstance('Grid', {
      onTap,
    });
    instance.callMethod('onTap', { target: { dataset: { item: {} } } });
    expect(onTap).toBeCalled();
  });
});
describe('grid onFirstAppear', () => {
  it('grid onFirstAppear', () => {
    const onFirstAppear = jest.fn();
    const instance = getInstance('Grid', {
      onFirstAppear,
    });
    instance.callMethod('onFirstAppear', { target: { dataset: { item: {} } } });
    expect(onFirstAppear).toBeCalled();
  });
});
