export function isString(str) {
  return Object.prototype.toString.call(str) === "[object string]";
}
