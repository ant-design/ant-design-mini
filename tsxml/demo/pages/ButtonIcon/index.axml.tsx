import { Page } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <Container title="icon">
      <Button type="primary" icon="SmileOutline">
        Icon
      </Button>
      <Button type="default" icon="SmileOutline">
        Icon
      </Button>
      <Button type="text" icon="SmileOutline">
        Icon
      </Button>
      <Button type="primary" danger icon="ForbidFill">
        Icon
      </Button>
      <Button type="default" danger icon="ForbidFill">
        Icon
      </Button>
      <Button type="text" danger icon="ForbidFill">
        Icon
      </Button>
    </Container>
    <Container title="inline button">
      <Button type="primary" icon="SmileOutline" inline size="large">
        Icon
      </Button>
      <Button type="primary" icon="SmileOutline" inline size="medium">
        Icon
      </Button>
      <Button type="primary" icon="SmileOutline" inline size="small">
        Icon
      </Button>
    </Container>
    <Container title="inline danger icon">
      <Button type="primary" icon="ForbidFill" inline danger size="large">
        Icon
      </Button>
      <Button type="primary" icon="ForbidFill" inline danger size="medium">
        Icon
      </Button>
      <Button type="primary" icon="ForbidFill" inline danger size="small">
        Icon
      </Button>
    </Container>
    <Container title="loading icon">
      <Button
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        inline
        loading
      >
        loading
      </Button>
      <Button
        type="primary"
        icon="ForbidFill"
        onTap="handleTap"
        inline
        danger
        loading
      >
        loading
      </Button>
      <Button type="primary" icon="SmileOutline" onTap="handleTap" loading>
        loading
      </Button>
    </Container>
    <Container title="disabled icon">
      <Button
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        inline
        disabled
      >
        disabled
      </Button>
      <Button
        type="primary"
        icon="ForbidFill"
        onTap="handleTap"
        inline
        danger
        disabled
      >
        disabled
      </Button>
      <Button type="primary" icon="SmileOutline" onTap="handleTap" disabled>
        disabled
      </Button>
    </Container>
  </Page>
);
