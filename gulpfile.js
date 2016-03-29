var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

require('dotenv').config();

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
  var port = process.env.PORT || '3000';
  browserSync.init(null, {
    proxy: 'http://localhost:' + port,
    port: 9090
  });
});
