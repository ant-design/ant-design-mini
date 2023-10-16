/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const ts = require('gulp-typescript');
const merge = require('merge2');

function series(tasks, output) {
  const src = path.join(__dirname, '../compiled/alipay/src');
  gulp.task('less', () =>
    gulp
      .src(`${src}/**/index.less`)
      .pipe(less())
      // eslint-disable-next-line no-console
      .on('error', (e) => {
        console.error(e);
        process.exit(1);
      })
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: '.acss',
        })
      )
      .pipe(gulp.dest(output))
  );

  gulp.task('less-raw', () =>
    gulp.src(`${src}/**/*.less`).pipe(gulp.dest(output))
  );

  gulp.task('json', () => gulp.src(`${src}/**/*.json`).pipe(gulp.dest(output)));

  gulp.task('axml', () => gulp.src(`${src}/**/*.axml`).pipe(gulp.dest(output)));

  gulp.task('sjs', () => gulp.src(`${src}/**/*.sjs`).pipe(gulp.dest(output)));

  gulp.task('ts', () => {
    const tsResult = gulp
      .src([`${src}/**/*.ts`, `!${src}/**/__tests__/*.ts`])
      .pipe(ts.createProject(path.join(__dirname, '../tsconfig.json'))())
      .on('error', (err) => {
        console.log(err);
        process.exit(1);
      });
    return merge([
      tsResult.dts.pipe(gulp.dest(output)),
      tsResult.js.pipe(gulp.dest(output)),
    ]);
  });

  return new Promise((resolve) => gulp.series(...tasks, resolve)());
}

module.exports = () =>
  Promise.all([
    series(
      ['ts', 'less', 'json', 'axml', 'sjs'],
      path.join(__dirname, '../es')
    ),
    series(
      ['ts', 'less-raw', 'json', 'axml', 'sjs'],
      path.join(__dirname, '../less')
    ),
  ]);
