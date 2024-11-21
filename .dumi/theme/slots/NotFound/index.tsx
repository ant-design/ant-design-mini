import { HomeOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { FormattedMessage, Link } from 'dumi';
import React from 'react';

export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const NotFoundPage: React.FC<NotFoundProps> = () => {
  return (
    <div id="page-404">
      <section>
        <Result
          status="404"
          title="404"
          subTitle={<FormattedMessage id="app.not-found.subTitle" />}
          extra={
            <Link to="/">
              <Button type="primary" icon={<HomeOutlined />}>
                {' '}
                <FormattedMessage id="app.not-found.back-home" />
              </Button>
            </Link>
          }
        />
      </section>
    </div>
  );
};

export default NotFoundPage;
