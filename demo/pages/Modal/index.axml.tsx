import { Page, View, Image, InternalData } from 'tsxml';
import Modal from '../../../src/Modal/index.axml';
import Button from '../../../src/Button/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({
  basicVisible,
  withTitleVisible,
  basicTwoVisible,
  basicThreeVisible,
  focusOneVisible,
  focusTwoVisible,
  focusThreeVisible,
  customVisible,
  customBodyVisible,
}: InternalData) => (
  <Page>
    <Modal
      content="人在天边月上明"
      visible={basicVisible}
      onClose="handleClose"
      primaryButtonText="我知道了"
      onPrimaryButtonTap="handlePrimaryButtonTap"
    />
    <Modal
      title="带标题的弹窗"
      content="人在天边月上明"
      visible={withTitleVisible}
      onClose="handleClose"
      primaryButtonText="我知道了"
      onPrimaryButtonTap="handlePrimaryButtonTap"
    />
    <Modal
      title="确定删除吗？"
      content="删除后无法恢复"
      visible={basicTwoVisible}
      onClose="handleClose"
      primaryButtonText="确定"
      secondaryButtonText="取消"
      onPrimaryButtonTap="handlePrimaryButtonTap"
      onSecondaryButtonTap="handleSecondaryButtonTap"
    />
    <Modal
      title="标题"
      content="人在天边月上明"
      visible={basicThreeVisible}
      onClose="handleClose"
      primaryButtonText="主按钮"
      secondaryButtonText="更多"
      cancelButtonText="取消"
      onPrimaryButtonTap="handlePrimaryButtonTap"
      onSecondaryButtonTap="handleSecondaryButtonTap"
      onCancelButtonTap="handleSecondaryButtonTap"
    />
    <Modal
      title="强调模式"
      content="主操作按钮是Button，右上角可有关闭按钮，是用来强调让用户去注意到主操作"
      type="focus"
      visible={focusOneVisible}
      onClose="handleClose"
      primaryButtonText="我知道了"
      onPrimaryButtonTap="handlePrimaryButtonTap"
    />
    <Modal
      title="强调模式"
      content="主操作按钮是Button，右上角可有关闭按钮，是用来强调让用户去注意到主操作"
      type="focus"
      visible={focusTwoVisible}
      onClose="handleClose"
      primaryButtonText="我知道了"
      secondaryButtonText="辅助操作"
      onPrimaryButtonTap="handlePrimaryButtonTap"
      onSecondaryButtonTap="handleSecondaryButtonTap"
    />
    <Modal
      title="强调模式"
      content="主操作按钮是Button，右上角可有关闭按钮，是用来强调让用户去注意到主操作"
      type="focus"
      visible={focusThreeVisible}
      onClose="handleClose"
      primaryButtonText="我知道了"
      secondaryButtonText="辅助操作"
      cancelButtonText="取消"
      onPrimaryButtonTap="handlePrimaryButtonTap"
      onSecondaryButtonTap="handleSecondaryButtonTap"
      onCancelButtonTap="handleSecondaryButtonTap"
    />
    <Modal
      title="确定删除吗？"
      content="删除后无法恢复"
      visible={customVisible}
      onClose="handleClose"
      primaryButtonText="删除"
      primaryButtonStyle="color:red;"
      secondaryButtonText="取消"
      onPrimaryButtonTap="handlePrimaryButtonTap"
      onSecondaryButtonTap="handleSecondaryButtonTap"
    />
    <Modal visible={customBodyVisible} onClose="handleClose">
      <View class="body">
        <Image
          mode="scaleToFill"
          src="https://mdn.alipayobjects.com/huamei_yujk1o/afts/img/A*xYjqRJiKsvoAAAAAAAAAAAAADuaJAQ/original"
          class="bodyImg"
        />
        <View class="bodyAction">
          <Icon type="CloseCircleOutline" onTap="handleClose" />
        </View>
      </View>
    </Modal>
    <Container title="基础用法" className="list">
      <Button data-field="basicVisible" onTap="handleOpen">
        最简单的弹框
      </Button>
      <Button data-field="withTitleVisible" onTap="handleOpen">
        带有标题
      </Button>
      <Button data-field="basicTwoVisible" onTap="handleOpen">
        带辅助按钮
      </Button>
      <Button data-field="basicThreeVisible" onTap="handleOpen">
        带辅助和取消按钮
      </Button>
    </Container>
    <Container title="强调模式" className="list">
      <Button data-field="focusOneVisible" onTap="handleOpen">
        只有主按钮
      </Button>
      <Button data-field="focusTwoVisible" onTap="handleOpen">
        带辅助按钮
      </Button>
      <Button data-field="focusThreeVisible" onTap="handleOpen">
        带辅助和取消按钮
      </Button>
    </Container>
    <Container title="自定义" className="list">
      <Button data-field="customVisible" onTap="handleOpen">
        自定义按钮样式
      </Button>
      <Button data-field="customBodyVisible" onTap="handleOpen">
        完全自定义内容区
      </Button>
    </Container>
  </Page>
);
