import esbuild from 'esbuild';
import fs from 'fs';
import { createInstrumenter } from 'istanbul-lib-instrument';
import os from 'os';
import path from 'path';
import shallowequal from 'shallowequal';
import vm from 'vm';
import { SelectorQuery } from './selector-query';

interface Instance {
  $id: number;
  props: Record<string, any>;
  data: Record<string, any>;
  methods: Record<string, (this: Instance, ...args: any) => void>;
  createSelectorQuery: () => SelectorQuery;
  setData: (
    data: Record<string, any>,
    callback?: (this: Instance) => void
  ) => void;
  mixins?: Record<string, (this: Instance, ...args: any) => void>[];
  onInit?: (this: Instance) => void;
  deriveDataFromProps?: (
    this: Instance,
    nextProps: Record<string, any>
  ) => void;
  didUpdate?: (
    this: Instance,
    prevProps: Record<string, any>,
    prevData: Record<string, any>
  ) => void;
  didMount?: (this: Instance) => void;
  didUnmount?: (this: Instance) => void;
}

export interface TestInstance {
  ref<T>(): T;
  componentInstance(): Instance;
  getData<T = Record<string, any>>(): T;
  setProps: (props: Record<string, any>) => void;
  callMethod: (name: string, ...args: any) => any;
  unMount: () => void;
  getConfig(): Record<string, any>;
}

export function createInstance(
  config: Instance,
  props: Record<string, any>,
  my: any
) {
  const component2 =
    typeof my !== 'undefined' &&
    typeof (my as any).canIUse === 'function' &&
    (my as any).canIUse('component2');
  const onInit = [];
  const didMount = [];
  const didUpdate = [];
  const didUnmount = [];
  const deriveDataFromProps = [];

  const instance: Instance = {
    $id: 1,
    ...config,
    ...config.methods,
    props: {
      ...config.props,
      ...props,
    },
    data: {
      ...(typeof config.data === 'function' ? config.data() : config.data),
    },
    methods: {
      ...config.methods,
    },
    setData(data: Record<string, any>, callback: (this: Instance) => void) {
      if (shallowequal(data, instance.data)) {
        return;
      }
      const prevData = {
        ...instance.data,
      };
      Object.assign(instance.data, data);
      const prevProps = instance.props;
      if (component2) {
        deriveDataFromProps.forEach((item) =>
          item.call(instance, instance.props)
        );
      }
      didUpdate.forEach((item) => item.call(instance, prevProps, prevData));
      callback && callback.call(instance);
    },
  };

  if (instance.mixins) {
    instance.mixins.forEach((item) => {
      Object.assign(instance, item.methods);
      Object.assign(instance.methods, item.methods);
      if (item.onInit) {
        onInit.push(item.onInit);
      }
      if (item.deriveDataFromProps) {
        deriveDataFromProps.push(item.deriveDataFromProps);
      }
      if (item.didMount) {
        didMount.push(item.didMount);
      }
      if (item.didUpdate) {
        didUpdate.push(item.didUpdate);
      }
      if (item.didUnmount) {
        didUnmount.push(item.didUnmount);
      }
      if (item.data) {
        instance.data = {
          ...item.data,
          ...instance.data,
        };
      }
    });
  }

  if (instance.onInit) {
    onInit.push(instance.onInit);
  }
  if (instance.deriveDataFromProps) {
    deriveDataFromProps.push(instance.deriveDataFromProps);
  }
  if (instance.didUpdate) {
    didUpdate.push(instance.didUpdate);
  }
  if (instance.didMount) {
    didMount.push(instance.didMount);
  }
  if (instance.didUnmount) {
    didUnmount.push(instance.didUnmount);
  }

  if (component2) {
    onInit.forEach((item) => item.call(instance));
    deriveDataFromProps.forEach((item) => item.call(instance, instance.props));
  }
  didMount.forEach((item) => item.call(instance));

  return {
    componentInstance() {
      return instance;
    },
    ref() {
      const refFunc = (instance as any).ref;
      if (typeof refFunc === 'function') {
        return refFunc.call(instance);
      }
      const ref = Object.keys(instance.methods).reduce((acc: any, key) => {
        acc[key] = (...args) => instance.methods[key].call(instance, ...args);
        return acc;
      }, {});

      return ref;
    },
    getData() {
      return JSON.parse(JSON.stringify(instance.data));
    },
    getConfig() {
      return config;
    },
    setProps(props: Record<string, any>) {
      if (shallowequal(props, instance.props)) {
        return;
      }
      if (component2) {
        deriveDataFromProps.forEach((item) =>
          item.call(instance, {
            ...instance.props,
            ...props,
          })
        );
      }
      const prevProps = {
        ...instance.props,
      };
      const prevData = instance.data;
      Object.assign(instance.props, props);
      didUpdate.forEach((item) => item.call(instance, prevProps, prevData));
    },
    callMethod(name: string, ...args: any) {
      return instance.methods[name].call(instance, ...args);
    },
    unMount() {
      didUnmount.forEach((item) => item.call(instance));
    },
  };
}

