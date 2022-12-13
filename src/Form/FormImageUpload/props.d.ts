import { FormItemProps } from '../FormItem/props';
import { IUploaderProps } from '../../ImageUpload/props';


export interface FormImageUploadProps extends Omit<IUploaderProps, 'defaultFileList'>, FormItemProps {
}

export declare const FormImageUploadDefaultProps: Partial<FormImageUploadProps>;
