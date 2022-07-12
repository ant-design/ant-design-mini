import { treeSelectDefaultProps, TreeSelectOption, TreeSelectValue } from './props';

Component({
  props: treeSelectDefaultProps,
  data: {
    selected: [],
    levelList: []
  },
  didMount() {
    this.updateOptions(this.props.options, this.props.value);
  },
  didUpdate(prevProps) {
    if (prevProps.options !== this.props.options || prevProps.value !== this.props.value) {
      this.updateOptions(this.props.options, this.props.value);
    }
  },
  methods: {
    updateOptions(options = [], defaultSelected = []) {
      const selected = defaultSelected.map((s) => s);
      const newSelectedList: TreeSelectValue[] = [];

      while (selected.length < 3) {
        // 补全3个选项
        selected.push(null);
      }
      const levelList: TreeSelectOption[][] = [];
      let currentOptions = options;

      selected.forEach((value, index) => {
        const level: TreeSelectOption[] = [];
        let foundOption: TreeSelectOption | undefined = undefined;

        currentOptions.forEach((option) => {
          if (option.value === value) {
            foundOption = option;
          }

          level.push({
            label: option.label,
            value: option.value,
            disabled: option.disabled,
          });
        });

        if (foundOption === undefined && index < 2) {
          // 当前级找不到所选， 则默认选取第一个
          const first = currentOptions?.[0];
          foundOption = first;
        }

        if (foundOption) {
          newSelectedList.push(foundOption.value);
          currentOptions = foundOption.children ?? [];

          levelList.push(level);
        } else if (level.length) {
          newSelectedList.push('')
          levelList.push(level);
        }
      })

      this.setData({
        levelList,
        selected: newSelectedList,
      });
    },

    handleOptionTap(e) {
      const { value, level } = e.currentTarget.dataset;
      const { selected, levelList } = this.data

      // 如果当前点击的不是最后一级菜单且点击的选项就是当前选中的选项，则不进行操作
      if (selected[level] === value && (level < levelList.length - 1)) return;

      if (value !== undefined && level !== undefined) {
        const root = {
          label: '_root_',
          value: '_root_',
          children: this.props.options
            ? (this.props.options as TreeSelectOption[])
            : [],
        };

        const propertiesMap = new Map<
          TreeSelectOption,
          { parent: TreeSelectOption | null; level: number }
        >();

        const stack: TreeSelectOption[] = [];

        stack.push(root);
        propertiesMap.set(root, { parent: null, level: -1 });


        // FIX_ME 在存在大量数据的时候, 这里会有性能问题， 可以考
        // 虑在 props 中的 options 变动的时候, 将数据缓存在一个字
        // 典中，这样查找起来会比较快;

        // 通过搜索树 + 回溯 找到点击的节点和它的所有的父节点
        while (stack.length > 0) {
          const node = stack.pop();

          const level = propertiesMap.get(node).level;


          if (value === node.value && level === level && node !== root) {
            if (node.disabled) return;

            const selectedList: TreeSelectOption[] = [];

            selectedList.unshift(node);

            let propertiesNode = propertiesMap.get(node);

            while (propertiesNode.parent !== null) {
              selectedList.unshift(propertiesNode.parent);
              propertiesNode = propertiesMap.get(propertiesNode.parent);
            }

            // remove root node
            selectedList.shift();

            this.props.onChange?.(selectedList.map(n => n.value), selectedList);

            this.updateOptions(
              this.props.options as TreeSelectOption[],
              selectedList.map((n) => n.value)
            );

            break;
          }

          if (node.children?.length > 0) {
            for (const child of node.children) {
              stack.push(child);
              propertiesMap.set(child, { parent: node, level: level + 1 });
            }
          }
        }
      }
    },
  },
});