function component2Patch(originalMy?: Record<string, any>) {
  if (typeof originalMy !== 'undefined') {
    const originalCanIUse = originalMy.canIUse;
    originalMy.canIUse = function (name: string) {
      if (name === 'component2') {
        return true;
      }
      return originalCanIUse(name);
    };
    return originalMy;
  }
  return {
    canIUse() {
      return true;
    },
  };
}

function getInstance(
  name: string,
  props: Record<string, any>,
  api?: Record<string, any>
): TestInstance {
  const sourceCodePath = path.isAbsolute(name)
    ? name
    : path.join(__dirname, `../compiled/alipay/src/${name}/index.ts`);
  const { path: expectFile, code } = compileCode(sourceCodePath);
  const script = new vm.Script(code, {
    filename: expectFile,
  });
  let result;
  const cov = {};
  const context = vm.createContext({
    my: component2Patch(api),
    console,
    COV: cov,
    require,
    setTimeout,
    clearTimeout,
    Component: (obj) => {
      result = createInstance(obj, props, component2Patch(api));
    },
    updateResult: (res) => {
      result = res;
    },
  });

  globalThis.componentCoverage.push(cov);
  script.runInContext(context);
  return result;
}

export function runInMiniprogram<T>(
  filePath: string,
  api?: Record<string, any>
): T {
  const { path: expectFile, code } = compileCode(filePath);
  const script = new vm.Script(code, {
    filename: expectFile,
  });
  let result;
  const cov = {};
  const context = vm.createContext({
    my: component2Patch(api),
    console,
    COV: cov,
    require,
    setTimeout,
    updateResult: (res) => {
      result = res;
    },
  });

  globalThis.componentCoverage.push(cov);
  script.runInContext(context);
  return result;
}

interface CompileResult {
  code: string;
  path: string;
  map: string;
}

const buildCache = new Map<string, CompileResult>();

// 编译打包代码，新增缓存
function compileCode(source: string): CompileResult {
  const expectFile = path.join(
    os.tmpdir(),
    Math.random().toString(36),
    'out.js'
  );
  const expectFileSourcemap = expectFile + '.map';
  const cache = buildCache.get(source);
  if (cache) {
    // 需要把产物里的路径改成新的路径，否则会有覆盖率计算错误的问题
    const code = cache.code.replace(new RegExp(cache.path, 'g'), expectFile);
    fs.mkdirSync(path.dirname(expectFile), { recursive: true });
    return {
      code,
      // 仍然使用原来的路径，否则在 vm 运行时，如果报错，会找不到 sourcemap
      path: cache.path,
      map: cache.map,
    };
  }
  esbuild.buildSync({
    entryPoints: [source],
    bundle: true,
    outfile: expectFile,
    sourcemap: true,
    external: ['fast-deep-equal'],
  });
  const instrumenter = createInstrumenter({
    produceSourceMap: true,
    autoWrap: false,
    esModules: true,
    compact: false,
    coverageVariable: '__ANTD_COVERAGE__',
    coverageGlobalScope: 'COV',
    coverageGlobalScopeFunc: false,
  });
  const sourceCode = fs.readFileSync(expectFile, 'utf-8');
  const code = instrumenter.instrumentSync(
    sourceCode,
    expectFile,
    JSON.parse(fs.readFileSync(expectFileSourcemap, 'utf8'))
  );
  const map = JSON.stringify(instrumenter.lastSourceMap());

  fs.writeFileSync(expectFile, code);
  fs.writeFileSync(expectFileSourcemap, map);
  buildCache.set(source, {
    path: expectFile,
    code,
    map,
  });
  return { code: code, path: expectFile, map };
}

export { getInstance };

export function sleep(_time, ciNotSleepMore?: boolean) {
  let time = _time;
  if (os.platform() === 'linux' && !ciNotSleepMore) {
    time = time * 2;
  }
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function callMethod(instance, name, value) {
  instance.callMethod(name, value);
  await sleep(30);
}

export function wrapValue(value: string) {
  return {
    detail: {
      value,
    },
  };
}
