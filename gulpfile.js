const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const html = require('./gulp/tasks/html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')
const favicon = require('./gulp/tasks/favicon')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(html, styles, script, fonts, imageMinify, svgSprite)

const build = gulp.series(clean, dev, favicon)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)

module.exports.lighthouse = gulp.series(lighthouse)
