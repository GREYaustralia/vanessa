var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var assets = 'assets';

var src = {
    scss: assets + '/scss',
    js: assets + '/js/src',
}

var dist = {
    css: assets + '/css',
    js: assets + '/js',
}

gulp.task('css', function () {
    return gulp.src(src.scss + '/app.scss')
        .pipe(sass())
        .on('error', notify.onError({
            message: '<%= error.message %>'
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCss())
        .pipe(gulp.dest(dist.css))
        .pipe(notify({
            title: 'Gulp',
            message: '<%= file.relative %> was updated',
        }));
});

gulp.task('js', function () {
    return gulp.src(src.js + '/*.js')
        .on('error', notify.onError({
            message: '<%= error.message %>'
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist.js))
        .pipe(notify({
            title: 'Gulp',
            message: '<%= file.relative %> was updated',
        }));
});

gulp.task('watch', function () {
    gulp.watch(src.scss + '/**/*.scss', ['css']);
    gulp.watch(src.js + '/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);