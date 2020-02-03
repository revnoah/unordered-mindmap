/*
  This is a gulp workflow based around a sass file called app.scss
  It compiles and then watches for changes in themes using the folder
  structure shown below. The source and destination are set to the
  specific theme name.

  To make it work, you make to install:

  $ npm install

  To execute, change to project root:

  $ gulp
*/

var gulp = require('gulp');
var zip = require('gulp-zip');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var sourcePath = 'source';
var buildPath = 'build';
var fileName = 'unordered-mindmap';

/**
 * create css file from scss files
 */
gulp.task('sass', async function() {
  gulp.src(sourcePath + '/scss/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(buildPath + '/css/'))
    .pipe(notify({ title: "sass!", message: "Sass compilation complete" }));
});

/**
 * copy all source files and license
 */
gulp.task('copy', async function () {
  gulp.src(sourcePath + '/**')
    .pipe(gulp.dest(buildPath + '/'));
});

gulp.task('default', gulp.series('sass', 'copy'));

/**
 * watch php files and process scripts
 */
gulp.task('watch', async function() {
  gulp.watch(sourcePath + '/**/*.scss', gulp.series('sass', 'copy'));
  gulp.watch(sourcePath + '/**/*.php', gulp.series('copy'));
});
