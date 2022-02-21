/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseStore } from './baseStore';
import { objectEntries } from '../_util/tools';

interface FilterVal{
    isMult: () => boolean;
    setValue: (val: string[]) => void;
    getValue: () => string[];
    getPlaceHolder: () => string;
    setShow: (show: boolean) => void;
    getShow: () => boolean;
    getid: () => string;
    setPrevValue: (val: any[]) => void,
    getCurValue: () => any[],
}

export class FilterStore extends BaseStore<FilterVal> {
  updateItemValue(uid: string, id: string): void {
    if (this.itemsMap[uid] && this.getItem(uid, id)) {
      const { getValue, setValue } = this.getItem(uid, id);
      setValue(getValue() || []);
    }
  }

  updateGroupValue(uid: string): void {
    if (this.itemsMap[uid]) {
      const placeHolderArray = objectEntries(this.itemsMap[uid].items).reduce((prev, cur) => {
        const [, val] = cur;
        // eslint-disable-next-line no-param-reassign
        prev[val.getid()] = val.getPlaceHolder();
        return prev;
      }, {} as Record<string, string>);

      this.itemsMap[uid].setGroupDataVal({ key: 'placeHolderArray', val: placeHolderArray });
    }
  }
}
