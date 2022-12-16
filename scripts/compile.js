/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const ts = require('gulp-typescript');


function series(tasks, output) {
  const src = path.join(__dirname, '../src');
  gulp.task('less', () => gulp.src(`${src}/**/index.less`)
    .pipe(less())
    // eslint-disable-next-line no-console
    .on('error', (e) => {
      console.error(e);
      process.exit(1);
    })
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.acss',
    }))
    .pipe(gulp.dest(output)));

    gulp.task('less-raw', () => gulp.src(`${src}/**/*.less`)
      .pipe(gulp.dest(output)));

    gulp.task('js', () => gulp.src(`${src}/**/props.js`).pipe(babel({
      presets:['@babel/preset-env']
    }))
      .pipe(gulp.dest(output)));

    gulp.task('json', () => gulp.src(`${src}/**/*.json`)
      .pipe(gulp.dest(output)));

    gulp.task('axml', () => gulp.src(`${src}/**/*.axml`)
      .pipe(gulp.dest(output)));

    gulp.task('sjs', () => gulp.src(`${src}/**/*.sjs`)
      .pipe(gulp.dest(output)));

    gulp.task('ts', () => gulp.src(`${src}/**/*.ts`)
      .pipe(gulpif((file) => {
        return !file.path.endsWith('.d.ts');
      }, ts({
      noEmitOnError:false,
      isolatedModules:true,
      importHelpers: true,
      esModuleInterop: true,
      noImplicitThis: true,
      allowSyntheticDefaultImports: true,
      target: 'ES5'
    })))
    .on('error', (err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    })
    .pipe(gulp.dest(output)));
  return new Promise(resolve => gulp.series(...tasks, resolve)());
}

module.exports = () => Promise.all([
  series(['ts', 'less', 'json', 'axml', 'sjs', 'js'], path.join(__dirname, '../es')),
  series(['ts', 'less-raw', 'json', 'axml', 'sjs', 'js'], path.join(__dirname, '../less'))
]);
