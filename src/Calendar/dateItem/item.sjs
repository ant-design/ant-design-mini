function GetDateItemWrapperClass (dateItem = {}) {
  let style = ""
  const { isToday, isRangeStart, isRangeEnd, isRangeArea, holiday, tag, lunar, disable } = dateItem
  if (isRangeEnd || isRangeStart) {
    style = "background: #1777FF";
  } else if (isRangeArea) {
    style = "background: rgba(22,119,255,0.10);"
  } else if (disable) {
    style = "opacity: 0.4"
  }
  return style
}

function GetDateItemAboveAreaTextAndClass (dateItem = {}) {
  const { isToday, isRangeEnd, isRangeStart, isSingleSelect, isRangeArea, holiday, tag, lunar } = dateItem

  let text = ""
  let color = '#999999'

  if (!isSingleSelect && (isRangeStart || isRangeEnd)) {
    if (isRangeStart && isRangeEnd) {
      text = '开始/结束'
    } else if (isRangeStart) {
      text = '开始'
    } else if (isRangeEnd) {
      text = '结束'
    }
  } else if (tag && holiday && holiday.isHolidayStartDay) {
  // 节假日第一天
    text = holiday.name
    color = '#F93A4A'
  } else if (isToday) {
    text = '今日'
  } else if (tag && lunar) {
    text = lunar.IDayCn
  }

  if (isRangeEnd || isRangeStart) {
    color = '#FFFFFF'
  }

  return {
    text,
    style: `color: ${color}`
  }
}

function GetDateItemMiddleAreaTextAndClass (dateItem = {}) {
  const { isToday, isRangeStart, isRangeEnd, isRangeArea, holiday, tag, date } = dateItem

  let color = "#333333"
  let text = date
  if (isRangeStart || isRangeEnd) {
    color = "#fff"
  }

  return {
    style: `color: ${color}`,
    text
  }
}

function GetDateItemBottomAreaTextAndClass (dateItem = {}) {
  const { isToday, isRangeStart, isRangeEnd, isRangeArea, holiday, tag, lunar } = dateItem
  let text = ""
  let color = '#999999'
  if (tag) {
    text = tag.text
    color = tag.color
  } else if (holiday && holiday.isHolidayStartDay) {
    // 节假日第一天
      text = holiday.name
      color = '#F93A4A'
  } else if (lunar) {
    text = lunar.IDayCn
  }

  if (isRangeStart || isRangeEnd) {
    color = '#FFFFFF'
  }

  return {
    text,
    style: `color: ${color}`
  }
}

export default {
  GetDateItemBottomAreaTextAndClass,
  GetDateItemAboveAreaTextAndClass,
  GetDateItemWrapperClass,
  GetDateItemMiddleAreaTextAndClass
}