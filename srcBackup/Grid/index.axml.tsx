import { Component, Slot, TSXMLProps, View } from 'tsxml';
import ImageIcon from '../ImageIcon/index.axml';
import AntPagination from '../Pagination/index.axml';
import sjs from './index.sjs';
import { IGridProps } from './props';

export default ({
  className,
  style,
  iconStyle,
  iconSize,
  gridItemLayout,
  mode,
  columns,
  items,
  showDivider,
  paginationFillColor,
  paginationFrontColor,
}: TSXMLProps<IGridProps>) => (
  <Component>
    {mode === 'default' ? (
      <View
        class={`ant-grid ant-grid-columns-${columns} ant-grid-${mode} ${
          className || ''
        }`}
        style={style || ''}
      >
        {items.map((item, index) => (
          <View
            data-item={item}
            class={`ant-grid-item ant-grid-item-${gridItemLayout} ${
              sjs.checkNeedVerticalSpace(items.length, index, columns)
                ? 'ant-grid-item-vertical-space'
                : ''
            } ant-grid-item-columns-${columns} ${
              sjs.checkShowSplitLine(
                index,
                items.length,
                columns,
                mode,
                showDivider
              )
                ? 'ant-grid-item-line'
                : ''
            }`}
            onTap="onTap"
            onFirstAppear="onFirstAppear"
          >
            <View
              class={`ant-grid-item-icon ant-grid-item-icon-${
                item.iconStyle || iconStyle
              }`}
            >
              {/* #if ALIPAY */}
              <Slot name="icon" value={item} index={index}>
                {/* #endif */}
                <ImageIcon
                  image={item.icon}
                  className="ant-grid-item-icon"
                  style={
                    iconSize
                      ? 'width:' +
                        iconSize +
                        'px;height:' +
                        iconSize +
                        'px;font-size:' +
                        iconSize +
                        'px'
                      : ''
                  }
                />
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
            <View class="ant-grid-item-title">
              {/* #if ALIPAY */}
              <Slot name="title" value={item} index={index}>
                {/* #endif */}
                {item.title}
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
            <View class="ant-grid-item-description">
              {/* #if ALIPAY */}
              <Slot name="description" value={item} index={index}>
                {/* #endif */}
                {item.description}
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </View>
        ))}
      </View>
    ) : (
      mode === 'scroll' && (
        <AntPagination
          fillColor={paginationFillColor}
          frontColor={paginationFrontColor}
          className={className || ''}
          style={style || ''}
        >
          <View class={`ant-grid ant-grid-${mode}`}>
            {items.map((item, index) => (
              <View
                data-item={item}
                class={`ant-grid-item ant-grid-item-${gridItemLayout} ant-grid-item-columns-scroll ${
                  sjs.checkShowSplitLine(
                    index,
                    items.length,
                    columns,
                    mode,
                    showDivider
                  )
                    ? 'ant-grid-item-line'
                    : ''
                }`}
                onTap="onTap"
                onFirstAppear="onFirstAppear"
              >
                <View
                  class={`ant-grid-item-icon ant-grid-item-icon-${
                    item.iconStyle || iconStyle
                  }`}
                >
                  {/* #if ALIPAY */}
                  <Slot name="icon" value={item} index={index}>
                    {/* #endif */}
                    <ImageIcon
                      image={item.icon}
                      className="ant-grid-item-icon"
                      style={
                        iconSize
                          ? 'width:' +
                            iconSize +
                            'px;height:' +
                            iconSize +
                            'px;font-size:' +
                            iconSize +
                            'px'
                          : ''
                      }
                    />
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
                <View class="ant-grid-item-title">
                  {/* #if ALIPAY */}
                  <Slot name="title" value={item} index={index}>
                    {/* #endif */}
                    {item.title}
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
                <View class="ant-grid-item-description">
                  {/* #if ALIPAY */}
                  <Slot name="description" value={item} index={index}>
                    {/* #endif */}
                    {item.description}
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
              </View>
            ))}
          </View>
        </AntPagination>
      )
    )}
  </Component>
);
