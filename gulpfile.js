var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var sass_path = 'assets/sass/**/*.scss';
var jspath = 'assets/js/**/*.js';

gulp.task('hello', function() {
    console.log("Hello World!")
});

gulp.task('watch', function() {
    gulp.watch(sass_path, ['sass']);
    gulp.watch(jspath, ['scripts']);
});

gulp.task('sass', function() {
    return gulp.src(sass_path)
        .pipe(sass())
        .pipe(gulp.dest('styles/'))
});

gulp.task('scripts', function() {
    gulp.src(jspath)
        .pipe(concat('default.js'))
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'))
});

gulp.task('default', ['watch']);