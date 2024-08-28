interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

interface SystemInfo {
  windowHeight: number;
  windowWidth: number;
}

export function getPopoverStyle(
  placement: string,
  autoAdjustOverflow: boolean,
  size: {
    containerRect: Rect;
    childrenRect: Rect;
    contentRect: Rect;
    systemInfo: SystemInfo;
  }
) {
  const { containerRect, childrenRect, contentRect, systemInfo } = size;
  const left = childrenRect.left - containerRect.left;
  const top = childrenRect.top - containerRect.top;
  const bottom = containerRect.bottom - childrenRect.bottom;
  const right = containerRect.right - childrenRect.right;
  let adjustedPlacement = placement as string;
  const arrowMargin = 12;

  const contentRectWidth = contentRect.width + arrowMargin;
  const contentRectHeight = contentRect.height + arrowMargin;

  if (autoAdjustOverflow) {
    if (adjustedPlacement === 'top') {
      if (childrenRect.top - contentRectHeight < 0) {
        adjustedPlacement = 'bottom';
      }
    } else if (adjustedPlacement === 'bottom') {
      if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
        adjustedPlacement = 'top';
      }
    } else if (adjustedPlacement === 'left') {
      if (childrenRect.left - contentRectWidth < 0) {
        adjustedPlacement = 'right';
      }
    } else if (adjustedPlacement === 'right') {
      if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
        adjustedPlacement = 'left';
      }
    } else if (adjustedPlacement === 'top-left') {
      if (childrenRect.top - contentRectHeight < 0) {
        adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
      }
      if (childrenRect.left + contentRectWidth > systemInfo.windowWidth) {
        adjustedPlacement = adjustedPlacement.replace('left', 'right');
      }
    } else if (adjustedPlacement === 'top-right') {
      if (childrenRect.top - contentRectHeight < 0) {
        adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
      }
      if (childrenRect.right - contentRectWidth < 0) {
        adjustedPlacement = adjustedPlacement.replace('right', 'left');
      }
    } else if (adjustedPlacement === 'bottom-left') {
      if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
        adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
      }
      if (childrenRect.left + contentRectWidth > systemInfo.windowWidth) {
        adjustedPlacement = adjustedPlacement.replace('left', 'right');
      }
    } else if (adjustedPlacement === 'bottom-right') {
      if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
        adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
      }
      if (childrenRect.right - contentRectWidth < 0) {
        adjustedPlacement = adjustedPlacement.replace('right', 'left');
      }
    } else if (adjustedPlacement === 'left-top') {
      if (childrenRect.left - contentRectWidth < 0) {
        adjustedPlacement = adjustedPlacement.replace('left', 'right');
      }
      if (childrenRect.top + contentRectHeight > systemInfo.windowHeight) {
        adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
      }
    } else if (adjustedPlacement === 'left-bottom') {
      if (childrenRect.left - contentRectWidth < 0) {
        adjustedPlacement = adjustedPlacement.replace('left', 'right');
      }
      if (childrenRect.bottom - contentRectHeight < 0) {
        adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
      }
    } else if (adjustedPlacement === 'right-top') {
      if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
        adjustedPlacement = adjustedPlacement.replace('right', 'left');
      }
      if (childrenRect.top + contentRectHeight > systemInfo.windowHeight) {
        adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
      }
    } else if (adjustedPlacement === 'right-bottom') {
      if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
        adjustedPlacement = adjustedPlacement.replace('right', 'left');
      }
      if (childrenRect.bottom - contentRectHeight < 0) {
        adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
      }
    }
  }

  let popoverContentStyle;
  if (adjustedPlacement === 'top') {
    popoverContentStyle = getStyle({
      left: left + childrenRect.width / 2,
      top: top - arrowMargin,
    });
  } else if (adjustedPlacement === 'bottom') {
    popoverContentStyle = getStyle({
      left: left + childrenRect.width / 2,
      bottom: bottom - arrowMargin,
    });
  } else if (adjustedPlacement === 'left') {
    popoverContentStyle = getStyle({
      left: left - arrowMargin,
      top: top + childrenRect.height / 2,
    });
  } else if (adjustedPlacement === 'right') {
    popoverContentStyle = getStyle({
      right: right - arrowMargin,
      top: top + childrenRect.height / 2,
    });
  } else if (adjustedPlacement === 'top-left') {
    popoverContentStyle = getStyle({
      left,
      top: top - arrowMargin,
    });
  } else if (adjustedPlacement === 'top-right') {
    popoverContentStyle = getStyle({
      right,
      top: top - arrowMargin,
    });
  } else if (adjustedPlacement === 'bottom-left') {
    popoverContentStyle = getStyle({
      left,
      bottom: bottom - arrowMargin,
    });
  } else if (adjustedPlacement === 'bottom-right') {
    popoverContentStyle = getStyle({
      right,
      bottom: bottom - arrowMargin,
    });
  } else if (adjustedPlacement === 'left-top') {
    popoverContentStyle = getStyle({
      left: left - arrowMargin,
      top,
    });
  } else if (adjustedPlacement === 'left-bottom') {
    popoverContentStyle = getStyle({
      left: left - arrowMargin,
      bottom,
    });
  } else if (adjustedPlacement === 'right-top') {
    popoverContentStyle = getStyle({
      right: right - arrowMargin,
      top,
    });
  } else if (adjustedPlacement === 'right-bottom') {
    popoverContentStyle = getStyle({
      right: right - arrowMargin,
      bottom,
    });
  }

  return {
    popoverContentStyle,
    adjustedPlacement,
  };
}

function getStyle(obj) {
  return Object.keys(obj)
    .map((item) => `${item}: ${obj[item]}px`)
    .join(';');
}
