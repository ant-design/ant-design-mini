import { Page, View, InternalData, Text } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Progress from '../../../src/Progress/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({
  progress1,
  progress2,
  progress3,
  progress4,
}: InternalData) => (
  <Page>
    <Container title="控制进度">
      <Progress percent={progress1} />
      <View class="buttonwrapper">
        <AntButton
          size="small"
          inline
          style="margin-right: 16rpx"
          onTap="handleDelete"
        >
          减少
        </AntButton>
        <AntButton size="small" inline onTap="handleAdd">
          增加
        </AntButton>
      </View>
    </Container>

    <Container title="语义进度条">
      <Progress status="success" percent="100" />
      <Progress status="exception" percent="50" />
    </Container>

    <Container title="自定义进度条高度">
      <Progress percent={progress2} strokeWidth="15" />
    </Container>

    <Container title="自定义颜色样式">
      <Progress percent={progress4} trailColor="#FFCF9F" />
      <Progress percent={progress4} strokeColor="#FFCF9F" />
      <Progress percent={progress4} />
    </Container>

    <Container title="自定义长度">
      <Progress percent={progress4} style="width: 100%" />
      <Progress percent={progress4} style="width: 70%" />
      <Progress percent={progress4} style="width: 50%" />
    </Container>

    <Container title="自定义进度条指示器">
      <Progress percent={progress3}>
        <Text slot="indicator">{(progress3 / 100) * 200}步</Text>
      </Progress>
    </Container>
  </Page>
);
