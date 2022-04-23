import { CascaderDefaultProps } from './props';

Component({
  props: CascaderDefaultProps,
  data: {
    curIdx: 0,
    icon: 'CheckOutLine',
    options: [],
    tabs: [],
    tapLoading: false
  },
  onInit() {
    const { options, value, valueKey, titleKey, childrenKey, confirmIcon } = this.props
    // 递归查询
    const nodeSetTitleFun = (nodes) => {
      return nodes.map(node => {
        if (node[childrenKey] instanceof Array && node[childrenKey].length) {
          let children = nodeSetTitleFun(node[childrenKey])
          return {
            ...node,
            title: node[titleKey],
            [childrenKey]: children
          }
        } else {
          return { ...node, title: node[titleKey] }
        }
      })
    }
    const getTreeNodes = (tree, list) => {
      let result = []
      for (let index = 0; index < list.length; index++) {
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
      return result
    }
    // 动态变更tabs
    let newTabs = getTreeNodes(options, value).map(i => {
      return {
        ...i,
        title: i[titleKey]
      }
    })

    if (!!!newTabs.length) {
      newTabs = [{
        [titleKey]: '请选择',
        title: '请选择'
      }]
    }
    // 动态变更options
    let newOptions = []
    if (newTabs.length && !!newTabs.filter(i => !!i[valueKey]).map(i => i[childrenKey]).length) {
      newOptions = [options, ...newTabs.map(i => i[childrenKey])].filter(i => !!i)
    } else {
      newOptions = [options]
    }
    newOptions = newOptions.map(i => nodeSetTitleFun(i))
    this.setData({
      options: newOptions,
      tabs: newTabs,
      confirmIcon: confirmIcon,

    })
    setTimeout(() => {
      this.setData({
        curIdx: newTabs.length - 1
      });
    }, 300)

  },
  methods: {
    // tabs 的点击回调
    changeTab(e) {
      this.setData({
        curIdx: e,
      });
    },
    nodeTapHandle(e) {
      let that = this
      const { valueKey, titleKey, childrenKey, onChange } = this.props
      const { node_data: current_node_data, node_index: current_node_index } = e.target.dataset
      if(current_node_data.disabled){
        return
      }
      this.setData({
        tapLoading: true
      })
      let newOption = !!current_node_data[childrenKey] ? current_node_data[childrenKey] : null
      let oldTab = this.data.tabs[current_node_index]
      // 修改tab标签
      this.setData({
        [`tabs[${current_node_index}]`]: {
          ...current_node_data,
          [titleKey]: current_node_data[titleKey],
          [valueKey]: current_node_data[valueKey],
          title: current_node_data[titleKey],
        }
      });
      if (!!newOption) {
        // 如果之前加载过选项
        if (!!that.data.options[current_node_index + 1]) {
          if (oldTab[valueKey] == current_node_data[valueKey]) {
            that.setData({
              [`options[${current_node_index + 1}]`]: newOption
            });
          } else {
            that.setData({
              [`options[${current_node_index + 1}]`]: newOption,
              tabs: [...that.data.tabs.splice(0, current_node_index + 1), {
                [titleKey]: '请选择',
                title: '请选择',
              }],
            });
          }
        } else {
          // 增加选项
          that.setData({
            options: [...that.data.options, newOption],
            tabs: [...that.data.tabs, {
              [titleKey]: '请选择',
              title: '请选择',
            }],
          });
        }
        // 索引+1
        setTimeout(() => {
          this.setData({
            tapLoading: false,
            curIdx: current_node_index + 1
          });
        }, 300)
      } else {
        // 清除多余选项
        that.setData({
          tapLoading: false,
          options: that.data.options.splice(0, current_node_index + 1),
          tabs: that.data.tabs.splice(0, current_node_index + 1),
          curIdx: current_node_index
        });
        onChange(current_node_data, this.data.tabs)
        this.onClose()
      }
    },
    // tabs 的点击回调
    handleChangeTab(e) {
      this.setData({
        curIdx: e,
      });
    },
    onClose() {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    },
  },
});
