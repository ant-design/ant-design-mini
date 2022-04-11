/*
 *@Description: 把所有my.xx的方法变成promise
 */
function promisifyMy(name: string) {
  return function (options: any): any {
    return new Promise((resolve, reject) => {
      my[name]({
        ...options,
        success: resolve,
        fail: reject,
      });
    });
  };
}

/*
 *@Description: 把所有my.call(xx)的方法变成promise
 */
function promisifyCall(name) {
  return function (options) {
    return new Promise((resolve) => {
      my.call(
        name,
        {
          ...options,
        },
        resolve,
      );
    });
  };
}

interface TempFile {
  /**
   * @description 本地临时文件路径（本地路径）
   */
  path: string;
  /**
   * @description 本地临时文件大小，单位为 B
   */
  size: number;
}

interface ChooseImage {
  apFilePaths: Array<string>;
  success: boolean;
  tempFiles: Array<TempFile>;
}

interface ChooseVideo {
  tempFilePath: string;
  duration: number;
  size: number;
  height: number;
  width: number;
  success: boolean;
}

interface ChooseFileFromDisk {
  apFilePath: string;
  success: boolean;
}

interface UploadFile {
  data: string;
  statusCode: string | number;
  header: string;
}

interface GetFileInfo {
  digest: string;
  size: number;
}

interface DownloadFile {
  apFilePath: string;
}

export const chooseImage: (option: any) => Promise<ChooseImage> = promisifyMy('chooseImage');
export const chooseVideo: (option: any) => Promise<ChooseVideo> = promisifyMy('chooseVideo');
export const chooseFileFromDisk: (option?: any) => Promise<ChooseFileFromDisk> = promisifyMy('chooseFileFromDisk');
export const uploadFile: (option: any) => Promise<UploadFile> = promisifyMy('uploadFile');
export const getFileInfo: (option: any) => Promise<GetFileInfo> = promisifyMy('getFileInfo');
export const previewImage: (option: any) => void = promisifyMy('previewImage');
export const downloadFile: (option: any) => Promise<DownloadFile> = promisifyMy('downloadFile');

