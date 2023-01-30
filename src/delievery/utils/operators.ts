export const curry = (fn: Function, ...args: any[]) =>
  (...newArgs: any[]) => fn(...args, ...newArgs);

export const runIfExists = 
  curry((fn?: Function, ...args: any[]) => fn ? fn(...args) : fn);
