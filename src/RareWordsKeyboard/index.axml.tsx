import { View, TSXMLProps, Text, Slot, InternalData } from 'tsxml';
import { IRareWordsKeyboardProps } from './props';
import Icon from '../Icon/index.axml';
import Result from '../Result/index.axml';
import Button from '../Button/index.axml';
import Loading from '../Loading/index.axml';

export default (
  {
    style,
    className,
    visible,
    showMask,
    type,
    safeArea,
  }: TSXMLProps<IRareWordsKeyboardProps>,
  {
    pinyinMaps,
    showErrorPage,
    loading,
    showMoreWords,
    matchWordsList,
    maxDisplayNum,
    displayStr,
    $id,
  }: InternalData
) => (
  <View
    key={`ant-rare-words-input-${$id}`}
    style={style}
    class={`ant-rare-words-keyboard ${className || ''}`}
  >
    {visible && (
      <View
        class={`ant-rare-words-keyboard-modal ${showMask ? '' : 'hide'}`}
        onTap="handleHide"
        onAppear="catchAppearModal"
      />
    )}
    <View class={`ant-rare-words-keyboard-kb ${visible ? '' : 'hide'}`}>
      <View class="ant-rare-words-keyboard-header">
        {/* 输入值展示区 */}
        {type !== 'handwriting' && (
          <View
            class={`ant-rare-words-keyboard-input_value ${
              displayStr.length > 0 && visible ? '' : 'hide'
            }`}
          >
            {displayStr}
          </View>
        )}
        {/* 候选字展示区 */}
        <View class="ant-rare-words-keyboard-match_words_wrap">
          <View
            class={`ant-rare-words-keyboard-match_words ${
              showMoreWords ? 'absolute' : ''
            }`}
          >
            <View
              class={`ant-rare-words-keyboard-match_words_inner ${
                showMoreWords ? 'all' : ''
              }`}
            >
              {matchWordsList.length === 0 && (
                <View class="ant-rare-words-keyboard-match_words_hidden">
                  哈
                </View>
              )}
              {matchWordsList.map((item) => (
                <View
                  class={`ant-rare-words-keyboard-match_words_item ${
                    showMoreWords ? 'all' : ''
                  }`}
                  data-value={item.unicodeChar}
                  onTap="handleWordClick"
                >
                  <View class="ant-rare-words-keyboard-match_words_item_text">
                    {item.unicodeChar}
                  </View>
                </View>
              ))}
              {/* 提示文案 */}
              {loading ? (
                <View class="ant-rare-words-keyboard-match_words_item_tips loading">
                  <Loading
                    className="ant-rare-words-keyboard-loading"
                    type="mini"
                    size="small"
                    color="#666666"
                  />
                  <Text>加载中</Text>
                </View>
              ) : (
                <View class="ant-rare-words-keyboard-match_words_item_tips">
                  {!!(displayStr === '' && matchWordsList.length === 0) && (
                    <Text>请输入生僻字对应的拼音</Text>
                  )}
                  {!!(displayStr !== '' && matchWordsList.length === 0) && (
                    <Text>更多生僻字完善中，敬请期待</Text>
                  )}
                </View>
              )}
            </View>
            {/* 候选字左侧操作按钮 */}
            <View
              class={`ant-rare-words-keyboard-match_words_right ${
                showMoreWords ? 'sticky' : ''
              } ${
                matchWordsList.length > maxDisplayNum && !showMoreWords
                  ? 'overflow'
                  : ''
              }`}
              onTap="hanleLookMore"
            >
              <Icon
                className="ant-rare-words-keyboard_down"
                type="DownOutline"
              />
            </View>
          </View>
        </View>
        {/* 主要操作区 */}
        <View class="ant-rare-words-keyboard_main">
          {/* 错误提示 */}
          {showErrorPage ? (
            <View>
              {/* #if ALIPAY */}
              <Slot name="resultError">
                {/* #endif */}
                <View class="ant-rare-words-keyboard_error">
                  <Result
                    className="ant-rare-words-keyboard_error-result"
                    image="https://mdn.alipayobjects.com/huamei_2fq7mt/afts/img/A*VtvFS4EJl0cAAAAAAAAAAAAADh58AQ/original"
                    message="页面遇到一些小问题"
                  >
                    <View
                      slot="extra"
                      class="ant-rare-words-keyboard_error-btns"
                    >
                      <Button
                        type="primary"
                        size="small"
                        inline
                        onTap="handleRetry"
                      >
                        重试
                      </Button>
                    </View>
                  </Result>
                </View>
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          ) : (
            /* 键盘区域 */
            <View class="ant-rare-words-keyboard_pinyin">
              {pinyinMaps.map((mapItem, mapIndex) => (
                <View key={mapIndex} class="ant-rare-words-keyboard_pinyin_row">
                  {mapItem.map((item) => (
                    <View
                      key={item.value}
                      data-value={item.value}
                      class={`ant-rare-words-keyboard_pinyin_key ${
                        showMoreWords ? 'all' : ''
                      }`}
                      onTap="handleKeyClick"
                    >
                      <View class="ant-rare-words-keyboard_pinyin_key_text">
                        {item.label}
                      </View>
                    </View>
                  ))}
                  {mapIndex === pinyinMaps.length - 1 && (
                    <View
                      class="ant-rare-words-keyboard_pinyin_key delete"
                      onTap="handleDelete"
                    >
                      <View class="ant-rare-words-keyboard_pinyin_key_text">
                        <Icon
                          className="ant-rare-words-keyboard_delete"
                          type="TextDeletionOutline"
                        />
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
      {safeArea && (
        <View class="ant-rare-words-keyboard-kb_iphonex-safe"></View>
      )}
    </View>
  </View>
);
