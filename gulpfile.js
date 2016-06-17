const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const runSequence = require('run-sequence')

const paths = {
  html: {
    src: 'src/index.html',
    dest: 'dist'
  }
}

gulp.task('build:html', () => {
  const htmlminOpts = {
    collapseWhitespace: true,
    removeComments: true,
  }

  return gulp.src(paths.html.src)
    .pipe(htmlmin(htmlminOpts))
    .pipe(gulp.dest(paths.html.dest))
})

gulp.task('clean:html', (cb) => {
  del.sync(`${paths.html.dest}/index.html`)
  cb()
})

gulp.task('default', (cb) => {
  runSequence(
    'clean:html',
    'build:html',
    cb
  )
})
