import dayjs, { Dayjs } from 'dayjs'
import { CalendarDefaultProps, ICalendarProps } from './props'
import Calendar, { ECalendarSelectMode } from './manager'

Component<
{
    renderTimes: number,
	checkTimes: number,
	calendarList?: any[],
    buttonDisabled: boolean
},
Partial<ICalendarProps>,
{
    console: () => void
    checkScroll: () => void
    clearCheckScroll: () => void
    render: () => void
    onDateChange: (v: any) => void
    updateSelectDate: (start: Dayjs, end: Dayjs) => void
    onCheck: () => void
    onCancel: () => void
    onClose: () => void
},
{
    calendarManager: Calendar,
    timer:  NodeJS.Timer | null
}
>({
    props: CalendarDefaultProps,
    data: {
        renderTimes: 0,
        checkTimes: 0,
        buttonDisabled: true
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
        this.timer = null;
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
        if (!dayjs(this.props.startDate as Date).isSame(prev.startDate) || !dayjs(this.props.endDate as Date).isSame(prev.endDate)) {
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
            const { selectionMode } = this.props
            const { fullDate: date, disable } = dataItem;
            if (disable || !selectionMode) return
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
            } else {
                this.getConfirmButtonState()
            }
        },
        updateSelectDate(start, end) {
            this.calendarManager.updateSelectDate(start, end)
            this.render()
        },
        getConfirmButtonState () {
            if (this.props.selectionMode === ECalendarSelectMode.range) {
                if (this.calendarManager.selectStartDate && this.calendarManager.selectEndDate) {
                    return this.setData({
                        buttonDisabled: false
                    })
                }
            } else {
                if (this.calendarManager.selectStartDate) {
                    return this.setData({
                        buttonDisabled: false
                    })
                }
            }
            this.setData({
                buttonDisabled: true
            })
        },
        onCheck () {
            if (this.props.selectionMode === ECalendarSelectMode.range) {
                if (this.calendarManager.selectStartDate && this.calendarManager.selectEndDate) {
                    this.props.onChange?.([dayjs(this.calendarManager.selectStartDate).toDate(), dayjs(this.calendarManager.selectEndDate).toDate()])
                }
            } else if (this.props.selectionMode === ECalendarSelectMode.single) {
                if (this.calendarManager.selectStartDate) {
                    this.props.onChange?.(dayjs(this.calendarManager.selectStartDate).toDate())
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