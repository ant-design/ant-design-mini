import { CollapseDefaultProps } from './props';
import { context } from './context';
import equal from 'fast-deep-equal';

Component({
  props: CollapseDefaultProps,
  data: {
    supportSjs: my.canIUse('sjs.event'),
  },
  didMount() {
    const { uid, name } = this.props;
    const getGroupPropsVal = (key: string) => {
      switch (key) {
        case 'onChange':
          if (this.onChange) {
            return this.onChange.bind(this);
          }
          return this.props.onChange;
        case 'name':
          if (Array.isArray(this.props.name)) {
            return this.props.name;
          }
          return [];
        default:
          return this.props[key];
      }
    };
    context.addGroup(uid);
    context.setGroupPropsVal(uid, getGroupPropsVal);
    context.setItemsAccordion(uid);
    if (Array.isArray(name)) {
      context.updateGroupValue(uid, true);
    }
  },
  didUnmount() {
    context.removeGroup(this.props.uid);
  },
  didUpdate(prevProps) {
    const { uid: newUID, name: newName = [], accordion: newAccordion = false } = this.props;
    const { uid: oldUID, name: oldName = [], accordion: oldAccordion = false } = prevProps;
    context.updateGroup(newUID, {
      isNameChanged: !equal(newName, oldName),
      isUIDChanged: newUID !== oldUID,
      isAccordionChanged: newAccordion !== oldAccordion,
    }, { oldUID });
  },
});
