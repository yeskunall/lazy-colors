/* jshint esversion: 6 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const pump = require('pump');
const uglify = require('gulp-uglify');

gulp.task('watch', function() {
    // watch for SCSS files
    gulp.watch('./public/css/style.scss', ['scss']);
    // watch for JS files
    gulp.watch('./public/js/*.js', ['uglify']);
});

gulp.task('scss', function() {
    return gulp.src('./public/css/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function(cb) {
    pump([
            gulp.src('public/js/*.js'),
            uglify(),
            gulp.dest('./dist')
        ],
        cb
    );
});
