/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

axios.post('https://oapi.dingtalk.com/robot/send?access_token=0f9a54ed34395a6b2f140e6019a11f7821af2e176548a32017ed51cb7fcf613d',
  {
    msgtype: 'markdown',
    markdown: {
      title: '  \n  #🎉🎉🎉 antd-mini 新版本发布 \n  ',
      text: `  \n  ### Bug Fixes  \n  * **issue:** [[#1](https://github.com/issues/1)] commit message vetify ([07d1d82](https://github.com/commit/07d1d8201e26d567f7c335571879183606f5a943))  \n  ### Features  \n  
      * **commit:** commit message vetify ([cec0f9e](https://github.com/commit/cec0f9e3756ce18996836874dd4273577e009f85))
      \n  
      * **commit:** commit message vetify ([7d33d80](https://github.com/commit/7d33d805db8f74825e4e590263ff3bc1c7cc4605))      \n  
      * **contribute:** commit.js ([018cd64](https://github.com/commit/018cd64d766881df58ae96be611248ed6d28303c))      \n  
      * **contribute:** commit.js ([0c168b4](https://github.com/commit/0c168b46a68f87e54a22a1d2aad5bb6ad563d10a))      \n  
      * **contribute:** contribute.md ([f221033](https://github.com/commit/f22103361896e32cdc3349bdf7c321a04c7ef497))      \n  
      * **contribute:** contribute.md ([84e1ae5](https://github.com/commit/84e1ae5637014b279d30ae652d28947e119cbb9c))      \n  
      * **contribute:** contribute.md ([268d55e](https://github.com/commit/268d55e2e9d8b957abee25adb4c5029c048d0df9))      \n  
      * **contribute:** contribute.md ([9d853ef](https://github.com/commit/9d853ef2e3fcceb2b4265be2cd3de756301206a6))      \n  
      * **github:** add template ([f737fbf](https://github.com/commit/f737fbfc67eab42a2cc9a688c28da00af2860e5a))      \n   
      * **github:** update readme ([cb4f8de](https://github.com/commit/cb4f8de538341bc9e6f8935be5a749b62e096f90))      \n  
      * **github:** update readme ([75ade68](https://github.com/commit/75ade68823875468e169cc43eade16aead29ad51))      \n  
      * **types-my:** types ([290aed1](https://github.com/commit/290aed17c30a0c89eab694871b71fdfa84ca37de))`,
    },
  }).then((res) => {
  if (res.data.errcode !== 0) {
    console.log('error');
  }
});
