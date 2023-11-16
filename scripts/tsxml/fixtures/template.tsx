import { Template, View, Text } from 'tsxml';

export default ({ taskDescription, a }) => (
  <View>
    <Text value={[1, 2]} slot="123" slot-scope="props"></Text>
    <Template name="taskTpl">
      <View class="task-item">
        <Text class="desc">{taskDescription}</Text>
      </View>
    </Template>
    <Template is="taskTpl" data={{ taskDescription, a }}></Template>
  </View>
);
