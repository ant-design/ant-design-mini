export function getPopoverStyle(placement, autoAdjustOverflow, size) {
    var containerRect = size.containerRect, childrenRect = size.childrenRect, contentRect = size.contentRect, systemInfo = size.systemInfo;
    var left = childrenRect.left - containerRect.left;
    var top = childrenRect.top - containerRect.top;
    var bottom = containerRect.bottom - childrenRect.bottom;
    var right = containerRect.right - childrenRect.right;
    var adjustedPlacement = placement;
    var arrowMargin = 12;
    var contentRectWidth = contentRect.width + arrowMargin;
    var contentRectHeight = contentRect.height + arrowMargin;
    if (autoAdjustOverflow) {
        if (adjustedPlacement === 'top') {
            if (childrenRect.top - contentRectHeight < 0) {
                adjustedPlacement = 'bottom';
            }
        }
        else if (adjustedPlacement === 'bottom') {
            if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
                adjustedPlacement = 'top';
            }
        }
        else if (adjustedPlacement === 'left') {
            if (childrenRect.left - contentRectWidth < 0) {
                adjustedPlacement = 'right';
            }
        }
        else if (adjustedPlacement === 'right') {
            if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
                adjustedPlacement = 'left';
            }
        }
        else if (adjustedPlacement === 'top-left') {
            if (childrenRect.top - contentRectHeight < 0) {
                adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
            }
            if (childrenRect.left + contentRectWidth > systemInfo.windowWidth) {
                adjustedPlacement = adjustedPlacement.replace('left', 'right');
            }
        }
        else if (adjustedPlacement === 'top-right') {
            if (childrenRect.top - contentRectHeight < 0) {
                adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
            }
            if (childrenRect.right - contentRectWidth < 0) {
                adjustedPlacement = adjustedPlacement.replace('right', 'left');
            }
        }
        else if (adjustedPlacement === 'bottom-left') {
            if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
                adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
            }
            if (childrenRect.left + contentRectWidth > systemInfo.windowWidth) {
                adjustedPlacement = adjustedPlacement.replace('left', 'right');
            }
        }
        else if (adjustedPlacement === 'bottom-right') {
            if (childrenRect.bottom + contentRectHeight > systemInfo.windowHeight) {
                adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
            }
            if (childrenRect.right - contentRectWidth < 0) {
                adjustedPlacement = adjustedPlacement.replace('right', 'left');
            }
        }
        else if (adjustedPlacement === 'left-top') {
            if (childrenRect.left - contentRectWidth < 0) {
                adjustedPlacement = adjustedPlacement.replace('left', 'right');
            }
            if (childrenRect.top + contentRectHeight > systemInfo.windowHeight) {
                adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
            }
        }
        else if (adjustedPlacement === 'left-bottom') {
            if (childrenRect.left - contentRectWidth < 0) {
                adjustedPlacement = adjustedPlacement.replace('left', 'right');
            }
            if (childrenRect.bottom - contentRectHeight < 0) {
                adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
            }
        }
        else if (adjustedPlacement === 'right-top') {
            if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
                adjustedPlacement = adjustedPlacement.replace('right', 'left');
            }
            if (childrenRect.top + contentRectHeight > systemInfo.windowHeight) {
                adjustedPlacement = adjustedPlacement.replace('top', 'bottom');
            }
        }
        else if (adjustedPlacement === 'right-bottom') {
            if (childrenRect.right + contentRectWidth > systemInfo.windowWidth) {
                adjustedPlacement = adjustedPlacement.replace('right', 'left');
            }
            if (childrenRect.bottom - contentRectHeight < 0) {
                adjustedPlacement = adjustedPlacement.replace('bottom', 'top');
            }
        }
    }
    var popoverContentStyle;
    if (adjustedPlacement === 'top') {
        popoverContentStyle = getStyle({
            left: left + childrenRect.width / 2,
            top: top - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'bottom') {
        popoverContentStyle = getStyle({
            left: left + childrenRect.width / 2,
            bottom: bottom - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'left') {
        popoverContentStyle = getStyle({
            left: left - arrowMargin,
            top: top + childrenRect.height / 2,
        });
    }
    else if (adjustedPlacement === 'right') {
        popoverContentStyle = getStyle({
            right: right - arrowMargin,
            top: top + childrenRect.height / 2,
        });
    }
    else if (adjustedPlacement === 'top-left') {
        popoverContentStyle = getStyle({
            left: left,
            top: top - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'top-right') {
        popoverContentStyle = getStyle({
            right: right,
            top: top - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'bottom-left') {
        popoverContentStyle = getStyle({
            left: left,
            bottom: bottom - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'bottom-right') {
        popoverContentStyle = getStyle({
            right: right,
            bottom: bottom - arrowMargin,
        });
    }
    else if (adjustedPlacement === 'left-top') {
        popoverContentStyle = getStyle({
            left: left - arrowMargin,
            top: top,
        });
    }
    else if (adjustedPlacement === 'left-bottom') {
        popoverContentStyle = getStyle({
            left: left - arrowMargin,
            bottom: bottom,
        });
    }
    else if (adjustedPlacement === 'right-top') {
        popoverContentStyle = getStyle({
            right: right - arrowMargin,
            top: top,
        });
    }
    else if (adjustedPlacement === 'right-bottom') {
        popoverContentStyle = getStyle({
            right: right - arrowMargin,
            bottom: bottom,
        });
    }
    return {
        popoverContentStyle: popoverContentStyle,
        adjustedPlacement: adjustedPlacement,
    };
}
function getStyle(obj) {
    return Object.keys(obj)
        .map(function (item) { return "".concat(item, ": ").concat(obj[item], "px"); })
        .join(';');
}
