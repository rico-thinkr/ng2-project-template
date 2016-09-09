var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

var concatJs = require("gulp-concat-js");
var uglify = require('gulp-uglify');

gulp.task('bundle', function(done) {
    /**
     * bundle css files.
     */
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.css'
    ]).pipe(concatCss('style.min.css')).pipe(cleanCSS()).pipe(gulp.dest('./libs/css'));

    /**
     * fonts fiels.
     */
    gulp.src(['node_modules/font-awesome/fonts/*']).pipe(gulp.dest('./libs/fonts'));

    /**
     * bundle angualr2 dependency javascript files.
     */
    gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/moment/min/moment.min.js'
    ]).pipe(gulp.dest('./libs/js'));
});
