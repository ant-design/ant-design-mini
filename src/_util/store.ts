import type { IUserComponentOptions } from '@mini-types/alipay';
import { compareVersion } from './compareVersion';

// selectComponsedParentComponent在appx2和appx1下表现不一致，appx1下向上拿到节点必须在settimeout中执行，直接获取只能拿到最近一级
const isSupportAppx2 = compareVersion(my.SDKVersion, '2.7.22') >= 0;

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
  /**
   * 订阅store数据变化
   * @param fn
   * @returns
   */
  subscribe(fn: (state: S, diff: Partial<S>) => void) {
    this.subscribtions.push(fn);
    return () => {
      this.subscribtions = this.subscribtions.filter((v) => v !== fn);
    };
  }
  /**
   * 数据改变不触发数据同步和视图变化
   * @param payload
   */
  dispatchNoSync(payload: Partial<S>) {
    Object.assign(this.state, payload);
  }
  /**
   * 改变数据并触发数据同步和视图变化
   * @param payload
   * @param force 是否强制刷新
   */
  dispatch(payload: Partial<S> | ((state: S) => S), force = true) {
    // payload支持传函数，即使在循环中使用dispatch，payload每次接收的state也是上一次dispatch完最新的
    if (typeof payload === 'function') {
      payload = payload(this.state);
    }
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
  /**
   * 强制触发刷新
   */
  forceUpdate() {
    this.subscribtions.forEach((fn) => {
      fn(this.state, {});
    });
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
  } catch (e) {
    console.error(`[antd-mini: ${type} find error]`, e);
    throw new Error(`[antd-mini: item must be used in ${type}]`);
  }
  throw new Error(`[antd-mini: item must be used in ${type}]`);
}

interface IMinxProps<IState, IMappedData, IProps, IData> {
  type: string;
  mapStateToData?: (
    this: any,
    options: {
      state: IState;
      diff: Partial<IState>;
      props: IProps;
      data: IData;
    }
  ) => IMappedData;
}

export function storeMixin<
  IState,
  IMappedData = IState,
  IProps = any,
  IData = any
>({
  type,
  mapStateToData = (state) => state as any,
}: IMinxProps<IState, IMappedData, IProps, IData>): IUserComponentOptions<
  {},
  {},
  {
    /**
     * appx1下获取store在setTimeout中，didMount执行时机先于挂载store，兼容方法
     */
    onStoreSetted(): void;
  },
  {
    _store: Store<IState>;
    unSubscribe: CallableFunction;
  },
  {},
  any[]
> {
  return {
    didMount() {
      const bindStoreFn = () => {
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
        this._store.forceUpdate();
        if (this.onStoreSetted) {
          this.onStoreSetted();
        }
      };
      if (isSupportAppx2) {
        bindStoreFn();
      } else {
        setTimeout(() => bindStoreFn());
      }
    },
    didUnmount() {
      if (this.unSubscribe) {
        this.unSubscribe();
      }
    },
  };
}

export function providerMixin<
  IState,
  IMappedData = IState,
  IProps = any,
  IData = any
>({
  mapStateToData = (state) => state as any,
}: Pick<
  IMinxProps<IState, IMappedData, IProps, IData>,
  'mapStateToData'
>): IUserComponentOptions<
  {
    _store: Store<IState>;
  },
  {},
  {},
  {},
  {},
  any[]
> {
  return {
    didMount() {
      this.data._store.subscribe((state, diff) => {
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
      this.data._store.dispatch({});
    },
  };
}

export const STEPS_TYPE = 'STEPS_TYPE';
export const CHECKBOX_GROUP_TYPE = 'CHECKBOX_GROUP_TYPE';
export const RADIO_GROUP_TYPE = 'RADIO_GROUP_TYPE';
export const COLLAPSE_TYPE = 'COLLAPSE_TYPE';
export const FILTER_TYPE = 'FILTER_TYPE';
