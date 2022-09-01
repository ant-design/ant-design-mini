const path = require('path');
const fse = require('fs-extra');
const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

async function generateTheme() {
  const src = path.join(__dirname, '../src');
  const dist = path.join(__dirname, '../es/theme');
  const themeValues = [];
  await new Promise((resolve) => {
    gulp
      .src([`${src}/**/*.less`])
      .pipe(plumber())
      .pipe(
        through2.obj((file, _, cb) => {
          let content = file.contents.toString();
          content = content.replace(
            /[:]\s*[@][^\s]+\s*[*]\s*[-]?\d+/g,
            function ($) {
              return $.replace('@', '--varChar--').replace(
                /[*]/g,
                '--multiplyChar--'
              );
            }
          );
          content = content.replace(/[:]\s*[@]/g, function ($) {
            return $.replace('@', '--varChar--');
          });
          file.contents = Buffer.from(content);
          cb(null, file);
        })
      )
      .pipe(less())
      .pipe(
        rename({
          extname: '.less',
        })
      )
      .pipe(
        through2.obj((file, _, cb) => {
          const originContent = fse.readFileSync(file.path, 'utf-8');
          let content = file.contents.toString();
          let importStr = '';
          let varStr = '';
          if (/[^\s]/.test(content) && !/style\//.test(file.path)) {
            originContent.match(/@import.*?;/g)?.forEach((v) => {
              importStr += v + '\n';
            });
            originContent.match(/@.*?[:].*?;/g)?.forEach((v) => {
              varStr += v + '\n';
            });
            themeValues.push(file.path);
            content = content
              .replace(/[-][-]varChar[-][-]/g, '@')
              .replace(/[-][-]multiplyChar[-][-]/g, '*');
            content = `:root {\n${content}\n}`;
          } else {
            content = originContent;
          }
          //importStr += '@import "/antd-mini.theme.less";\n';
          content = content + importStr + varStr;
          file.contents = Buffer.from(content);
          cb(null, file);
        })
      )
      .on('error', (e) => console.error(e))
      .pipe(gulp.dest(dist))
      .on('end', resolve);
  });
  const sortValues = {
    Icon: 1,
    ListItem: 2,
    List: 3,
    Checkbox: 4,
  };
  themeValues.sort((x, y) => {
    const getName = (value) => value.split('/')[value.split('/').length - 2];
    return (sortValues[getName(x)] || 9999) - (sortValues[getName(y)] || 9999);
  });
  fse.writeFileSync(
    path.join(dist, 'antd-mini.less'),
    themeValues.map((v) => `@import ".${v.replace(src, '')}";`).join('\n')
  );
}
generateTheme();
