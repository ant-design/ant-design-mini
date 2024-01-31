import { Text, View, TSXMLProps, InternalData } from 'tsxml';

interface Props {
  todoList: { id: string; content: string }[];
}

export default (
  { todoList }: TSXMLProps<Props>,
  { mixin, item, progress3 }: InternalData
) => (
  <View class="ant-calendar">
    {todoList.map((task, taskIndex) => (
      <Text
        hidden={!mixin.value}
        key={`a-${task.id}`}
        data-item-id={taskIndex}
        data-num={20}
      >
        {taskIndex} {task}
      </Text>
    ))}
    {todoList.map((task, taskIndex) => (
      <Text
        hidden={!mixin.value}
        key={'todoList'}
        data-item-id={taskIndex}
        data-num={20}
      >
        {taskIndex} {task}
      </Text>
    ))}
    <test loading />
    <Text>{(progress3 / 100) * 200}步</Text>
    <view slot="label" slot-scope="item">
      {item.index + 1} {item.value.label}
    </view>
  </View>
);
