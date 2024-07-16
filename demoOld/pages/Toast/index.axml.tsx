import { InternalData, Page } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntToast from '../../../src/Toast/index.axml';

export default ({
  toast1Show,
  toast2Show,
  toast3Show,
  toast4Show,
  toast5Show,
  toast6Show,
  toast7Show,
  toast8Show,
  toast9Show,
}: InternalData) => (
  <Page>
    <AntContainer title="基础使用">
      <AntButton
        className="button"
        inline={true}
        type="primary"
        data-index="1"
        onTap="handleShowToast"
      >
        简短文字
      </AntButton>
      <AntButton
        className="button"
        inline={true}
        data-index="4"
        onTap="handleShowToast"
      >
        过长文字
      </AntButton>
    </AntContainer>

    <AntContainer title="带有图标">
      <AntButton
        className="button"
        inline={true}
        type="primary"
        data-index="7"
        onTap="handleShowToast"
      >
        成功提示
      </AntButton>
      <AntButton
        className="button"
        inline={true}
        data-index="8"
        onTap="handleShowToast"
      >
        失败提示
      </AntButton>
      <AntButton
        className="button"
        inline={true}
        data-index="9"
        onTap="handleShowToast"
      >
        警告提示
      </AntButton>
      <AntButton
        className="button"
        inline={true}
        data-index="2"
        onTap="handleShowToast"
      >
        自定义图标
      </AntButton>
      <AntButton
        className="button"
        inline={true}
        data-index="5"
        onTap="handleShowToast"
      >
        自定义图片
      </AntButton>

      <AntButton
        className="button"
        inline={true}
        data-index="6"
        onTap="handleShowToast"
      >
        加载态
      </AntButton>
    </AntContainer>

    <AntContainer title="延迟关闭">
      <AntButton
        className="button"
        inline={true}
        type="primary"
        data-index="3"
        onTap="handleShowToast"
      >
        提示持续3s
      </AntButton>
    </AntContainer>

    <AntToast
      content="最少字符"
      visible={toast1Show}
      duration={0}
      showMask={true}
      maskCloseable={true}
      onClose="handleCloseToast"
      data-index="1"
    />

    <AntToast
      content="最长文案不超过2行, 最多可以显示24个字符"
      visible={toast4Show}
      data-index="4"
      duration={0}
      showMask={true}
      maskCloseable={true}
      onClose="handleCloseToast"
    />

    <AntToast
      content="欢迎使用新版本"
      icon="LikeOutline"
      visible={toast2Show}
      duration={0}
      showMask={true}
      maskCloseable={true}
      onClose="handleCloseToast"
      data-index="2"
      className="toastWrapper"
    />

    <AntToast
      content="自定义图片"
      image="https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ"
      visible={toast5Show}
      duration={0}
      showMask={true}
      maskCloseable={true}
      onClose="handleCloseToast"
      data-index="5"
    />

    <AntToast
      content="这个提示持续时间3s"
      visible={toast3Show}
      duration={3000}
      data-index="3"
      onClose="handleCloseToast"
      showMask={true}
      maskCloseable={true}
    />

    <AntToast
      content="加载状态"
      visible={toast6Show}
      data-index="6"
      type="loading"
      onClose="handleCloseToast"
      showMask={true}
      duration={0}
      maskCloseable={true}
    />

    <AntToast
      content="操作成功"
      visible={toast7Show}
      data-index="7"
      type="success"
      onClose="handleCloseToast"
      showMask={true}
      duration={0}
      maskCloseable={true}
    />

    <AntToast
      content="失败提示"
      visible={toast8Show}
      data-index="8"
      type="error"
      onClose="handleCloseToast"
      showMask={true}
      duration={0}
      maskCloseable={true}
    />

    <AntToast
      content="警示信息"
      visible={toast9Show}
      data-index="9"
      type="warning"
      onClose="handleCloseToast"
      showMask={true}
      duration={0}
      maskCloseable={true}
    />
  </Page>
);
