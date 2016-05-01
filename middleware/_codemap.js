module.exports = {
  _ns: 'motley',
  _folder: 'middleware',

  'templ': require('./templ'),
  'handlers[-60]': '#middleware.templ',
  'templ_instance': null
}