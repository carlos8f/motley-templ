module.exports = {
  _ns: 'motley',
  _folder: 'conf',

  'middleware.templ.specs[]': '#conf.middleware.templ.root',
  'middleware.templ.root': {
    globs: [
      'views/**/*.hbs',
      'views/**/*.handlebars'
    ],
    cwd: process.cwd()
  },
  'middleware.templ': {
    watch: true
  }
}