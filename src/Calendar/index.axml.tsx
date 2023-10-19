import helper from './helper.sjs';
import scroll from './scroll.sjs';
import { ICalendarProps } from './props';
import {
  TSXMLProps,
  View,
  InternalData,
  Text,
  Slot,
  ScrollView,
  Block,
} from 'tsxml';

export default (
  { className, style }: TSXMLProps<ICalendarProps>,
  { markItems, elementSize, monthList, headerState }: InternalData
) => (
  <View class={`ant-calendar ${className ? className : ''}`} style={style}>
    <View class="ant-calendar-mark">
      {markItems.map((item, index) => (
        <View class={helper.getMarkCellClassName(index, markItems)}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
    {!!elementSize && (
      <View class="ant-calendar-sticky">
        <View class="ant-calendar-sticky-title">
          {/* #if ALIPAY */}
          <Slot name="calendarTitle">
            {/* #endif */}

            <View class="ant-calendar-title">
              {monthList[headerState].title}
            </View>
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      </View>
    )}
    <ScrollView
      scroll-y={true}
      class="ant-calendar-body"
      data-elementsize={elementSize}
      data-monthlist={monthList}
      onScroll={scroll.handleScroll}
      ref="handleRef"
    >
      {monthList.map((currentMonth) => (
        <View>
          <View class="ant-calendar-title-container">
            {/* #if ALIPAY */}

            <Slot name="calendarTitle">
              {/* #endif */}

              <View class="ant-calendar-title">{currentMonth.title}</View>
              {/* #if ALIPAY */}
            </Slot>
            {/* #endif */}
          </View>
          <View class="ant-calendar-cells">
            {currentMonth.cells.map((item, index) => (
              <Block>
                <View
                  class={helper.getClassName(item, index)}
                  data-time={item}
                  onTap="clickCell"
                >
                  <View class="ant-calendar-cell-container">
                    <View class="ant-calendar-cell-top">
                      {item.top && (
                        <Text
                          class={`ant-calendar-cell-top-text ${
                            item.top.className ? item.top.className : ''
                          }`}
                        >
                          {item.top.label}
                        </Text>
                      )}
                    </View>
                    <View class="ant-calendar-cell-center">{item.date}</View>
                    <View class="ant-calendar-cell-bottom">
                      {/* #if ALIPAY */}
                      <Slot name="cell-bottom" cell={item}>
                        {/* #endif */}
                        {item.bottom && (
                          <Text class={item.bottom.className}>
                            {item.bottom.label}
                          </Text>
                        )}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                </View>
                {index % 7 !== 6 && (
                  <View
                    class={helper.getSpaceClassName(index, currentMonth.cells)}
                  />
                )}
              </Block>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);
