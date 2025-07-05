import equal from 'fast-deep-equal';
import filter from 'lodash.filter';
import get from 'lodash.get';
import reduce from 'lodash.reduce';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { Component, getValueFromProps } from '../_util/simply';
import { RenderRuleProps, TableDefaultProps } from './props';

const rpx2px = (rpx, windowWidth = 375) => {
  let numRpx = rpx;
  if (typeof rpx === 'string' && rpx.slice(-3) === 'rpx') {
    numRpx = parseFloat(rpx.slice(0, -3));
  }
  const px = (numRpx / 750) * windowWidth;
  return px;
};

const defaultWidth = 150;

Component({
  props: TableDefaultProps,
  data: {
    widthPx: 0,
    list: [],
    showFixedShadow: false,
  },
  sysInfo: Promise.resolve({} as any),
  methods: {
    async init() {
      const [columns, dataSource] = getValueFromProps(this, [
        'columns',
        'dataSource',
      ]);
      const { windowWidth } = await this.getSysInfo();
      const width = reduce(
        columns,
        (sum, cur) => {
          return sum + cur.width;
        },
        0
      );
      const columnsData = this.renderColumns(columns, windowWidth);
      const rowsData = this.renderRows(dataSource, windowWidth);
      this.setData({
        widthPx: rpx2px(width, windowWidth),
        list: [...columnsData, ...rowsData],
      });
    },
    renderColumns(columns, windowWidth, renderRule: RenderRuleProps = {}) {
      const { key, sorterStatus } = renderRule;
      return [
        {
          type: 'columns',
          key: 'columns_0',
          value: columns.map((v) => ({
            ...v,
            sorterStatus: key === v.key ? sorterStatus : 'normal',
            widthPx: rpx2px(v.width || defaultWidth, windowWidth),
          })),
        },
      ];
    },
    renderRows(dataSource, windowWidth, renderRule: RenderRuleProps = {}) {
      const columns = getValueFromProps(this, 'columns');
      const rowsData = dataSource.map((v, i) => {
        return {
          type: 'rows',
          key: `rows_${i}`,
          index: i,
          value: columns.map((val, idx) => ({
            ...val,
            key: val.key,
            index: idx,
            dataIndex: val.dataIndex,
            value: v[val.dataIndex],
            cellValue: val.render ? val.render(v[val.dataIndex], v, i) : v[val.dataIndex],
            textAlignRight: v.textAlignRight || val.textAlignRight,
            rowsData: v,
            widthPx: rpx2px(val.width || defaultWidth, windowWidth),
            fixed: val.fixed,
            ellipsisRow: val.ellipsisRow,
          })),
        };
      });

      const { key, sorter, sorterStatus } = renderRule;
      // 排序返回
      if (sorter && sorterStatus !== 'normal') {
        return rowsData.sort((a, b) => {
          const aValue = filter(a.value, { key })[0].value;
          const bValue = filter(b.value, { key })[0].value;
          if (sorterStatus === 'forward') {
            return aValue - bValue;
          }
          return bValue - aValue;
        });
      }

      // 默认返回
      return rowsData;
    },
    async handleSort(e) {
      const [columns, dataSource] = getValueFromProps(this, [
        'columns',
        'dataSource',
      ]);
      const { key, sorter, sorterStatus } = get(
        e,
        'currentTarget.dataset.item'
      );
      const filterData = filter(columns, { key });
      const onSort = filterData && filterData[0] && filterData[0].onSort;
      const { windowWidth } = await this.getSysInfo();
      const type2status = {
        // 默认时点击就正序
        normal: 'forward',
        // 正序时点击就倒序
        forward: 'reverse',
        // 倒序时点击就默认
        reverse: 'normal',
      };
      const renderRule = {
        key,
        sorter,
        sorterStatus: type2status[sorterStatus],
      };

      const columnsData = this.renderColumns(columns, windowWidth, renderRule);
      let rowsData = [];
      if (onSort) {
        const newDataSource = await onSort(renderRule.sorterStatus);
        rowsData = this.renderRows(newDataSource, windowWidth);
      } else {
        rowsData = this.renderRows(dataSource, windowWidth, renderRule);
      }
      this.setData({
        list: [...columnsData, ...rowsData],
      });
    },
    handleTouchMove() {
      this.setData({
        showFixedShadow: true,
      });
    },
    handleScrollToUpper() {
      this.setData({
        showFixedShadow: false,
      });
    },
    async getSysInfo() {
      if (this.sysInfo) return this.sysInfo;
      this.sysInfo = getSystemInfo();
      return this.sysInfo;
    },
  },
  /// #if ALIPAY || ALIPAYNATIVE
  onInit() {
    this.init();
  },
  didUpdate(prevProps) {
    const { dataSource: prevDataSource, columns: prevColumns } = prevProps;
    const [columns, dataSource] = getValueFromProps(this, [
      'columns',
      'dataSource',
    ]);

    if (!equal(prevDataSource, dataSource) || !equal(prevColumns, columns)) {
      this.init();
    }
  },
  /// #endif
  /// #if WECHAT
  created() {
    this.init();
  },
  observers: {
    'dataSource': function () {
      this.init();
    },
    'columns': function () {
      this.init();
    },
  },
  /// #endif
});
