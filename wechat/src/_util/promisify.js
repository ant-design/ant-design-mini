/*
 *@Description: 把所有my.xx的方法变成promise
 */
function promisifyMy(name) {
    return function (options) {
        return new Promise((resolve, reject) => {
            my[name]({
                ...options,
                success: resolve,
                fail: reject,
            });
        });
    };
}
export const chooseImage = promisifyMy('chooseImage');
export const chooseVideo = promisifyMy('chooseVideo');
export const chooseFileFromDisk = promisifyMy('chooseFileFromDisk');
export const uploadFile = promisifyMy('uploadFile');
export const getFileInfo = promisifyMy('getFileInfo');
export const previewImage = promisifyMy('previewImage');
export const downloadFile = promisifyMy('downloadFile');
