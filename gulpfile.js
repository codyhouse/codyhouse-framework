var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables'); 
var calc = require('postcss-calc');  

gulp.task('sass', function() {
  return gulp.src('main/assets/css/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss([autoprefixer(), cssvariables({preserve: true}), calc()]))
  .pipe(gulp.dest('main/assets/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'main'
    },
  })
});

gulp.task('watch', gulp.series(['browserSync', 'sass'], function () {
  gulp.watch('main/assets/css/**/*.scss', ['sass']);
  gulp.watch('main/*.html', browserSync.reload);
  gulp.watch('main/demo/*.html', browserSync.reload); 
  gulp.watch('main/assets/js/**/*.js', browserSync.reload);
}));
