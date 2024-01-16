import { InternalData, Page } from 'tsxml';
import ActionSheet from '../../../src/ActionSheet/index.axml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({
  visible1,
  visible2,
  visible3,
  actions1,
  actions2,
  actions3,
}: InternalData) => (
  <Page>
    <Container title="基础用法">
      <Button onTap="handleOpenBasic" inline={true} size="large" data-index="1">
        基础用法
      </Button>
    </Container>
    <Container title="选项状态">
      <Button onTap="handleOpenBasic" inline={true} size="large" data-index="2">
        危险状态&禁用状态
      </Button>
    </Container>
    <Container title="带注释及icon">
      <Button onTap="handleOpenBasic" inline={true} size="large" data-index="3">
        带注释及icon
      </Button>
    </Container>
    <ActionSheet
      title="请选择你要进行的操作"
      visible={visible1}
      actions={actions1}
      data-index="1"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
    <ActionSheet
      title="请选择你要进行的操作"
      visible={visible2}
      actions={actions2}
      data-index="2"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
    <ActionSheet
      title="请选择你要进行的操作"
      visible={visible3}
      actions={actions3}
      data-index="3"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
  </Page>
);
