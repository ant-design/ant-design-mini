import { CollapseDefaultProps } from './props';
import { context } from './context';
import equal from 'fast-deep-equal';

Component({
  props: CollapseDefaultProps,
  data: {
    supportSjs: my.canIUse('sjs.event'),
  },
  didMount() {
    const { name } = this.props;
    const key = `${this.$page.$id}-${this.props.uid}`;
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
    context.addGroup(key);
    context.setGroupPropsVal(key, getGroupPropsVal);
    context.setItemsAccordion(key);
    if (Array.isArray(name)) {
      context.updateGroupValue(key, true);
    }
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    context.removeGroup(key);
  },
  didUpdate(prevProps) {
    const { uid: newUID, name: newName = [], accordion: newAccordion = false } = this.props;
    const { uid: oldUID, name: oldName = [], accordion: oldAccordion = false } = prevProps;
    const newKey = `${this.$page.$id}-${newUID}`;
    const oldKey = `${this.$page.$id}-${oldUID}`;
    context.updateGroup(newKey, {
      isNameChanged: !equal(newName, oldName),
      isUIDChanged: newKey !== oldKey,
      isAccordionChanged: newAccordion !== oldAccordion,
    }, { oldUID: oldKey });
  },
});
