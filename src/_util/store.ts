import type { IUserComponentOptions } from '@mini-types/alipay';
import { compareVersion } from './compareVersion';
import { getArrayItem } from './tools';

// selectComponsedParentComponent在appx2和appx1下表现不一致，appx1下向上拿到节点必须在settimeout中执行，直接获取只能拿到最近一级
const isSupportAppx2 = compareVersion(my.SDKVersion, '2.7.22') >= 0;

export abstract class Store<S extends Record<string, any>> {
  static type: string;
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
  dispatch(payload: Partial<S> | ((state: S) => S), force = false) {
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
  /**
   * 组件实例
   */
  public instance: any;
}

/**
 * 给组件注入store示例
 * @param instane
 * @param storeFactory
 */
function injectStore(instane, storeFactory) {
  if (!instane._store) {
    instane._store = new storeFactory();
    instane._store.instance = instane;
  }
}
/**
 * 从子组件向上查找指定类型的节点
 * @param component
 * @param type
 * @returns
 */
export function getInstanceByType(component, type) {
  try {
    let parent = component.selectComposedParentComponent();
    while (parent) {
      const parentType = getArrayItem(parent.is.split('/'), -2);
      if (parentType === type) {
        return parent;
      }
      parent = parent.selectComposedParentComponent();
    }
  } catch (e) {
    console.error(`[antd-mini: ${type} find error]`, e);
  }
  return null;
}

interface IMinxProps<IState, IMappedData, IProps, IData> {
  /**
   * 子级判断父级store未挂载时注入
   */
  storeFactory?: typeof Store<IState>;
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

/**
 * connect到store数据，顶层组件上已有store实例，无需bindStoreFn
 * @param param0
 * @returns
 */
export function connect<
  IState,
  IMappedData = IState,
  IProps = any,
  IData = any
>({
  storeFactory,
  mapStateToData = (state) => state as any,
}: IMinxProps<IState, IMappedData, IProps, IData>): IUserComponentOptions<
  IObject,
  IObject,
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
  IObject,
  any[]
> {
  return {
    didMount() {
      const subscribe = () => {
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
      };
      const bindStoreFn = () => {
        const { type } = storeFactory;
        const providerInstance = getInstanceByType(this, type);
        if (!providerInstance) {
          throw new Error(`[antd-mini: item must be used in ${type}]`);
        }
        injectStore(providerInstance, storeFactory);
        this._store = providerInstance._store;
        subscribe();
        if (this.onStoreSetted) {
          this.onStoreSetted();
        }
      };
      if (!this._store) {
        if (isSupportAppx2) {
          bindStoreFn();
        } else {
          setTimeout(() => bindStoreFn());
        }
      } else {
        subscribe();
      }
    },
    didUnmount() {
      if (this.unSubscribe) {
        this.unSubscribe();
      }
    },
  };
}

export function inject<IState>(
  storeFactory: typeof Store<IState>
): IUserComponentOptions<
  IObject,
  IObject,
  IObject,
  { _store: typeof Store<IState> },
  IObject,
  any[]
> {
  return {
    didMount() {
      injectStore(this, storeFactory);
    },
  };
}
