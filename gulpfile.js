var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require("gulp-order")
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var assets = 'assets';

var src = {
    scss: assets + '/scss',
    js: assets + '/js/src',
    components: assets + '/js/components',
}

var dist = {
    css: assets + '/css',
    js: assets + '/js',
    components: assets + '/js',
}

gulp.task('css', function () {
    return gulp.src(src.scss + '/app.scss')
        .pipe(sass())
        .on('error', notify.onError({
            message: '<%= error.message %>'
        }))
        .pipe(autoprefixer({
            browsers: ['> 1% in AU', 'last 2 versions', 'ios 8-9'],
            cascade: false
        }))
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

gulp.task('components', function(){
    return gulp.src(src.components + '/*.js')
        .on('error', notify.onError({
            message: '<%= error.message %>'
        }))
        .pipe(order([
            "jquery.min.js",
            "jquery.fracs.min.js",
            "flex-slider.min.js",
            "slick.min.js",
            ]))
        .pipe(concat('components.js'))
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
    gulp.watch(src.js + '/  *.js', ['components']);
});

gulp.task('default', ['css', 'js', 'components', 'watch']);