import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import {
  IUploaderProps,
  UploaderFunctionalProps,
} from '../../ImageUpload/props';

export interface FormImageUploadProps
  extends Omit<IUploaderProps, 'defaultFileList'>,
    FormItemProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { defaultFileList, ...rest } = UploaderFunctionalProps;
export const FormImageUploadDefaultProps: Partial<FormImageUploadProps> = {
  ...FormItemFunctionalProps,
  ...rest,
};
