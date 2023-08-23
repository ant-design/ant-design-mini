import { getInstance } from '../../../../tests/utils';

describe('test FormTextarea', () => {
  it('onFocus', () => {
    const my = {
      canIUse() {
        return false;
      },
    };
    const onFocus = jest.fn();
    const instance = getInstance(
      'Form/FormTextarea',
      {
        onFocus,
      },
      my
    );
    instance.callMethod('onFocus');
    expect(onFocus).toBeCalled();
  });
});
