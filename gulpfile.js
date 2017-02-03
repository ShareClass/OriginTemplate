const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const postcss = require('gulp-postcss'); //gulp plugin to pipe CSS through several processors, but parse CSS only once.
const autoprefixer = require('autoprefixer');
const syntax = require('postcss-scss');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');

gulp.task('sass', function() {
  const processors = [
      autoprefixer({browsers: ['last 2 version', '> 1%']}), //add prefixes for each browser
      //last 2 version => is last versions for each browser
      //> 1% => is browser versions, selected by global usage statistics.
  ];
  return gulp.src('./base/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss(processors, {syntax: syntax}))
    .pipe(gulp.dest('./css'));
});
gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});
gulp.task('reload_html', function () {
	gulp.src('*.html')
		.pipe(connect.reload());
});
gulp.task('reload_sass', function () {
	gulp.src('./base/*.scss')
		.pipe(connect.reload());
});
gulp.task('watch', function () {   	
    gulp.watch('./base/*.scss', ['sass']);
    gulp.watch(['*.*'], ['reload_html']);
    gulp.watch(['./base/*.scss'], ['reload_sass']);
});
gulp.task('server', function(){
    var option = {
        root : config.devPath,
        port : config.server.port
    };
    if(config.server.root){
        option.root = config.server.root;
    }
    connect.server(option);
});
gulp.task('default', ['sass', 'watch','connect']);