import { getInstance } from '../../../tests/utils';

describe('grid onTap', () => {
  it('grid onTap', () => {
    const onTap = jest.fn();
    const instance = getInstance('Grid', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
});
describe('grid onFirstAppear', () => {
  it('grid onFirstAppear', () => {
    const onFirstAppear = jest.fn();
    const instance = getInstance('Grid', {
      onFirstAppear,
    });
    instance.callMethod('onFirstAppear');
    expect(onFirstAppear).toBeCalled();
  });
});

describe('gridItem onTap', () => {
  it('gridItem onTap', () => {
    const onTap = jest.fn();
    const instance = getInstance('Grid/GridItem', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });
});

describe('gridItem onFirstAppear', () => {
  it('gridItem onFirstAppear', () => {
    const onFirstAppear = jest.fn();
    const instance = getInstance('Grid/GridItem', {
      onFirstAppear,
    });
    instance.callMethod('onFirstAppear');
    expect(onFirstAppear).toBeCalled();
  });
});