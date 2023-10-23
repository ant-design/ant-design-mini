import { mountComponent } from '../_util/component';
import { IResultProps } from './props';

const Result = () => {};

mountComponent<IResultProps>(Result, {
  type: null,
  image: '',
  title: '',
  message: '',
});
