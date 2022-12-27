const iconfont = require('gulp-iconfont')
const { src, dest } =require('gulp')
const gulp = require('gulp')
const { options } = require('nodemon/lib/config')




gulp.task('iconfont', function(){
    return gulp
    .src(['public/svgs/*.svg'])
    .pipe(iconfont({
        fontName: 'awesome_font',
        prependUnicode: true,
        formats: ['ttf'],
        appendCodepoints:true
    }))
    .on('codepoints', function(codepoints, options) {
        console.log(codepoints, options)
    })
    .pipe(gulp.dest('./public/stylesheets/fonts'));
})
