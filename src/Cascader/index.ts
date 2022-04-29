import { CascaderDefaultProps } from './props';
// no-extra-boolean-cast
type Option = {
  value?: any;
  label?: any;
  children?: Option[];
  disabled?: boolean,
  leaf?: boolean;
  level?: number;
  [key: PropertyKey]: any;
}
Component({
  props: CascaderDefaultProps,
  data: {
    curIdx: 0,
    icon: 'CheckOutLine',
    options: [],
    tabs: [],
    tapLoading: false,
  },
  async onInit() {
    const { lazy, value, valueKey, titleKey, childrenKey, confirmIcon, onLazyLoad } = this.props
    let options = this.props.options
    const isLazy = lazy && Boolean(onLazyLoad)
    // 递归增加title、level
    const nodeSetTitleFun = (nodes: Option[], level?: number) => {
      level = level == undefined ? 1 : level + 1
      return nodes.map(node => {
        if (node[childrenKey] instanceof Array && node[childrenKey].length) {
          const children = nodeSetTitleFun(node[childrenKey], level)
          return {
            ...node,
            title: node[titleKey],
            [childrenKey]: children,
            level
          }
        } else {
          return { ...node, title: node[titleKey], level }
        }
      })
    }
    options = nodeSetTitleFun(options)
    const getTreeNodes = async (tree: Array<Option>, list: Array<any>) => {
      const result = []
      for (let index = 0; index < list.length; index++) {
        const currentId = list[index]
        let findOrigin: any = []
        if (index == 0) {
          findOrigin = tree
        } else {
          const parentNode = result[index - 1]
          findOrigin = parentNode[childrenKey] ? parentNode[childrenKey] : []
          if (isLazy && !findOrigin.length && !parentNode.leaf) {
            findOrigin = (await this.lazyLoadRes(parentNode)).map((node: Option) => {
              return {
                ...node,
                level: parentNode.level + 1
              }
            })
            parentNode[childrenKey] = findOrigin
          }
        }
        const current_node = findOrigin.find(i => {
          return i[valueKey] == currentId
        })
        if (current_node) {
          result.push(current_node)
        } else {
          break
        }
      }
      return result
    }
    // 动态变更tabs
    let newTabs = nodeSetTitleFun(
      (await getTreeNodes(options, value)).map(i => {
        return {
          ...i,
          title: i[titleKey]
        }
      })
    )

    if (!newTabs.length) {
      newTabs = [{
        [titleKey]: '请选择',
        title: '请选择'
      }]
    }
    // 动态变更options
    let newOptions = []
    // 如果tab有传递的默认值
    if (newTabs.length && !!newTabs.filter(i => !!i[valueKey]).map(i => i[childrenKey]).length) {
      // 第一级给特殊标识
      newTabs[0].root = true
      newOptions = [options, ...newTabs.map(i => i[childrenKey])].filter(i => !!i)
    } else {
      newOptions = [options]
    }
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
    changeTab(e: number) {
      this.setData({
        curIdx: e,
      });
    },
    async lazyLoadRes(node: Option): Promise<any> {
      const { onLazyLoad } = this.props
      return await new Promise((resolve) => {
        onLazyLoad(node, resolve)
      }).then(res => {
        return res
      })
    },
    async nodeTapHandle(e) {
      const { lazy, valueKey, titleKey, childrenKey, onChange, onLazyLoad } = this.props
      const { node_data: current_node_data, node_index: current_node_index } = e.target.dataset
      if (current_node_data.disabled) {
        return
      }
      const isLazy = lazy && Boolean(onLazyLoad)
      this.setData({
        tapLoading: true
      })
      let newOption = current_node_data[childrenKey] ? current_node_data[childrenKey] : null
      // 如果是异步并且 不是叶子节点 并且没数据就加载
      if (isLazy && !newOption && !current_node_data.leaf) {
        newOption = (await this.lazyLoadRes(current_node_data)).map((node: Option) => {
          return {
            ...node,
            level: current_node_data.level + 1
          }
        })
      }
      const oldTab = this.data.tabs[current_node_index]
      // 修改tab标签
      this.setData({
        [`tabs[${current_node_index}]`]: {
          ...current_node_data,
          [titleKey]: current_node_data[titleKey],
          [valueKey]: current_node_data[valueKey],
          title: current_node_data[titleKey],
        }
      });
      if (newOption) {
        // 如果之前加载过选项
        if (this.data.options[current_node_index + 1]) {
          if (oldTab[valueKey] == current_node_data[valueKey]) {
            this.setData({
              [`options[${current_node_index + 1}]`]: newOption
            });
          } else {
            this.setData({
              [`options[${current_node_index + 1}]`]: newOption,
              tabs: [...this.data.tabs.splice(0, current_node_index + 1), {
                [titleKey]: '请选择',
                title: '请选择',
              }],
            });
          }
        } else {
          // 增加选项
          this.setData({
            options: [...this.data.options, newOption],
            tabs: [...this.data.tabs, {
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
        this.setData({
          tapLoading: false,
          options: this.data.options.splice(0, current_node_index + 1),
          tabs: this.data.tabs.splice(0, current_node_index + 1),
          curIdx: current_node_index
        });
        onChange(current_node_data, this.data.tabs)
        this.onClose()
      }
    },
    // tabs 的点击回调
    handleChangeTab(e: number) {
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
