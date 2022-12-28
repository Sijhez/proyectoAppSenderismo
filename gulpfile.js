const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin')
const svgSymbols = require('gulp-svg-symbols')



/*
function defaultTask(cb) {
    console.log('Gulp activado')
    cb();
}
exports.default = defaultTask
*/
/*
gulp.task('svgstore', function(){
    return gulp
       .src('public/stylesheets/svgs/*.svg')
       .pipe(svgmin())
       .pipe(svgstore())
       .pipe(rename({basename:'sprite'}))
       .pipe(gulp.dest('./public'))
})
 */

gulp.task('sprites', function(){
    return gulp
    .src('public/stylesheets/svgs/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('./public/svgSymbols'))
})
