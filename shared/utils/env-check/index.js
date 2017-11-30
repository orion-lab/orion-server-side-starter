export const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]';
export const isNode = typeof (process) !== 'undefined' && process.title === 'node';
