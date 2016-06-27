/* jshint esversion: 6 */

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('watch', function() {
    // watch for SCSS files
    gulp.watch('./public/stylesheets/style.scss', [scss]);
});

gulp.task('scss', function() {
    return gulp.src('./public/stylesheets/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(gulp.dest('./dist'));
});
