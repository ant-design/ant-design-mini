import { Text, View } from 'tsxml';

interface Props {
  todoList: string[];
}

export default ({ todoList }: Props) => (
  <View class="ant-calendar">
    {todoList.map((task, taskIndex) => (
      <Text data-item-id={taskIndex}>
        {taskIndex} {task}
      </Text>
    ))}
    <test loading />
  </View>
);
