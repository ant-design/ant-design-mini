import { InternalData, Component } from 'tsxml';
import Avatar from '../../../src/Avatar/index.axml';
import Container from '../../../src/Container/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';

export default ({ images, sizes, item }: InternalData) => (
  <Component>
    <Container title="基础用法-四种尺寸">
      {images.map((item) => (
        <Avatar src={item} className="avatar" />
      ))}
    </Container>

    <Container title="占位头像">
      <Avatar size={item} />
    </Container>

    <Container title="不同大小">
      {sizes.map((item) => (
        <Avatar key={item} size={item} src={images[0]} className="avatar" />
      ))}
    </Container>

    <Container title="配合列表使用" className="container">
      <ListItem brief="Deserunt dolor ea eaque eos">
        Novalee Spicer
        <Avatar slot="image" src={images[0]} />
      </ListItem>
    </Container>

    <Container title="自定义">
      <Avatar size={item} src={images[0]} className="avatar-custom" />
    </Container>
  </Component>
);
