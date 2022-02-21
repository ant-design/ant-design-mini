/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ComponentContext {
  fns: ((value: any) => void)[] = [];

  value: any;

  get(): any {
    return this.value;
  }

  update(value: any): void {
    this.value = value;
    this.fns?.forEach((fn) => {
      fn(value);
    });
  }

  onUpdate(fn: (v: any) => void): void {
    this.fns.push(fn);
  }

  clearEvent(): void {
    this.fns = [];
  }

  offUpdate(fn: (v: any) => void): void {
    this.fns = this.fns.filter((item) => item !== fn);
  }
}

export class Context<T = any> {
  private _values: {
    [key: string]: T;
  } = {};

  private _fns: {
    [key: string]: ((value: T) => void)[];
  } = {};


  get(uid: string): any {
    return this._values[uid] ?? null;
  }

  update(uid: string, value: T): void {
    this._values[uid] = value;
    this._fns[uid]?.forEach((fn) => {
      fn(value);
    });
  }

  updateValue(uid: string, value: T): void {
    this._values[uid] = value;
  }

  onUpdate(uid: string, fn: (v: T) => void): void {
    if (!this._fns[uid]) {
      this._fns[uid] = [];
    }

    this._fns[uid].push(fn);
  }

  clearEvent(uid: string): void {
    delete this._fns[uid];
  }

  offUpdate(uid: string, fn: (v: T) => void): void {
    if (this._fns[uid]) {
      this._fns[uid] = this._fns[uid].filter((item) => item !== fn);
    }
  }
}
