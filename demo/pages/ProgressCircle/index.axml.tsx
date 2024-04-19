import { Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Progress from '../../../src/Progress/index.axml';

interface InternalData {
  percent1: number;
  percent2: number;
  percent3: number;
  percent5: number;
  handleDelete: string;
  handleAdd: string;
}

export default ({ percent1, percent2, percent3, percent5 }: InternalData) => (
  <Page>
    <Container title="默认进度条（有/无动画）">
      <View class="line2">
        <Progress type="circle" percent={percent1} />
        <Progress type="circle" percent={percent1} animation={false} />
      </View>
      <View class="buttonwrapper">
        <AntButton inline style="margin-right: 16rpx" onTap="handleDelete">
          减少
        </AntButton>
        <AntButton inline onTap="handleAdd">
          增加
        </AntButton>
      </View>
    </Container>

    <Container title="自定义进度条宽度">
      <View class="line2">
        <Progress type="circle" percent={percent2} strokeWidth={12} />
        <Progress type="circle" percent={percent2} strokeWidth={2} />
      </View>
    </Container>

    <Container title="自定义颜色">
      <View class="line2">
        <Progress type="circle" percent={percent3} strokeColor="#00B578" />
        <Progress type="circle" percent={percent3} strokeColor="#FF8F1F" />
      </View>
    </Container>

    <Container title="自定义提示文案">
      <View class="line2">
        <Progress type="circle" percent={percent5}>
          <View slot="indicator">{percent5}GB</View>
        </Progress>
        <Progress type="circle" percent={percent5}>
          <View slot="indicator">{percent5}步</View>
        </Progress>
      </View>
    </Container>

    <Container title="自定义大小">
      <View class="line2">
        <Progress type="circle" percent={percent5} width={80} />
        <Progress type="circle" percent={percent5} width={100} />
        <Progress type="circle" percent={percent5} width={120} />
      </View>
    </Container>
  </Page>
);
