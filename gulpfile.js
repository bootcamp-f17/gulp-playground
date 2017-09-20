var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');

// This is a simple, sample task
gulp.task('hello', function() {
  console.log('Hello, there!');
});


// I want to compile 
// any .scss files
// in /app/scss
// and put them
// into /app/css
gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('concatenate', function() {
  return gulp.src('app/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css/'));
});
