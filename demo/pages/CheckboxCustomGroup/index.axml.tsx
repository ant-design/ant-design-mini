import { InternalData } from 'tsxml';
import AntCheckbox from '../../../src/Checkbox/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import utils from './index.sjs';

export default ({ options, value }: InternalData) => (
  <AntContainer title="自定义分组">
    {options.map((option) => (
      <AntList header={option.title}>
        {option.list.map((item) => (
          <AntListItem>
            <AntCheckbox
              data-value={item.value}
              checked={utils.indexOf(value, item.value) > -1}
              onChange="onChange"
            >
              {item.title}
            </AntCheckbox>
          </AntListItem>
        ))}
      </AntList>
    ))}
  </AntContainer>
);
