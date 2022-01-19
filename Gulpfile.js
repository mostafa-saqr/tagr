'use strict';

const minify = require('gulp-minify');
const rename = require('gulp-rename');
const ejs = require("gulp-ejs");
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
var log = require('fancy-log')
const gulpEjsMonster = require('gulp-ejs-monster');

gulp.task('ejs', function() {
    return gulp.src("./src/**/*.ejs")
        .pipe(gulpEjsMonster({ async: true }).on('error', gulpEjsMonster.preventCrash))

    .pipe(gulp.dest("./dist"))
})


gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
})


gulp.task('compressJs', function() {


    return gulp.src(['./src/js/**/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'))

});


exports.watch = function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('compressJs'));
    gulp.watch('./src/**/*.ejs', gulp.series('ejs'));


};