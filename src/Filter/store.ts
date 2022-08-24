import { Store,FILTER_TYPE } from '../_util/store';
import { IFilterItemProps } from './FilterItem/props';

export interface IState {
  filterItems:
    | {
        id: string;
        active: boolean;
        isMult: boolean;
        value: ArrayOrItem<string>;
        placeholder: string;
        triggleVisible: CallableFunction;
        onFormat: CallableFunction;
        items: {
          value: string;
          text: string;
          subText?: string;
        }[];
      }[];
}

export class FilterStore extends Store<IState> {
  static type = FILTER_TYPE;
  static inject(instane) {
    if (!instane._store) {
      instane._store = new FilterStore();
      instane._store.instance = instane;
    }
  }
  constructor() {
    super({ filterItems: [] });
  }
  public addItem(
    id: stringOrNumber,
    {
      item,
      triggleVisible,
      onFormat
    }: {
      item: IFilterItemProps;
      triggleVisible: CallableFunction;
      onFormat: CallableFunction;
    }
  ) {
    id = String(id);
    const { filterItems } = this.getState();
    this.dispatch({
      filterItems: filterItems.concat({
        id,
        triggleVisible,
        onFormat,
        active: false,
        isMult: item.type === 'multiple',
        value: item.value || (item.type === 'multiple' ? [] : ''),
        placeholder: item.placeholder,
        items: item.items,
      }),
    });
  }
  public removeItem(id: stringOrNumber) {
    id = String(id);
    const { filterItems } = this.getState();
    this.dispatch({ filterItems: filterItems.filter((v) => v.id !== id) });
  }
  public triggleVisible(id: stringOrNumber) {
    id = String(id);
    const { filterItems } = this.getState();
    let visible = false;
    this.dispatch({
      filterItems: filterItems.map((v) => {
        v = { ...v };
        if (v.id === id) {
          v.active = !v.active;
          visible = v.active;
        } else {
          // 其余所有关闭
          v.active = false;
        }
        return v;
      }),
    });
    return visible;
  }
  public changeItemData(
    id: stringOrNumber,
    data: Partial<GetArrayType<IState['filterItems']>>
  ) {
    id = String(id);
    const { filterItems } = this.getState();
    this.dispatch({
      filterItems: filterItems.map((v) => ({
        ...v,
        ...(v.id === id ? data : {}),
      })),
    });
  }
}
