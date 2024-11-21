import throttle from 'lodash.throttle';
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { SiteContextProps } from '../../slots/SiteContext';
import SiteContext from '../../slots/SiteContext';
import './index.less';

interface IProps {
  children: ReactNode;
}

const MARKUP_REGEX = {
  all: /#if ALIPAY|#if WECHAT/, // 支持的所有平台
  alipay: /#if WECHAT/, // 支付宝平台时，需要去掉微信标记表格项
  wechat: /#if ALIPAY/, // 微信平台时，需要去掉支付宝标记表格项
};

const Table: React.FC<IProps> = ({ children, ...props }) => {
  const { platform } = useContext<SiteContextProps>(SiteContext);

  const container = useRef<HTMLDivElement>(null);
  const [leftFolded, setLeftFolded] = useState(false);
  const [rightFolded, setRightFolded] = useState(false);

  // watch content scroll to render folded shadow
  useEffect(() => {
    const elm = container.current;
    if (elm) {
      const handler = throttle(() => {
        setLeftFolded(elm.scrollLeft > 0);
        setRightFolded(elm.scrollLeft < elm.scrollWidth - elm.offsetWidth);
      }, 100);

      handler();
      elm.addEventListener('scroll', handler);
      window.addEventListener('resize', handler);

      return () => {
        elm.removeEventListener('scroll', handler);
        window.removeEventListener('resize', handler);
      };
    }
  }, []);

  // 处理表格标签，做条件编译
  const processReactNode = useCallback(
    (node) => {
      if (Array.isArray(node)) {
        let containsAlipay = false;

        // 遍历节点数组，检测是否包含 #if ALIPAY
        node.forEach((child) => {
          if (typeof child === 'string' && MARKUP_REGEX[platform].test(child)) {
            containsAlipay = true;
          } else if (
            React.isValidElement(child) &&
            typeof child.props.children === 'string' &&
            MARKUP_REGEX[platform].test(child.props.children)
          ) {
            containsAlipay = true;
          }
        });

        // 如果包含 #if ALIPAY，返回空数组以舍弃整个节点和其兄弟
        return containsAlipay
          ? []
          : node.map(processReactNode).filter((child) => child !== null);
      } else if (React.isValidElement(node)) {
        const { children } = node.props;
        const processedChildren = processReactNode(children);

        return React.cloneElement(node, {
          children: processedChildren,
        });
      } else {
        node =
          typeof node === 'string' ? node.replace(MARKUP_REGEX.all, '') : node;
        return node;
      }
    },
    [children, platform, MARKUP_REGEX]
  );

  return (
    <div className="dumi-default-table">
      <div
        className="dumi-default-table-content"
        ref={container}
        data-left-folded={leftFolded || undefined}
        data-right-folded={rightFolded || undefined}
      >
        <table {...props}>{processReactNode(children)}</table>
      </div>
    </div>
  );
};

export default Table;
