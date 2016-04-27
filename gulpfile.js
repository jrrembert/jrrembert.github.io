// Setup Gulp plugins

var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync'),
	del = require('del'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

// Create Gulp tasks

gulp.task('styles', function() {
	return gulp.src(['scss/**/*.scss'])
		.pipe(sass({sourceMap: true, style: 'compact'}))
		.pipe(notify({ message: 'Sass pre-processing finished.', onLast: true}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(autoprefixer({browsers: ['last 2 versions', '> 5%'], cascade: false}))
		.pipe(notify({ message: 'Autoprefixer post-processing finished.', onLast: true}))
		.pipe(sourcemaps.write('maps'))
		.pipe(notify({ message: 'Source maps generated.', onLast: true}))
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({ message: 'Styles task complete!', onLast: true})
	);
});

gulp.task('clean', function(callback) {
	del(['dist/**/*.css'], callback)
});

// Generally it's advised to execute tasks in the dependency
// array rather than gulp.start but we want 'clean' to finish
// before executing any other tasks.

gulp.task('default', ['clean'], function() {
	return gulp.start(['styles']);
});

// Watch files for changes

gulp.task('watch', function() {
	browserSync.init(null, {
		server: './'
	});

	gulp.watch(['scss/**/*.scss'], ['styles', 'clean'], browserSync.reload);
});
