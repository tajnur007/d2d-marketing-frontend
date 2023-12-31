export function ensureTrailingSlash(str: string = '/') {
  return str.endsWith('/') ? str : `${str}/`;
}
