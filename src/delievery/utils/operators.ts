export const curry = (fn: Function, ...args: any[]) =>
  (...newArgs: any[]) => fn(...args, ...newArgs);

export const eq = curry(<T = any>(a: T, b: T) => a === b);

export const propEq = (key: string, value: any) => (obj: any) => eq(obj[key], value);

export const runIfExists =
  curry((fn?: Function, ...args: any[]) => fn ? fn(...args) : fn);
