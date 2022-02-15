import { BaseStore } from './baseStore';
import { objectEntries } from './tools';

type checkboxVal = {
    getChecked: () => boolean;
    setDisabled(_disabled: boolean): void;
    setChecked(_checked: boolean): void;
    getItemPropsVal: CallableFunction;
  };

  type checkboxItemChangedPropsMap = {
    isUIDChanged: boolean;
    isDisabledChanged: boolean;
    isValueChange: boolean;
  };

  type checkboxIetmPrevProps = {
    oldUID: string;
  };


export class CheckBoxStore extends BaseStore<checkboxVal> {
  checkControlledByUID(uid: string): boolean {
    return this.itemsMap[uid].getGroupPropsVal('controlled');
  }

  updateGroup(
    newUID: string,
    { isUIDChanged, isDisabledChanged, isValueChange }: checkboxItemChangedPropsMap,
    { oldUID }: checkboxIetmPrevProps,
  ): void {
    if (isUIDChanged) {
      this.updateGroupUID(oldUID, newUID);
    }
    const group = this.getGroup(newUID);
    if (isDisabledChanged && group) {
      const groupDisabled = group.getGroupPropsVal('disabled');
      this.updateGroupDisabled(newUID, groupDisabled);
    }
    if (isValueChange) {
      this.updateGroupValue(newUID);
    }
  }

  /**
     * 修改 CheckboxGroup 的 value 以改变 CheckboxItem 的选中状态
     * @param uid CheckboxGroup 与 其子 CheckboxItem 共同的 uid
     * @param value 外部传入的值
     */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateGroupValue(uid: string, value?: any[]): void {
    if (this.itemsMap[uid] && this.itemsMap[uid].items) {
      const groupValue = value || this.itemsMap[uid].getGroupPropsVal('value');
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        if (!val) return;
        if (groupValue.indexOf(val.getItemPropsVal('value')) > -1) {
          val.setChecked(true);
        } else {
          val.setChecked(false);
        }
      });
    }
  }

  updateGroupDisabled(uid: string, disabled: boolean): void {
    if (this.itemsMap[uid] && this.itemsMap[uid].items) {
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        if (!val) return;
        const finalDisbaled = disabled;
        val.setDisabled(finalDisbaled);
      });
    }
  }

  updateItemDisabled(uid: string, disabled: boolean): void {
    if (this.itemsMap[uid] && this.itemsMap[uid].items) {
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        if (!val) return;
        const itemDsiabled = val;
        const finalDisbaled = itemDsiabled && disabled;
        val.setDisabled(finalDisbaled);
      });
    }
  }

  triggerItem(uid: string, id: string, checked: boolean): void {
    if (this.itemsMap[uid] && this.getItem(uid, id)) {
      this.getItem(uid, id).setChecked(checked);

      const onChange = this.itemsMap[uid].getGroupPropsVal('onChange');
      if (onChange) {
        const value = objectEntries(this.itemsMap[uid].items)
          .filter(([, val]) => {
            return val && val.getChecked() === true;
          })
          .map(([, val]) => val.getItemPropsVal('value')) as string[];

        onChange(value);
      }
    }
  }

  updateItemValue(uid: string, id: string): void {
    if (this.itemsMap[uid] && this.getItem(uid, id)) {
      const groupValue = this.itemsMap[uid].getGroupPropsVal('value');
      const itemValue = this.getItem(uid, id).getItemPropsVal('value');

      if (groupValue.indexOf(itemValue) > -1) {
        this.getItem(uid, id).setChecked(true);
      } else {
        this.getItem(uid, id).setChecked(false);
      }
    }
  }
}

