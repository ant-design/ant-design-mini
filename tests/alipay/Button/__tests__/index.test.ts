import { getInstance } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('button onTap', () => {
  it('button onTap', () => {
    const onTap = vi.fn();
    const instance = getInstance('Button', {
      onTap,
    });
    instance.callMethod('onTap');
    expect(onTap).toBeCalled();
  });

  it('button disabled', () => {
    const onTap = vi.fn();
    const instance = getInstance('Button', {
      onTap,
      disabled: true,
    });
    instance.callMethod('onTap');
    expect(onTap).not.toBeCalled();
  });

  it('button loading', () => {
    const onTap = vi.fn();
    const instance = getInstance('Button', {
      onTap,
      loading: true,
    });
    instance.callMethod('onTap');
    expect(onTap).not.toBeCalled();
  });
});

describe('button catchTap', () => {
  it('button catchTap', () => {
    const catchTap = vi.fn();
    const instance = getInstance('Button', {
      catchTap,
    });
    instance.callMethod('catchTap');
    expect(catchTap).toBeCalled();
  });

  it('button disabled', () => {
    const catchTap = vi.fn();
    const instance = getInstance('Button', {
      catchTap,
      disabled: true,
    });
    instance.callMethod('catchTap');
    expect(catchTap).not.toBeCalled();
  });

  it('button loading', () => {
    const catchTap = vi.fn();
    const instance = getInstance('Button', {
      catchTap,
      loading: true,
    });
    instance.callMethod('catchTap');
    expect(catchTap).not.toBeCalled();
  });
});

describe('button extra function', () => {
  it('button onGetAuthorize', () => {
    const onGetAuthorize = vi.fn();
    const instance = getInstance('Button', {
      onGetAuthorize,
    });
    instance.callMethod('onGetAuthorize');
    expect(onGetAuthorize).toBeCalled();
  });

  it('button onFollowLifestyle', () => {
    const onFollowLifestyle = vi.fn();
    const instance = getInstance('Button', {
      onFollowLifestyle,
    });
    instance.callMethod('onFollowLifestyle');
    expect(onFollowLifestyle).toBeCalled();
  });

  it('button onError', () => {
    const onError = vi.fn();
    const instance = getInstance('Button', {
      onError,
    });
    instance.callMethod('onError');
    expect(onError).toBeCalled();
  });

  it('button onGetUserInfo', () => {
    const onGetUserInfo = vi.fn();
    const instance = getInstance('Button', {
      onGetUserInfo,
    });
    instance.callMethod('onGetUserInfo');
    expect(onGetUserInfo).toBeCalled();
  });

  it('button onGetUserInfo', () => {
    const onGetPhoneNumber = vi.fn();
    const instance = getInstance('Button', {
      onGetPhoneNumber,
    });
    instance.callMethod('onGetPhoneNumber');
    expect(onGetPhoneNumber).toBeCalled();
  });
});
