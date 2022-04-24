import { CollapseItemDefaultProps } from './props';
import { context } from '../context';
import { log } from '../../_util/console';
import { objectEntries } from '../../_util/tools';

Component({
  props: CollapseItemDefaultProps,
  data: {
    _isActive: false,
    contentHeight: '',
    lastAction: 'auto',
    supportSjs: my.canIUse('sjs.event'),
    // 避免appx1.0下首次页面加载出现过渡动画
    _first: -1,
    accordion: false,
    disabled: false,
    expandIcon: '',
    closeIcon: '',
  },
  didMount() {
    const { name, disabled, expandIcon, closeIcon } = this.props;
    const key = `${this.$page.$id}-${this.props.uid}`;
    if (typeof name !== 'string') {
      log.error('CollapseItem', 'name 作为唯一的标识，属必填字段，类型为 string。');
    }
    this.setData({
      disabled,
      expandIcon,
      closeIcon,
    });
    const setActive = (_isActive: boolean) => this.setData({ _isActive });
    const getActive = () => this.data._isActive;
    const getItemPropsVal = (key: string) => this.props[key];
    const setFirst = () => this.setData({ _first: this.data._first + 1 });
    const getFirst = () => this.data._first;
    const getId = () => `${this.$id}`;
    const setLastAction = (lastAction) => this.setData({ lastAction });
    const setAccordion = (accordion: boolean) => this.setData({ accordion });
    const setContentHeight = (contentHeight: string) => this.setData({ contentHeight });
    const getContentHeight = () => this.calcContentHeight();
    const getSupportSjs = () => this.data.supportSjs;
    const getDisabled = () => this.props.disabled;
    context.addItem(
      key,
      `${this.$id}`,
      {
        setActive,
        setAccordion,
        getActive,
        setFirst,
        getItemPropsVal,
        setLastAction,
        getId,
        getFirst,
        setContentHeight,
        getContentHeight,
        getSupportSjs,
        getDisabled,
      },
    );

    try {
      context.updateItemValue(key, `${this.$id}`);
    // eslint-disable-next-line no-empty
    } catch (err) {}
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    context.removeItem(key, `${this.$id}`);
  },
  didUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.setData({
        disabled: this.props.disabled,
      });
    }
    if (prevProps.expandIcon !== this.props.expandIcon) {
      this.setData({
        expandIcon: this.props.expandIcon,
      });
    }
    if (prevProps.closeIcon !== this.props.closeIcon) {
      this.setData({
        closeIcon: this.props.closeIcon,
      });
    }
  },
  methods: {
    _changeItem() {
      if (this.props.disabled) return;
      const key = `${this.$page.$id}-${this.props.uid}`;
      if (this.data.supportSjs) {
        // for 2.0
        context.triggerItem(key, `${this.$id}`, !this.data._isActive);
        return;
      }

      const group = context.getGroup(key);
      if (group) {
        const accordion = group ? group.getGroupPropsVal('accordion') : false;
        if (accordion) {
          const onChange = group.getGroupPropsVal('onChange');
          objectEntries(group.items).forEach(([, val]) => {
            if (!val) return;
            if (val.getId() === `${this.$id}`) {
              if (this.data._isActive) {
                this.calcContentHeight().then((contentHeight) => {
                  this.setData({
                    contentHeight,
                  });
                  setTimeout(() => {
                    this.setData({
                      _isActive: false,
                      contentHeight: '0px',
                      _first: this.data._first + 1,
                    }, () => {
                      onChange([]);
                    });
                  }, 10);
                });
              } else {
                this.calcContentHeight().then((contentHeight) => {
                  this.setData({
                    contentHeight: '0px',
                  });
                  setTimeout(() => {
                    this.setData({
                      _isActive: true,
                      contentHeight,
                      _first: this.data._first + 1,
                    }, () => {
                      onChange([this.props.name]);
                    });
                  }, 10);
                });
              }
            } else {
              if (val.getActive() === false) return;
              val.getContentHeight().then((contentHeight) => {
                val.setContentHeight(contentHeight);
                val.setFirst();
                setTimeout(() => {
                  val.setActive(false);
                  val.setContentHeight('0px');
                }, 10);
              });
            }
          });
        } else {
          this.fallbackCollapse(this.data._isActive);
        }
      }
    },
    calcContentHeight(): Promise<string> {
      return new Promise((resolve, reject) => {
        my.createSelectorQuery()
          .select(`.amd-collapse-item-content-${this.$id}`)
          .boundingClientRect()
          .exec((res) => {
            if (res && res[0]) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              resolve(`${res[0].height}px`);
            } else {
              reject(res);
            }
          });
      });
    },
    fallbackCollapse(isActive) {
      if (isActive) {
        // for 1.0 open -> close
        this.calcContentHeight().then((contentHeight) => {
          this.setData({
            contentHeight,
          });
          setTimeout(() => {
            this.setData({
              _isActive: false,
              contentHeight: '0px',
              _first: this.data._first + 1,
            }, () => {
              const key = `${this.$page.$id}-${this.props.uid}`;
              context.onChangeByTrigger(key);
            });
          }, 10);
        });
      } else {
        // for 1.0 close -> open
        this.calcContentHeight().then((contentHeight) => {
          this.setData({
            _isActive: true,
            contentHeight,
            _first: this.data._first + 1,
          }, () => {
            const key = `${this.$page.$id}-${this.props.uid}`;
            context.onChangeByTrigger(key);
          });
        });
      }
    },
    resetContentHeight() {
      if (this.data._isActive) {
        setTimeout(() => {
          this.setData({
            contentHeight: 'auto',
          });
        }, 10);
      }
    },
  },
});
