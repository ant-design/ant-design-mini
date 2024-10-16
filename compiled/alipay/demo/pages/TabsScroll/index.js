Page({
    data: {
        items: [],
    },
    onLoad() {
        const items = new Array(30).fill(null).map((_, index) => {
            return {
                title: `Tab ${index}`,
                subTitle: "描述文案",
            };
        });
        this.setData({
            items,
        });
    },
});
