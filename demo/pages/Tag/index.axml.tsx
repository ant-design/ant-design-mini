import { Component, View } from 'tsxml';
import AntTag from '../../../src/Tag/index.axml';

export default () => (
  <Component>
    <container title="基础用法">
      <AntTag>标签</AntTag>
    </container>
    <container title="语义标签">
      <View class="tag-list">
        <AntTag className="myTag">default</AntTag>
        <AntTag className="myTag" color="success">
          success
        </AntTag>
        <AntTag className="myTag" color="warning">
          warning
        </AntTag>
        <AntTag className="myTag" color="danger">
          danger
        </AntTag>
      </View>
    </container>
    <container title="填充模式">
      <View class="tag-list">
        <AntTag className="myTag" type="fill">
          fill
        </AntTag>
        <AntTag className="myTag" type="outline">
          outline
        </AntTag>
        <AntTag className="myTag" type="fill-light">
          fill-light
        </AntTag>
      </View>
    </container>
    <container title="自定义图标">
      <View class="tag-list">
        <AntTag className="myTag" icon="AlipayCircleFill">
          标签
        </AntTag>
        <AntTag className="myTag" color="success" icon="AlipayCircleFill">
          标签
        </AntTag>
        <AntTag className="myTag" color="warning" icon="AlipayCircleFill">
          标签
        </AntTag>
        <AntTag className="myTag" color="danger" icon="AlipayCircleFill">
          标签
        </AntTag>
      </View>
    </container>
  </Component>
);
