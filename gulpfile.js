const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const { series } = require('gulp');
const gulpCopy = require('gulp-copy');

const destination = './dist/';

function main_page() {
  return gulp.src('views/innovations.pug')
    .pipe(pug({
      doctype: 'html',
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(destination));
}

function myths_page() {
  return gulp.src('views/myths.pug')
    .pipe(pug({
      doctype: 'html',
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(`${destination}/myths`));
}

function faq_page() {
  return gulp.src('views/faq.pug')
    .pipe(pug({
      doctype: 'html',
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(`${destination}/faq`));
}

function copyFiles() {
  return gulp
    .src(['images/**/*', 'styles/*', 'js/*'])
    .pipe(gulpCopy(destination))
}

function copyFavicons() {
  return gulp
    .src(['favicons/**/*'])
    .pipe(gulpCopy(destination, { prefix: 1 }))
}
 

exports.default = series(main_page, myths_page, faq_page, copyFiles, copyFavicons);
