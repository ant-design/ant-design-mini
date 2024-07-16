import { Page } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <AntContainer title="icon">
      <AntButton type="primary" icon="SmileOutline">
        Icon
      </AntButton>
      <AntButton type="default" icon="SmileOutline">
        Icon
      </AntButton>
      <AntButton type="text" icon="SmileOutline">
        Icon
      </AntButton>
      <AntButton type="primary" danger icon="ForbidFill">
        Icon
      </AntButton>
      <AntButton type="default" danger icon="ForbidFill">
        Icon
      </AntButton>
      <AntButton type="text" danger icon="ForbidFill">
        Icon
      </AntButton>
    </AntContainer>
    <AntContainer title="inline button">
      <AntButton type="primary" icon="SmileOutline" inline size="large">
        Icon
      </AntButton>
      <AntButton type="primary" icon="SmileOutline" inline size="medium">
        Icon
      </AntButton>
      <AntButton type="primary" icon="SmileOutline" inline size="small">
        Icon
      </AntButton>
    </AntContainer>
    <AntContainer title="inline danger icon">
      <AntButton type="primary" icon="ForbidFill" inline danger size="large">
        Icon
      </AntButton>
      <AntButton type="primary" icon="ForbidFill" inline danger size="medium">
        Icon
      </AntButton>
      <AntButton type="primary" icon="ForbidFill" inline danger size="small">
        Icon
      </AntButton>
    </AntContainer>
    <AntContainer title="loading icon">
      <AntButton
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        inline
        loading
      >
        loading
      </AntButton>
      <AntButton
        type="primary"
        icon="ForbidFill"
        onTap="handleTap"
        inline
        danger
        loading
      >
        loading
      </AntButton>
      <AntButton type="primary" icon="SmileOutline" onTap="handleTap" loading>
        loading
      </AntButton>
    </AntContainer>
    <AntContainer title="disabled icon">
      <AntButton
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        inline
        disabled
      >
        disabled
      </AntButton>
      <AntButton
        type="primary"
        icon="ForbidFill"
        onTap="handleTap"
        inline
        danger
        disabled
      >
        disabled
      </AntButton>
      <AntButton type="primary" icon="SmileOutline" onTap="handleTap" disabled>
        disabled
      </AntButton>
    </AntContainer>
  </Page>
);
