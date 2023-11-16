import { Template, View, Text } from 'tsxml';

export default ({ taskDescription, a }) => (
  <View>
    <Template name="taskTpl">
      <View class="task-item">
        <Text class="desc">{taskDescription}</Text>
      </View>
    </Template>
    <Template is="taskTpl" data={{ taskDescription, a }}></Template>
  </View>
);
