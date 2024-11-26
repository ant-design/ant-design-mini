//@ts-ignore
import { componentList, allComponents } from '../../utils/constants';
Page({
    data: {
        componentList,
        finding: false,
        searchResult: [],
    },
    onShow() {
        this.setData({
            finding: false,
            searchResult: [],
        });
    },
    onClearSearch() {
        this.setData({
            finding: false,
            searchResult: [],
        });
    },
    onSearch(e) {
        e = e.detail;
        if (e.length > 0) {
            const result = [];
            allComponents.forEach((searchKey) => {
                if (searchKey.name.toLowerCase().match(e)) {
                    result.push(searchKey);
                }
            });
            this.setData({
                finding: true,
                searchResult: result,
            });
        }
        else {
            this.setData({
                finding: false,
                searchResult: [],
            });
        }
    },
    listPress(e) {
        console.log('11');
        if (typeof my === 'undefined') {
            console.log('navigateTo', e.currentTarget.dataset.url);
            //@ts-ignore
            wx.navigateTo({
                url: '/demo' + e.currentTarget.dataset.url,
            });
            return;
        }
        my.navigateTo({
            url: e.currentTarget.dataset.url,
        });
    },
});
