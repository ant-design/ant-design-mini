import { Text, View, TSXMLProps, InternalData } from 'tsxml';

interface Props {
  todoList: { id: string; content: string }[];
}

export default (
  { todoList }: TSXMLProps<Props>,
  { mixin, item }: InternalData
) => (
  <View class="ant-calendar">
    {todoList.map((task, taskIndex) => (
      <Text
        hidden={!mixin.value}
        key={task.id}
        data-item-id={taskIndex}
        data-num={20}
      >
        {taskIndex} {task}
      </Text>
    ))}
    <test loading />

    <view slot="label" slot-scope="item">
      {item.index + 1} {item.value.label}
    </view>
  </View>
);
