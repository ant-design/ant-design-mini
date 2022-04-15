import { ToastDefaultProps } from './props'

Component({
    props: ToastDefaultProps,
    data: {
        show: false,
    },
    timer: null,
    didUpdate (prev) {
        if (!prev.visible && this.props.visible) {
            this.handleShowToast()
        } else if (!this.props.visible) {
            this.setData({ show: false })
        }
    },
    didMount () {
        if (this.props.visible) {
            this.handleShowToast()
        }
    },
    methods: {
        handleShowToast () {
            this.setData({ show: true })
            if (this.props.duration > 0) {
                setTimeout(() => {
                    this.setData({ show: false })
                    this.props.afterClose?.()
                }, this.props.duration)
            }
        }
    }
})