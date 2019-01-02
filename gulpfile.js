var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables'); 
var calc = require('postcss-calc');  

function reload(done) {
  browserSync.reload();
  done();
} 

gulp.task('sass', function() {
  return gulp.src('main/assets/css/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss([autoprefixer(), cssvariables({preserve: true}), calc()]))
  .pipe(gulp.dest('main/assets/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browserSync', gulp.series(function (done) {
  browserSync.init({
    server: {
      baseDir: 'main'
    },
  })
  done();
}));

gulp.task('watch', gulp.series(['browserSync', 'sass'], function () {
  gulp.watch('main/assets/css/**/*.scss', gulp.series(['sass']));
  gulp.watch('main/*.html', gulp.series(reload));
  gulp.watch('main/assets/js/**/*.js', gulp.series(reload));
}));
