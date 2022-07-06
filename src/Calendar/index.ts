import dayjs from 'dayjs'

import { CalendarDefaultProps } from './props'
import Calendar, { ECalendarSelectMode } from './manager'

Component({
    props: CalendarDefaultProps,
    data: {
    },
    didMount () {
        const {
            startDate,
            endDate,
            disableDates,
            selectionMode,
            customDateList,
            holidayList
        } = this.props;

        this.calendarManager = new Calendar({
            startDate,
            endDate,
            disableDates,
            selectionMode,
            customDateList,
            holidayList,
        });
        this.render()
    },
    didUpdate (prev) {
        if (this.props.startDate !== prev.startDate || this.props.endDate !== prev.endDate) {
            this.calendarManager.updateStartEndDate(this.props.startDate, this.props.endDate)
            this.render()
        }
    },
    methods: {
        render () {
            this.calendarManager.calculateCalendarList();
            this.setData({
                calendarList: this.calendarManager.calendarList
            })
        },
        onDateChange (dataItem) {
            const { fullDate: date } = dataItem;
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
        }
    }
})