const gulp = require('gulp');
const pug = require('gulp-pug');
const { series } = require('gulp');
const gulpCopy = require('gulp-copy');

const destination = './dist/';

function main_page() {
  return gulp.src('views/index.pug')
    .pipe(pug({
      doctype: 'html',
      // Your options in here.
    }))
    .pipe(gulp.dest(destination));
}

function myths_page() {
  return gulp.src('views/myths.pug')
    .pipe(pug({
      doctype: 'html',
      // Your options in here.
    }))
    .pipe(gulp.dest(destination));
}

function copyFiles() {
  return gulp
    .src(['images/**/*', 'styles/*', 'js/*'])
    .pipe(gulpCopy(destination))
}
 

exports.default = series(main_page, myths_page, copyFiles);
