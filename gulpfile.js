var gulp = require('gulp');
var runSequence = require('run-sequence');
var gulpWatch = require('gulp-watch');
var jade = require('jade');
var gulpJade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('serve', () => {
	runSequence(
		'html',
		'css',
		'scripts'
	)
	gulp.watch(['./app/jade/pages/*.jade'], ['html']);
	gulp.watch(['./app/jade/components/*.jade'], ['html']);
	gulp.watch(['./app/scss/pages/*.scss'], ['css']);
	gulp.watch(['./app/scripts/*.js'], ['scripts']);
})

gulp.task('html', () => {
	gulp.src('./app/jade/pages/*.jade')
	.pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
	.pipe(gulp.dest('./dist/html'));
})

gulp.task('css', () => {
	gulp.src('./app/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
})

gulp.task('scripts', () => {
	gulp.src('./app/scripts/*.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./dist/scripts'));
})
