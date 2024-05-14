import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import {
  IUploaderProps,
  UploaderDefaultProps,
} from '../../ImageUpload/props';

export interface FormImageUploadProps
  extends Omit<IUploaderProps, 'defaultFileList'>,
    FormItemProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { defaultFileList, ...rest } = UploaderDefaultProps;
export const FormImageUploadDefaultProps: Partial<FormImageUploadProps> = {
  ...FormItemDefaultProps,
  ...rest,
};
