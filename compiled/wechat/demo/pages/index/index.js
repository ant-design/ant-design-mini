//@ts-ignore
import { componentList, allComponents } from '../../utils/constants';
Page({
    data: {
        componentList: componentList,
        finding: false,
        searchResult: [],
    },
    onShow: function () {
        this.setData({
            finding: false,
            searchResult: [],
        });
    },
    onClearSearch: function () {
        this.setData({
            finding: false,
            searchResult: [],
        });
    },
    onSearch: function (e) {
        e = e.detail;
        if (e.length > 0) {
            var result_1 = [];
            allComponents.forEach(function (searchKey) {
                if (searchKey.name.toLowerCase().match(e)) {
                    result_1.push(searchKey);
                }
            });
            this.setData({
                finding: true,
                searchResult: result_1,
            });
        }
        else {
            this.setData({
                finding: false,
                searchResult: [],
            });
        }
    },
    listPress: function (e) {
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
