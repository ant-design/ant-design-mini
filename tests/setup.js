const path = require('path');
const cloneDeep = require('clone-deep');
const shallowequal = require('shallowequal');

const map = {};
let currentName;
global.Component = function(config) {
  map[currentName] = config;
}

function createInstance(config, props) {
  const component2 = typeof my !== 'undefined' && typeof my.canIUse === 'function' && my.canIUse('component2');
  const onInit = [];
  const didMount = [];
  const didUpdate = [];
  const didUnmount = [];
  const deriveDataFromProps = [];

  const instance = {
    ...config,
    ...config.methods,
    props: {
      ...config.props,
      ...props,
    },
    data: {
      ...config.data,
    },
    methods: {
      ...config.methods,
    },
    setData(data, callback) {
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
      callback && callback();
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
    setProps(props) {
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
    callMethod(name, ...args) {
      instance.methods[name].call(instance, ...args);
    },
    unMount() {
      didUnmount.forEach(item => item.call(instance));
    },
  }
}

function getInstance(name, props, api) {
  currentName = name;
  global.my = api;
  try {
    require(path.join(__dirname, `../src/${name}/index.ts`));
  } catch (err) {
    console.log(err);
    throw err;
  }
  return createInstance(cloneDeep(map[name]), props);
}

global.getInstance = getInstance;

