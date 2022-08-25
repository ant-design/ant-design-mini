declare type stringOrNumber = string | number;

type GetArrayType<T extends Array<unknown>> = T extends Array<infer K>
  ? K
  : never;

type ArrayOrItem<T> = T | Array<T>;

type IObject<T = any> = Record<string, T>;
