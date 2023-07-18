const path = require('path');
const cloneDeep = require('clone-deep');
const shallowequal = require('shallowequal');

const map = {};
let currentName;
(global as any).Component = function(config) {
  map[currentName] = config;
}

interface Instance {
  props: Record<string, any>;
  data: Record<string, any>;
  methods: Record<string, (this: Instance, ...args: any) => void>;
  setData: (data: Record<string, any>, callback?: (this: Instance) => void) => void;
  mixins?: Record<string, (this: Instance, ...args: any) => void>[]
  onInit?: (this: Instance) => void;
  deriveDataFromProps?: (this: Instance, nextProps: Record<string, any>) => void;
  didUpdate?: (this: Instance, prevProps: Record<string, any>, prevData: Record<string, any>) => void;
  didMount?: (this: Instance) => void;
  didUnmount?: (this: Instance) => void;
}

function createInstance(config: Instance, props: Record<string, any>) {
  const component2 = typeof my !== 'undefined' && typeof (my as any).canIUse === 'function' && (my as any).canIUse('component2');
  const onInit = [];
  const didMount = [];
  const didUpdate = [];
  const didUnmount = [];
  const deriveDataFromProps = [];

  const instance: Instance = {
    ...config,
    ...config.methods,
    props: {
      ...config.props,
      ...props,
    },
    data: {
      ...(typeof config.data==='function'?config.data(): config.data),
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
        deriveDataFromProps.forEach(item => item.call(instance, instance.props));
      }
      didUpdate.forEach(item => item.call(instance, prevProps, prevData));
      callback && callback.call(instance);
    },
  };

  if (instance.mixins) {
    instance.mixins.forEach(item => {
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
    onInit.forEach(item => item.call(instance));
    deriveDataFromProps.forEach(item => item.call(instance, instance.props));
  }
  didMount.forEach(item => item.call(instance));

  return {
    getData() {
      return instance.data;
    },
    setProps(props: Record<string, any>) {
      if (shallowequal(props, instance.props)) {
        return;
      }
      if (component2) {
        deriveDataFromProps.forEach(item => item.call(instance, {
          ...instance.props,
          ...props,
        }));
      }
      const prevProps = {
        ...instance.props,
      };
      const prevData = instance.data;
      Object.assign(instance.props, props);
      didUpdate.forEach(item => item.call(instance, prevProps, prevData));
    },
    callMethod(name: string, ...args: any) {
      return instance.methods[name].call(instance, ...args);
    },
    unMount() {
      didUnmount.forEach(item => item.call(instance));
    },
  }
}

function getInstance(name: string, props: Record<string, any>, api?: Record<string, any>) {
  currentName = name;
  (global as any).my = api;
  try {
    require(path.join(__dirname, `../src/${name}/index.ts`));
  } catch (err) {
    console.log(err);
    throw err;
  }
  return createInstance(cloneDeep(map[name]), props);
}

export {
  getInstance,
};

