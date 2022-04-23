const getTreeNames=(tree, list,keyConf)=> {
    let result = []
    let {titleKey,valueKey,childrenKey} = keyConf
    for (let index = 0, len = list.length; index < len; index++) {
      let findOrigin
      if (index == 0) {
        findOrigin = tree
      } else {
        findOrigin = result[index - 1][childrenKey]
      }
      let current_node = findOrigin.find(i => {
        return i[valueKey] == list[index]
      })
      if (!!current_node) {
        result.push(current_node)
      } else {
        break
      }
    }
    return result.map(i=>{return i[titleKey]})
}
export default {
  getTreeNames,
}