var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var clean  = require('gulp-clean');

gulp.task('sass', [ 'cleanup' ], function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('concatenate', [ 'sass' ], function() {
  return gulp.src('app/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('cleanup', function() {
  return gulp.src(['app/css/*.css', 'dist/css/*.css'], {read: false})
    .pipe(clean());
});

gulp.task('sassify', ['cleanup', 'sass', 'concatenate']);

gulp.task('watch', function() {
  gulp.watch('app/scss/*.scss', [ 'sassify' ]);
});

