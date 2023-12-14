import Selector from '../../../src/Selector/index.axml';
import Container from '../../../src/Container/index.axml';
import Button from '../../../src/Button/index.axml';

export default ({
  items1,
  items2,
  items3,
  defaultValue,
  value,
  multiple,
  minSelectedCount,
  disabled,
}) => (
  <Component>
    <Container title="单选">
      <Selector options={items1} />
    </Container>

    <Container title="单选-选项带有副标题">
      <Selector defaultValue="2" options={items2} />
    </Container>

    <Container title="多选">
      <Selector
        defaultValue={defaultValue}
        options={items1}
        multiple={multiple}
      />
    </Container>

    <Container title="全禁用">
      <Selector
        value={value}
        options={items1}
        disabled={disabled}
        multiple={multiple}
      />
    </Container>

    <Container title="部分禁用">
      <Selector
        defaultValue={defaultValue}
        options={items3}
        multiple={multiple}
      />
    </Container>

    <Container title="受控模式">
      <Selector value={value} options={items1} onChange="handleChange" />
      <Button inlineSize="larger" onTap="handleChangeValue">
        改变选中值为选项三
      </Button>
    </Container>

    <Container title="单选-不允许清空">
      <Selector
        defaultValue="11"
        minSelectedCount={minSelectedCount}
        onSelectMin="onSelectMin"
        options={items1}
      />
    </Container>
  </Component>
);
