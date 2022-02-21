import { BaseStore } from './baseStore';
import { objectEntries } from './tools';

type stepsVal = {
    setItemIndex: (idx: number) => void,
    setItemDirection: (dir: string) => void,
};


export class StepsStore extends BaseStore<stepsVal> {
  updateItemIndex(uid: string, index: number): void {
    if (this.itemsMap[uid]) {
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        val.setItemIndex(index);
      });
    }
  }

  updateItemDirection(uid: string, direction: string): void {
    if (this.itemsMap[uid]) {
      objectEntries(this.itemsMap[uid].items).forEach(([, val]) => {
        val.setItemDirection(direction);
      });
    }
  }
}
