import { Component } from '../_util/simply';
import { assertAilpayNativeNotSupport } from '../_util/support';
import { SpaceDefaultProps } from './props';

assertAilpayNativeNotSupport('Space');

Component({ props: SpaceDefaultProps });
