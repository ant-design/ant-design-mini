// eslint-disable-next-line no-shadow
export enum EComponents {
  Alphabet = 'Alphabet',
  AmountInput = 'AmountInput',
  Badge = 'Badge',
  Button = 'Button',
  Calendar = 'Calendar',
  Checkbox = 'Checkbox',
  CheckboxGroup = 'CheckboxGroup',
  CheckboxItem = 'CheckboxItem',
  Collapse = 'Collapse',
  CollapseItem = 'CollapseItem',
  Container = 'Container',
  DatePicker = 'DatePicker',
  Filter = 'Filter',
  Footer = 'Footer',
  FooterEnd = 'FooterEnd',
  FooterImage = 'FooterImage',
  FooterLink = 'FooterLink',
  FooterTag = 'FooterTag',
  FooterText = 'FooterText',
  Form = 'Form',
  FormGroup = 'FormGroup',
  FormItem = 'FormItem',
  Grid = 'Grid',
  GuideModal = 'GuideModal',
  GuideItem = 'GuideItem',
  HorizontalScrollbar = 'HorizontalScrollbar',
  Icon = 'Icon',
  InputItem = 'InputItem',
  List = 'List',
  ListItem = 'ListItem',
  Loading = 'Loading',
  Mask = 'Mask',
  Modal = 'Modal',
  NoticeBar = 'NoticeBar',
  NoticeBarCapsule = 'NoticeBarCapsule',
  Pagination = 'Pagination',
  Picker = 'Picker',
  Popover = 'Popover',
  PopoverItem = 'PopoverItem',
  Popup = 'Popup',
  RadioGroup = 'RadioGroup',
  RadioItem = 'RadioItem',
  Result = 'Result',
  SafeArea = 'SafeArea',
  SearchBar = 'SearchBar',
  Selector = 'Selector',
  Stepper = 'Stepper',
  Steps = 'Steps',
  StepItem = 'StepItem',
  SwipeAction = 'SwipeAction',
  Switch = 'Switch',
  Tabs = 'Tabs',
  TabItem = 'TabItem',
  Tag = 'Tag',
  Terms = 'Terms',
  Textarea = 'Textarea',
  Tips = 'Tips',
  Title = 'Title',
  VerifyCode = 'VerifyCode',
  Vtabs = 'Vtabs',
  VTabItem = 'VTabItem',
  WhiteSpace = 'WhiteSpace',
  GuideTour = 'GuideTour',
}

export type TComponents = keyof typeof EComponents;

export const log = {
  warn(component: TComponents, message: string): void {
    const info = `[antd-mini: ${component}] 📡 ${message}`;
    // eslint-disable-next-line no-console
    console.warn(info);
  },
  error(component: TComponents, message: string): void {
    const info = `[antd-mini: ${component}] 📡 ${message}`;
    // eslint-disable-next-line no-console
    console.error(info);
  },
};
