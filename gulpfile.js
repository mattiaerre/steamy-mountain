var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('bundle', function() {
  return browserify({
    entries: 'public/app/main.jsx',
    debug: true
  })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('live-server', function() {
  var server = new LiveServer('bin/www');
  server.start();
});

gulp.task('serve', ['bundle', 'live-server'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:7777',
    port: 9001
  });
});
