import get from 'lodash/get';
import { CascaderDefaultProps } from './props';

const inputData = [
  {
    title: '浙江',
    value: '浙江',
    children: [
      {
        title: '杭州',
        value: '杭州',
        children: [
          {
            title: '西湖区',
            value: '西湖区',
          },
          {
            title: '上城区',
            value: '上城区',
          },
          {
            title: '余杭区',
            value: '余杭区',
            disabled: true,
          },
        ],
      },
      {
        title: '温州',
        value: '温州',
        children: [
          {
            title: '鹿城区',
            value: '鹿城区',
          },
          {
            title: '龙湾区',
            value: '龙湾区',
            disabled: true,
          },
          {
            title: '瓯海区',
            value: '瓯海区',
          },
        ],
      },
      {
        title: '宁波',
        value: '宁波',
        children: [
          {
            title: '海曙区',
            value: '海曙区',
          },
          {
            title: '江北区',
            value: '江北区',
          },
          {
            title: '镇海区',
            value: '镇海区',
          },
        ],
      },
    ],
  },
  {
    title: '安徽',
    value: '安徽',
    children: [
      {
        title: '合肥',
        value: '合肥',
        children: [
          {
            title: '包河区',
            value: '包河区',
          },
          {
            title: '蜀山区',
            value: '蜀山区',
          },
          {
            title: '瑶海区',
            value: '瑶海区',
          },
        ],
      },
      {
        title: '芜湖',
        value: '芜湖',
        children: [
          {
            title: '镜湖区',
            value: '镜湖区',
          },
          {
            title: '弋江区',
            value: '弋江区',
          },
          {
            title: '湾沚区',
            value: '湾沚区',
          },
        ],
      },
    ],
  },
  {
    title: '江苏',
    value: '江苏',
    children: [
      {
        title: '南京',
        value: '南京',
        children: [
          {
            title: '玄武区',
            value: '玄武区',
          },
          {
            title: '秦淮区',
            value: '秦淮区',
          },
          {
            title: '建邺区',
            value: '建邺区',
          },
        ],
      },
      {
        title: '苏州',
        value: '苏州',
        children: [
          {
            title: '虎丘区',
            value: '虎丘区',
          },
          {
            title: '吴中区',
            value: '吴中区',
          },
          {
            title: '相城区',
            value: '相城区',
          },
        ],
      },
    ],
  },
];

Component({
  props: CascaderDefaultProps,
  methods: {
    onClose() {
      const { onClose = () => {} } = this.props;
      onClose();
    },
    onChecklistChange(value, completeValue) {
      const { setps, setpsValue, checklistOptions } = this.data;
      if (value) {
        // 选中
        if (this.data.lastSetps) {
          this.setData({
            setps: setps,
            setpsValue: [...setpsValue.slice(0, -1), completeValue],
            lastSetps: false,
          });
        } else {
          this.setData({
            setps: setps + 1,
            setpsValue: [...setpsValue, completeValue],
          });
        }
        const nextChecklistOption = checklistOptions.find(
          (item) => item.value === value
        ).children;
        if (!nextChecklistOption || nextChecklistOption.length === 0) {
          // 当下一次没有选项时，退出
          this.setData({ lastSetps: true });
          return;
        }
        // 记录上一次的选项列表
        this.setData({
          checklistOptions: nextChecklistOption,
        });
      } else {
        // 取消选中
        this.setData({
          setpsValue: setpsValue.slice(0, -1),
          lastSetps: false,
        });
      }
    },
  },
  data: {
    setps: -1, // 步骤索引
    setpsValue: [], // 每步的已选值
    checklistOptions: inputData, // 当前的选项列表
    lastSetps: false,
  },
});
