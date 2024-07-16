import { InternalData, Page } from 'tsxml';
import AntActionSheet from '../../../src/ActionSheet/index.axml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({
  visible1,
  visible2,
  visible3,
  actions1,
  actions2,
  actions3,
}: InternalData) => (
  <Page>
    <AntContainer title="基础用法">
      <AntButton
        onTap="handleOpenBasic"
        inline={true}
        size="large"
        data-index="1"
      >
        基础用法
      </AntButton>
    </AntContainer>
    <AntContainer title="选项状态">
      <AntButton
        onTap="handleOpenBasic"
        inline={true}
        size="large"
        data-index="2"
      >
        危险状态&禁用状态
      </AntButton>
    </AntContainer>
    <AntContainer title="带注释及icon">
      <AntButton
        onTap="handleOpenBasic"
        inline={true}
        size="large"
        data-index="3"
      >
        带注释及icon
      </AntButton>
    </AntContainer>
    <AntActionSheet
      title="请选择你要进行的操作"
      visible={visible1}
      actions={actions1}
      data-index="1"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
    <AntActionSheet
      title="请选择你要进行的操作"
      visible={visible2}
      actions={actions2}
      data-index="2"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
    <AntActionSheet
      title="请选择你要进行的操作"
      visible={visible3}
      actions={actions3}
      data-index="3"
      onAction="handleAction"
      onClose="handleCloseBasic"
    />
  </Page>
);
