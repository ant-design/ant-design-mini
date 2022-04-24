import React, { useState, useEffect } from "react";
import { useSimulatorService, simulatorService } from 'dumi-theme-antd-mini/es/sdk';

function proxyHistory(method: string) {
  var originFn = window.history[method];
  return function (this: any, ...args: any[]) {
    if (simulatorService) {
      if (window.location.pathname && window.location.pathname.startsWith("/components")) {
        simulatorService.show();
      } else {
        console.log(window.location)
        simulatorService.hide();
      }
    }

    originFn.apply(this, args);
  };
}

["back", "go", "forward", "pushState", "replaceState"].forEach(function (fn) {
  var method = fn;
  window.history[method] = proxyHistory(method);
});

export default function (props: {
  page: string,
  appCdnBaseUrl: string,
}) {
  const {
    appCdnBaseUrl: baseUrl,
    page: page
  } = props;
  const [loading, ref] = useSimulatorService(baseUrl, page);

  useEffect(() => {
    if (ref.current) {
      ref.current.reLaunch(page);
    }
  }, [page, ref]);

  return <div id="lyra-container" style={{
    width: 395,
    height: 740
  }}></div>
};
