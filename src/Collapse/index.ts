import { CollapseDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { IBoundingClientRect } from "../_base";


function getBoundingClientRect(selector: string) {
  return new Promise<IBoundingClientRect>(resolve => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        }
      });
  });
}

function toArray(current: number[] | number) {
  if (typeof current === 'number') {
    return [current];
  }
  return current || [];
}

Component({
  props: CollapseDefaultProps,
  data: {
    contentHeight: [],
    hasChange: false,
  },
  didUpdate(prevProps, prevData) {
    if (prevProps.current !== this.props.current) {
      this.updateContentHeight();
    }
  },
  didMount() {
    this.updateContentHeight(true);
  },
  methods: {
    onChange(e) {
      const { onChange } = this.props;
      const itemIndex = parseInt(e.currentTarget.dataset.index, 10);
      if (!(itemIndex >= 0 && itemIndex < this.props.items.length)) {
        return;
      }
      let current = [...toArray(this.props.current)];
      const index = current.indexOf(itemIndex);
      if (index >= 0) {
        current.splice(index, 1);
      } else {
        if (this.props.accordion) {
          current = [itemIndex];
        } else {
          current.push(itemIndex);
          current.sort();
        }
      }
      if (onChange) {
        onChange(this.props.accordion ? current[0] : current, fmtEvent(this.props, e));
      }
    },
    async updateContentHeight(isFirst?: boolean) {
      let contentHeight = await Promise.all(this.props.items.map(async (item, index) => {
        const { height } = await getBoundingClientRect(`.amd-collapse-item-content-${this.$id}-${index}`);
        return `${height}px`;
      }));
      this.setData({
        contentHeight,
        hasChange: true,
      });
      contentHeight = contentHeight.map((item, index) => {
        if (toArray(this.props.current).indexOf(index) < 0) {
          return '0px';
        }
        return item;
      });
      setTimeout(() => {
        this.setData({
          contentHeight,
          hasChange: true,
        });
      }, 10);
    },
    resetContentHeight(e) {
      const index = parseInt(e.currentTarget.dataset.index, 10);
      if (toArray(this.props.current).indexOf(index) < 0) {
        return;
      }
      const contentHeight = [...this.data.contentHeight];
      contentHeight[index] = '';
      this.setData({
        contentHeight,
      });
    },
  },
  
  
  // didMount() {
  //   const { name } = this.props;
  //   const key = `${this.$page.$id}-${this.props.uid}`;
  //   const getGroupPropsVal = (key: string) => {
  //     switch (key) {
  //       case 'onChange':
  //         if (this.onChange) {
  //           return this.onChange.bind(this);
  //         }
  //         return this.props.onChange;
  //       case 'name':
  //         if (Array.isArray(this.props.name)) {
  //           return this.props.name;
  //         }
  //         return [];
  //       default:
  //         return this.props[key];
  //     }
  //   };
  //   context.addGroup(key);
  //   context.setGroupPropsVal(key, getGroupPropsVal);
  //   context.setItemsAccordion(key);
  //   if (Array.isArray(name)) {
  //     context.updateGroupValue(key, true);
  //   }
  // },
  // didUnmount() {
  //   const key = `${this.$page.$id}-${this.props.uid}`;
  //   context.removeGroup(key);
  // },
  // didUpdate(prevProps) {
  //   const { uid: newUID, name: newName = [], accordion: newAccordion = false } = this.props;
  //   const { uid: oldUID, name: oldName = [], accordion: oldAccordion = false } = prevProps;
  //   const newKey = `${this.$page.$id}-${newUID}`;
  //   const oldKey = `${this.$page.$id}-${oldUID}`;
  //   context.updateGroup(newUID, {
  //     isNameChanged: !equal(newName, oldName),
  //     isUIDChanged: newKey !== oldKey,
  //     isAccordionChanged: newAccordion !== oldAccordion,
  //   }, { oldUID:oldKey });
  // },
});
