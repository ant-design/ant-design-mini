import { InternalData } from 'tsxml';
import Checkbox from '../../../src/Checkbox/index.axml';
import Container from '../../../src/Container/index.axml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';

export default ({ options, value }: InternalData) => (
  <Container title="自定义分组">
    {options.map((option) => (
      <List header={option.title}>
        {option.list.map((item) => (
          <ListItem>
            <Checkbox
              data-value={item.value}
              checked={value.indexOf(item.value) > -1}
              onChange="onChange"
            >
              {item.title}
            </Checkbox>
          </ListItem>
        ))}
      </List>
    ))}
  </Container>
);
