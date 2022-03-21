/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const injectEnvs = require('gulp-inject-envs');

const isProduction = process.env.NODE_ENV === 'production';
const dist = isProduction ? path.join(__dirname, '../es') : path.join(__dirname, '../demo/es');
const src = path.join(__dirname, '../src');
const extTypes = ['ts', 'less', 'json', 'axml', 'sjs', 'js'];
const isRpx = process.argv.splice(2)[0] === '--rpx';
const env = { jsUnitRpx: isRpx };

gulp.task('less', () => gulp.src(`${src}/**/index.less`)
  .pipe(less({
    modifyVars: {
      '@rpx': isRpx ? '1rpx': '0.5px',
      '@pixelSize': isRpx ? '1rpx': '0.5px',
    },
  }))
  // eslint-disable-next-line no-console
  .on('error', (e) => console.error(e))
  .pipe(gulpif(isProduction, cleanCss()))
  .pipe(rename({
    extname: '.acss',
  }))
  .pipe(gulp.dest(dist)));


gulp.task('js', () => gulp.src(`${src}/**/props.js`)
  .pipe(gulp.dest(dist)));

gulp.task('json', () => gulp.src(`${src}/**/*.json`)
  .pipe(gulp.dest(dist)));

gulp.task('axml', () => gulp.src(`${src}/**/*.axml`)
  .pipe(gulp.dest(dist)));

gulp.task('sjs', () => gulp.src(`${src}/**/*.sjs`)
  .pipe(gulp.dest(dist)));

gulp.task('ts', () => gulp.src(`${src}/**/*.ts`)
  .pipe(gulpif((file) => {
    return !file.path.endsWith('.d.ts');
  }, babel()))
  .pipe(injectEnvs(env))
  .on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  })
  .pipe(gulp.dest(dist)));

const build = gulp.series(...extTypes);

build();
