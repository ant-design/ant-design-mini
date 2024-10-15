import { Table as AntdTable } from 'antd';
import React, { useContext, useMemo } from 'react';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import './index.less';

interface IProps {
  alipayContent: string;
  wechatContent?: string;
}
// 解析markdown语法，并适配 Antd Table
function parseMarkdownToAntdTable(markdown: string) {
  const lines = markdown.trim().split('\n');

  // 获取表头信息
  const headers = lines[0]
    .split('|')
    .map((header) => header.trim())
    .filter(Boolean);

  // 创建 columns 数组
  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: index.toString(),
    key: index.toString(),
  }));

  // 创建 dataSource 数组
  const dataSource = lines.slice(2).map((line, rowIndex) => {
    const cells = line.split('|').map((cell) => cell.trim());
    const row = { key: rowIndex.toString() };
    cells.forEach((cell, index) => {
      row[(index - 1).toString()] = cell;
    });
    return row;
  });

  return { columns, dataSource };
}

// 将 -$u 后面的字母改为大写
function capitalizeAfterSubU(text) {
  return text.replace(/-\$u(\w)/g, (_, letter) => letter.toUpperCase());
}

const Table: React.FC<IProps> = ({ alipayContent, wechatContent }) => {
  const { platform } = useContext<SiteContextProps>(SiteContext);

  const mergeContent = { alipayContent, wechatContent };

  const content = useMemo(
    () => mergeContent?.[`${platform}Content`] || '',
    [alipayContent, wechatContent, platform]
  );

  const { columns, dataSource } = useMemo(
    () => parseMarkdownToAntdTable(capitalizeAfterSubU(content)),
    [content]
  );

  console.log(content, columns, dataSource);
  if (!content) {
    return null;
  }

  return (
    <AntdTable
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    ></AntdTable>
  );
};

export default Table;
