import { implJsapi } from './base';

type Files = {
  size: number;
  path: string;
}[];

export interface ChooseImageResult {
  tempFiles: Files;
  apFilePaths?: Files;
  filePaths?: Files;
  tempFilePaths?: Files;
}

export interface ChooseImageOptions {
  count: number;
  sourceType: string[];
}

export const chooseImage = implJsapi<
  Promise<ChooseImageResult>,
  ChooseImageOptions
>({
  /// #if WECHAT
  wechat: (instance, args: ChooseImageOptions) => {
    return new Promise<ChooseImageResult>((resolve, reject) => {
      /**
       * @see https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.chooseMedia.html
       */
      instance.chooseMedia({
        mediaType: ['image'],
        count: args.count,
        sourceType: args.sourceType,
        success: (res) => {
          const tempFiles = res.tempFiles.map((file) => {
            return {
              size: file.size,
              path: file.tempFilePath,
            };
          });
          resolve({
            tempFiles,
          });
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  /// #endif
  alipay: (instance, args: ChooseImageOptions) => {
    return new Promise<ChooseImageResult>((resolve, reject) => {
      /**
       * @see https://opendocs.alipay.com/mini/api/media/image/my.chooseimage
       */
      instance.chooseImage({
        count: args.count,
        sourceType: args.sourceType,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
});
