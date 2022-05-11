export default class EventEmitter {
  protected listeners: Record<string, Array<Function>>;

  protected maxListener: number;

  constructor() {
    this.listeners = {};
    this.maxListener = 100;
  }

  addListener(event, cb) {
    const { listeners } = this;
    if (listeners[event] && listeners[event].length >= this.maxListener) {
      throw console.error('监听器的最大数量是%d,您已超出限制', this.maxListener);
    }
    if (typeof cb !== 'function') {
      throw console.error('cb应为函数');
    }
    if (listeners[event] instanceof Array) {
      if (listeners[event].indexOf(cb) === -1) {
        listeners[event].push(cb);
      }
    } else {
      listeners[event] = [].concat(cb);
    }
  }

  emit(event, ...args) {
    if (this.listeners[event] instanceof Array) {
      this.listeners[event].forEach(cb => {
        cb.apply(null, args);
      });
    }
  }

  removeListener(event, cb) {
    const { listeners } = this;
    const arr = listeners[event] || [];
    const i = arr.indexOf(cb);
    if (i > -1) {
      listeners[event].splice(i, 1);
    }
  }
}