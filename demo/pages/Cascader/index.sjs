const getTreeNames=(tree, list)=> {
    let result = []
    for (let index = 0, len = list.length; index < len; index++) {
      let findOrigin
      if (index == 0) {
        findOrigin = tree
      } else {
        findOrigin = result[index - 1].children
      }
      let current_node = findOrigin.find(i => {
        return i.value == list[index]
      })
      if (!!current_node) {
        result.push(current_node)
      } else {
        break
      }
    }
    return result.map(i=>{return i.title})
}
export default {
  getTreeNames,
}