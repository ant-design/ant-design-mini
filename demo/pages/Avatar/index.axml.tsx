import { InternalData, Component } from 'tsxml';
import AntAvatar from '../../../src/Avatar/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';

export default ({ images, sizes, item }: InternalData) => (
  <Component>
    <AntContainer title="基础用法-四种尺寸">
      {images.map((item) => (
        <AntAvatar src={item} className="avatar" />
      ))}
    </AntContainer>

    <AntContainer title="占位头像">
      <AntAvatar size={item} />
    </AntContainer>

    <AntContainer title="不同大小">
      {sizes.map((item) => (
        <AntAvatar key={item} size={item} src={images[0]} className="avatar" />
      ))}
    </AntContainer>

    <AntContainer title="配合列表使用" className="container">
      <AntListItem brief="Deserunt dolor ea eaque eos">
        Novalee Spicer
        <AntAvatar slot="image" src={images[0]} />
      </AntListItem>
    </AntContainer>

    <AntContainer title="自定义">
      <AntAvatar size={item} src={images[0]} className="avatar-custom" />
    </AntContainer>
  </Component>
);
