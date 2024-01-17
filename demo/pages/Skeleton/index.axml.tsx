import { Page, View } from 'tsxml';
import Avatar from '../../../src/Avatar/index.axml';
import Container from '../../../src/Container/index.axml';
import SkeletonAvatar from '../../../src/Skeleton/Avatar/index.axml';
import SkeletonButton from '../../../src/Skeleton/Button/index.axml';
import Skeleton from '../../../src/Skeleton/index.axml';
import SkeletonInput from '../../../src/Skeleton/Input/index.axml';
import SkeletonParagraph from '../../../src/Skeleton/Paragraph/index.axml';
import Switch from '../../../src/Switch/index.axml';

export default ({ showLoading, paragraph }) => (
  <Page>
    <Container title="基础用法">
      <Skeleton />
    </Container>

    <Container title="有动画的骨架屏">
      <Skeleton animate={true} />
    </Container>

    <Container title="带avatar">
      <Skeleton avatar={true} />
    </Container>

    <Container title="自定义组合">
      <View class="list">
        <SkeletonAvatar className="custom" />
        <SkeletonParagraph className="custom" rows={1} />
        <SkeletonInput className="custom" />
        <SkeletonInput className="custom" />
        <SkeletonInput className="custom" />
        <SkeletonButton className="custom" size="small" />
      </View>
    </Container>

    <Container title="复杂组合">
      <Skeleton
        loading={showLoading}
        title={false}
        avatar={true}
        paragraph={paragraph}
      >
        <View class="container">
          <Avatar src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
          <View class="content">
            We supply a series of design principles, practical patterns and high
            quality design resources, to help people create their product
            prototypes beautifully and efficiently.
          </View>
        </View>
      </Skeleton>
      <View slot="headerRight">
        显示骨架
        <Switch
          style="margin-left: 8px"
          checked={showLoading}
          onChange="handleToggleShowLoading"
        />
      </View>
    </Container>
  </Page>
);
