import dayjs from 'dayjs'

import { CalendarDefaultProps } from './props'
import Calendar, { ECalendarSelectMode } from './manager'

Component({
    props: CalendarDefaultProps,
    timer: null,
    data: {
        renderTimes: 0,
        checkTimes: 0,
    },
    didMount () {
        const {
            startDate,
            endDate,
            disableDates,
            selectionMode,
            customDateList,
            holidayList,
            selectDate,
            selectRange,
            showlunar
        } = this.props;
        this.calendarManager = new Calendar({
            startDate,
            endDate,
            disableDates,
            selectionMode,
            customDateList,
            holidayList,
            selectDate,
            selectRange,
            showlunar
        });
        this.render()
    },
    didUpdate (prev) {
        if (this.props.startDate !== prev.startDate || this.props.endDate !== prev.endDate) {
            this.calendarManager.updateStartEndDate(this.props.startDate, this.props.endDate)
            this.render()
        } else if (prev.disableDates !== this.props.disableDates) {
            this.calendarManager.updateDisableDates(this.props.disableDates)
            this.render()
        } else if (prev.holidayList !== this.props.holidayList) {
            this.calendarManager.updateHolidayList(this.props.holidayList)
            this.render()
        } else if (prev.customDateList !== this.props.customDateList) {
            this.calendarManager.updateCustomDateList(this.props.customDateList)
            this.render()
        }
    },
    methods: {
        console (...args) {
            console.log(...args)
        },
        checkScroll () {
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                console.log('checkscroll')
                this.setData({ checkTimes: this.data.checkTimes + 1 })
            }, 50)
        },
        clearCheckScroll () {
            console.log('clearCheckScroll')
            clearInterval(this.timer)
        },
        render () {
            this.calendarManager.calculateCalendarList();
            this.setData({
                calendarList: this.calendarManager.calendarList,
                renderTimes: this.data.renderTimes + 1
            })
        },
        onDateChange (dataItem) {
            const { fullDate: date, disable } = dataItem;
            if (disable) return
            let { selectStartDate, selectEndDate } = this.calendarManager
            if (this.props.selectionMode === ECalendarSelectMode.range) {
                if (selectStartDate && !selectEndDate) {
                    selectEndDate = date
                } else if (!selectStartDate && !selectEndDate) {
                    selectStartDate = date
                } else if (selectStartDate && selectEndDate) {
                    selectStartDate = date
                    selectEndDate = null
                }
            } else {
                selectStartDate = date
                selectEndDate = null
            }
            if (dayjs(selectEndDate).isBefore(selectStartDate)) {
                [selectEndDate, selectStartDate] = [selectStartDate, selectEndDate]
            }
            this.updateSelectDate(selectStartDate, selectEndDate);
            if (!this.props.showConfirmButton) {
                this.onCheck()
            }
        },
        updateSelectDate(start, end) {
            this.calendarManager.updateSelectDate(start, end)
            this.render()
        },
        onCheck () {
            if (this.props.selectionMode === ECalendarSelectMode.range) {
                if (this.calendarManager.selectStartDate && this.calendarManager.selectEndDate) {
                    this.props.onChange?.([this.calendarManager.selectStartDate, this.calendarManager.selectEndDate])
                }
            } else {
                if (this.calendarManager.selectStartDate) {
                    this.props.onChange?.(this.calendarManager.selectStartDate)
                }
            }
        },
        onCancel () {
            this.updateSelectDate(null, null)
        },
        onClose () {
            this.props?.onClose()
        },
    }
})