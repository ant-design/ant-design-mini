const status = {}

function handleCalendarChange (newVal, oldVal, ownerComponent, instance) {
    const dataset = instance.getDataset()
    const { id } = dataset

    const baselineComp = ownerComponent.selectComponent('.ant-calendar-days')
    const basePos = baselineComp.getBoundingClientRect()
    const subtitleComps = ownerComponent.selectAllComponents('.ant-calendar-subtitle')
    const scroller = ownerComponent.selectComponent('.ant-subcalendar')
    const scrollTop = scroller.getDOMProperty(['scrollTop']).scrollTop

    const stickyRange = subtitleComps.map((comp, i) => {
        const pos = comp.getBoundingClientRect()
        const pos1 = subtitleComps[i + 1] && subtitleComps[i + 1].getBoundingClientRect()
        
        return {
            stickyStart: pos.top + scrollTop - basePos.bottom,
            stickyEnd: pos1 && (pos1.top + scrollTop - basePos.bottom)
        }
    })
    ownerComponent.callMethod('console', stickyRange)
    status[id] = {
        range: stickyRange
    }

    if (scrollTop == 0) {
        subtitleComps[0].addClass('ant-calendar-title-fixed')
    }
}

function handleCheckScroll (newVal, oldVal, ownerComponent, instance) {
    const dataset = instance.getDataset()
    const { id } = dataset
    const scroller = ownerComponent.selectComponent('.ant-subcalendar')
    const scrollTop = scroller.getDOMProperty(['scrollTop']).scrollTop
    
    const lastScrollTop = status[id] && status[id].lastScrollTop
    ownerComponent.callMethod('console', lastScrollTop, scrollTop)
    status[id] = status[id] || {}
    status[id].lastScrollTop = scrollTop
    if (lastScrollTop !== scrollTop) {
        handleMove({ instance }, ownerComponent)
    } else {
        ownerComponent.callMethod('clearCheckScroll')
    }
}

function handleMove (event, ownerComponent) {
    ownerComponent.callMethod('clearCheckScroll')

    const { touches, instance } = event;
    const dataset = instance.getDataset()
    const { id } = dataset

    const subtitleComps = ownerComponent.selectAllComponents('.ant-calendar-subtitle')
    const scroller = ownerComponent.selectComponent('.ant-subcalendar')
    const scrollTop = scroller.getDOMProperty(['scrollTop']).scrollTop
    const stickyRange = status[id] && status[id].range

    if (!stickyRange || stickyRange.length != subtitleComps.length) return

    ownerComponent.callMethod('console', stickyRange)
    ownerComponent.callMethod('console', scrollTop)
    if (stickyRange) {
        let index = null
        stickyRange.some((item, i) => {
            if (item.stickyStart < scrollTop && (item.stickyEnd || Infinity) > scrollTop) {
                index = i
                return true
            }
        })
        ownerComponent.callMethod('console', index)
        if (index != null) {
            subtitleComps.forEach((item, i) => {
                if (i === index) {
                    item.addClass('ant-calendar-title-fixed')
                } else {
                    item.removeClass('ant-calendar-title-fixed')
                }
            })
        }
    }
}

function handleTouchStart (event, ownerComponent) {
    ownerComponent.callMethod('console', 'scroll start')
    ownerComponent.callMethod('clearCheckScroll')
    handleMove(event, ownerComponent)
}

function handleTouchMove (event, ownerComponent) {
    ownerComponent.callMethod('console', 'scroll move')
    handleMove(event, ownerComponent)
}

function handleTouchEnd (event, ownerComponent) {
    ownerComponent.callMethod('console', 'scroll end')
    handleMove(event, ownerComponent)
    ownerComponent.callMethod('checkScroll')
}

export default {
    handleTouchMove,
    handleCalendarChange,
    handleTouchEnd,
    handleTouchStart,
    handleCheckScroll
}