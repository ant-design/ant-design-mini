import type { IComponentInstance } from '@mini-types/alipay';

export interface IDataWithStore<IState> {
  _type: string;
  _store: Store<IState>;
}
export class Store<S extends Record<string, any>> {
  private state: S;
  private subscribtions = [] as Array<(state: S, diff: Partial<S>) => void>;
  constructor(initialState: Partial<S> = {}) {
    this.state = initialState as S;
  }
  getState() {
    return this.state;
  }
  subscribe(fn: (state: S, diff: Partial<S>) => void) {
    this.subscribtions.push(fn);
    return () => {
      this.subscribtions = this.subscribtions.filter((v) => v !== fn);
    };
  }
  dispatch(payload: Partial<S>, force = true) {
    const diff: Partial<S> = {};
    for (let key in payload) {
      if (payload[key] !== this.state[key]) {
        diff[key] = payload[key];
      }
    }
    Object.assign(this.state, diff);
    if (Object.keys(diff).length > 0 || force) {
      this.subscribtions.forEach((fn) => {
        fn(this.state, diff);
      });
    }
  }
  // 获取provider组件实例，初始空函数，在寻找store节点时赋值，直接存在store对象上存在循环引用问题
  public getInstance(): any {}
}

export function getStoreByType(instance, type) {
  try {
    let parent = instance.selectComposedParentComponent();
    while (parent) {
      if (parent.data._type === type) {
        parent.data._store.getInstance = () => parent;
        return parent.data._store;
      }
      parent = parent.selectComposedParentComponent();
    }
    throw new Error(`[antd-mini: item must be used in ${type}]`);
  } catch (e) {
    console.error(`[antd-mini: ${type} find error]`, e);
    throw new Error(`[antd-mini: item must be used in ${type}]`);
  }
}

interface IMinxProps<IState, IMappedData, IProps, IData> {
  type: string;
  mapStateToData?: (options: {
    state: IState;
    diff: Partial<IState>;
    props: IProps;
    data: IData;
  }) => IMappedData;
}

export function storeMixin<
  IState,
  IMappedData = IState,
  IProps = any,
  IData = any
>({
  type,
  mapStateToData = (state) => state as any,
}: IMinxProps<IState, IMappedData, IProps, IData>): IComponentInstance<
  any,
  any,
  any,
  {
    _store: Store<IState>;
    unSubscribe: CallableFunction;
  },
  any,
  any
> {
  return {
    didMount() {
      this._store = getStoreByType(this, type);
      this.unSubscribe = this._store.subscribe((state, diff) => {
        const allData = mapStateToData.call(this, {
          state,
          diff,
          props: this.props,
          data: this.data,
        });
        const diffData: Partial<IMappedData> = {};
        for (let key in allData) {
          if (allData[key] !== this.data[key]) {
            diffData[key] = allData[key];
          }
        }
        if (Object.keys(diffData).length > 0) {
          this.setData(diffData);
        }
      });
      this._store.dispatch({});
    },
    didUnmount() {
      this.unSubscribe();
    },
  };
}

export const STEPS_TYPE = 'STEPS_TYPE';
export const CHECKBOX_GROUP_TYPE = 'CHECKBOX_GROUP_TYPE';
export const RADIO_GROUP_TYPE = 'RADIO_GROUP_TYPE';
export const COLLAPSE_TYPE = 'COLLAPSE_TYPE';
