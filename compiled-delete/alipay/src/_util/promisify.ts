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

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace My {
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
    apFilePaths?: string[];
    tempFilePaths?: string[];
    filePaths?: string[];
    tempFiles?: TempFile[];
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
}

export const chooseImage: (option: any) => Promise<My.ChooseImage> = promisifyMy('chooseImage');
export const chooseVideo: (option: any) => Promise<My.ChooseVideo> = promisifyMy('chooseVideo');
export const chooseFileFromDisk: (option?: any) => Promise<My.ChooseFileFromDisk> = promisifyMy('chooseFileFromDisk');
export const uploadFile: (option: any) => Promise<My.UploadFile> = promisifyMy('uploadFile');
export const getFileInfo: (option: any) => Promise<My.GetFileInfo> = promisifyMy('getFileInfo');
export const previewImage: (option: any) => void = promisifyMy('previewImage');
export const downloadFile: (option: any) => Promise<My.DownloadFile> = promisifyMy('downloadFile');