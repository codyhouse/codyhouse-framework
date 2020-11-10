var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables'); 
var calc = require('postcss-calc');  
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var purgecss = require('gulp-purgecss');

// js file paths
var utilJsPath = 'main/assets/js'; // util.js path - you may need to update this if including the framework as external node module
var componentsJsPath = 'main/assets/js/components/*.js'; // component js files
var scriptsJsPath = 'main/assets/js'; //folder for final scripts.js/scripts.min.js files

// css file paths
var cssFolder = 'main/assets/css'; // folder for final style.css/style-custom-prop-fallbac.css files
var scssFilesPath = 'main/assets/css/**/*.scss'; // scss files to watch

function reload(done) {
  browserSync.reload();
  done();
} 

/* Gulp watch task */
// This task is used to convert the scss to css and compress it. No fallback for IE is created  
gulp.task('sass', function() {
  return gulp.src(scssFilesPath)
  .pipe(sassGlob())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(gulp.dest(cssFolder))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// This task is used to convert the scss to css and compress it. A fallback for IE (style-fallback.css) is created
gulp.task('sass-ie', function() {
  return gulp.src(scssFilesPath)
  .pipe(sassGlob())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(gulp.dest(cssFolder))
  .pipe(browserSync.reload({
    stream: true
  }))
  .pipe(rename('style-fallback.css'))
  .pipe(postcss([cssvariables(), calc()]))
  .pipe(gulp.dest(cssFolder));
});

gulp.task('scripts', function() {
  return gulp.src([utilJsPath+'/util.js', componentsJsPath])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(scriptsJsPath))
  .pipe(browserSync.reload({
    stream: true
  }))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(scriptsJsPath))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browserSync', gulp.series(function (done) {
  browserSync.init({
    server: {
      baseDir: 'main'
    },
    notify: false
  })
  done();
}));

gulp.task('watch', gulp.series(['browserSync', 'sass', 'scripts'], function () {
  gulp.watch('main/*.html', gulp.series(reload));
  gulp.watch('main/assets/css/**/*.scss', gulp.series(['sass']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));

/* Gulp watch-ie task */
gulp.task('watch-ie', gulp.series(['browserSync', 'sass-ie', 'scripts'], function () {
  gulp.watch('main/*.html', gulp.series(reload));
  gulp.watch('main/assets/css/**/*.scss', gulp.series(['sass-ie']));
  gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));


/* Gulp dist task */
// create a distribution folder for production
var distFolder = 'dist/';
var assetsFolder = 'dist/assets/';

gulp.task('dist', async function(){
  // remove unused classes from the style.css file with PurgeCSS and copy it to the dist folder
  await purgeCSS();
  // minify the scripts.js file and copy it to the dist folder
  await minifyJs();
  // copy the style-fallback (IE support) to the dist folder
  await moveCSS();
  // copy any additional js files to the dist folder
  await moveJS();
  // copy all the assets inside main/assets/img folder to the dist folder
  await moveAssets();
  // copy all html files inside main folder to the dist folder 
  await moveContent();
  console.log('Distribution task completed!')
});

function purgeCSS() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src(cssFolder+'/style.css')
    .pipe(purgecss({
      content: ['main/*.html', scriptsJsPath+'/scripts.js'],
      safelist: ['.is-hidden', '.is-visible'],
      defaultExtractor: content => content.match(/[\w-/:%@]+(?<!:)/g) || []
    }))
    .pipe(gulp.dest(distFolder+'/assets/css'));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};

function minifyJs() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src(scriptsJsPath+'/scripts.js')
    .pipe(uglify())
    .pipe(gulp.dest(distFolder+'/assets/js'));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};

function moveCSS() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src(cssFolder+'/style-fallback.css', { allowEmpty: true })
    .pipe(gulp.dest(assetsFolder+'css'));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};

function moveJS() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src([scriptsJsPath+'/*.js', '!'+scriptsJsPath+'/scripts.js', '!'+scriptsJsPath+'/scripts.min.js'], { allowEmpty: true })
    .pipe(gulp.dest(assetsFolder+'js'));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};

function moveAssets() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src(['main/assets/img/**'], { allowEmpty: true })
    .pipe(gulp.dest(assetsFolder+'img'));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};

function moveContent() {
  return new Promise(function(resolve, reject) {
    var stream = gulp.src('main/*.html')
    .pipe(gulp.dest(distFolder));
    
    stream.on('finish', function() {
      resolve();
    });
  });
};
