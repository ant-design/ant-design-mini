import { BaseStore } from './baseStore';
import { objectEntries } from './tools';

type tabsVal = {
    setFallback:(v:boolean)=>void;
    getTabsItemVal: () => any;
};


export class TabsStore extends BaseStore<tabsVal> {
  updateItemVal(uid: string, id:string, val:any): void {
    if (this.itemsMap[uid]) {
        this.itemsMap[uid].items[id] = val
        // 更新一下数据
        
    }
  }
}

export const tabsStore =  new TabsStore()
