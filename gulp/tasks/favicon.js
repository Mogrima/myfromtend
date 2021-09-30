const gulp = require('gulp')

module.exports = function html() {
  return gulp.src('src/favicon/*.*')
    .pipe(gulp.dest('build/favicon'))
}