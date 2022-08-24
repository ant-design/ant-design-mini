import { Store,TABS_TYPE } from '../_util/store';
import { ITabItemProps } from './TabItem/props';

export type ITabItem = ITabItemProps['tab'];
export interface IState {
  fallback: boolean;
  items: { tab: ITabItem; id: number }[];
}

export class TabStore extends Store<IState> {
  static type = TABS_TYPE;
  static inject(instane) {
    if (!instane._store) {
      instane._store = new TabStore();
      instane._store.instance = instane;
    }
  }
  constructor() {
    super({ items: [] });
  }
  public addItem(id: number, tab: ITabItem) {
    const { items } = this.getState();
    this.dispatch({
      items: [...items, { id, tab }],
    });
  }
  public updateItem(id: number, tab: ITabItem) {
    const { items } = this.getState();
    this.dispatch({
      items: items.map((v) => ({ ...v, tab: v.id === id ? tab : v.tab })),
    });
  }
  public removeItem(id: number) {
    const { items } = this.getState();
    this.dispatch({
      items: items.filter((v) => v.id !== id),
    });
  }
}
