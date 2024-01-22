import {
  Component,
  InternalData,
  ScrollView,
  Slot,
  TSXMLProps,
  View,
} from 'tsxml';
import sjs from './index.sjs';
import { IPaginationProps } from './props';

export default (
  { className, style, fillColor, frontColor }: TSXMLProps<IPaginationProps>,
  { pageDeg, $id, supportSjs }: InternalData
) => (
  <Component>
    <View class={`ant-page-infinite ${className || ''}`} style={style || ''}>
      <ScrollView
        scroll-x={true}
        class="ant-page-infinite-content"
        id={`ant-pageInfinite${$id ? '-' + $id : ''}`}
        onScroll={supportSjs ? sjs.changeScollDistance : 'onScroll'}
      >
        <Slot></Slot>
      </ScrollView>
      <View class="ant-page-infinite-wrap">
        <View
          class="ant-page-infinite-area"
          style={fillColor ? 'background-color:' + fillColor : ''}
        >
          <View
            class="ant-page-infinite-move"
            style={`${
              frontColor ? 'background-color:' + frontColor : ''
            }; transform: translateX(${pageDeg}%);`}
          ></View>
        </View>
      </View>
    </View>
  </Component>
);
