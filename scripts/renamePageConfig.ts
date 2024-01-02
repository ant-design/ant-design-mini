import { glob } from 'glob';
import { resolve } from 'path';
import { promises as fsPromises } from 'fs';
import * as prettier from 'prettier';

glob(['**/*.json'], { cwd: 'demo/pages' })
  .then(async (filePaths) => {
    for (const filePath of filePaths) {
      const absolutePath = resolve('demo/pages', filePath);

      const tsxFilePath = absolutePath.replace('index.json', 'index.axml.tsx');
      const exists = await fsPromises
        .access(tsxFilePath)
        .then(() => true)
        .catch(() => false);

      if (exists) {
        const fileContents = await fsPromises.readFile(absolutePath, 'utf-8');
        if (!fileContents.includes('defaultTitle')) {
          return;
        }
        const updatedContents = fileContents.replace(
          /"defaultTitle": "(.*)",/,
          (_, titleValue) => {
            return `
/// #if WECHAT
navigationBarTitleText: '${titleValue}',
/// #endif

/// #if ALIPAY
defaultTitle: '${titleValue}',
/// #endif
`;
          }
        );

        const tempFilePath = absolutePath + '5';

        await fsPromises.writeFile(
          tempFilePath,
          prettier.format(updatedContents, {
            parser: 'json',
          })
        );
        await fsPromises.unlink(absolutePath);
      }
    }
  })
  .catch((error) => console.error(error));
