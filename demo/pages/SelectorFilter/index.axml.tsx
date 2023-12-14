import { InternalData, View } from 'tsxml';
import Icon from '../../../src/Icon/index.axml';
import Selector from '../../../src/Selector/index.axml';

export default ({
  currentOpen,
  items,
  contentClassName,
  contentStyle,
}: InternalData) => (
  <View class={`filterDemo $`}>
    <View class="filterDemo-bar">
      {items.map((item, index) => (
        <View
          class={`filterDemo-bar-item ${
            currentOpen === index ? 'filterDemo-bar-item-active' : ''
          }`}
          onTap="onTapItem"
          data-index={index}
        >
          {item.title}
          <Icon
            type="DownFill"
            className={`filterDemo-bar-item-icon  ${
              currentOpen === index ? 'filterDemo-bar-item-icon-up' : ''
            }`}
            size="x-small"
          />
        </View>
      ))}
    </View>
    <View class="filterDemo-items">
      {items.map((item, index) => (
        <View
          class={`filterDemo-items-content ${
            currentOpen === index ? 'filterDemo-items-content-active' : ''
          } ${contentClassName || ''}`}
          style={`${contentStyle || ''}`}
        >
          <Selector
            options={item.options}
            onChange="handleChange"
            data-index={index}
          />
        </View>
      ))}
    </View>
  </View>
);
