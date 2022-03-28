import React, { useEffect, useState, useRef } from 'react';

const mini_simulator_1 = window.MiniSimulator;
export default (props) => {
  const [lyraSize, setLyraSize] = useState({ width: 395, height: 740 });
  const simulatorRef = useRef(null);
  useEffect(() => {
    const propsDeferer = new Promise((resolve) => {
      if (process.env.NODE_ENV === 'development') {
        resolve({ appCdnBaseUrl: props.appCdnBaseUrl });
      } else {
        resolve({
          appCdnBaseUrl:
            'https://gw.alipayobjects.com/os/gzmsfesa-sffminipkg_prod/package/alipay/com_alipay_alipaywallet/2021001172665758/0_1_2202171349_9/',
        });
      }
    });
    // 等待 props 获取
    propsDeferer.then((launchProps) => {
      simulatorRef.current = mini_simulator_1.mount({
        container: 'lyra-service-container',
        hideStatusBar: true,
        theme: 'light',
        enablePreview: false,
        hideTopBar: true,
        hideBottomBar: true,
        defaultDeviceName: 'iPhone 13',
        internalStorageSeparatedKey: 'umi',
        clearStore: true,
        initWithAutoZoom: true,
        transparentBackground: true,
        launchParams: {
          page: props.pages,
          appxRouteFramework: 'YES',
        },
        ...launchProps,
      });
      simulatorRef.current.on(
        mini_simulator_1.EMiniSimulatorEvents.Resize,
        setLyraSize
      );
    });
    return function () {
      simulatorRef.current?.unmount();
    };
  }, []);
  useEffect(() => {
    if (simulatorRef.current) {
      simulatorRef.current.evaluateJavaScriptInWorker(
        `my.reLaunch({url:'/${props.pages}'});`
      );
    }
  }, [props.pages]);
  return <div id="lyra-service-container" style={lyraSize}></div>;
};
