Page({
    data: {
        current: 0,
        items: [],
    },
    onLoad() {
        const items = new Array(3).fill(null).map((_, index) => {
            return {
                title: `Tab ${index}`,
                content: `Content of tab ${index}`,
            };
        });
        this.setData({
            items,
        });
    },
    onChange(current) {
        current = current.detail;
        this.setData({
            current,
        });
    },
    onPrevTap() {
        if (this.data.items.length === 0) {
            return;
        }
        const current = this.data.current === 0
            ? this.data.items.length - 1
            : this.data.current - 1;
        this.setData({
            current,
        });
    },
    onNextTap() {
        if (this.data.items.length === 0) {
            return;
        }
        const current = this.data.current >= this.data.items.length - 1
            ? 0
            : this.data.current + 1;
        this.setData({
            current,
        });
    },
    onAddTap() {
        const items = [...this.data.items];
        items.push({
            title: `Tab ${items.length}`,
            content: `Content of tab ${items.length}`,
        });
        this.setData({
            items,
            current: items.length - 1,
        });
    },
    onMinusTap() {
        if (this.data.items.length === 1) {
            return;
        }
        const items = [...this.data.items];
        items.splice(items.length - 1, 1);
        this.setData({
            items,
            current: Math.min(this.data.current, items.length - 1),
        });
    },
});
