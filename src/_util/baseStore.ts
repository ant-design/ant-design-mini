interface ItemInfo<T> {
  items: Record<string, T>;
  onChange: CallableFunction;
  getGroupPropsVal?: CallableFunction;
  setGroupDataVal?: CallableFunction;
  getGroupDataVal?: CallableFunction;
}

export class BaseStore<T> {
  protected itemsMap: Record<string, ItemInfo<T>>;

  constructor() {
    this.itemsMap = {};
  }

  addItem(uid: string, id: string, value: T): void {
    this.addGroup(uid);
    this.setItem(uid, id, value);
  }

  addGroup(uid: string): void {
    if (!this.itemsMap[uid]) {
      this.itemsMap[uid] = {
        items: {},
        onChange: null,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        getGroupPropsVal: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setGroupDataVal: () => {},
      };
    }
  }

  removeItem(uid: string, id: string): void {
    if (this.itemsMap[uid] && this.itemsMap[uid].items && this.getItem(uid, id)) {
      this.setItem(uid, id, null);
    }
  }

  removeGroup(uid: string): void {
    if (this.itemsMap[uid]) {
      this.itemsMap[uid] = null;
    }
  }

  updateGroupUID(oldUID: string, newUID: string): void {
    if (this.itemsMap[oldUID]) {
      this.itemsMap[newUID] = this.itemsMap[oldUID];
      this.itemsMap[oldUID] = null;
    }
  }

  setGroupPropsVal(uid: string, getGroupPropsVal: CallableFunction): void {
    if (this.itemsMap[uid]) {
      this.itemsMap[uid].getGroupPropsVal = getGroupPropsVal;
    }
  }

  setGroupDataVal(uid: string, setGroupDataVal: CallableFunction): void {
    if (this.itemsMap[uid]) {
      this.itemsMap[uid].setGroupDataVal = setGroupDataVal;
    }
  }

  getGroupDataVal(uid, getGroupDataVal: CallableFunction): void {
    if (this.itemsMap[uid]) {
      this.itemsMap[uid].getGroupDataVal = getGroupDataVal;
    }
  }

  getGroup(uid: string): ItemInfo<T> | void {
    if (this.itemsMap[uid]) {
      return this.itemsMap[uid];
    }
  }

  getItem(uid: string, id: string): T {
    return this.itemsMap[uid].items[id];
  }

  setItem(uid: string, id: string, value: T | null): void {
    this.itemsMap[uid].items[id] = value;
  }
}

