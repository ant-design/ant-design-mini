export let getFieldName  = () => {
  return ''
}
export const  cacheFieldName = function(fn) {
  getFieldName = fn;
}