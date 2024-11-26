export interface ISafeAreaProps {
  className?: string;
  position: 'top' | 'bottom' | '';
}

export const SafeAreaDefaultProps: ISafeAreaProps = {
  className: '',
  position: '',
};
