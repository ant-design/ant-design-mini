import { Alert as AntdAlert, AlertProps } from 'antd';
import { FC, ReactNode } from 'react';

const getAlertComponentProps = (rawProps) => {
  const nextProps = rawProps;
  Object.keys(nextProps).forEach((key) => {
    if (nextProps[key] === '') {
      nextProps[key] = true;
    }
  });
  return nextProps;
};

const Alert: FC<AlertProps & { children?: ReactNode }> = (props) => {
  const { children, ...restProps } = props;
  return (
    <AntdAlert
      style={{ marginBottom: 16 }}
      message={children}
      {...getAlertComponentProps(restProps)}
    />
  );
};

export default Alert;
