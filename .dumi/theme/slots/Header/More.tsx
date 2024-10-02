import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { FormattedMessage } from 'dumi';
import React from 'react';
import useLocaleValue from '../../hooks/useLocaleValue';
import { IMoreLink } from '../../types';

export const getMoreLinksGroup = (moreLinks: IMoreLink[]): MenuProps['items'] => {
  return (moreLinks ?? []).map((item, index) => ({
    label: (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.text}
      </a>
    ),
    key: index
  }));
};

const More: React.FC = () => {
  const moreLinks = useLocaleValue('moreLinks') || [];
  return Array.isArray(moreLinks) && moreLinks.length > 0 ? (
    <Dropdown menu={{ items: getMoreLinksGroup(moreLinks) }} placement="bottomRight">
      <Button size="small">
        <FormattedMessage id="app.header.menu.more" />
        <DownOutlined />
      </Button>
    </Dropdown>
  ) : null;
};

export default More;
