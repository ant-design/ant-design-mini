import { BaseStore } from './baseStore';
import { objectEntries } from '../_util/tools';

type TCollapseboxVal = {
  getActive: () => boolean;
  setActive: (isActive: boolean) => void;
  setFirst: () => void;
  getItemPropsVal: CallableFunction;
  getId: () => string;
  setLastAction: (action: string) => void;
  getFirst: () => number
  setAccordion: (accordion: boolean) => void;
  setContentHeight: (height: string) => void;
  getContentHeight: () => Promise<string>;
  getSupportSjs: () => boolean
  getDisabled: () => boolean
};

type TCollapsePrevProps = {
  oldUID: string;
};

type TCollapseChangedPropsMap = {
  isUIDChanged: boolean;
  isNameChanged: boolean;
  isAccordionChanged: boolean;
};


export class CollapseStore extends BaseStore<TCollapseboxVal> {
  lastTap: string;

  setItemsAccordion(uid: string): void {
    const accordion = !!this.itemsMap[uid].getGroupPropsVal('accordion');
    objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
      val.setAccordion(accordion);
    });
  }

  updateItemValue(uid: string, id: string): void {
    const groupValue = this.itemsMap[uid].getGroupPropsVal('name');

    if (Array.isArray(groupValue)) {
      const val = this.itemsMap[uid].items[id];
      const name = val.getItemPropsVal('name');
      if (groupValue.includes(name)) {
        val.setActive(true);
      }
      val.setLastAction('auto');
      val.setFirst();
    }
  }

  updateGroup(
    uid: string,
    { isUIDChanged, isNameChanged, isAccordionChanged }: TCollapseChangedPropsMap,
    { oldUID }: TCollapsePrevProps,
  ): void {
    if (isUIDChanged) {
      this.updateGroupUID(oldUID, uid);
    }

    if (isNameChanged) {
      this.updateGroupValue(uid);
    }

    if (isAccordionChanged) {
      const accordion = !!this.itemsMap[uid].getGroupPropsVal('accordion');
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        val.setAccordion(accordion);
      });
    }
  }

  /**
   * 修改 Collapse 的 name 以改变 CollapseItem 的展开/关闭
   * @param uid Collapse 与 其子 CollapseItem 共同的 uid
   * @param uid didMount 首次传入值
   * @param value 外部传入的值
   */
  updateGroupValue(uid: string, isFirst = false, value?: string[]): void {
    if (this.itemsMap[uid] && this.itemsMap[uid].items) {
      const originGroupValue = value || this.itemsMap[uid].getGroupPropsVal('name') as string[];
      const groupValue = this.itemsMap[uid].getGroupPropsVal('accordion')
        ? [originGroupValue[0]]
        : originGroupValue;
      if (Array.isArray(groupValue)) {
        objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
          if (!val) return;
          // for 2.0
          if (val.getSupportSjs()) {
            if (groupValue.indexOf(val.getItemPropsVal('name')) > -1) {
              val.setActive(true);
            } else {
              val.setActive(false);
            }
            val.setLastAction('auto');
            val.setFirst();
          } else {
            // for 1.0
            if (groupValue.indexOf(val.getItemPropsVal('name')) > -1) {
            // close -> open
              val.getContentHeight().then((height) => {
                val.setContentHeight(height);
                val.setActive(true);
                val.setFirst();
              });
            } else {
            // open -> close
              val.getContentHeight().then((height) => {
                val.setContentHeight(height);
                val.setFirst();
                setTimeout(() => {
                  val.setActive(false);
                  val.setContentHeight('0px');
                }, 10);
              });
            }
            val.setLastAction('auto');
          }
          val.setLastAction('auto');
        });
        const onChange = this.itemsMap[uid].getGroupPropsVal('onChange');
        if (typeof onChange === 'function' && !isFirst) {
          onChange(groupValue);
        }
      }
    }
  }

  triggerItem(uid: string, id: string, status: boolean): void {
    if (this.itemsMap[uid] && this.getItem(uid, id)) {
      if (this.itemsMap[uid].getGroupPropsVal('accordion') === true) {
        let name: string;
        objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
          if (!val) return;

          if (val.getId() === id) {
            const active = val.getActive();
            val.setActive(!active);
            if (!active) {
              name = val.getItemPropsVal('name');
            }
          } else {
            val.setActive(false);
          }
          val.setLastAction('onTap');
          val.setFirst();
        });
        const onChange = this.itemsMap[uid].getGroupPropsVal('onChange');
        if (typeof onChange === 'function') {
          const res = name ? [name] : [];
          onChange(res);
        }
        return;
      }

      this.getItem(uid, id).setActive(status);
      this.itemsMap[uid].items[id].setLastAction('onTap');
      this.onChangeByTrigger(uid);
    }
  }

  onChangeByTrigger(uid: string): void {
    const onChange = this.itemsMap[uid].getGroupPropsVal('onChange');
    if (typeof onChange === 'function') {
      const value = objectEntries(this.itemsMap[uid].items)
        .filter(([, val]) => {
          return val && val.getActive() === true;
        })
        .map(([, val]) => val.getItemPropsVal('name')) as string[];
      onChange(value);
    }
  }
}
