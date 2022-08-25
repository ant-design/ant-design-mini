import { Store } from '../_util/store';

export const supportSjs = my.canIUse('sjs.event');

export interface IState {
  value: string[];
  accordion: boolean;
  items: {
    name: string;
    setFirst: () => void;
    setLastAction: (action: string) => void;
    setContentHeight: (height: string) => void;
    getContentHeight: () => Promise<string>;
  }[];
}

export class CollapseStore extends Store<IState> {
  static type = 'Collapse';
  constructor() {
    super({ value: [], accordion: false, items: [] });
  }
  public addItem(item: GetArrayType<IState['items']>) {
    const { items } = this.getState();
    this.dispatchNoSync({
      items: [...items, item],
    });
  }
  public removeItem(name: string) {
    const { value, items } = this.getState();
    this.dispatchNoSync({
      value: value.filter((v) => v !== name),
      items: items.filter((v) => v.name !== name),
    });
  }
  public updateValue(value: string[]) {
    const { accordion, items } = this.getState();
    value = accordion ? value.slice(0, 1) : value;
    if (supportSjs) {
      this.dispatch({ value });
    }
    items.forEach((item) => {
      // for 2.0
      if (supportSjs) {
        item.setLastAction('auto');
        item.setFirst();
      } else {
        // for 1.0
        if (value.indexOf(item.name) > -1) {
          // close -> open
          item.getContentHeight().then((height) => {
            item.setContentHeight(height);
            this.dispatch((state) => ({
              ...state,
              value: state.value.concat(item.name),
            }));
            item.setFirst();
          });
        } else {
          // open -> close
          item.getContentHeight().then((height) => {
            item.setContentHeight(height);
            item.setFirst();
            setTimeout(() => {
              this.dispatch((state) => ({
                ...state,
                value: state.value.filter((v) => v !== item.name),
              }));
              item.setContentHeight('0px');
            }, 10);
          });
        }
        item.setLastAction('auto');
      }
    });
  }
  public triggerItemSjs(name: string) {
    const { accordion, items, value } = this.getState();
    if (accordion) {
      const newValue = value.indexOf(name) > -1 ? [] : [name];
      this.dispatch({
        value: newValue,
      });
      items.forEach((item) => {
        item.setLastAction('onTap');
        item.setFirst();
      });
      this.instance.onChange(newValue);
      return;
    }
    const find = items.find((v) => v.name === name);
    const newValue =
      value.indexOf(name) > -1
        ? value.filter((v) => v !== name)
        : [...value, name];
    this.dispatch({
      value: newValue,
    });
    find.setLastAction('onTap');
    this.instance.onChange(newValue);
  }
  public triggerItemNoSjs(name: string) {
    const { accordion, items, value } = this.getState();
    const isActive = value.indexOf(name) > -1;
    const removeActive = (name: string) => {
      this.dispatch((state) => ({
        ...state,
        value: state.value.filter((v) => v !== name),
      }));
    };
    const addActive = (name: string) => {
      this.dispatch((state) => ({
        ...state,
        value: state.value.concat(name),
      }));
    };
    if (accordion) {
      const newValue = isActive ? [] : [name];
      items.forEach((item) => {
        if (item.name === name) {
          if (isActive) {
            item.getContentHeight().then((height) => {
              item.setContentHeight(height);
              setTimeout(() => {
                removeActive(item.name);
                item.setContentHeight('0px');
                item.setFirst();
                this.instance.onChange(newValue);
              }, 10);
            });
          } else {
            item.getContentHeight().then((height) => {
              item.setContentHeight('0px');
              setTimeout(() => {
                addActive(item.name);
                item.setContentHeight(height);
                item.setFirst();
                this.instance.onChange(newValue);
              }, 10);
            });
          }
        } else {
          // 原本收起状态不做处理
          if (value.indexOf(item.name) < 0) return;
          item.getContentHeight().then((contentHeight) => {
            item.setContentHeight(contentHeight);
            item.setFirst();
            setTimeout(() => {
              removeActive(item.name);
              item.setContentHeight('0px');
            }, 10);
          });
        }
      });
    } else {
      const newValue = isActive
        ? value.filter((v) => v !== name)
        : [...value, name];
      const find = items.find((v) => v.name === name);
      if (isActive) {
        // for 1.0 open -> close
        find.getContentHeight().then((height) => {
          find.setContentHeight(height);
          setTimeout(() => {
            find.setContentHeight('0px');
            this.dispatch({ value: newValue });
            find.setFirst();
            this.instance.onChange(newValue);
          }, 10);
        });
      } else {
        // for 1.0 close -> open
        find.getContentHeight().then((height) => {
          find.setContentHeight(height);
          this.dispatch({ value: newValue });
          find.setFirst();
          this.instance.onChange(newValue);
        });
      }
    }
  }
}
