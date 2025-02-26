const myJsonStringify = (errorInfo, formData, showType) => {
  let obj = {};
  if (showType === 'value') {
    obj = formData;
  }
  if (showType === 'error') {
    obj = errorInfo;
  }
  return JSON.stringify(obj, null, 2);
}

export default {
  myJsonStringify
}