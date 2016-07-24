var gulp = require('gulp'),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify');


var sass_path = 'assets/sass/**/*.scss';
var jspath = 'assets/js/**/*.js';
var angularpath = [
    'angular/app.js',
    'angular/routes.js',
    'angular/controllers/**/*',
    'angular/directives/**/*',
    'angular/services/**/*'
];
var angularlib = [
    'angular.min.js',
    'angular/lib/angular-ui-router.min.js',
    'angular/lib/angular-resource.min.js',
    'angular/lib/angular-cookies.min.js'
];

gulp.task('watch', function() {
    gulp.watch(angularlib, ['angularcore']);
    gulp.watch(angularpath, ['angular']);
    gulp.watch(sass_path, ['sass']);
    gulp.watch(jspath, ['scripts']);
});

gulp.task('sass', function() {
    return gulp.src(sass_path)
        .pipe(sass())
        .on('error', function(error) {
            console.log(error.toString());
            setTimeout(function() {
                gulp.task('default', ['watch']);
            }, 500)
        })
        .pipe(gulp.dest('styles/'))
});

gulp.task('scripts', function() {
    gulp.src(jspath)
        .pipe(concat('default.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'))
});

gulp.task('angular', function() {
    gulp.src(angularpath)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('angular/'))
});

gulp.task('angularcore', function() {
    gulp.src(angularlib)
        .pipe(concat('corelib.min.js'))
        .pipe(gulp.dest(''))
});

gulp.task('default', ['watch']);