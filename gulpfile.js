var gulp = require('gulp'),
  jade = require('gulp-jade'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  st = require('st'),
  http = require('http'),
  sourcemaps = require("gulp-sourcemaps"),
  babel = require("gulp-babel");

var paths = {
  templates: 'templates/**/*.jade',
  js: 'js/**/*.js',
  build: 'dist'
}

gulp.task('js', ['clean'], function () {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('templates', ['clean'], function() {
  return gulp.src(paths.templates)
  .pipe(jade({}))
  .pipe(gulp.dest(paths.build));
});

gulp.task('watch', ['server'], function() {
  livereload.listen({basePath: paths.build});
  gulp.watch(paths.templates, ['templates'])
  gulp.watch(paths.js, ['js'])
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: paths.build, index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('default', ['templates', 'js', 'watch']);
