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

declare namespace My {
  interface ChooseImage {
    apFilePaths: Array<string>;
    success: boolean;
    tempFiles: Array<TempFile>;
  }

  interface UploadFile {
    data: string;
    statusCode: string | number;
    header: string;
  }
}

export const chooseImage: (option: any) => Promise<My.ChooseImage> = promisifyMy('chooseImage');
export const uploadFile: (option: any) => Promise<My.UploadFile> = promisifyMy('uploadFile');
export const imageViewer: (option: any) => void = promisifyCall('imageViewer');

