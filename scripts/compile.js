/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const ts = require('gulp-typescript');


const dist = path.join(__dirname, '../es');
const src = path.join(__dirname, '../src');
const extTypes = ['ts', 'less', 'json', 'axml', 'sjs', 'js'];

gulp.task('less', () => gulp.src(`${src}/**/index.less`)
  .pipe(less())
  // eslint-disable-next-line no-console
  .on('error', (e) => console.error(e))
  .pipe(cleanCss())
  .pipe(rename({
    extname: '.acss',
  }))
  .pipe(gulp.dest(dist)));


gulp.task('js', () => gulp.src(`${src}/**/props.js`).pipe(babel({
  presets:['@babel/preset-env']
}))
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
  })
  .pipe(gulp.dest(dist)));

module.exports = () => new Promise(resolve => gulp.series(...extTypes, resolve)());
